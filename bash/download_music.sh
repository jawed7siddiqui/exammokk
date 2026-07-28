#!/usr/bin/env bash
set -euo pipefail

OUTDIR="INDIA/BOLLYWOOD/audio"
THUMBDIR="INDIA/BOLLYWOOD/thumbnail"
TMPDIR="$(mktemp -d)"
URLS_FILE="$TMPDIR/urls.txt"
JSON_FILE="$OUTDIR/metadata.json"

mkdir -p "$OUTDIR" "$THUMBDIR"

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

echo "[]" > "$JSON_FILE"

COUNTER=1

slugify() {
  echo "$1" \
    | sed 's/#.*//g' \
    | sed 's/[^a-zA-Z0-9 ]//g' \
    | xargs \
    | tr ' ' '_' \
    | tr '[:upper:]' '[:lower:]'
}

clean_title() {
  echo "$1" \
    | sed 's/#.*//g' \
    | sed 's/[[:space:]]\+/ /g' \
    | xargs
}

detect_movie() {
  local t="$(echo "$1" | tr '[:upper:]' '[:lower:]')"
  if [[ "$t" == *"hawayein"* ]]; then echo "Jab Harry Met Sejal";
  elif [[ "$t" == *"satranga"* ]]; then echo "Animal";
  elif [[ "$t" == *"saari duniya jalaa denge"* ]]; then echo "Animal";
  elif [[ "$t" == *"pehle bhi main"* ]]; then echo "Animal";
  else echo "";
  fi
}

while IFS= read -r URL; do
  echo "Processing: $URL"

  META="$(yt-dlp -J --no-warnings "$URL")"

  YTID="$(jq -r '.id' <<< "$META")"
  RAW_TITLE="$(jq -r '.title' <<< "$META")"
  TITLE="$(clean_title "$RAW_TITLE")"
  FILE_SLUG="$(slugify "$TITLE")"
  DURATION="$(jq -r '.duration // 0' <<< "$META")"
  CHANNEL="$(jq -r '.channel // ""' <<< "$META")"
  LANG="$(jq -r '.language // "hi"' <<< "$META")"
  THUMB_URL="$(jq -r '.thumbnail // ""' <<< "$META")"
  MOVIE="$(detect_movie "$TITLE")"

  AUDIO_FILE="${FILE_SLUG}.mp3"
  THUMB_FILE="${FILE_SLUG}.jpg"

  # Download audio
  yt-dlp \
    -x --audio-format mp3 --audio-quality 0 \
    -o "$OUTDIR/${FILE_SLUG}.%(ext)s" \
    --no-playlist \
    "$URL"

  # Download thumbnail locally
  curl -L "$THUMB_URL" -o "$THUMBDIR/$THUMB_FILE" >/dev/null 2>&1 || true

  SIZE_BYTES="$(stat -c%s "$OUTDIR/$AUDIO_FILE" 2>/dev/null || echo 0)"
  SIZE_MB="$(awk "BEGIN {printf \"%.2f\", $SIZE_BYTES/1024/1024}")"

  jq \
    --argjson id "$COUNTER" \
    --arg title "$TITLE" \
    --arg filename "$AUDIO_FILE" \
    --arg genre "Bollywood" \
    --arg lang "$LANG" \
    --arg movie "$MOVIE" \
    --arg thumbnail "INDIA/BOLLYWOOD/thumbnail/$THUMB_FILE" \
    --argjson duration "$DURATION" \
    --argjson size_bytes "$SIZE_BYTES" \
    --argjson size_mb "$SIZE_MB" \
    '. += [{
      id: $id,
      title: $title,
      filename: $filename,
      genre: $genre,
      language: $lang,
      movie: $movie,
      duration_sec: $duration,
      size_bytes: $size_bytes,
      size_mb: $size_mb,
      thumbnail: $thumbnail
    }]' "$JSON_FILE" > "$TMPDIR/tmp.json"

  mv "$TMPDIR/tmp.json" "$JSON_FILE"

  COUNTER=$((COUNTER + 1))
done < "$URLS_FILE"

echo "Done."
echo "Audio: $OUTDIR"
echo "Thumbs: $THUMBDIR"
echo "Metadata: $JSON_FILE"