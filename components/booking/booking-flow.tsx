"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { bookingDraftSchema } from "@/lib/booking/schema";
import { calculateBookingTotals } from "@/lib/booking/calculations";
import { formatCurrency } from "@/lib/utils/currency";
import { trackEvent } from "@/lib/analytics/track";
import { addOns as availableAddOns } from "@/lib/content/site-content";
import type { Retreat } from "@/types/domain";

type BookingDraftValues = z.infer<typeof bookingDraftSchema>;

const steps = [
  "Retreat and room",
  "Personal details",
  "Padel and travel notes",
  "Add-ons",
  "Review and pay"
];

export function BookingFlow({ retreat }: { retreat: Retreat }) {
  const [step, setStep] = useState(0);
  const [apiState, setApiState] = useState<"idle" | "saving" | "error">("idle");

  const form = useForm<BookingDraftValues>({
    resolver: zodResolver(bookingDraftSchema),
    defaultValues: {
      retreatDateId: retreat.dates[0]?.id,
      roomTypeId: retreat.dates[0]?.roomTypes[0]?.id,
      occupancy: retreat.dates[0]?.roomTypes[0]?.occupancyOptions[0] ?? "single",
      sharingPreference: "not_applicable",
      primaryGuest: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        whatsapp: "",
        padelLevel: "",
        dietaryRequirements: "",
        arrivalDate: "",
        departureDate: "",
        notes: ""
      },
      secondGuest: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        whatsapp: "",
        padelLevel: "",
        dietaryRequirements: "",
        arrivalDate: "",
        departureDate: "",
        notes: ""
      },
      travelNotes: "",
      dietarySummary: "",
      arrivalInfo: "",
      addOnIds: [],
      couponCode: "",
      paymentOption: "deposit",
      marketingConsent: false
    }
  });

  const date = retreat.dates.find((item) => item.id === form.watch("retreatDateId")) ?? retreat.dates[0];
  const roomType = date.roomTypes.find((item) => item.id === form.watch("roomTypeId")) ?? date.roomTypes[0];
  const selectedAddOns = availableAddOns.filter((item) => form.watch("addOnIds")?.includes(item.id));

  const totals = useMemo(
    () =>
      calculateBookingTotals({
        basePricePence: roomType.basePricePence,
        addOns: selectedAddOns,
        depositPercent: retreat.depositPercent
      }),
    [roomType.basePricePence, selectedAddOns, retreat.depositPercent]
  );

  useEffect(() => {
    const existing = window.sessionStorage.getItem("padel-holidays-booking-draft");

    if (existing) {
      form.reset(JSON.parse(existing));
    }
  }, [form]);

  useEffect(() => {
    const subscription = form.watch((values) => {
      window.sessionStorage.setItem("padel-holidays-booking-draft", JSON.stringify(values));
    });

    return () => subscription.unsubscribe();
  }, [form]);

  async function saveDraft(values: BookingDraftValues) {
    setApiState("saving");

    const response = await fetch("/api/booking/drafts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    setApiState(response.ok ? "idle" : "error");
  }

  async function nextStep() {
    const validations: Record<number, Array<keyof BookingDraftValues | string>> = {
      0: ["retreatDateId", "roomTypeId", "occupancy"],
      1: [
        "primaryGuest.firstName",
        "primaryGuest.lastName",
        "primaryGuest.email",
        "primaryGuest.phone",
        "primaryGuest.whatsapp",
        "primaryGuest.padelLevel"
      ],
      2: ["travelNotes"],
      3: [],
      4: ["termsAccepted"]
    };

    const valid = await form.trigger(validations[step] as never[]);

    if (!valid) {
      return;
    }

    if (step === 0) {
      await fetch("/api/booking/holds", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          retreatDateId: form.getValues("retreatDateId"),
          roomTypeId: form.getValues("roomTypeId"),
          occupancy: form.getValues("occupancy")
        })
      });
    }

    if (step >= 1) {
      await saveDraft(form.getValues());
    }

    trackEvent("booking_step_complete", { step: step + 1 });
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  async function onCheckout() {
    const values = form.getValues();
    setApiState("saving");

    const response = await fetch("/api/booking/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        retreatSlug: retreat.slug,
        totals
      })
    });

    const payload = (await response.json()) as { url?: string };

    if (!response.ok || !payload.url) {
      setApiState("error");
      return;
    }

    window.sessionStorage.removeItem("padel-holidays-booking-draft");
    window.location.href = payload.url;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
      <Card className="space-y-8">
        <div className="flex flex-wrap gap-2">
          {steps.map((label, index) => (
            <span
              key={label}
              className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] ${
                index === step ? "bg-brand-primary text-brand-light" : "bg-brand-dark/6 text-brand-dark/55"
              }`}
            >
              {index + 1}. {label}
            </span>
          ))}
        </div>

        {step === 0 ? (
          <div className="grid gap-4">
            <label className="space-y-2 text-sm">
              <span>Retreat date</span>
              <Select {...form.register("retreatDateId")}>
                {retreat.dates.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.startDate} to {item.endDate}
                  </option>
                ))}
              </Select>
            </label>
            <label className="space-y-2 text-sm">
              <span>Room type</span>
              <Select {...form.register("roomTypeId")}>
                {date.roomTypes.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} · {formatCurrency(item.basePricePence)}
                  </option>
                ))}
              </Select>
            </label>
            <label className="space-y-2 text-sm">
              <span>Occupancy</span>
              <Select {...form.register("occupancy")}>
                {roomType.occupancyOptions.map((item) => (
                  <option key={item} value={item}>
                    {item.replaceAll("_", " ")}
                  </option>
                ))}
              </Select>
            </label>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm"><span>First name</span><Input {...form.register("primaryGuest.firstName")} /></label>
            <label className="space-y-2 text-sm"><span>Last name</span><Input {...form.register("primaryGuest.lastName")} /></label>
            <label className="space-y-2 text-sm"><span>Email</span><Input type="email" {...form.register("primaryGuest.email")} /></label>
            <label className="space-y-2 text-sm"><span>Phone</span><Input {...form.register("primaryGuest.phone")} /></label>
            <label className="space-y-2 text-sm"><span>WhatsApp</span><Input {...form.register("primaryGuest.whatsapp")} /></label>
            <label className="space-y-2 text-sm"><span>Padel level</span><Input placeholder="Beginner / Intermediate / Advanced" {...form.register("primaryGuest.padelLevel")} /></label>
            <label className="space-y-2 text-sm md:col-span-2">
              <span>Sharing preference</span>
              <Select {...form.register("sharingPreference")}>
                <option value="not_applicable">Not applicable</option>
                <option value="booking_with_friend">I’m booking with a friend</option>
                <option value="pair_me_with_solo">Pair me with another solo traveller</option>
              </Select>
            </label>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-4">
            <label className="space-y-2 text-sm">
              <span>Travel notes</span>
              <Textarea placeholder="Flights, arrival timing, anything useful for the team." {...form.register("travelNotes")} />
            </label>
            <label className="space-y-2 text-sm">
              <span>Dietary summary</span>
              <Textarea {...form.register("dietarySummary")} />
            </label>
            <label className="space-y-2 text-sm">
              <span>Arrival info</span>
              <Textarea {...form.register("arrivalInfo")} />
            </label>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="space-y-4">
            {availableAddOns.map((addOn) => {
              const checked = form.watch("addOnIds")?.includes(addOn.id) ?? false;

              return (
                <label key={addOn.id} className="flex items-start gap-3 rounded-[20px] border border-brand-dark/10 p-4">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(event) => {
                      const values = new Set(form.getValues("addOnIds") ?? []);
                      if (event.target.checked) values.add(addOn.id);
                      else values.delete(addOn.id);
                      form.setValue("addOnIds", [...values]);
                    }}
                  />
                  <div>
                    <p className="font-semibold text-brand-dark">{addOn.name}</p>
                    <p className="text-sm leading-7 text-brand-dark/75">{addOn.description}</p>
                    <p className="text-sm font-semibold text-brand-dark">{formatCurrency(addOn.pricePence)}</p>
                  </div>
                </label>
              );
            })}
            <label className="space-y-2 text-sm">
              <span>Offer code</span>
              <Input placeholder="Optional" {...form.register("couponCode")} />
            </label>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="space-y-6">
            <div className="rounded-[24px] bg-brand-dark text-brand-light p-5">
              <p className="font-display text-3xl">Secure your room with a {retreat.depositPercent}% deposit</p>
              <p className="mt-3 text-sm leading-7 text-brand-light/75">
                Flights can wait. Questions? WhatsApp us. Stripe handles payment security.
              </p>
            </div>
            <label className="space-y-2 text-sm">
              <span>Payment option</span>
              <Select {...form.register("paymentOption")}>
                <option value="deposit">Pay deposit now</option>
                <option value="full">Pay in full</option>
              </Select>
            </label>
            <label className="flex items-center gap-3 text-sm">
              <input type="checkbox" {...form.register("marketingConsent")} />
              <span>I’d like updates about future retreats and offers.</span>
            </label>
            <label className="flex items-center gap-3 text-sm">
              <input type="checkbox" {...form.register("termsAccepted")} />
              <span>I accept the booking terms and privacy policy.</span>
            </label>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-3">
          {step > 0 ? (
            <Button variant="secondary" onClick={() => setStep((current) => Math.max(0, current - 1))}>
              Back
            </Button>
          ) : null}
          {step < steps.length - 1 ? (
            <Button onClick={nextStep}>Continue</Button>
          ) : (
            <Button onClick={onCheckout}>Continue to secure payment</Button>
          )}
        </div>

        {apiState === "error" ? (
          <p className="text-sm text-brand-error">
            Something interrupted the flow. Your progress is saved, so you can try again without starting over.
          </p>
        ) : null}
      </Card>

      <Card className="h-fit space-y-6 lg:sticky lg:top-24">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/45">Booking summary</p>
          <h2 className="mt-3 font-display text-4xl text-brand-dark">{retreat.title}</h2>
          <p className="mt-2 text-sm leading-7 text-brand-dark/75">
            Calm, premium and built to reduce purchase anxiety rather than increase it.
          </p>
        </div>
        <div className="space-y-3 text-sm text-brand-dark/75">
          <div className="flex justify-between gap-4"><span>Room</span><span>{roomType.name}</span></div>
          <div className="flex justify-between gap-4"><span>Add-ons</span><span>{selectedAddOns.length ? selectedAddOns.length : "None"}</span></div>
          <div className="flex justify-between gap-4"><span>Total</span><span>{formatCurrency(totals.totalPence)}</span></div>
          <div className="flex justify-between gap-4"><span>Deposit today</span><span>{formatCurrency(totals.depositPence)}</span></div>
          <div className="flex justify-between gap-4"><span>Balance later</span><span>{formatCurrency(totals.balancePence)}</span></div>
        </div>
      </Card>
    </div>
  );
}
