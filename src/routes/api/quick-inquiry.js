export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const sheetWebhook = process.env.SHEET_WEBHOOK_URL;

  if (!sheetWebhook) {
    return res.status(500).json({ error: "Missing Google Sheet webhook URL" });
  }

  try {
    const response = await fetch(sheetWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error(`Failed to write to Google Sheets: ${await response.text()}`);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Quick inquiry error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}