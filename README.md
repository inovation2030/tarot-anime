# Tarot Interactivo Rider-Waite — Anime

## Planeta y signo zodiacal
Cada una de las 78 cartas trae su planeta y su signo, según la tabla
de `correspondencias-planeta-signo.json` (la misma de la página).
Ejemplo: El Loco — Urano / Acuario, El Mago — Mercurio / Géminis,
La Emperatriz — Venus / Tauro. Los Excel incluyen esas dos columnas.
Nota: en esta versión las cartas de la corte se llaman Sota (no Paje)
y la carta V se llama El Sumo Sacerdote (sinónimo de El Hierofante),
igual que en la página, para que página y Excel coincidan.
El arte es una reinterpretación anime de la escena original Rider-Waite,
no una copia fotográfica de la carta original.

## Correcciones aplicadas
- Las 22 cartas se eligen **al azar del mazo de 78 ya barajado** (muestreo sin reemplazo), no son las primeras 22.
- Lugar de nacimiento con **autocompletado mundial**: lista de ~250 lugares, se detecta al elegirlo.
- **Sin análisis de carta natal en la página.** Sol, Luna y Ascendente solo se calculan en silencio para el segundo archivo.
- **La página no menciona archivos ni descargas.** El consultante no recibe ni descarga ningún Excel. Los archivos solo se envían en silencio al tarotista cuando está configurado el backend.
- Cartas anime del mazo **más grandes** (mazo 280 px, arte de carta 215 px de alto).


Página de tarot interactivo interpretativo, con diseño de dibujos de anime.
El resultado se muestra en otra página y los archivos de Excel son para el
tarotista (Alberto), no para el consultante.

**Destino de los archivos:** babyfacebad@icloud.com

## Flujo

1. **Formulario (Paso 1)**
   Nombre completo, fecha de nacimiento (día, mes y año), lugar de
   nacimiento y hora de nacimiento. No acepta menores de 18 años.
   Con esos datos calcula la carta natal: Sol, Luna y Ascendente
   (cálculo interpretativo aproximado, indicado en la página).

2. **Barajar (Paso 2)**
   Botón "Barajar el mazo". Baraja al azar los 78 arcanos Rider-Waite,
   cada carta puede salir Derecha o Invertida (50/50).
   Genera el **Excel 1: `tarot-1-mazo-78-arcanos.xlsx`**
   con solo nombre y posición (Derecha / Invertida), en el orden barajado.

3. **Tirada (Paso 3, otra página)**
   Segundo botón. Toma 22 cartas **al azar** del mazo ya barajado
   (muestreo sin reemplazo, no vuelve a barajar, no son las primeras 22)
   y muestra la página de resultado con la interpretación de cada carta.
   Genera el **Excel 2: `tarot-2-tirada-22-y-carta-natal.xlsx`** (en silencio, solo para el tarotista)
   con dos hojas: "Carta natal" (datos + Sol, Luna, Ascendente)
   y "Tirada 22 cartas" (solo nombre y posición).

## Publicar en GitHub Pages (5 minutos)

1. En GitHub, crea un repositorio nuevo, por ejemplo `tarot-anime`.
   Puede ser público.
2. Sube todos los archivos de esta carpeta, sobre todo `index.html`,
   a la rama `main`, en la raíz del repositorio.
   Puedes subirlos desde la web de GitHub: Add file > Upload files.
3. Ve a **Settings > Pages**.
4. En **Build and deployment > Source** elige **Deploy from a branch**.
5. Branch: `main`, carpeta: `/ (root)`. Guarda.
6. Espera 1-2 minutos. Tu página quedará en:
   `https://TU-USUARIO.github.io/tarot-anime/`

No necesitas instalar nada. Es una página estática (un solo `index.html`).

## Cómo llegan los Excel a babyfacebad@icloud.com

Una página estática no tiene servidor de correo, así que hay dos modos:

### Modo A — Ya funciona, sin configurar nada (mailto)
Al terminar la tirada, la página descarga los dos Excel y abre un correo
ya preparado para babyfacebad@icloud.com, con el nombre del consultante,
su carta natal y la lista de las 22 cartas en el cuerpo.
Solo hay que adjuntar los dos archivos descargados y enviar.
Este es el modo que trae la página por defecto.

### Modo B — Envío automático (recomendado, gratis, 10 minutos)
Con Google Apps Script la página manda los dos Excel sola, sin abrir
el correo y sin que el consultante los vea.

1. Ve a https://script.google.com/ e inicia sesión con tu cuenta de Google.
2. Crea un proyecto nuevo y pega el contenido de `backend/Code.gs`.
3. Cambia si quieres el destinatario (ya viene `babyfacebad@icloud.com`).
4. **Deploy > New deployment > Web app.**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy, autoriza con tu cuenta de Google.
5. Copia la URL que termina en `/exec`.
6. Abre `index.html`, busca `var EMAIL_ENDPOINT = "";` y pega la URL entre
   las comillas: `var EMAIL_ENDPOINT = "https://script.google.com/macros/s/.../exec";`
7. Sube el `index.html` actualizado a GitHub.
8. Haz una lectura de prueba. Los dos Excel deben llegar solos a
   babyfacebad@icloud.com, con asunto "Consulta Tarot Rider-Waite — [nombre]".

Si el envío automático falla (por ejemplo, sin internet), la página
avisa en pantalla y sigue ofreciendo el botón de correo del Modo A.

## Archivos

- `index.html` — toda la página (formulario, barajar, tirada, resultado, Excel, anime)
- `backend/Code.gs` — backend gratuito para el envío automático
- `backend/README.md` — pasos detallados del backend
- `ejemplos-excel/` — ejemplos del formato de los dos Excel

## Privacidad

Los datos del consultante (nombre, fecha, lugar y hora de nacimiento)
y las cartas solo se usan en su navegador para generar su lectura y
los Excel para el tarotista. La página no guarda consultas en un servidor.
