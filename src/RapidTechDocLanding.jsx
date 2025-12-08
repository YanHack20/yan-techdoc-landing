import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Zap } from "lucide-react";

// Single-file React landing page (Tailwind CSS required in host project)
// Drop this component into a React app (Vite) with Tailwind configured.

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans">
      <header className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/80 backdrop-blur">
  <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="bg-slate-900 p-2 rounded-2xl shadow-sm border border-white/10">
        <Zap className="w-5 h-5 text-amber-400" />
      </div>
      <div>
        <h1 className="text-lg font-semibold tracking-tight">Yan TechDoc</h1>
        <p className="text-xs text-slate-400">
          Clear technical docs, SOPs & troubleshooting — fast.
        </p>
      </div>
    </div>
    <nav className="hidden md:flex gap-6 text-sm text-slate-300 items-center">
      <a href="#services" className="hover:text-white transition">Services</a>
      <a href="#packages" className="hover:text-white transition">Packages</a>
      <a href="#faq" className="hover:text-white transition">FAQ</a>
      <a
        href="#contact"
        className="px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-medium text-sm shadow hover:bg-amber-300 transition"
      >
        Contact
      </a>
    </nav>
  </div>
</header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-500 drop-shadow-[0_0_18px_rgba(56,189,248,0.45)]">
              Professional technical documentation — delivered in 24 hours.
            </h2>
            <p className="mt-4 text-slate-300">
              Transform messy notes, screenshots, logs, or ticket threads into
              clear SOPs, troubleshooting guides, and customer-ready
              communications. High accuracy for IT, PLC/automation, SQL, and
              support processes.
            </p>

            <ul className="mt-6 grid gap-3">
              <li className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-md shadow-sm border border-neutral-100">
                  <FileText className="w-5 h-5 text-sky-500" />
                </div>
                <div>
                  <strong>Fast SOPs & troubleshooting</strong>
                  <div className="text-sm text-neutral-600">
                    Turn notes into step-by-step procedures—clear, tested, and
                    formatted.
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-md shadow-sm border border-neutral-100">
                  <Mail className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <strong>Technical email & ticket rewrites</strong>
                  <div className="text-sm text-neutral-600">
                    Professional responses that reduce back-and-forth and
                    increase SLA compliance.
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
  <a
    href="#contact"
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 text-slate-950 font-medium text-sm shadow hover:bg-amber-300 transition"
  >
    Get a 24h Quote
  </a>
  <a
    href="#packages"
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-500/70 text-slate-100 text-sm hover:border-slate-300 hover:bg-slate-900/60 transition"
  >
    See Packages
  </a>
