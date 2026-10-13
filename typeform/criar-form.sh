#!/usr/bin/env bash
# Cria o formulário via Typeform Create API.
# Uso: TYPEFORM_TOKEN=<personal access token> ./criar-form.sh
# Token: admin.typeform.com > Account > Personal tokens (escopos forms:write)
set -euo pipefail
curl -sS -X POST https://api.typeform.com/forms \
  -H "Authorization: Bearer ${TYPEFORM_TOKEN:?defina TYPEFORM_TOKEN}" \
  -H "Content-Type: application/json" \
  --data @"$(dirname "$0")/questionario-nutricional.json" | python3 -c 'import json,sys;d=json.load(sys.stdin);print(d.get("_links",{}).get("display",d))'
