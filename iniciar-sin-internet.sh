#!/bin/sh
# Abre el Simulador IPN sin necesidad de internet.
# Solo se sirve desde localhost en esta PC (no sale a la red).

cd "$(dirname "$0")"

PORT="${PORT:-4173}"

if ! command -v node >/dev/null 2>&1; then
  echo "No se encontró Node.js. Instálalo o abre dist/index.html directo." >&2
  exit 1
fi

if [ ! -f dist/index.html ]; then
  echo "Construyendo la app (solo la primera vez)…"
  npm run build || exit 1
fi

echo "Simulador IPN en http://localhost:$PORT"
echo "No cierres esta ventana mientras practicas. Para salir: Ctrl+C"

exec npx vite preview --host 127.0.0.1 --port "$PORT" --strictPort --open 2>&1