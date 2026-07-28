#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   chmod +x download_fonts.sh
#   ./download_fonts.sh
#
# Output:
#   ./fonts/
#     ├── anton/
#     ├── bebas-neue/
#     ├── caveat/
#     ├── cinzel/
#     ├── comfortaa/
#     ├── dancing-script/
#     ├── inter/
#     ├── lobster/
#     ├── montserrat/
#     ├── orbitron/
#     ├── oswald/
#     ├── pacifico/
#     ├── permanent-marker/
#     ├── playfair-display/
#     ├── quicksand/
#     ├── roboto/
#     └── fonts.css
#
# Note:
# - Downloads only LATIN .woff2 variants
# - Keeps folder structure clean
# - Generates ready-to-use /fonts/fonts.css

BASE_DIR="./fonts"

mkdir -p \
  "$BASE_DIR/anton" \
  "$BASE_DIR/bebas-neue" \
  "$BASE_DIR/caveat" \
  "$BASE_DIR/cinzel" \
  "$BASE_DIR/comfortaa" \
  "$BASE_DIR/dancing-script" \
  "$BASE_DIR/inter" \
  "$BASE_DIR/lobster" \
  "$BASE_DIR/montserrat" \
  "$BASE_DIR/orbitron" \
  "$BASE_DIR/oswald" \
  "$BASE_DIR/pacifico" \
  "$BASE_DIR/permanent-marker" \
  "$BASE_DIR/playfair-display" \
  "$BASE_DIR/quicksand" \
  "$BASE_DIR/roboto"

download() {
  local url="$1"
  local out="$2"

  if [ -f "$out" ]; then
    echo "✓ Exists: $out"
    return
  fi

  echo "↓ Downloading: $out"
  curl -L --fail --silent --show-error "$url" -o "$out"
}

# -------------------------
# Download only LATIN files
# -------------------------

download "https://fonts.gstatic.com/s/anton/v27/1Ptgg87LROyAm3Kz-C8.woff2" \
  "$BASE_DIR/anton/anton-400.woff2"

download "https://fonts.gstatic.com/s/bebasneue/v16/JTUSjIg69CK48gW7PXoo9Wlhyw.woff2" \
  "$BASE_DIR/bebas-neue/bebas-neue-400.woff2"

download "https://fonts.gstatic.com/s/caveat/v23/Wnz6HAc5bAfYB2Q7ZjYY.woff2" \
  "$BASE_DIR/caveat/caveat-400.woff2"

download "https://fonts.gstatic.com/s/caveat/v23/Wnz6HAc5bAfYB2Q7ZjYY.woff2" \
  "$BASE_DIR/caveat/caveat-700.woff2"

download "https://fonts.gstatic.com/s/cinzel/v26/8vIU7ww63mVu7gtR-kwKxNvkNOjw-jHgfY3lDQ.woff2" \
  "$BASE_DIR/cinzel/cinzel-700.woff2"

download "https://fonts.gstatic.com/s/comfortaa/v47/1Ptsg8LJRfWJmhDAuUs4TYFq.woff2" \
  "$BASE_DIR/comfortaa/comfortaa-300.woff2"

download "https://fonts.gstatic.com/s/comfortaa/v47/1Ptsg8LJRfWJmhDAuUs4TYFq.woff2" \
  "$BASE_DIR/comfortaa/comfortaa-700.woff2"

download "https://fonts.gstatic.com/s/dancingscript/v29/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Sup8.woff2" \
  "$BASE_DIR/dancing-script/dancing-script-400.woff2"

download "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2" \
  "$BASE_DIR/inter/inter-400.woff2"

download "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2" \
  "$BASE_DIR/inter/inter-900.woff2"

download "https://fonts.gstatic.com/s/lobster/v32/neILzCirqoswsqX9zoKmMw.woff2" \
  "$BASE_DIR/lobster/lobster-400.woff2"

download "https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2" \
  "$BASE_DIR/montserrat/montserrat-400.woff2"

download "https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2" \
  "$BASE_DIR/montserrat/montserrat-600.woff2"

download "https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2" \
  "$BASE_DIR/montserrat/montserrat-700.woff2"

download "https://fonts.gstatic.com/s/orbitron/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2" \
  "$BASE_DIR/orbitron/orbitron-400.woff2"

download "https://fonts.gstatic.com/s/orbitron/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2" \
  "$BASE_DIR/orbitron/orbitron-900.woff2"

