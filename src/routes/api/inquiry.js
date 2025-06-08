export async function POST({ request }) {
  const { name, message } = await request.json();

  console.log("📥 New Inquiry:", { name, message });

  // 🔧 You can send this to Airtable, Notion, Google Sheets here later

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}