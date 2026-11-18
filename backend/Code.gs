// Tarot Anime — backend gratuito (Google Apps Script)
// Recibe desde index.html los dos Excel en base64 y los envía a Alberto.
// Despliegue: Deploy > New deployment > Web app > Execute as: Me > Who has access: Anyone
var DESTINATARIO = "babyfacebad@icloud.com";

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ok: true, servicio: "Tarot Anime activo. Usa POST para enviar una consulta."}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var nombre = data.nombre || "Consultante";
    var asunto = "Consulta Tarot Rider-Waite — " + nombre;
    var cuerpo = "Hola Alberto,\n\n"
      + "Nueva consulta de Tarot Rider-Waite.\n\n"
      + "Nombre: " + nombre + "\n"
      + "Fecha de nacimiento: " + (data.fecha || "—") + " · Hora: " + (data.hora || "—") + "\n"
      + "Lugar: " + (data.lugar || "—") + " · Edad: " + (data.edad || "—") + "\n"
      + "Tema: " + (data.tema || "—") + "\n\n"
      + "CARTA NATAL\n"
      + "Sol: " + (data.sol || "—") + " · Luna: " + (data.luna || "—") + " · Ascendente: " + (data.ascendente || "—") + "\n\n"
      + "TIRADA DE 22 CARTAS\n" + (data.tirada || "") + "\n\n"
      + "Adjuntos: mazo completo de 78 arcanos y tirada de 22 con carta natal.";
    var adjuntos = [];
    if (data.excel78_base64) {
      adjuntos.push(Utilities.newBlob(Utilities.base64Decode(data.excel78_base64), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "tarot-1-mazo-78-arcanos.xlsx"));
    }
    if (data.excel22_base64) {
      adjuntos.push(Utilities.newBlob(Utilities.base64Decode(data.excel22_base64), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "tarot-2-tirada-22-y-carta-natal.xlsx"));
    }
    MailApp.sendEmail({
      to: data.destino || DESTINATARIO,
      subject: asunto,
      body: cuerpo,
      attachments: adjuntos
    });
    return ContentService.createTextOutput(JSON.stringify({ok: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok: false, error: String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
