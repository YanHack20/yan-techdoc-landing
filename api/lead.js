export default async function handler(req, res) {
  // Always return JSON
  res.setHeader("Content-Type", "application/json");

  // Optional: allow preflight (rarely needed here, but safe)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const body = req.body || {};
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const website = String(body.website || "").trim();
    const industry = String(body.industry || "").trim();
    const volume = String(body.volume || "").trim();
    const pain = String(body.pain || "").trim();

    if (!name || !email || !phone || !industry) {
      return res.status(400).json({
        ok: false,
        error: "Missing required fields: name, email, phone, industry",
      });
    }

    // TODO (next): send email / store lead
    return res.status(200).json({
      ok: true,
      message: "Lead received",
      data: { name, email, phone, website, industry, volume, pain },
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: "Server error",
    });
  }
}