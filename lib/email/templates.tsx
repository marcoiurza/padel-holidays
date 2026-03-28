import * as React from "react";
import { formatCurrency } from "@/lib/utils/currency";

type EmailShellProps = {
  title: string;
  preview: string;
  children: React.ReactNode;
};

export function EmailShell({ title, preview, children }: EmailShellProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f7f1e8",
        color: "#111417",
        padding: "24px"
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "24px",
          padding: "32px"
        }}
      >
        <div style={{ color: "#6c665f", fontSize: "14px", marginBottom: "12px" }}>{preview}</div>
        <h1 style={{ fontSize: "32px", marginBottom: "16px" }}>{title}</h1>
        <div style={{ fontSize: "16px", lineHeight: 1.6 }}>{children}</div>
      </div>
    </div>
  );
}

export function DepositPaymentLinkEmail(props: {
  guestName: string;
  retreatTitle: string;
  depositPence: number;
  paymentUrl: string;
}) {
  return (
    <EmailShell title="Secure your spot" preview="Secure your room with a 30% deposit.">
      <p>Hi {props.guestName},</p>
      <p>
        Your room for {props.retreatTitle} is ready. A deposit of{" "}
        <strong>{formatCurrency(props.depositPence)}</strong> secures it.
      </p>
      <p>
        <a href={props.paymentUrl}>Pay your deposit securely</a>
      </p>
      <p>Flights can wait. Your room cannot.</p>
    </EmailShell>
  );
}
