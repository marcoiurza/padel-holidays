import { describe, expect, it } from "vitest";
import { bookingStepOneSchema, privateGroupLeadSchema } from "@/lib/booking/schema";

describe("validation schema", () => {
  it("accepts valid step one booking data", () => {
    const result = bookingStepOneSchema.safeParse({
      retreatDateId: "date_watamu",
      roomTypeId: "coastal-double",
      occupancy: "double"
    });

    expect(result.success).toBe(true);
  });

  it("rejects malformed private group enquiries", () => {
    const result = privateGroupLeadSchema.safeParse({
      name: "A",
      company: "",
      email: "bad-email"
    });

    expect(result.success).toBe(false);
  });
});