</div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-md shadow"
              >
                Get a 24h Quote
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md"
              >
                See Packages
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-neutral-100"
          >
            <h3 className="text-2xl font-semibold text-slate-50">
              Sample 24h Turnaround Offer
            </h3>
            <p className="text-sm text-neutral-600 mt-2">
              Send screenshots, logs, or a rough draft — receive a polished SOP,
              troubleshooting guide, or email within 24 hours.
            </p>

            <div className="mt-4 grid gap-3">
              <div className="p-3 rounded-lg bg-neutral-50 border">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-neutral-500">Basic</div>
                    <div className="text-xl font-bold">$20</div>
                  </div>
                  <div className="text-sm">2 hours</div>
                </div>
                <div className="text-sm text-neutral-600 mt-2">
                  Quick rewrite — one short instruction set or email (up to 250
                  words).
                </div>
              </div>

              <div className="p-3 rounded-lg bg-neutral-50 border">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-neutral-500">Standard</div>
                    <div className="text-xl font-bold">$45</div>
                  </div>
                  <div className="text-sm">24 hours</div>
                </div>
                <div className="text-sm text-neutral-600 mt-2">
                  SOP or troubleshooting guide (1–2 pages). Formatting and
                  clarity improvements.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-neutral-50 border">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-neutral-500">Premium</div>
                    <div className="text-xl font-bold">$95</div>
                  </div>
                  <div className="text-sm">24–48 hours</div>
                </div>
                <div className="text-sm text-neutral-600 mt-2">
                  Full documentation cleanup (up to 4 pages) + revisions.
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-neutral-500">
              Payment via Fiverr/Gumroad/Stripe. NDAs available on request.
            </div>
          </motion.div>
        </section>

        <section id="services" className="mt-12">
          <h3 className="text-2xl font-semibold">Services</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="SOPs & Troubleshooting"
              desc="Step-by-step guides, checklists, and runbooks that tech teams use."
            />
            <ServiceCard
              title="Technical Rewrites"
              desc="Emails, ticket replies, and release notes rewritten for clarity."
            />
            <ServiceCard
              title="Version Summaries"
              desc="Clear summaries of version differences, migration notes, and release highlights."
            />
          </div>
        </section>

        <section id="packages" className="mt-12">
          <h3 className="text-2xl font-semibold">Packages & Pricing</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <PackageCard
              title="Basic"
              price="$20"
              eta="2 hours"
              bullets={["One short rewrite", "Up to 250 words"]}
            />
            <PackageCard
              title="Standard"
              price="$45"
              eta="24 hours"
              bullets={["SOP or troubleshooting (1–2 pages)", "Formatting included"]}
            />
            <PackageCard
              title="Premium"
              price="$95"
              eta="24–48 hours"
              bullets={["Up to 4 pages", "Includes revision cycle"]}
            />
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h3 className="text-2xl font-semibold">FAQ</h3>
          <div className="mt-4 grid gap-3">
            <FAQItem
              q="Can you work with logs, screenshots, or ticket threads?"
              a="Yes — send anything you have and I will convert it into a polished document."
            />
            <FAQItem
              q="Do you sign NDAs?"
              a="Yes. NDAs are available on request before starting work."
            />
            <FAQItem
              q="How do I receive deliverables?"
              a="PDF, Word, Markdown, Confluence, Notion, or a pasted reply in a ticketing tool."
            />
          </div>
        </section>

        <section
          id="contact"
          className="mt-12 bg-white p-6 rounded-2xl shadow-sm border"
        >
          <h3 className="text-2xl font-semibold">Contact & Quick Quote</h3>
          <p className="text-neutral-600 mt-2">
            Fill the form and your request will open in your email client
            (pre-filled). Or contact:{" "}
            <a href="mailto:support@yantechdoc.com" className="underline">
              support@yantechdoc.com
            </a>
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-4 grid md:grid-cols-2 gap-4"
          >
            <input
              name="name"
              placeholder="Your name"
              className="p-3 border rounded-md"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="p-3 border rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Brief description (screenshots, logs, deadline)"
              className="p-3 border rounded-md md:col-span-2"
              rows={5}
              defaultValue={"I need: \n- Type of doc: \n- Deadline: \n- Attachments: "}
            />
            <div className="md:col-span-2 flex items-center gap-3">
              <button
                type="submit"
                className="px-4 py-2 bg-amber-500 text-white rounded-md"
              >
                Request Quote
              </button>
              <a
                href="mailto:support@yantechdoc.com"
                className="px-4 py-2 border rounded-md"
              >
                Email directly
              </a>
            </div>
          </form>
        </section>

        <footer className="mt-12 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Yan TechDoc — Fast, accurate technical
          documentation services. Contact:{" "}
          <a href="mailto:support@yantechdoc.com" className="underline">
            support@yantechdoc.com
          </a>{" "}
          • <a href="#privacy" className="underline">Privacy Policy</a> •{" "}
          <a href="#terms" className="underline">Terms of Service</a> Built for
          teams & support desks.
        </footer>

        <section
          id="privacy"
          className="mt-12 p-6 bg-white rounded-2xl shadow-sm border"
        >
          <h3 className="text-2xl font-semibold mb-4">Privacy Policy</h3>
          <p className="text-sm text-neutral-600 mb-2">
            Yan TechDoc respects your privacy and is committed to protecting your
            personal information. We only collect data necessary to provide
            technical documentation services and communicate with you regarding
            your project.
          </p>
          <p className="text-sm text-neutral-600 mb-2">
            Information provided by you (including notes, screenshots, logs, or
            documentation files) is kept confidential and is not shared with
            third parties without your consent.
          </p>
          <p className="text-sm text-neutral-600 mb-2">
            We do not sell, lease, or disclose any personal or business data
            provided to us, except as required by law.
          </p>
        </section>

        <section
          id="terms"
          className="mt-12 p-6 bg-white rounded-2xl shadow-sm border"
        >
          <h3 className="text-2xl font-semibold mb-4">Terms of Service</h3>
          <p className="text-sm text-neutral-600 mb-2">
            By engaging with Yan TechDoc, you agree to provide accurate
            information necessary for completing your documentation request. All
            deliverables remain your property once completed and delivered.
          </p>
          <p className="text-sm text-neutral-600 mb-2">
            Work involving confidential or proprietary data may be covered by a
            non-disclosure agreement (NDA) upon request.
          </p>
          <p className="text-sm text-neutral-600 mb-2">
            Turnaround times are based on the scope of work. Urgent or same-day
            delivery may incur additional charges.
          </p>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:support@yantechdoc.com"
              className="text-blue-600 underline"
            >
              support@yantechdoc.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-slate-900/70 p-4 rounded-xl border border-white/10 shadow-sm">
      <h4 className="font-semibold text-slate-50">{title}</h4>
      <div className="text-sm text-slate-300 mt-2">{desc}</div>
    </div>
  );
}

function PackageCard({ title, price, eta, bullets }) {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-slate-900/70 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-400">
            {title}
          </div>
          <div className="text-2xl font-bold text-slate-50">{price}</div>
        </div>
        <div className="text-xs text-slate-400">{eta}</div>
      </div>
      <ul className="mt-3 text-sm text-slate-300 list-disc pl-5 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <div className="p-4 rounded-lg border bg-neutral-50">
      <div className="font-medium">{q}</div>
      <div className="text-sm text-neutral-600 mt-1">{a}</div>
    </div>
  );
}