/**
 * GSFS Design Direction — Estratigrafia de Precisão
 * Editorial scientific-industrial composition with an asymmetric investigation spine,
 * restrained signal cyan, and transparent communication of technology maturity.
 */
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Compass,
  Menu,
  Network,
  ScanLine,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  X,
} from "lucide-react";

const heroImage = "/manus-storage/gsfs-hero-geospatial_5560c685.png";
const strataImage = "/manus-storage/gsfs-strata-texture_a1871bb4.png";
const flowImage = "/manus-storage/gsfs-conceptual-flow_97cfcd66.png";
const markImage = "/manus-storage/gsfs-mark_03e874f0.png";

const navigation = [
  ["Overview", "overview"],
  ["Mining Challenge", "challenge"],
  ["Technology", "technology"],
  ["Maturity", "maturity"],
  ["Collaboration", "collaboration"],
  ["Contact", "contact"],
] as const;

const approach = [
  {
    number: "01",
    title: "Complementary inputs",
    copy: "A proposed, modular integration of complementary sensing inputs for subsurface investigation.",
    icon: ScanLine,
  },
  {
    number: "02",
    title: "Precise location",
    copy: "Georeferencing is designed to anchor observations to their spatial context.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Synchronized capture",
    copy: "Acquisition and edge processing are being designed as a coordinated technical workflow.",
    icon: SlidersHorizontal,
  },
  {
    number: "04",
    title: "Multimodal correlation",
    copy: "The architecture aims to correlate complementary sources for technical interpretation support.",
    icon: Network,
  },
  {
    number: "05",
    title: "Traceable outputs",
    copy: "Technical outputs are intended to support accountable review and subsequent physical validation.",
    icon: Target,
  },
];

const useCases = [
  "Subsurface characterization",
  "Structural and geotechnical investigation support",
  "Anomaly mapping and prioritization",
  "Georeferenced multi-source survey integration",
  "Prioritization of areas for physical validation",
  "Support for more efficient, lower-impact investigation campaigns",
];

const maturity = [
  {
    label: "Available now",
    title: "The institutional and technical foundation",
    items: [
      "Brazilian patent application filed",
      "Consolidated technical architecture",
      "Technical documentation",
      "High-fidelity conceptual virtual demonstrator",
    ],
  },
  {
    label: "In development",
    title: "The path from concept to integrated system",
    items: [
      "Software ecosystem",
      "Integration design",
      "Functional prototype planning",
      "Validation preparation",
    ],
  },
  {
    label: "Seeking partners for",
    title: "The next evidence-building phase",
    items: [
      "Physical functional prototype",
      "Controlled tests",
      "Mining pilot",
      "Field validation with ground truth",
    ],
  },
];

const collaborationSteps = [
  "Define the Saudi mining use case.",
  "Select commercial sensing and integration components.",
  "Build and bench-test a functional prototype.",
  "Establish ground truth and validation protocol.",
  "Conduct staged field trials.",
  "Assess performance and commercialization pathway.",
];

const faqs = [
  {
    question: "Is GSFS commercially available?",
    answer:
      "No. GSFS is a technology initiative under development. It is not presented as commercially available equipment or as a field-validated mining product.",
  },
  {
    question: "What is the current maturity level?",
    answer:
      "GSFS has an estimated preliminary maturity of TRL 3–4, subject to formal evidence-based assessment. The next stage is physical prototyping, controlled testing and validation with industrial partners.",
  },
  {
    question: "Does GSFS replace drilling or existing geophysical methods?",
    answer:
      "No. The proposed platform is designed to support investigation and target-prioritization decisions. It does not replace drilling, ground truth or established geophysical methods.",
  },
  {
    question: "What type of collaboration is GSFS seeking?",
    answer:
      "GSFS is seeking industrial, OEM, technical and R&D collaboration to define relevant use cases, integrate components, build a functional prototype, establish validation protocols and conduct staged trials.",
  },
  {
    question: "Can technical documentation be shared?",
    answer:
      "Appropriate institutional and technical materials may be shared progressively with qualified parties. Access to sensitive implementation details is subject to intellectual-property governance and, where appropriate, confidentiality arrangements.",
  },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand" href="#overview" aria-label="GSFS home">
      <img className="brand-mark" src={markImage} alt="" decoding="async" />
      {!compact && (
        <span className="brand-copy">
          <strong>GSFS</strong>
          <small>Geo-Spectral Fusion Scanner</small>
        </span>
      )}
    </a>
  );
}