download "https://fonts.gstatic.com/s/oswald/v57/TK3iWkUHHAIjg752GT8G.woff2" \
  "$BASE_DIR/oswald/oswald-300.woff2"

download "https://fonts.gstatic.com/s/oswald/v57/TK3iWkUHHAIjg752GT8G.woff2" \
  "$BASE_DIR/oswald/oswald-700.woff2"

download "https://fonts.gstatic.com/s/pacifico/v23/FwZY7-Qmy14u9lezJ-6H6Mk.woff2" \
  "$BASE_DIR/pacifico/pacifico-400.woff2"

download "https://fonts.gstatic.com/s/permanentmarker/v16/Fh4uPib9Iyv2ucM6pGQMWimMp004La2Cfw.woff2" \
  "$BASE_DIR/permanent-marker/permanent-marker-400.woff2"

download "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff2" \
  "$BASE_DIR/playfair-display/playfair-display-400.woff2"

download "https://fonts.gstatic.com/s/quicksand/v37/6xKtdSZaM9iE8KbpRA_hK1QN.woff2" \
  "$BASE_DIR/quicksand/quicksand-300.woff2"

download "https://fonts.gstatic.com/s/quicksand/v37/6xKtdSZaM9iE8KbpRA_hK1QN.woff2" \
  "$BASE_DIR/quicksand/quicksand-700.woff2"

download "https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAo.woff2" \
  "$BASE_DIR/roboto/roboto-400.woff2"

# -------------------------
# Generate fonts.css
# -------------------------

cat > "$BASE_DIR/fonts.css" <<'CSS'
@font-face { font-family: "Anton"; src: url("/fonts/anton/anton-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Bebas Neue"; src: url("/fonts/bebas-neue/bebas-neue-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Caveat"; src: url("/fonts/caveat/caveat-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Caveat"; src: url("/fonts/caveat/caveat-700.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: swap; }
@font-face { font-family: "Cinzel"; src: url("/fonts/cinzel/cinzel-700.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: swap; }
@font-face { font-family: "Comfortaa"; src: url("/fonts/comfortaa/comfortaa-300.woff2") format("woff2"); font-weight: 300; font-style: normal; font-display: swap; }
@font-face { font-family: "Comfortaa"; src: url("/fonts/comfortaa/comfortaa-700.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: swap; }
@font-face { font-family: "Dancing Script"; src: url("/fonts/dancing-script/dancing-script-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Inter"; src: url("/fonts/inter/inter-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Inter"; src: url("/fonts/inter/inter-900.woff2") format("woff2"); font-weight: 900; font-style: normal; font-display: swap; }
@font-face { font-family: "Lobster"; src: url("/fonts/lobster/lobster-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Montserrat"; src: url("/fonts/montserrat/montserrat-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Montserrat"; src: url("/fonts/montserrat/montserrat-600.woff2") format("woff2"); font-weight: 600; font-style: normal; font-display: swap; }
@font-face { font-family: "Montserrat"; src: url("/fonts/montserrat/montserrat-700.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: swap; }
@font-face { font-family: "Orbitron"; src: url("/fonts/orbitron/orbitron-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Orbitron"; src: url("/fonts/orbitron/orbitron-900.woff2") format("woff2"); font-weight: 900; font-style: normal; font-display: swap; }
@font-face { font-family: "Oswald"; src: url("/fonts/oswald/oswald-300.woff2") format("woff2"); font-weight: 300; font-style: normal; font-display: swap; }
@font-face { font-family: "Oswald"; src: url("/fonts/oswald/oswald-700.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: swap; }
@font-face { font-family: "Pacifico"; src: url("/fonts/pacifico/pacifico-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Permanent Marker"; src: url("/fonts/permanent-marker/permanent-marker-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Playfair Display"; src: url("/fonts/playfair-display/playfair-display-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Quicksand"; src: url("/fonts/quicksand/quicksand-300.woff2") format("woff2"); font-weight: 300; font-style: normal; font-display: swap; }
@font-face { font-family: "Quicksand"; src: url("/fonts/quicksand/quicksand-700.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: swap; }
@font-face { font-family: "Roboto"; src: url("/fonts/roboto/roboto-400.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
CSS

echo
echo "✅ Done"
echo "Fonts downloaded into: $BASE_DIR"
echo "Use in HTML:"
echo '<link rel="stylesheet" href="/fonts/fonts.css">'