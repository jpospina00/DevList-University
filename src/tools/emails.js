import nodemailer from 'nodemailer';
import { config } from '../config/config.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.email,
        pass: config.emailPassword
    }
});


export const sendPasswordResetEmail = (to, name, resetLink) => {
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
                        <a href="${resetLink}" style="background-color: #229799; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                            Restablecer contraseña
                        </a>
                    </div>
                    
                    <p style="font-size: 14px; color: #999;">
                        Si el botón no funciona, copia y pega el siguiente enlace en tu navegador:
                    </p>
                    
                    <p style="font-size: 14px; color: #229799;">
                        <a href="${resetLink}" style="color: #229799; text-decoration: none;">${resetLink}</a>
                    </p>

                    <p style="font-size: 14px; color: #999;">Este enlace es válido por 1 hora.</p>
                    
                    <p style="font-size: 14px; color: #999;">Saludos cordiales,<br>El equipo de DevList University</p>
                </div>
            </div>
        `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
}