function SectionMarker({ label, number }: { label: string; number: string }) {
  return (
    <div className="section-marker" aria-hidden="true">
      <span>{number}</span>
      <i />
      <small>{label}</small>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "invalid" | "confirmed">("idle");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const navigation = mobileNavRef.current;
    const focusable = navigation?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    const firstFocusable = focusable?.[0];
    const lastFocusable = focusable?.[focusable.length - 1];
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    firstFocusable?.focus();

    function keepFocusInMenu(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !firstFocusable || !lastFocusable) return;
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }

    window.addEventListener("keydown", keepFocusInMenu);
    return () => {
      window.removeEventListener("keydown", keepFocusInMenu);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormState("invalid");
      form.reportValidity();
      return;
    }
    setFormState("confirmed");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map(([label, id]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>
          <a className="button button-primary header-cta" href="#contact">
            Discuss a Pilot <ArrowDownRight size={16} aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
          ref={mobileNavRef}
          aria-label="Mobile primary navigation"
          aria-hidden={!menuOpen}
        >
          {navigation.map(([label, id], index) => (
            <a href={`#${id}`} key={id} onClick={closeMenu}>
              <span>0{index + 1}</span>
              {label}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          ))}
          <a className="button button-primary mobile-contact" href="#contact" onClick={closeMenu}>
            Discuss a Pilot <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section id="overview" className="hero-section" aria-labelledby="hero-title">
          <div className="hero-image-wrap" aria-hidden="true">
            <img src={heroImage} alt="" decoding="async" fetchPriority="high" />
            <div className="hero-image-overlay" />
            <div className="hero-contour contour-one" />
            <div className="hero-contour contour-two" />
            <div className="hero-signal signal-one" />
            <div className="hero-signal signal-two" />
          </div>
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-content-grid">
              <div className="hero-copy">
                <p className="eyebrow"><span /> Multimodal Subsurface Intelligence for Mining</p>
                <h1 id="hero-title">Reducing subsurface uncertainty for better exploration decisions.</h1>
                <p className="hero-lede">
                  GSFS is a Brazilian deeptech initiative developing a patented multimodal subsurface sensing architecture designed to support more informed investigation and target-prioritization decisions.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#contact">
                    Discuss a Pilot <ArrowDownRight size={17} aria-hidden="true" />
                  </a>
                  <a className="button button-secondary" href="#technology">
                    Explore the Concept <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>
                <ul className="hero-tags" aria-label="GSFS status">
                  <li>Brazilian Deeptech</li>
                  <li>Patent Application Filed</li>
                  <li>Estimated TRL 3–4</li>
                </ul>
              </div>
              <aside className="hero-aside" aria-label="GSFS institutional summary">
                <div className="hero-aside-rule" />
                <p className="hero-aside-label">A platform in development</p>
                <p>
                  Seeking industrial collaboration to build, integrate and validate a functional physical prototype under relevant mining conditions.
                </p>
                <a href="#collaboration">See the collaboration pathway <ArrowRight size={15} aria-hidden="true" /></a>
              </aside>
            </div>
          </div>
          <div className="hero-footnote container" aria-hidden="true">
            <span>01 / 06</span>
            <span>EXPLORATION DECISION SUPPORT</span>
            <span>BR 10 2026 004131-9</span>
          </div>
        </section>

        <section className="intro-section section-shell" aria-labelledby="intro-title">
          <div className="container intro-layout">
            <SectionMarker number="01" label="Institutional proposition" />
            <div className="intro-heading">
              <p className="section-kicker">An evidence-building proposition</p>
              <h2 id="intro-title">A proposed architecture for bringing complementary subsurface signals into a more useful technical conversation.</h2>
            </div>
            <div className="intro-copy">
              <p>
                GSFS is being developed as a multimodal architecture combining complementary sensing technologies, precise georeferencing, edge processing and data correlation. It is designed to help structure investigation inputs before later physical validation.
              </p>
              <p>
                The proposition is not to replace drilling or certify a discovery. It is to create a better-informed route toward the next question, the next survey and the next validation decision.
              </p>
            </div>
          </div>
        </section>

        <section id="challenge" className="challenge-section section-shell" aria-labelledby="challenge-title">
          <div className="container challenge-layout">
            <SectionMarker number="02" label="Mining challenge" />
            <div className="challenge-statement">
              <p className="section-kicker section-kicker-light">The investigation context</p>
              <h2 id="challenge-title">The challenge is not simply collecting more information. It is deciding what to investigate next.</h2>
            </div>
            <figure className="challenge-image">
              <img src={strataImage} alt="Abstract geological strata with survey contour traces" loading="lazy" decoding="async" />
              <figcaption>Geological context is interpreted through multiple sources and later physical validation.</figcaption>
            </figure>
            <div className="challenge-notes">
              <div>
                <span className="note-index">A</span>
                <h3>Fragmented information</h3>
                <p>Exploration and characterization work may bring together observations from different tools, locations, times and technical disciplines.</p>
              </div>
              <div>
                <span className="note-index">B</span>
                <h3>Persistent uncertainty</h3>
                <p>Geological interpretation remains uncertain until it is compared with appropriate physical validation and ground truth.</p>
              </div>
              <div>
                <span className="note-index">C</span>
                <h3>High-cost decisions</h3>
                <p>Additional surveys, sampling and drilling campaigns require careful prioritization of where investigation effort should go next.</p>
              </div>
            </div>
            <div className="challenge-quote">
              <CircleDot size={22} aria-hidden="true" />
              <p>GSFS is designed to support earlier technical prioritization—not to make a mineral discovery claim on its own.</p>
            </div>
          </div>
        </section>

        <section id="technology" className="technology-section section-shell" aria-labelledby="technology-title">
          <div className="container">
            <div className="technology-head">
              <SectionMarker number="03" label="GSFS approach" />
              <div>
                <p className="section-kicker">Proposed architecture</p>
                <h2 id="technology-title">Designed to coordinate information, not overstate it.</h2>
              </div>
              <p>
                The GSFS approach is modular and vendor-agnostic at a public level. Commercial sensing and integration components may be selected, integrated, customized, licensed or obtained through OEM and specialist partnerships.
              </p>
            </div>
            <div className="approach-list">
              {approach.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="approach-item" key={item.number}>
                    <div className="approach-topline"><span>{item.number}</span><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="architecture-section section-shell" aria-labelledby="architecture-title">
          <div className="container architecture-layout">
            <div className="architecture-visual">
              <img src={flowImage} alt="Abstract conceptual illustration of a staged subsurface investigation workflow" loading="lazy" decoding="async" />
              <span className="image-caption">Conceptual public representation</span>
            </div>
            <div className="architecture-copy">
              <p className="section-kicker">Conceptual architecture</p>
              <h2 id="architecture-title">Sense. Locate. Correlate. Interpret. Prioritize.</h2>
              <p>
                This public flow expresses the intended logic of investigation support. It does not show the complete proprietary implementation, internal interfaces, algorithms or processing parameters.
              </p>
              <ol className="flow-steps">
                {["Sense", "Locate", "Correlate", "Interpret", "Prioritize"].map((step, index) => (
                  <li key={step}><span>0{index + 1}</span><b>{step}</b><ChevronRight size={15} aria-hidden="true" /></li>
                ))}
              </ol>
              <p className="concept-note"><ShieldCheck size={16} aria-hidden="true" /> Conceptual representation. Proprietary implementation details are not disclosed.</p>
            </div>
          </div>
        </section>

        <section className="usecase-section section-shell" aria-labelledby="usecase-title">
          <div className="container usecase-layout">
            <SectionMarker number="04" label="Potential mining use cases" />
            <div className="usecase-title">
              <p className="section-kicker">Where the investigation may benefit</p>
              <h2 id="usecase-title">Support for mineral exploration and subsurface characterization decisions.</h2>
              <p>Potential applications are framed as investigation support and prioritization. They are not presented as validated performance outcomes.</p>
            </div>
            <div className="usecase-list" role="list">
              {useCases.map((useCase, index) => (
                <div className="usecase-row" role="listitem" key={useCase}>
                  <span>0{index + 1}</span>
                  <p>{useCase}</p>
                  <ArrowDownRight size={19} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="maturity" className="maturity-section section-shell" aria-labelledby="maturity-title">
          <div className="container">
            <div className="maturity-head">
              <SectionMarker number="05" label="Maturity & evidence" />
              <div>
                <p className="section-kicker">Current, transparent stage</p>
                <h2 id="maturity-title">A clear separation between what exists, what is being developed and what requires collaboration.</h2>
              </div>
              <aside>
                <span>ESTIMATED TRL</span>
                <strong>3–4</strong>
                <p>Subject to formal evidence-based assessment.</p>
              </aside>
            </div>
            <div className="maturity-grid">
              {maturity.map((column, index) => (
                <article className={`maturity-card maturity-card-${index + 1}`} key={column.label}>
                  <div className="maturity-card-top"><span>{column.label}</span><i /></div>
                  <h3>{column.title}</h3>
                  <ul>
                    {column.items.map((item) => <li key={item}><Check size={15} aria-hidden="true" /> {item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className="maturity-disclosure">
              <Sparkles size={18} aria-hidden="true" />
              <p><b>Transparency note:</b> GSFS Virtual is a high-fidelity conceptual technical demonstrator. It is not a physical device, industrial pilot or evidence of detection performance.</p>
            </div>
          </div>
        </section>

        <section id="collaboration" className="collaboration-section section-shell" aria-labelledby="collaboration-title">
          <div className="container collaboration-layout">
            <div className="collaboration-heading">
              <SectionMarker number="06" label="Proposed collaboration" />
              <p className="section-kicker section-kicker-light">A staged path to relevant evidence</p>
              <h2 id="collaboration-title">Build the validation pathway together.</h2>
              <p>
                GSFS seeks industrial collaboration to develop a use case relevant to Saudi mining, assemble a functional prototype, establish a ground-truth protocol and conduct staged field validation.
              </p>
              <a className="button button-primary" href="#contact">Discuss a Pilot <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>
            <ol className="collaboration-steps">
              {collaborationSteps.map((step, index) => (
                <li key={step}>
                  <span>0{index + 1}</span>
                  <p>{step}</p>
                  <div className="step-line" aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="governance-section section-shell" aria-labelledby="governance-title">
          <div className="container governance-layout">
            <div className="governance-aside"><span>IP / 01</span><span>DATA / 02</span><span>ACCESS / 03</span></div>
            <div className="governance-main">
              <p className="section-kicker">IP & collaboration governance</p>
              <h2 id="governance-title">A collaboration model designed to protect the work behind the work.</h2>
              <p>
                GSFS anticipates a clear treatment of background intellectual property, contractual definition of foreground IP, controlled data access and progressive information sharing under appropriate confidentiality arrangements. The public concept is intentionally distinct from sensitive implementation detail.
              </p>
              <div className="governance-points">
                <span><ShieldCheck size={17} aria-hidden="true" /> Background IP acknowledged</span>
                <span><ShieldCheck size={17} aria-hidden="true" /> Data access governed</span>
                <span><ShieldCheck size={17} aria-hidden="true" /> Technical disclosure progressive</span>
              </div>
            </div>
          </div>
        </section>

        <section className="founder-section section-shell" aria-labelledby="founder-title">
          <div className="container founder-layout">
            <div className="founder-mark"><img src={markImage} alt="" loading="lazy" decoding="async" /><span>BRAZIL</span></div>
            <div>
              <p className="section-kicker">Founder & origin</p>
              <h2 id="founder-title">Valdinei Costa Peixoto</h2>
              <p className="founder-role">Founder and inventor of GSFS</p>
              <p>GSFS originates in Brazil as a deeptech initiative for multimodal subsurface intelligence. Its current focus is to establish the right industrial and technical collaboration for physical prototyping and validation.</p>
            </div>
            <div className="patent-lockup"><span>Brazilian Patent Application</span><strong>BR 10 2026 004131-9</strong><p>Filed</p></div>
          </div>
        </section>

        <section id="contact" className="contact-section section-shell" aria-labelledby="contact-title">
          <div className="container contact-layout">
            <div className="contact-intro">
              <p className="section-kicker section-kicker-light">Start a considered conversation</p>
              <h2 id="contact-title">Discuss a Pilot or Strategic Collaboration.</h2>
              <p>
                Share your area of interest and the context you would like to explore. This review-stage form validates information locally and does not transmit messages.
              </p>
              <div className="contact-assurances">
                <span><ShieldCheck size={16} aria-hidden="true" /> No data transmission</span>
                <span><ShieldCheck size={16} aria-hidden="true" /> No sensitive technical disclosure requested</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
              <div className="form-row">
                <label>
                  <span>Name <b>*</b></span>
                  <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
                </label>
                <label>
                  <span>Organization <b>*</b></span>
                  <input name="organization" type="text" autoComplete="organization" required placeholder="Organization name" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>Work Email <b>*</b></span>
                  <input name="email" type="email" autoComplete="email" required placeholder="name@organization.com" />
                </label>
                <label>
                  <span>Area of Interest <b>*</b></span>
                  <select name="interest" required defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option value="mining-pilot">Mining Pilot</option>
                    <option value="technical-partnership">Technical Partnership</option>
                    <option value="oem-integration">OEM / Integration</option>
                    <option value="rd-institution">R&amp;D Institution</option>
                    <option value="strategic-investment">Strategic Investment</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <label className="textarea-label">
                <span>Message <b>*</b></span>
                <textarea name="message" required rows={4} placeholder="Describe the collaboration context you would like to discuss." />
              </label>
              <div className="form-submit-row">
                <button className="button button-primary" type="submit">Validate inquiry <ArrowRight size={17} aria-hidden="true" /></button>
                <p>Required fields are marked with <b>*</b></p>
              </div>
              <div className={`form-message ${formState === "idle" ? "form-message-hidden" : ""}`} aria-live="polite" role="status">
                {formState === "invalid" && "Please complete the required fields with valid information. No information has been sent."}
                {formState === "confirmed" && "Your information is complete. This review-stage form is a local demonstration only; no message has been sent or stored."}
              </div>
            </form>
          </div>
        </section>

        <section className="faq-section section-shell" aria-labelledby="faq-title">
          <div className="container faq-layout">
            <div>
              <p className="section-kicker">FAQ</p>
              <h2 id="faq-title">Clear answers for the next conversation.</h2>
              <p>GSFS is presented with the same clarity expected from a serious industrial collaboration process.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question}>
                  <summary><span>0{index + 1}</span>{faq.question}<ChevronDown size={18} aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <Logo />
          <p>GSFS — Geo-Spectral Fusion Scanner.<br />Brazilian technology under development.</p>
          <a href="#overview" className="footer-top-link">Back to top <ArrowRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="container footer-bottom">
          <p>This website provides institutional information only. It does not constitute a complete technical specification, a commercial offer, or disclosure of sensitive intellectual property.</p>
          <span>© {new Date().getFullYear()} GSFS</span>
        </div>
      </footer>
    </div>
  );
}
