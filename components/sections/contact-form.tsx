"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Dictionary, Locale } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["contact"]["form"];
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          sector: data.get("sector"),
          message: data.get("message"),
          company: data.get("company"),
          locale,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7 border border-border p-6 sm:p-10"
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <div className="space-y-2.5">
          <Label
            htmlFor="name"
            className="font-mono text-xs tracking-[0.14em] uppercase"
          >
            {dict.name}
          </Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder={dict.namePlaceholder}
            className="h-11 rounded-none"
          />
        </div>
        <div className="space-y-2.5">
          <Label
            htmlFor="email"
            className="font-mono text-xs tracking-[0.14em] uppercase"
          >
            {dict.email}
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={dict.emailPlaceholder}
            className="h-11 rounded-none"
          />
        </div>
      </div>

      <div className="space-y-2.5">
        <Label
          htmlFor="sector"
          className="font-mono text-xs tracking-[0.14em] uppercase"
        >
          {dict.sector}
        </Label>
        <Input
          id="sector"
          name="sector"
          placeholder={dict.sectorPlaceholder}
          className="h-11 rounded-none"
        />
      </div>

      <div className="space-y-2.5">
        <Label
          htmlFor="message"
          className="font-mono text-xs tracking-[0.14em] uppercase"
        >
          {dict.message}
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={dict.messagePlaceholder}
          className="rounded-none"
        />
      </div>

      {/* Honeypot: hidden from people, filled by bots */}
      <div aria-hidden className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={status === "sending"}
          className="h-12 w-full rounded-none px-8 text-sm sm:w-auto"
        >
          {status === "sending" ? dict.sending : dict.submit}
        </Button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && (
            <span className="text-foreground">{dict.success}</span>
          )}
          {status === "error" && (
            <span className="text-destructive">{dict.error}</span>
          )}
        </p>
      </div>
    </form>
  );
}
