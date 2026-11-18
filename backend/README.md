# Backend gratuito — envío automático a babyfacebad@icloud.com

Este backend usa Google Apps Script (gratis, con tu cuenta de Google).
Recibe los dos Excel en base64 desde la página y los manda por correo.

## Pasos

1. Abre https://script.google.com/
2. New project.
3. Borra el código de ejemplo y pega todo el archivo `Code.gs` de esta carpeta.
4. Verifica que `DESTINATARIO` sea `babyfacebad@icloud.com`.
5. Deploy > New deployment.
6. Tipo: **Web app**.
7. Description: `Tarot Anime`.
8. Execute as: **Me**.
9. Who has access: **Anyone**.
10. Deploy. Autoriza: Review Permissions > tu cuenta > Advanced >
    Go to [nombre del proyecto] (unsafe) > Allow.
    Es normal ese aviso: es tu propio script.
11. Copia la **Web app URL** (termina en `/exec`).
12. En `index.html` busca:
    `var EMAIL_ENDPOINT = "";`
    y déjalo así:
    `var EMAIL_ENDPOINT = "TU_URL_/exec";`
13. Sube el `index.html` a GitHub Pages y haz una lectura de prueba.

## Qué manda

- Para: babyfacebad@icloud.com
- Asunto: `Consulta Tarot Rider-Waite — [Nombre del consultante]`
- Cuerpo: nombre, fecha, hora, lugar, edad, tema, Sol, Luna, Ascendente
  y la lista de las 22 cartas con su posición.
- Adjuntos:
  - `tarot-1-mazo-78-arcanos.xlsx`
  - `tarot-2-tirada-22-y-carta-natal.xlsx`

## Prueba rápida

Abre la URL `/exec` en el navegador. Debe decir que el servicio está activo.
Si cambias el código, haz un **New deployment** y usa la nueva URL.
