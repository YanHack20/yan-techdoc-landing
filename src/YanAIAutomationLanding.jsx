import React, { useMemo, useState } from "react";
import {
  Zap,
  PhoneCall,
  MessageSquare,
  CalendarCheck,
  BadgeCheck,
  BarChart3,
  ShieldCheck,
  PlugZap,
  Building2,
} from "lucide-react";

export default function YanAIAutomationLanding() {
  const industries = useMemo(
    () => [
      {
        key: "plumbers",
        label: "Plumbers",
        headline: "Turn missed calls into booked jobs—automatically.",
        bullets: [
          "Missed-call text-back within 5 seconds",
          "After-hours AI receptionist to qualify emergencies",
          "Booking + reminders to reduce no-shows",
          "Review requests after job completion",
        ],
        outcomes: [
          "Capture more emergency leads",
          "Fewer missed calls = more revenue",
          "Less admin time for techs",
        ],
      },
      {
        key: "doctors",
        label: "Doctors",
        headline: "Reduce no-shows and keep schedules full.",
        bullets: [
          "Appointment confirmations + reminders (SMS/email)",
          "Intake links and pre-visit instructions",
          "Recall campaigns (follow-ups for rebooking)",
          "HIPAA-aware messaging guidance (no PHI in SMS)",
        ],
        outcomes: [
          "Fewer no-shows",
          "More rebooked patients",
          "Lower front-desk workload",
        ],
      },
      {
        key: "gyms",
        label: "Gyms",
        headline: "Convert leads faster and improve retention.",
        bullets: [
          "Instant lead follow-up for trials and tours",
          "Automated onboarding messages",
          "Renewal + churn-risk follow-ups",
          "Review/reputation campaigns",
        ],
        outcomes: [
          "Higher lead-to-member conversion",
          "Improved retention",
          "More reviews and referrals",
        ],
      },
      {
        key: "lawyers",
        label: "Lawyers",
        headline: "Qualify inquiries and book consultations 24/7.",
        bullets: [
          "AI intake assistant (practice-area-specific questions)",
          "Consult scheduling + reminders",
          "Lead routing by case type / urgency",
          "Conflict-check note capture (no legal advice)",
        ],
        outcomes: [
          "Faster intake",
          "Better lead quality",
          "More consults booked",
        ],
      },
      {
        key: "contractors",
        label: "Contractors",
        headline: "Win more estimates with instant follow-up.",
        bullets: [
          "Quote request capture + job details collection",
          "Estimate scheduling and reminders",
          "Follow-ups for pending estimates",
          "Project update notifications",
        ],
        outcomes: [
          "Higher estimate close rate",
          "Less lead leakage",
          "Cleaner pipeline visibility",
        ],
      },
    ],
    []
  );

  const [activeIndustryKey, setActiveIndustryKey] = useState("plumbers");
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const activeIndustry = industries.find((i) => i.key === activeIndustryKey);

  async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;

  setStatus({ type: "loading", message: "Sending..." });

  const payload = {
    name: form.name?.value?.trim(),
    email: form.email?.value?.trim(),
    phone: form.phone?.value?.trim(),
    website: form.website?.value?.trim(),
    industry: form.industry?.value || activeIndustryKey,
    volume: form.volume?.value,
    pain: form.pain?.value,
  };

  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
let data = null;

try {
  data = text ? JSON.parse(text) : null;
} catch {
  // Not JSON (could be HTML error page)
}

  if (!res.ok) {
  throw new Error(
    (data && data.error) || `Request failed (${res.status}). Make sure /api/lead exists.`
  );
}

if (data && data.ok === false) {
  throw new Error(data.error || "Failed to submit");
}

    form.reset();
    setStatus({
      type: "success",
      message: "✅ Thanks! We’ll contact you shortly.",
    });
  } catch (err) {
    setStatus({
      type: "error",
      message:
        err.message || "❌ Something went wrong. Please try again.",
    });
  }
}


  return (
    
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-icon">
              <Zap size={18} color="#f59e0b" />
            </div>
            <div>
              <div className="brand-text-main">Yan AI Automation</div>
              <div className="brand-text-sub">
                Intelligent agents for SMB growth & operations
              </div>
            </div>
          </div>

          <nav className="nav">
            <a href="#industries">Industries</a>
            <a href="#features">Platform</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="nav-button">
              Request a demo
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-inner">
            {/* LEFT */}
            <div>
              <div className="pill">
                <Building2 size={14} />
                <span>Built for local businesses</span>
                <span className="pill-sep">•</span>
                <span>Plumbers • Doctors • Gyms • Lawyers • Contractors</span>
              </div>

              <h1 className="hero-title">
                AI agents that
                <span>capture leads, book appointments, and follow up—24/7.</span>
              </h1>

              <p className="hero-text">
                Stop losing revenue to missed calls and slow follow-ups. Yan AI
                Automation installs an intelligent agent that answers, qualifies,
                schedules, and nurtures customers—then proves ROI with simple
                analytics.
              </p>

              <ul className="hero-list">
                <li className="hero-list-item">
                  <div className="hero-list-icon">
                    <PhoneCall size={16} color="#0ea5e9" />
                  </div>
                  <div>
                    <div className="hero-list-title">Never miss a lead</div>
                    <div className="hero-list-desc">
                      Missed-call text-back + after-hours coverage to capture
                      demand when you’re busy.
                    </div>
                  </div>
                </li>

                <li className="hero-list-item">
                  <div
                    className="hero-list-icon"
                    style={{ background: "rgba(16,185,129,0.08)" }}
                  >
                    <CalendarCheck size={16} color="#10b981" />
                  </div>
                  <div>
                    <div className="hero-list-title">Automated booking</div>
                    <div className="hero-list-desc">
                      Scheduling, confirmations, reminders, and routing—without
                      extra staff.
                    </div>
                  </div>
                </li>

                <li className="hero-list-item">
                  <div
                    className="hero-list-icon"
                    style={{ background: "rgba(245,158,11,0.10)" }}
                  >
                    <BarChart3 size={16} color="#f59e0b" />
                  </div>
                  <div>
                    <div className="hero-list-title">Track ROI</div>
                    <div className="hero-list-desc">
                      See lead volume, booking rates, and outcomes so you know
                      what’s working.
                    </div>
                  </div>
                </li>
              </ul>

              <div className="hero-ctas">
                <a href="#contact" className="btn-primary">
                  Request a demo
                </a>
                <a href="#pricing" className="btn-secondary">
                  View pricing
                </a>
              </div>

              <div className="trust-row">
                <div className="trust-item">
                  <BadgeCheck size={16} />
                  <span>Set up in 48 hours</span>
                </div>
                <div className="trust-item">
                  <ShieldCheck size={16} />
                  <span>Best-practice data handling</span>
                </div>
                <div className="trust-item">
                  <PlugZap size={16} />
                  <span>Integrates with your tools</span>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="hero-form-panel lg:ml-40" id="contact">
              <div className="hero-form-header">
                <h2 className="hero-form-title">Get a tailored demo</h2>
                <p className="hero-form-subtitle">
                  Tell us your business type and volume. We’ll show exactly how
                  the agent captures leads and books appointments for your niche.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="hero-form-body">
                <div className="form-field">
                  <label className="form-label">Name *</label>
                  <input
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Business email *</label>
                  <input
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Phone *</label>
                  <input
                    name="phone"
                    className="form-input"
                    placeholder="(555) 555-5555"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Website</label>
                  <input
                    name="website"
                    className="form-input"
                    placeholder="https://yourbusiness.com"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Industry *</label>
                  <select name="industry" className="form-input" required>
                    {industries.map((i) => (
                      <option key={i.key} value={i.key}>
                        {i.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">Monthly lead volume</label>
                  <select name="volume" className="form-input">
                    <option value="">Select…</option>
                    <option value="0-50">0–50</option>
                    <option value="51-150">51–150</option>
                    <option value="151-400">151–400</option>
                    <option value="400+">400+</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">Primary challenge</label>
                  <textarea
                    name="pain"
                    className="form-textarea"
                    defaultValue={
                      "e.g., missed calls, slow follow-up, no-shows, low conversion, too much admin…"
                    }
                  />
                </div>

                <p className="form-note">
  By clicking <strong>Request demo</strong>, your request is sent securely and
  we’ll respond within 24 hours.
</p>


             <button
  type="submit"
  className="btn-primary hero-form-button"
  disabled={status.type === "loading"}
>
  {status.type === "loading" ? "Sending..." : "Request demo"}
</button>
{status.type !== "idle" && (
  <p style={{ marginTop: 10 }}>
    {status.message}
  </p>
)}
              </form>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="section">
          <h2 className="section-title">Made for your industry</h2>
          <p className="section-lead">
            Choose a niche to see what the agent automates and the outcomes you
            can expect.
          </p>

          <div className="tabs">
            {industries.map((i) => (
              <button
                key={i.key}
                className={`tab ${i.key === activeIndustryKey ? "tab-active" : ""}`}
                onClick={() => setActiveIndustryKey(i.key)}
                type="button"
              >
                {i.label}
              </button>
            ))}
          </div>

          <div className="industry-panel">
            <div className="industry-left">
              <div className="industry-kicker">For {activeIndustry?.label}</div>
              <div className="industry-headline">{activeIndustry?.headline}</div>
              <ul className="industry-bullets">
                {activeIndustry?.bullets.map((b, idx) => (
                  <li key={idx}>
                    <BadgeCheck size={16} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="industry-right">
              <div className="industry-card">
                <div className="industry-card-title">Typical outcomes</div>
                <ul className="industry-outcomes">
                  {activeIndustry?.outcomes.map((o, idx) => (
                    <li key={idx}>
                      <Zap size={14} />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-secondary industry-cta">
                  See a demo for {activeIndustry?.label}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section">
          <h2 className="section-title">Platform features</h2>
          <p className="section-lead">
            This is more than a chatbot. It’s an intelligent agent that executes
            workflows across phone, SMS, email, and scheduling—then reports back
            with simple metrics.
          </p>

          <div className="feature-grid">
            <FeatureCard
              icon={<PhoneCall size={18} />}
              title="Calls + missed-call capture"
              desc="Automatically text back missed calls and route urgent cases. Never lose leads while you’re on a job."
            />
            <FeatureCard
              icon={<MessageSquare size={18} />}
              title="Two-way SMS follow-up"
              desc="Qualify leads, answer FAQs, and keep conversations moving—without manual texting."
            />
            <FeatureCard
              icon={<CalendarCheck size={18} />}
              title="Booking + reminders"
              desc="Schedule appointments, send confirmations, and reduce no-shows with automated reminders."
            />
            <FeatureCard
              icon={<BadgeCheck size={18} />}
              title="Reviews + reputation"
              desc="Trigger review requests after completed service to grow ratings and local search performance."
            />
            <FeatureCard
              icon={<BarChart3 size={18} />}
              title="Simple analytics"
              desc="Track lead volume, booking rate, response time, and conversion—so you can see ROI."
            />
            <FeatureCard
              icon={<PlugZap size={18} />}
              title="Integrations"
              desc="Connect calendars, CRMs, forms, and inboxes. Start simple and expand workflows over time."
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <h2 className="section-title">How it works</h2>
          <p className="section-lead">
            Go live quickly, then iterate based on real performance.
          </p>

          <div className="steps">
            <StepCard
              step="1"
              title="Connect your channels"
              desc="Phone/SMS, website forms, calendar, and any existing CRM."
            />
            <StepCard
              step="2"
              title="Install your industry agent"
              desc="We deploy an intake + booking flow tailored for your niche and services."
            />
            <StepCard
              step="3"
              title="Automate follow-up + reviews"
              desc="Reminders, rebooking campaigns, quote follow-ups, and review requests."
            />
            <StepCard
              step="4"
              title="Measure and improve"
              desc="We review your analytics and optimize prompts and workflows for conversion."
            />
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="section">
          <h2 className="section-title">Pricing</h2>
          <p className="section-lead">
            Start with a simple setup. Upgrade as you add channels and workflows.
          </p>

          <div className="package-grid">
            <PackageCard
              title="Starter"
              price="$497/mo"
              eta="Setup: $750"
              bullets={[
                "Missed-call text-back",
                "Basic lead capture + tagging",
                "One booking workflow (calendar)",
                "Monthly health check",
              ]}
              highlight="Best for getting ROI fast"
            />
            <PackageCard
              title="Growth"
              price="$997/mo"
              eta="Setup: $1,500"
              bullets={[
                "Everything in Starter",
                "After-hours AI receptionist",
                "Two-way SMS qualification",
                "Reminders + no-show reduction",
                "Review automation",
              ]}
              featured
              highlight="Most popular"
            />
            <PackageCard
              title="Pro"
              price="$1,750/mo"
              eta="Setup: $2,500"
              bullets={[
                "Everything in Growth",
                "Multi-location / multi-service routing",
                "CRM pipeline + reporting dashboard",
                "Advanced workflows (estimates, recall, renewals)",
                "Priority optimization & support",
              ]}
              highlight="For scaling teams"
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <h2 className="section-title">FAQ</h2>
          <div className="faq-list">
            <FAQItem
              q="Is this a chatbot?"
              a="No—it's an intelligent agent that runs real workflows: lead capture, qualification, booking, reminders, and reviews across your channels."
            />
            <FAQItem
              q="How fast can we go live?"
              a="Typically within 48 hours once we have your phone/SMS, calendar, and business details."
            />
            <FAQItem
              q="Do you support regulated industries like healthcare?"
              a="Yes. For healthcare, we use best-practice messaging guidance and avoid PHI over SMS. If you require a formal compliance program, we can scope it."
            />
            <FAQItem
              q="Will it replace my staff?"
              a="It reduces workload and captures leads 24/7, especially after-hours and during busy periods. Most clients use it to avoid hiring or to support an existing team."
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Yan AI Automation.</span>
          <span className="footer-links">
            <a href="mailto:support@yantechdoc.com">support@yantechdoc.com</a>
            <a href="#industries">Industries</a>
            <a href="#features">Platform</a>
            <a href="#pricing">Pricing</a>
          </span>
        </div>
      </footer>

      {/* Minimal extra styles (keep your existing CSS; add these if needed) */}
      <style>{`
        .pill{
          display:inline-flex; align-items:center; gap:8px;
          padding:8px 12px; border:1px solid rgba(148,163,184,0.25);
          border-radius:999px; color:#cbd5e1; background:rgba(2,6,23,0.25);
          margin-bottom:14px; font-size:12px;
        }
        .pill-sep{ opacity:0.6; }
        .trust-row{ display:flex; gap:14px; flex-wrap:wrap; margin-top:18px; }
        .trust-item{ display:flex; align-items:center; gap:8px; color:#cbd5e1; font-size:13px; opacity:0.95; }
        .tabs{ display:flex; gap:10px; flex-wrap:wrap; margin-top:18px; }
        .tab{
          border:1px solid rgba(148,163,184,0.25);
          background:rgba(2,6,23,0.25);
          color:#cbd5e1;
          padding:10px 12px;
          border-radius:999px;
          cursor:pointer;
          transition:transform .08s ease, border-color .12s ease;
        }
        .tab:hover{ transform:translateY(-1px); border-color: rgba(191,219,254,0.45); }
        .tab-active{
          border-color: rgba(14,165,233,0.6);
          background: rgba(14,165,233,0.08);
          color:#e2e8f0;
        }
        .industry-panel{
          display:grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap:18px;
          margin-top:18px;
        }
        @media (max-width: 900px){
          .industry-panel{ grid-template-columns: 1fr; }
        }
        .industry-kicker{ color:#93c5fd; font-weight:600; margin-bottom:8px; }
        .industry-headline{ font-size:22px; font-weight:700; color:#e2e8f0; margin-bottom:10px; }
        .industry-bullets{ list-style:none; padding:0; margin:0; display:grid; gap:10px; }
        .industry-bullets li{ display:flex; gap:10px; align-items:flex-start; color:#cbd5e1; }
        .industry-card{
          border:1px solid rgba(148,163,184,0.25);
          background: rgba(2,6,23,0.25);
          border-radius:16px;
          padding:16px;
        }
        .industry-card-title{ font-weight:700; color:#e2e8f0; margin-bottom:10px; }
        .industry-outcomes{ list-style:none; padding:0; margin:0; display:grid; gap:10px; color:#cbd5e1; }
        .industry-outcomes li{ display:flex; gap:8px; align-items:flex-start; }
        .industry-cta{ display:inline-block; margin-top:14px; }
        .steps{
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          gap:14px;
          margin-top:16px;
        }
        @media (max-width: 1000px){
          .steps{ grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px){
          .steps{ grid-template-columns: 1fr; }
        }
        .step-card{
          border:1px solid rgba(148,163,184,0.25);
          background: rgba(2,6,23,0.25);
          border-radius:16px;
          padding:14px;
        }
        .step-badge{
          width:28px; height:28px; border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          background: rgba(14,165,233,0.12);
          border: 1px solid rgba(14,165,233,0.35);
          color:#93c5fd; font-weight:800; margin-bottom:10px;
        }
        .package-highlight{
          margin-top:10px;
          color:#93c5fd;
          font-size:12px;
          opacity:0.95;
        }
        .feature-icon{
          width:34px; height:34px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          border:1px solid rgba(148,163,184,0.25);
          background: rgba(2,6,23,0.25);
          margin-bottom:10px;
          color:#e2e8f0;
        }
      `}</style>
    </div>
  );
}

/* Small components */

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <div className="feature-card-title">{title}</div>
      <div>{desc}</div>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="step-card">
      <div className="step-badge">{step}</div>
      <div className="feature-card-title">{title}</div>
      <div>{desc}</div>
    </div>
  );
}

function PackageCard({ title, price, eta, bullets, featured, highlight }) {
  return (
    <div className={`package-card ${featured ? "package-featured" : ""}`}>
      <div className="package-header">
        <div>
          <div className="package-title">{title.toUpperCase()}</div>
          <div className="package-price">{price}</div>
        </div>
        <div className="package-eta">{eta}</div>
      </div>
      <ul className="package-list">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {highlight ? <div className="package-highlight">{highlight}</div> : null}
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <div className="faq-item">
      <div className="faq-q">{q}</div>
      <div className="faq-a">{a}</div>
    </div>
  );
}