export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, phone, website, industry, volume, pain } = req.body || {};

    // Basic validation
    if (!name || !email || !phone || !industry) {
      return res.status(400).json({
        ok: false,
        error: "Missing required fields: name, email, phone, industry",
      });
    }

    // For now: send back success (we'll add email delivery next)
    // You can also store this in a DB later (Supabase/Airtable/etc.)
    return res.status(200).json({
      ok: true,
      message: "Lead received",
      data: { name, email, phone, website, industry, volume, pain },
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}