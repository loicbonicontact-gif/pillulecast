"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

const inputClass =
  "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-aqua/60";

/** Formulaire de contact → POST /api/contact. Validation basique côté client + serveur. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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
    } catch {
      setStatus("error");
      setError("Impossible d'envoyer pour l'instant. Réessayez.");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-3xl border border-aqua/40 bg-surface p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-aqua text-lg font-bold text-bg">
          ✓
        </span>
        <h2 className="text-2xl text-ink">Message envoyé.</h2>
        <p className="text-muted">
          Merci ! On vous répond au plus vite. [À REMPLACER : délai de réponse,
          ex. sous 24–48h.]
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-pill border border-border px-4 py-2 text-sm text-ink transition-colors hover:border-ink/40"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      {/* Honeypot anti-spam (caché, à laisser vide) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-muted">Nom</span>
          <input name="name" required autoComplete="name" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-muted">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm">
        <span className="text-muted">Sujet</span>
        <input name="subject" required className={inputClass} />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className={`${inputClass} resize-y`}
        />
      </label>

      {status === "error" ? (
        <p role="alert" className="text-sm text-aqua">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-fit items-center justify-center rounded-pill bg-aqua px-7 py-3.5 text-base font-medium text-bg transition-all hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" ? "Envoi…" : "Envoyer le message"}
      </button>
    </form>
  );
}
