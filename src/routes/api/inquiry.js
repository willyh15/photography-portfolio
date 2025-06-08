export async function POST({ request }) {
  const { name, message } = await request.json();

  console.log("New Inquiry:", { name, message });

  // Optional: Save to Airtable / Notion / Google Sheets here

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}