import pdfkit from 'pdfkit';
import fs from 'fs';

export function createPDF(monitorName, monitorEmail, deviceName, deviceId, reason, signature) {
    const doc = new pdfkit();

  // Generar la fecha actual
  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Crear archivo PDF
  const filePath = "reporte_inactivacion.pdf";
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  // Estilos básicos y encabezado
  doc
    .fontSize(12)
    .font("Helvetica")
    .fillColor("#333")
    .text(`Fecha de generación: ${currentDate}`, { align: "right" })
    .moveDown(2);

  doc
    .fontSize(20)
    .font("Helvetica-Bold")
    .fillColor("#18333F")
    .text("Reporte de Inactivación de Dispositivo", { align: "center" })
    .moveDown(1);

  // Contenido principal
  doc
    .fontSize(12)
    .fillColor("#333")
    .text(`Estimado/a Administrador/a,`)
    .moveDown()
    .text(
      `Le informamos que el dispositivo con los siguientes detalles ha sido inactivado por nuestro sistema:`
    )
    .moveDown();

  doc
    .fontSize(12)
    .fillColor("#18333F")
    .list(
      [
        `Nombre del dispositivo: ${deviceName}`,
        `ID del dispositivo: ${deviceId}`,
        `Motivo de inactivación: ${reason}`,
        `Inactivado por: ${monitorName}`,
      ],
      { bulletRadius: 5 }
    )
    .moveDown();

  doc
    .fontSize(12)
    .fillColor("#333")
    .text(
      `Si tiene alguna pregunta o requiere asistencia adicional, por favor comuníquese a: ${monitorEmail}.`
    )
    .moveDown();

  doc
    .fillColor("#18333F")
    .text("Acciones recomendadas:", { underline: true })
    .fontSize(12)
    .fillColor("#555")
    .text("1. Verificar las políticas aplicadas a este dispositivo.")
    .text("2. Contactar soporte técnico en caso de dudas.")
    .moveDown(2);

  // Firma
  doc
    .fontSize(12)
    .fillColor("#333")
    .text("Atentamente,", { align: "left" })
    .moveDown()
    .font("Helvetica-Bold")
    .text(signature)
    .font("Helvetica")
    .text(`Monitor: ${monitorName}`)
    .text(`Correo: ${monitorEmail}`)
    .moveDown();

  doc.end();

  console.log(`PDF creado con éxito en: ${filePath}`);
    }
    

