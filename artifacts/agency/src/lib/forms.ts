export async function submitLeadForm(form: HTMLFormElement, formName: string) {
  const formData = new FormData(form);
  const payload = Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [key, String(value).trim()]),
  );

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      formName,
      page: window.location.href,
    }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(typeof data.message === "string" ? data.message : "Unable to send your message right now.");
  }
}
