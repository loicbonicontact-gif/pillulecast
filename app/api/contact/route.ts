import { NextResponse } from "next/server";

/**
 * Route de contact : POST /api/contact
 * Envoie un email via Resend si RESEND_API_KEY est défini, sinon logue en
 * console (utile en développement). Les clés sont lues depuis l'environnement,
 * jamais en dur. Validation basique côté serveur.
 */

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  // Format sélectionné dans le segmented control (optionnel).
  format?: unknown;
  // Champ piège anti-spam (doit rester vide).
  company?: unknown;
};

const isNonEmptyString = (v: unknown): v is string =>
  typeof v === "string" && v.trim().length > 0;

// Validation email volontairement simple (le vrai contrôle, c'est l'envoi).
const isEmail = (v: unknown): v is string =>
  typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, email, subject, message, format, company } = body;

  // Honeypot : si rempli, on fait comme si tout allait bien (bot).
  if (isNonEmptyString(company)) {
    return NextResponse.json({ ok: true });
  }

  // Validation
  const errors: string[] = [];
  if (!isNonEmptyString(name)) errors.push("Nom requis.");
  if (!isEmail(email)) errors.push("Email valide requis.");
  if (!isNonEmptyString(subject)) errors.push("Sujet requis.");
  if (!isNonEmptyString(message)) errors.push("Message requis.");
  if (isNonEmptyString(message) && message.length > 5000)
    errors.push("Message trop long.");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 422 });
  }

  const cleanName = (name as string).trim();
  const cleanEmail = (email as string).trim();
  const cleanSubject = (subject as string).trim();
  const cleanMessage = (message as string).trim();
  const cleanFormat = isNonEmptyString(format) ? format.trim() : null;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Pas de clé configurée : on logue (dev) et on répond OK pour tester l'UI.
  if (!apiKey || !to || !from) {
    console.info(
      "[contact] RESEND non configuré — message reçu (non envoyé) :",
      { name: cleanName, email: cleanEmail, subject: cleanSubject, format: cleanFormat, message: cleanMessage }
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: cleanEmail,
      subject: `[PilluleCast] ${cleanSubject}`,
      text: `De : ${cleanName} <${cleanEmail}>${cleanFormat ? `\nFormat : ${cleanFormat}` : ""}\n\n${cleanMessage}`,
    });

    if (error) {
      console.error("[contact] Erreur Resend :", error);
      return NextResponse.json(
        { error: "L'envoi a échoué. Réessayez plus tard." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Exception :", err);
    return NextResponse.json(
      { error: "Une erreur est survenue. Réessayez plus tard." },
      { status: 500 }
    );
  }
}
