import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary"></span>
            <span className="font-label-sm text-primary uppercase tracking-widest">Product Manager — B2B Platform · Consumer Software · 8 Years</span>
          </div>
          <h1 className="font-h1 text-h1 text-text-primary mb-8 leading-tight">
            Keep customers successful. <br />
            <span className="jamaican-gradient-text">Ship what actually matters.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary mb-10 max-w-2xl">
            I spent four years at Cision as the voice of 3,500 enterprise accounts in a room full of engineers, translating what customers actually needed into what the platform shipped. Before that, two years building consumer software at Sterkly: macOS security tools and Safari extensions. I've worked close to engineering my whole career, but my job has always been about the customer on the other side.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/work" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-manrope font-bold flex items-center gap-2 hover:bg-accent-hover transition-colors text-decoration-none">
              Explore Projects
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </Link>
            <Link to="/resume" className="bg-surface border border-border-subtle text-text-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-surface-container-low transition-colors text-decoration-none">
              View Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics/Sub-Hero Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface p-8 rounded-2xl border border-border-subtle">
            <div className="w-12 h-12 bg-surface-container text-text-secondary rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined" data-icon="speed">speed</span>
            </div>
            <h3 className="font-h3 text-h3 mb-2">Platform Stability</h3>
            <p className="text-text-secondary">Stabilized a $40M ARR enterprise platform, reducing outages and mitigating ~90% of the security backlog under constraint.</p>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-border-subtle">
            <div className="w-12 h-12 bg-surface-container text-text-secondary rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined" data-icon="database">database</span>
            </div>
            <h3 className="font-h3 text-h3 mb-2">Data Integrity</h3>
            <p className="text-text-secondary">Bypassed legacy ETL pipelines to deliver a 100% reduction in stale-data complaints, addressing a major churn driver.</p>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-border-subtle">
            <div className="w-12 h-12 bg-surface-container text-text-secondary rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
            </div>
            <h3 className="font-h3 text-h3 mb-2">Migration Strategy</h3>
            <p className="text-text-secondary">Executed phased, voluntary transitions to protect customer revenue during multi-year legacy sunset periods.</p>
          </div>
        </div>
      </section>

      {/* Enterprise Impact Section */}
      <section className="bg-surface-container-low py-24 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-h2 text-h2 text-text-primary mb-4">Enterprise Impact</h2>
            <p className="text-text-secondary max-w-xl">High-stakes platform engineering and data integrity initiatives for revenue-critical systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Bellwether */}
            <div className="md:col-span-12 group bg-surface rounded-3xl border border-border-subtle hover:border-transparent overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 h-64 flex items-center justify-center shrink-0 overflow-hidden">
                <img src="/images/cision.svg" alt="Cision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-10 flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-surface-container text-text-secondary text-xs font-bold rounded uppercase tracking-wider">Data Integrity</span>
                  <span className="px-3 py-1 bg-surface-container text-text-secondary text-xs font-bold rounded uppercase tracking-wider">Featured</span>
                </div>
                <h3 className="font-h1 text-h2 mb-4 group-hover:text-primary transition-colors">Bellwether Integration</h3>
                <p className="font-body-lg text-text-secondary max-w-2xl mb-8">
                  Architectural bypass of brittle legacy ETL pipelines to establish direct source-of-truth integration, solving the platform's #1 customer complaint and protecting revenue.
                </p>
                <Link to="/case-study/bellwether" className="font-manrope font-bold text-text-primary flex items-center gap-2 group/link text-decoration-none hover:underline">
                  View Case Study
                  <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform" data-icon="east">east</span>
                </Link>
              </div>
            </div>

            {/* Migration Tooling */}
            <div className="md:col-span-12 group bg-surface rounded-3xl border border-border-subtle hover:border-transparent overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row-reverse items-center">
              <div className="w-full md:w-1/3 h-64 flex items-center justify-center shrink-0 overflow-hidden">
                <img src="/images/cision-migration.svg" alt="Migration Tooling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-10 flex-1">
                <span className="px-3 py-1 bg-surface-container text-text-secondary text-xs font-bold rounded uppercase tracking-wider mb-4 inline-block">Migration</span>
                <h3 className="font-h3 text-h2 mb-3">Migration Tooling</h3>
                <p className="text-text-secondary mb-6 font-body-lg">
                  Structured tooling for transitioning 700+ enterprise clients off a legacy platform without workflow loss.
                </p>
                <Link to="/case-study/migration" className="text-sm font-bold text-text-primary flex items-center gap-1 text-decoration-none hover:underline hover:gap-2 transition-all">
                  Read Project Brief
                  <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independent AI Lab Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-h2 text-h2 text-text-primary mb-4">Independent AI Lab</h2>
            <p className="text-text-secondary max-w-xl">Exploring local-first agentic architectures, deterministic filtering, and AI-driven workflow automation.</p>
          </div>

          {/* JobAgent Card */}
          <div className="group relative bg-surface border border-border-subtle hover:border-transparent rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 mb-8">
            <div className="absolute top-0 right-0 p-8">
              <span className="px-4 py-2 bg-surface-container-high text-text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-border-subtle">Lab Project</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5 bg-surface-container-low flex items-center justify-center min-h-[300px] overflow-hidden">
                <img src="/images/jobagent.png" alt="Applyr" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-7 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-surface-container text-text-secondary text-xs font-bold rounded uppercase tracking-wider">Agentic Workflows</span>
                </div>
                <h3 className="font-h1 text-h2 mb-4 group-hover:text-primary transition-colors">Applyr</h3>
                <p className="font-body-lg text-text-secondary mb-8 leading-relaxed">
                  A local, zero-knowledge web application that automates job scouting using deterministic gate filters. Replaces manual spreadsheeting with a stateful, 6-stage automated pipeline.
                </p>
                <div className="flex items-center gap-6">
                  <Link to="/case-study/jobagent" className="bg-surface-container-high text-text-primary border border-border-subtle px-8 py-4 rounded-xl font-manrope font-bold flex items-center gap-2 hover:bg-surface-dim transition-all active:scale-95 text-decoration-none">
                    Explore Lab Project
                    <span className="material-symbols-outlined text-sm">science</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Lede Card */}
          <div className="group relative bg-surface border border-border-subtle hover:border-transparent rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 p-8">
              <span className="px-4 py-2 bg-surface-container-high text-text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-border-subtle">AI Pipeline</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5 bg-[#1C1917] flex items-center justify-center min-h-[300px] overflow-hidden">
                <img src="/images/lede.svg" alt="Lede" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-7 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-surface-container text-text-secondary text-xs font-bold rounded uppercase tracking-wider">Local LLM</span>
                  <span className="px-3 py-1 bg-surface-container text-text-secondary text-xs font-bold rounded uppercase tracking-wider">TTS</span>
                </div>
                <h3 className="font-h1 text-h2 mb-4 group-hover:text-primary transition-colors">Lede</h3>
                <p className="font-body-lg text-text-secondary mb-8 leading-relaxed">
                  A self-hosted newsletter intelligence briefing. Reads your Gmail, runs a 10-stage local LLM pipeline, and delivers a structured MP3 audio briefing — no cloud spend, no API key required.
                </p>
                <div className="flex items-center gap-6">
                  <Link to="/case-study/lede" className="bg-surface-container-high text-text-primary border border-border-subtle px-8 py-4 rounded-xl font-manrope font-bold flex items-center gap-2 hover:bg-surface-dim transition-all active:scale-95 text-decoration-none">
                    Explore Lab Project
                    <span className="material-symbols-outlined text-sm">podcasts</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-h2 text-h2 mb-6">Looking for your next PM?</h2>
          <p className="font-body-lg text-text-secondary mb-10">
            I'm currently looking for my next full-time product role where I can apply my experience in platform stabilization, data integrity, and keeping customers successful.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-accent-hover transition-colors text-decoration-none">
              Get in Touch
            </Link>
            <Link to="/work-history" className="bg-surface border border-border-subtle text-text-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-surface-container-low transition-colors text-decoration-none">
              Download Work History
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
