export const projects = [
  {
    id: "bellwether",
    title: "Bellwether Data Integration",
    summary: "Bypassed legacy ETL pipelines with a direct integration to the upstream source of truth, eliminating the primary driver of customer churn.",
    role: "Product Lead & Architect",
    type: "Platform Data Integrity",
    image: "/images/bellwether.png",
    tags: ["Data Pipeline", "Legacy Bypass", "Customer Retention"],
    liveUrl: "",
    context: "The largest customer complaint for C3 was stale contact data. Investigation revealed a 30-40% data drop-off caused by a brittle chain of legacy ETL pipelines.",
    goals: ["Eliminate the 30-40% data drop-off", "Bypass legacy pipelines rather than patching them", "Restore customer trust in data freshness"],
    approach: "Proposed and led 'Bellwether', an architectural bypass that integrated C3 directly with GPOD (the upstream source of truth). Chose this direct integration approach to eliminate systemic 'black box' ETL failures and establish a transparent, manageable data path.",
    results: "Delivered a 100% reduction in stale-contact complaints tied to that pipeline, effectively neutralizing the platform's biggest product-driven churn driver.",
    learnings: ["A simpler, transparent solution is far better than relying on a complex pipeline no one can explain.", "Signal de-noising and data freshness are often architectural issues, not feature gaps."]
  },
  {
    id: "migration",
    title: "Voluntary Migration Tooling",
    summary: "Structured, phased migration tooling enabling voluntary transition off a $40M ARR legacy platform without recreating past forced-migration failures.",
    role: "Product Manager",
    type: "Migration Strategy",
    image: "/images/migration.png",
    tags: ["Platform Sunset", "Cross-Functional", "Revenue Protection"],
    liveUrl: "",
    context: "The business strategy required moving customers off the legacy C3 platform, but a previous forced migration attempt had caused severe churn and reputational damage.",
    goals: ["Protect revenue by making migrations voluntary and value-driven", "Ensure no customer lost a critical workflow during transition", "Execute a phased rollout starting with low-complexity accounts"],
    approach: "Chose a phased tooling strategy (Database-only → Monitoring → Data Groups) to manage operational risk. Partnered with engineering to ensure feature parity on the destination platform before moving accounts, prioritizing 'critical save' accounts to protect high-revenue logos.",
    results: "Successfully transitioned roughly 700 accounts in a controlled, non-disruptive way, protecting revenue during a multi-year legacy period.",
    learnings: ["Migration tooling is a first-class product.", "Migrations must be aligned with customer value and retention, not just platform decommissioning."]
  },
  {
    id: "jobagent",
    title: "Applyr: Automated Scout & Application Pipeline",
    summary: "A local, zero-knowledge web application that automates job scouting and generates application materials across a stateful 6-stage pipeline.",
    role: "Product Lead & Architect",
    type: "Standalone Web Application",
    image: "/images/jobagent.png",
    tags: ["React", "SQLite", "Tailwind CSS"],
    liveUrl: "", 
    context: "The modern job hunt is an exhausting firehose of noisy postings. Applyr systematizes this chaotic process into a functional product pipeline strictly grounded in verified experience.",
    goals: ["Build a zero-knowledge local architecture guaranteeing data privacy", "Implement a deterministic pre-filter scout to save time and API costs", "Automate a stateful 6-stage pipeline: Scout, Filter, Refine, Evaluate, Draft, Review"],
    approach: "Engineered a local React application backed by SQLite. Chose SQLite for local-first data persistence to ensure absolute user privacy in a zero-knowledge environment. Systematized the workflow into a 6-stage pipeline to handle firehose ingestion with deterministic blocklists before AI evaluation.",
    results: "Replaced manual spreadsheeting with a fully automated local job sanctuary. The scout strips away thousands of irrelevant roles instantly using deterministic gate filters.",
    learnings: ["Deterministic gate filtering vastly outperforms AI evaluation at the top of the funnel.", "Local DB architectures provide incredible speed and privacy for sensitive personal data."]
  },
  {
    id: "leafletpdf",
    title: "Leaflet PDF",
    summary: "A local AI pipeline that transforms raw non-fiction content into structured, designed reading artifacts. Raw notes don't teach, designed documents do.",
    role: "Product Lead & Designer",
    type: "Personal AI Tool",
    image: "/images/leafletpdf.png",
    tags: ["AI Pipeline", "Learning Design", "MCP", "TypeScript"],
    liveUrl: "",
    context: "Most articles and notes fail to stick because they're formatted for writing, not reading. I wanted a tool that would take any piece of content and restructure it using proven learning design patterns (BLUF, jargon translation, facts-to-implications, mental buckets) and output it as a typeset document I could actually read and retain.",
    goals: [
      "Build an end-to-end AI pipeline from raw text to print-ready PDF",
      "Apply structured learning techniques automatically based on content type",
      "Design a visual system that treats reading as a first-class experience",
      "Run entirely on a Claude subscription with no separate API key required"
    ],
    approach: "Designed a multi-stage pipeline: claim extraction → technique selection → structured transformation → validation → Playwright PDF render. The technique selector applies rules-based logic (word count, jargon density, causal language patterns) to decide which sections to generate. The renderer uses a full typographic design system (Archivo Black headings, IBM Plex Mono chrome, Source Serif 4 body) across two themes: Orbital Light and Orbital Night. The MCP server delegates AI inference to the host Claude subscription, eliminating the need for a paid API key.",
    results: "Turned any markdown or text file into a structured, multi-section PDF in under two minutes. The pipeline reliably extracts core claims, selects the right learning formats, and renders them in a consistent visual system across two themes.",
    learnings: [
      "Learning design is a product problem. The format of information determines how well it's retained.",
      "Visual systems compound: a consistent type scale, color token set, and layout rhythm make every output feel intentional rather than generated.",
      "MCP sampling unlocks powerful AI workflows without requiring users to manage separate API credentials."
    ]
  },
  {
    id: "lede",
    title: "Lede",
    summary: "A self-hosted newsletter intelligence briefing that reads your Gmail, synthesizes content with a local LLM, and delivers a structured MP3 audio file every morning.",
    role: "Product Lead & Architect",
    type: "AI & Utility Lab",
    image: "/images/lede.png",
    tags: ["AI Pipeline", "Local LLM", "TTS", "Python", "FastAPI"],
    liveUrl: "https://github.com/JasonWayneT/Lede",
    context: "Newsletter inboxes are full of signal buried in noise. The problem isn't access to information — it's the daily cost of processing it. Lede is a personal briefing system that does the reading for you and hands you a structured, audio-ready digest before you open your laptop.",
    goals: [
      "Build a 10-stage pipeline from Gmail ingest to MP3 audio with no cloud dependencies",
      "Run entirely on a local LLM via Ollama — no API key required",
      "Deliver a structured briefing as both a readable document and a listenable audio file",
      "Ship a polished web UI for scheduling, settings, and archive browsing"
    ],
    approach: "Designed a stateful HandoffPacket pipeline: Gmail ingest → text extraction → embedding → clustering → LLM selection → framing → drafting → TTS synthesis → assembly → QA gate. Each stage serializes its output to JSON artifacts so the pipeline is fully inspectable and resumable. Used Kokoro for local neural TTS with a 10-voice picker (American/British, male/female). The FastAPI web UI handles OAuth, scheduling, and a full archive with audio playback.",
    results: "Runs end-to-end on a consumer laptop with no cloud spend beyond Gmail OAuth. Produces a structured briefing with section summaries and a 13-minute MP3 audio file from a real newsletter inbox on first run.",
    learnings: [
      "Pipeline observability is a product feature — serialized artifacts and a stage-by-stage UI make debugging tractable.",
      "Local LLMs are viable for summarization tasks but require careful prompt engineering to produce clean structured output.",
      "Audio delivery changes the product entirely — it turns a reading task into a commute-friendly briefing."
    ]
  },
  {
    id: "kinbridge",
    title: "KinBridge: AI Companion for Seniors",
    summary: "A heartfelt AI platform for senior care, bridging gaps with health monitoring, daily companionship, and a secure 'Last Words' legacy vault.",
    role: "Product Lead & Architect",
    type: "AI Healthcare Platform",
    image: "/images/kinbridge.png",
    tags: ["LLMs", "Health Monitoring", "Legacy Planning"],
    liveUrl: "https://kinbridge.polsia.app/",
    context: "Senior isolation and caregiving burdens require scalable, compassionate technical solutions. KinBridge manages high-stakes sensitivity by balancing empathetic engagement with strict data integrity.",
    goals: ["Provide daily AI companionship with sub-500ms latency for natural conversation", "Implement passive health monitoring with LLM grounding to eliminate hallucinations", "Create a secure 'Last Words' vault for sensitive legacy planning and farewells"],
    approach: "Built a cross-platform application leveraging LLM chaining to reduce hallucination risk in health-sensitive interactions. Chose a local-first processing model for the legacy vault to ensure user trust. Optimized for extreme simplicity to accommodate non-technical senior users.",
    results: "Deployed a comprehensive caregiving companion that humanizes AI for the aging population while providing peace of mind through secure, reliable health alerts.",
    learnings: ["Empathy is a first-class feature in senior-focused AI.", "Handling the most sensitive data (voice/final wishes) requires a 'Security-First' product philosophy."]
  }
];
