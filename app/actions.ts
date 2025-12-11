"use server";

export async function submitBooking(formData: FormData): Promise<void> {
  const payload = {
    name: formData.get("name")?.toString() ?? "",
    date: formData.get("date")?.toString() ?? "",
    guests: formData.get("guests")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    note: formData.get("note")?.toString() ?? "",
  };

  console.log("[booking-request]", payload);
}

