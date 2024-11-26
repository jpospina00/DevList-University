import nodemailer from 'nodemailer';
import { config } from '../config/config.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.email,
        pass: config.emailPassword
    }
});


export const sendPasswordResetEmail = async (to, name, resetLink) => {
    const url = `http://localhost:5173/restablecer-contraseña/${resetLink}`;
    const mailOptions = {
        from: config.email,
        to, 
        subject: 'Solicitud de restablecimiento de contraseña',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333; background-color: #f7f7f7; padding: 20px; border-radius: 10px;">
                <div style="background-color: #18333F; color: white; padding: 15px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="margin: 0;">Restablecimiento de contraseña</h1>
                </div>
                <div style="padding: 20px; background-color: white; border-radius: 0 0 10px 10px;">
                    <p style="font-size: 16px; color: #18333F;">¡Hola, ${name}!</p>
                    
                    <p style="font-size: 16px; color: #555;">
                        Hemos recibido una solicitud para restablecer la contraseña de tu cuenta. 
                        Si no realizaste esta solicitud, por favor ignora este correo. De lo contrario, 
                        puedes restablecer tu contraseña haciendo clic en el botón de abajo.
                    </p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${url}" style="background-color: #229799; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                            Restablecer contraseña
                        </a>
                    </div>
                    
                    <p style="font-size: 14px; color: #999;">
                        Si el botón no funciona, copia y pega el siguiente enlace en tu navegador:
                    </p>
                    
                    <p style="font-size: 14px; color: #229799;">
                        <a href="${url}" style="color: #229799; text-decoration: none;">${url}</a>
                    </p>

                    <p style="font-size: 14px; color: #999;">Este enlace es válido por 1 hora.</p>
                    
                    <p style="font-size: 14px; color: #999;">Saludos cordiales,<br>El equipo de DevList University</p>
                </div>
            </div>
        `
    };
    const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
}

export const sendAccountCreationEmail = async (to, name, password) => {
    const mailOptions = {
        from: config.email,
        to, 
        subject: 'Cuenta creada exitosamente',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333; background-color: #f7f7f7; padding: 20px; border-radius: 10px;">
                <div style="background-color: #18333F; color: white; padding: 15px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="margin: 0;">¡Bienvenido a DevList University!</h1>
                </div>
                <div style="padding: 20px; background-color: white; border-radius: 0 0 10px 10px;">
                    <p style="font-size: 16px; color: #18333F;">¡Hola, ${name}!</p>
                    
                    <p style="font-size: 16px; color: #555;">
                        Tu cuenta ha sido creada exitosamente. Ahora puedes acceder a todos nuestros servicios y gestionar los dispositivos tecnológicos de manera eficiente.
                    </p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="http://localhost:5173" style="background-color: #229799; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                            Iniciar sesión
                        </a>
                    </div>

                    <p style="font-size: 14px; color: #999;">
                        Su contraseña temporal es: <strong>${password}</strong>.
                    </p>
                    
                    <p style="font-size: 14px; color: #999;">
                        Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos.
                    </p>

                    <p style="font-size: 14px; color: #999;">Saludos cordiales,<br>El equipo de DevList University</p>
                </div>
            </div>
        `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
}

export const sendDeviceDeactivationReport = async (to, monitorName, deviceName, deviceId, reason) => {
    const pdfPath = 'reporte_inactivacion.pdf'; // Asegúrate de que el archivo PDF ya se haya generado

    // Crear el archivo PDF antes de enviarlo
    // Llamamos a la función para generar el PDF con los detalles del dispositivo y el monitor

    const mailOptions = {
        from: config.email,
        to,
        subject: 'Reporte de Inactivación de Dispositivo',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333; background-color: #f7f7f7; padding: 20px; border-radius: 10px;">
                <div style="background-color: #18333F; color: white; padding: 15px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="margin: 0;">Reporte de Inactivación de Dispositivo</h1>
                </div>
                <div style="padding: 20px; background-color: white; border-radius: 0 0 10px 10px;">
                    <p style="font-size: 16px; color: #18333F;">Estimado/a administrador/a,</p>
                    <p style="font-size: 16px; color: #555;">
                        Le enviamos el reporte de la inactivación del dispositivo con los siguientes detalles:
                    </p>
                    <p style="font-size: 16px; color: #18333F;">Nombre del dispositivo: ${deviceName}</p>
                    <p style="font-size: 16px; color: #18333F;">ID del dispositivo: ${deviceId}</p>
                    <p style="font-size: 16px; color: #18333F;">Motivo: ${reason}</p>
                    <p style="font-size: 16px; color: #18333F;">Inactivado por: ${monitorName}</p>
                    <p style="font-size: 16px; color: #555;">
                        Puede revisar el documento PDF adjunto para obtener más detalles.
                    </p>
                    <p style="font-size: 14px; color: #999;">Saludos cordiales,<br>El equipo de DevList University</p>
                </div>
            </div>
        `,
        attachments: [
            {
                filename: 'reporte_inactivacion.pdf', // El nombre del archivo adjunto
                path: pdfPath, // La ruta al archivo PDF
                contentType: 'application/pdf' // Tipo de contenido
            }
        ]
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email enviado: ' + info.response);
    } catch (error) {
        console.error('Error enviando el correo:', error);
    }
};
