#!/usr/bin/env bash
set -euo pipefail

OUTDIR="INDIA/BOLLYWOOD/audio"
TMPDIR="$(mktemp -d)"
URLS_FILE="$TMPDIR/urls.txt"
JSON_FILE="$OUTDIR/metadata.json"

cat > "$URLS_FILE" <<'EOF'
https://www.youtube.com/shorts/2EA_6_kJrWg
https://www.youtube.com/shorts/2hvIAfwO3Yc
https://www.youtube.com/shorts/rrZxCm-hlbo
https://www.youtube.com/shorts/HjtBj7eSMzM
https://www.youtube.com/shorts/oXetz0tdDUY
https://www.youtube.com/shorts/Lee_oWVSviU
https://www.youtube.com/shorts/6ZIvN4d3uo0
https://www.youtube.com/shorts/ayqeO13CKXk
https://www.youtube.com/shorts/jMkl-Vl3pGo
https://www.youtube.com/shorts/YCbFDYs9yAo
https://www.youtube.com/shorts/NJmENXrDPKY
https://www.youtube.com/shorts/Vk61jGSjVxQ
https://www.youtube.com/shorts/JcV67wNQKI0
https://www.youtube.com/shorts/wStS3oD0ff8
https://www.youtube.com/shorts/sIb9wYWA_Q4
https://www.youtube.com/shorts/N6FBhQLXekM
https://www.youtube.com/shorts/oZUriXA3yxs
https://www.youtube.com/shorts/ILqBErT7bEA
https://www.youtube.com/shorts/yvvQ7XVCkLk
EOF

# Fresh metadata array
echo "[]" > "$JSON_FILE"

while IFS= read -r URL; do
  echo "Processing: $URL"

  # Get metadata first
  META="$(yt-dlp -J --no-warnings "$URL")"

  ID="$(jq -r '.id' <<< "$META")"
  TITLE="$(jq -r '.title' <<< "$META")"
  DURATION="$(jq -r '.duration // 0' <<< "$META")"
  CHANNEL="$(jq -r '.channel // ""' <<< "$META")"
  UPLOADER="$(jq -r '.uploader // ""' <<< "$META")"
  WEBURL="$(jq -r '.webpage_url // ""' <<< "$META")"
  THUMBNAIL="$(jq -r '.thumbnail // ""' <<< "$META")"
  LANG="$(jq -r '.language // "hi"' <<< "$META")"
  GENRE="Bollywood"

  # Safe filename
  SAFE_TITLE="$(echo "$TITLE" | sed 's#[/:*?"<>|]#-#g' | tr -s ' ')"
  OUTFILE="$OUTDIR/${SAFE_TITLE} [${ID}].mp3"

  # Download + extract mp3
  yt-dlp \
    -x --audio-format mp3 --audio-quality 0 \
    -o "$OUTDIR/${SAFE_TITLE} [${ID}].%(ext)s" \
    --no-playlist \
    "$URL"

  # File size
  SIZE_BYTES="$(stat -c%s "$OUTFILE" 2>/dev/null || echo 0)"
  SIZE_MB="$(awk "BEGIN {printf \"%.2f\", $SIZE_BYTES/1024/1024}")"

  # Append metadata
  jq \
    --arg id "$ID" \
    --arg title "$TITLE" \
    --arg filename "$(basename "$OUTFILE")" \
    --arg genre "$GENRE" \
    --arg lang "$LANG" \
    --arg channel "$CHANNEL" \
    --arg uploader "$UPLOADER" \
    --arg url "$WEBURL" \
    --arg thumbnail "$THUMBNAIL" \
    --arg size_mb "$SIZE_MB" \
    --argjson duration "$DURATION" \
    --argjson size_bytes "$SIZE_BYTES" \
    '. += [{
      id: $id,
      title: $title,
      filename: $filename,
      genre: $genre,
      language: $lang,
      duration_sec: $duration,
      size_bytes: $size_bytes,
      size_mb: ($size_mb | tonumber),
      channel: $channel,
      uploader: $uploader,
      source_url: $url,
      thumbnail: $thumbnail
    }]' "$JSON_FILE" > "$TMPDIR/tmp.json"

  mv "$TMPDIR/tmp.json" "$JSON_FILE"
done < "$URLS_FILE"

echo "Done."
echo "MP3s saved in: $OUTDIR"
echo "Metadata saved in: $JSON_FILE"
