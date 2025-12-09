import React from "react";
import { Mail, FileText, Zap } from "lucide-react";

export default function RapidTechDocLanding() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = encodeURIComponent(form.name.value || "New client");
    const email = encodeURIComponent(form.email.value || "");
    const message = encodeURIComponent(
      form.message.value ||
        "Request for technical documentation services"
    );
    const subject = encodeURIComponent(`TechDoc Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}%0AEmail: ${email}%0A%0A${message}`
    );
    const mailto = `mailto:support@yantechdoc.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
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
              <div className="brand-text-main">Yan TechDoc</div>
              <div className="brand-text-sub">
                Technical documentation services
              </div>
            </div>
          </div>

          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#packages">Get quote</a>
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
              <h1 className="hero-title">
                Powerful technical documentation service
                <span>for IT, support & automation teams.</span>
              </h1>
              <p className="hero-text">
                Yan TechDoc turns screenshots, logs, and ticket threads into
                clear SOPs, troubleshooting guides, and customer-ready emails.
                Speed up ticket resolution and reduce escalations with
                consistent, professional documentation.
              </p>

              <ul className="hero-list">
                <li className="hero-list-item">
                  <div className="hero-list-icon">
                    <FileText size={16} color="#0ea5e9" />
                  </div>
                  <div>
                    <div className="hero-list-title">
                      SOPs and troubleshooting guides
                    </div>
                    <div className="hero-list-desc">
                      Step-by-step workflows your agents and engineers can
                      actually follow.
                    </div>
                  </div>
                </li>
                <li className="hero-list-item">
                  <div className="hero-list-icon" style={{ background:
                    "rgba(16,185,129,0.08)" }}>
                    <Mail size={16} color="#10b981" />
                  </div>
                  <div>
                    <div className="hero-list-title">
                      Technical email & ticket rewrites
                    </div>
                    <div className="hero-list-desc">
                      Clear, polite responses that reduce back-and-forth and
                      keep SLAs on track.
                    </div>
                  </div>
                </li>
              </ul>

              <div className="hero-ctas">
                <a href="#contact" className="btn-primary">
                  Get a 24h quote
                </a>
                <a href="#packages" className="btn-secondary">
                  View packages
                </a>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="hero-form-panel">
              <div className="hero-form-header">
                <h2 className="hero-form-title">
                  Try Yan TechDoc for your next documentation request.
                </h2>
                <p className="hero-form-subtitle">
                  Send a quick summary of what you need. You’ll receive a quote
                  and timeline within 24 hours.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="hero-form-body">
                <div className="form-field">
                  <label className="form-label">Name</label>
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
                  <label className="form-label">Context / tools</label>
                  <input
                    name="tools"
                    className="form-input"
                    placeholder="e.g. Jira, ServiceNow, PLC, SQL…"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">
                    What do you need documented?
                  </label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    defaultValue={
                      "Short description, links or examples, and ideal deadline."
                    }
                  />
                </div>
                <p className="form-note">
                  By clicking <strong>Request quote</strong>, your email client
                  will open with a pre-filled message to{" "}
                  <a
                    href="mailto:support@yantechdoc.com"
                    style={{ textDecoration: "underline", color: "#bfdbfe" }}
                  >
                    support@yantechdoc.com
                  </a>
                  .
                </p>
                <button type="submit" className="btn-primary hero-form-button">
                  Request quote
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section">
          <h2 className="section-title">Why teams use Yan TechDoc</h2>
          <p className="section-lead">
            Built for support teams, sysadmins, and automation engineers who
            don’t have time to write perfect documentation but need consistent,
            accurate procedures.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card-title">Clear, structured SOPs</div>
              <div>
                Every document has a clear objective, prerequisites, and
                step-by-step flow that anyone on the team can follow.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-card-title">Technical fluency</div>
              <div>
                Comfortable with PLC/automation, SQL, logs, and enterprise
                support tools. No need to over-explain your stack.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-card-title">Fast turnaround</div>
              <div>
                Most requests are delivered within 24–48 hours, with simple
                revision cycles when needed.
              </div>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="section">
          <h2 className="section-title">Packages &amp; pricing</h2>
          <div className="package-grid">
            <PackageCard
              title="Basic"
              price="$20"
              eta="~2 hours"
              bullets={[
                "One short rewrite (email or reply)",
                "Up to 250 words",
                "Great for urgent ticket responses",
              ]}
            />
            <PackageCard
              title="Standard"
              price="$45"
              eta="24 hours"
              bullets={[
                "1–2 page SOP or troubleshooting guide",
                "Includes formatting & structure",
                "Good for recurring tasks/procedures",
              ]}
            />
            <PackageCard
              title="Premium"
              price="$95"
              eta="24–48 hours"
              bullets={[
                "Up to 4 pages of documentation",
                "Template alignment and cleanup",
                "Includes one revision cycle",
              ]}
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <h2 className="section-title">FAQ</h2>
          <div className="faq-list">
            <FAQItem
              q="What can I send as input?"
              a="Screenshots, ticket exports, logs, rough notes, or existing documents. If your team uses it, it can be turned into documentation."
            />
            <FAQItem
              q="Can you work under an NDA?"
              a="Yes. For environments with production data or internal tools, an NDA can be signed before any files are shared."
            />
            <FAQItem
              q="How do I receive the final document?"
              a="Common formats include Word, PDF, Markdown, or content ready to paste into Confluence, Notion, or your ticketing system."
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span>
            © {new Date().getFullYear()} Yan TechDoc — technical documentation
            services.
          </span>
          <span className="footer-links">
            <a href="mailto:support@yantechdoc.com">support@yantechdoc.com</a>
            <a href="#features">Features</a>
            <a href="#packages">Packages</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

/* SMALL REUSABLE COMPONENTS */

function PackageCard({ title, price, eta, bullets }) {
  return (
    <div className="package-card">
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