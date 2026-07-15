"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

type Status = "idle" | "sending" | "ok" | "error";
type Format = "Capsule Audio" | "Capsule Vidéo" | "Autre / je ne sais pas";

const FORMATS: Format[] = ["Capsule Audio", "Capsule Vidéo", "Autre / je ne sais pas"];

const inputClass =
  "w-full rounded-lg border border-border bg-bg/40 px-4 py-3 text-ink placeholder:text-ink/45 outline-none transition-colors focus:border-accent";

/** Formulaire de contact → POST /api/contact. Validation basique côté client + serveur. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [format, setFormat] = useState<Format>("Capsule Audio");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form).entries()), format };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setError(json.error ?? "L'envoi a échoué. Réessayez.");
        return;
      }
      setStatus("ok");
      form.reset();
      setFormat("Capsule Audio");
    } catch {
      setStatus("error");
      setError("Impossible d'envoyer pour l'instant. Réessayez.");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-accent/40 bg-surface p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-pill border border-accent text-accent-300">
          <CheckCircle size={20} weight="fill" aria-hidden />
        </span>
        <h2 className="text-2xl font-semibold text-ink">Message envoyé.</h2>
        <p className="text-ink/70">Merci ! On vous répond sous 24–48 h ouvrées.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 cursor-pointer rounded-pill border border-border px-4 py-2 text-sm text-ink transition-colors hover:bg-ink/6"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col rounded-2xl border border-border bg-surface p-[34px]"
      noValidate
    >
      {/* Honeypot anti-spam (caché, à laisser vide) */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="grid gap-[18px] sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-ink/80">Nom</span>
          <input name="name" required autoComplete="name" placeholder="Votre nom" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-ink/80">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vous@exemple.fr"
            className={inputClass}
          />
        </label>
      </div>

      <label className="mt-[18px] flex flex-col gap-2 text-sm">
        <span className="text-ink/80">Sujet</span>
        <input name="subject" required placeholder="Réservation, devis, question…" className={inputClass} />
      </label>

      <div className="mt-[18px] flex flex-col gap-2 text-sm">
        <span className="text-ink/80">Format qui vous intéresse</span>
        <div className="flex flex-wrap gap-2">
          {FORMATS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFormat(f)}
              aria-pressed={format === f}
              className={`cursor-pointer rounded-pill border px-4 py-2 text-sm transition-colors ${
                format === f
                  ? "border-accent bg-accent/12 text-accent-300"
                  : "border-border text-ink/70 hover:bg-ink/6"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <label className="mt-[18px] flex flex-col gap-2 text-sm">
        <span className="text-ink/80">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Parlez-nous de votre projet : format, durée, invités, échéance…"
          className={`${inputClass} resize-y`}
        />
      </label>

      {status === "error" ? (
        <p role="alert" className="mt-4 text-sm text-live">
          {error}
        </p>
      ) : null}

      <div className="mt-[22px] flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex cursor-pointer items-center justify-center rounded-pill border border-accent bg-transparent px-6 py-3 text-[15px] font-medium text-accent-300 transition-colors hover:bg-accent/12 active:bg-accent/22 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending" ? "Envoi…" : "Envoyer le message"}
        </button>
        <span className="text-[13px] text-ink/55">Réponse sous 24–48 h ouvrées.</span>
      </div>
    </form>
  );
}
