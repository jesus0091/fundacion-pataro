import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "hola@fundacionpatriciopataro.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "Fundación Patricio Pataro <no-reply@fundacionpatriciopataro.com>";

const REASON_LABELS: Record<string, string> = {
  becas: "Programas de becas",
  alianzas: "Alianzas estratégicas",
  eventos: "Eventos académicos",
  general: "Consulta general",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, reason, message } = body;

    if (!name?.trim() || !email?.trim() || !reason || !message?.trim()) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 },
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 },
      );
    }

    const reasonLabel = REASON_LABELS[reason] ?? reason;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Contacto Web] ${reasonLabel} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B5ED7; border-bottom: 2px solid #0B5ED7; padding-bottom: 8px;">
            Nuevo mensaje de contacto
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #333; width: 120px;">Nombre</td>
              <td style="padding: 8px 12px; color: #555;">${name}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px 12px; font-weight: bold; color: #333;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${email}" style="color: #0B5ED7;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #333;">Motivo</td>
              <td style="padding: 8px 12px; color: #555;">${reasonLabel}</td>
            </tr>
          </table>
          <div style="background: #f0f6fe; border-radius: 8px; padding: 16px; margin: 16px 0;">
            <p style="margin: 0 0 4px; font-weight: bold; color: #333;">Mensaje:</p>
            <p style="margin: 0; color: #555; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 24px;">
            Enviado desde el formulario de contacto de fundacionpatriciopataro.com
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Error al enviar el mensaje" },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Recibimos tu consulta — Fundación Patricio Pataro",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 24px 0 16px;">
            <h1 style="color: #0B5ED7; margin: 0; font-size: 22px;">Fundación Patricio Pataro</h1>
          </div>
          <div style="background: #f0f6fe; border-radius: 12px; padding: 24px; margin: 16px 0;">
            <h2 style="color: #333; margin: 0 0 12px; font-size: 18px;">¡Gracias por contactarnos, ${name}!</h2>
            <p style="color: #555; line-height: 1.6; margin: 0 0 16px;">
              Recibimos tu mensaje sobre <strong>${reasonLabel.toLowerCase()}</strong> y queremos que sepas que ya estamos trabajando en tu consulta.
            </p>
            <p style="color: #555; line-height: 1.6; margin: 0;">
              Nuestro equipo te responderá dentro de las <strong>48 horas hábiles</strong>.
            </p>
          </div>
          <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 24px;">
            <p style="font-size: 12px; color: #bbb; margin: 0;">
              Este es un mensaje automático, por favor no respondas a este email.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
