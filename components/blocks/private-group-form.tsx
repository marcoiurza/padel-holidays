"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function PrivateGroupForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const body = Object.fromEntries(formData.entries());

    const response = await fetch("/api/private-groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    setStatus(response.ok ? "success" : "error");

    if (response.ok) {
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-[28px] border border-brand-dark/10 bg-white/80 p-6 shadow-md">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span>Name</span>
          <Input name="name" required />
        </label>
        <label className="space-y-2 text-sm">
          <span>Company / group</span>
          <Input name="company" required />
        </label>
        <label className="space-y-2 text-sm">
          <span>Email</span>
          <Input name="email" type="email" required />
        </label>
        <label className="space-y-2 text-sm">
          <span>WhatsApp</span>
          <Input name="whatsapp" required />
        </label>
        <label className="space-y-2 text-sm">
          <span>Preferred dates</span>
          <Input name="preferredDates" placeholder="e.g. 2-6 October 2026" required />
        </label>
        <label className="space-y-2 text-sm">
          <span>Approximate group size</span>
          <Input name="groupSize" type="number" min={4} max={60} required />
        </label>
        <label className="space-y-2 text-sm">
          <span>Destination interest</span>
          <Input name="destination" defaultValue="Watamu, Kenya" required />
        </label>
        <label className="space-y-2 text-sm">
          <span>Retreat type</span>
          <Select name="retreatType" defaultValue="corporate">
            <option value="corporate">Corporate</option>
            <option value="community">Community</option>
            <option value="milestone">Milestone</option>
            <option value="other">Other</option>
          </Select>
        </label>
        <label className="space-y-2 text-sm">
          <span>Budget band</span>
          <Select name="budgetBand" defaultValue="10k-20k">
            <option value="5k-10k">£5k–£10k</option>
            <option value="10k-20k">£10k–£20k</option>
            <option value="20k-40k">£20k–£40k</option>
            <option value="40k+">£40k+</option>
          </Select>
        </label>
      </div>
      <label className="space-y-2 text-sm">
        <span>Goals</span>
        <Textarea name="goals" required placeholder="What should the trip do for your group?" />
      </label>
      <label className="space-y-2 text-sm">
        <span>Additional notes</span>
        <Textarea name="notes" placeholder="Anything about logistics, energy, guests or must-haves?" />
      </label>
      <Button type="submit" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Request a custom proposal"}
      </Button>
      {status === "success" ? (
        <p className="text-sm text-brand-success">Thanks. We’ll come back with a tailored proposal within 48 hours.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-brand-error">Something went wrong. Please try again or message us on WhatsApp.</p>
      ) : null}
    </form>
  );
}
