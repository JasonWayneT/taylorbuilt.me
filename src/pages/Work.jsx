import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-section-padding">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-3xl">
          <h1 className="font-h1 text-h1 text-text-primary mb-6">Selected <span className="text-primary">Work</span></h1>
          <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed mb-6">
            Eight years of product work across enterprise SaaS, consumer software, and tools I built for myself.
          </p>
          <Link to="/work-history" className="inline-flex items-center gap-2 text-primary font-manrope font-bold hover:underline text-decoration-none">
            View full narrative work history
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Section 1: Platform Leadership */}
      <section className="mb-24">
        <h2 className="font-h2 text-h2 text-text-primary mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-primary"></span>
          Enterprise Platform
        </h2>
        <div className="grid grid-cols-12 gap-gutter">
          {/* Featured: Bellwether (Large) */}
          <div className="col-span-12 lg:col-span-8 group">
            <div className="bg-surface border border-border-subtle rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="aspect-video bg-surface-container overflow-hidden">
                 <img src="/images/bellwether.png" alt="Bellwether Data Flow Integration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-stack-lg flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-[12px] font-semibold uppercase tracking-wider rounded border border-green-100">Enterprise</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[12px] font-semibold uppercase tracking-wider rounded border border-blue-100">Data Integrity</span>
                  <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-[12px] font-semibold uppercase tracking-wider rounded border border-yellow-100">Critical Systems</span>
                </div>
                <h3 className="font-h3 text-h3 text-text-primary mb-3">Bellwether Integration</h3>
                <p className="font-body-md text-body-md text-text-secondary mb-8 max-w-2xl">
                  Bypassed legacy ETL pipelines to establish a direct source-of-truth integration, solving the platform's #1 customer complaint and preventing 40% data drop-off.
</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="text-xl font-bold text-primary">100%</div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-tighter">Reduction in Complaints</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="text-xl font-bold text-primary">40%</div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-tighter">Data Loss Prevented</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="text-xl font-bold text-primary">Zero</div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-tighter">Legacy Pipeline Hops</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="text-xl font-bold text-primary">#1</div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-tighter">Churn Driver Neutralized</div>
                  </div>
                </div>

                <Link to="/case-study/bellwether" className="flex items-center gap-4 text-primary font-semibold text-decoration-none hover:gap-6 transition-all">
                  <span>Full Case Study</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Side Card: Migration Tooling */}
          <div className="col-span-12 lg:col-span-4 group">
            <div className="bg-surface border border-border-subtle rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video bg-surface-container overflow-hidden">
                  <img src="/images/migration.png" alt="Migration Tooling Visualization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              <div className="p-stack-lg flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-[12px] font-semibold uppercase tracking-wider rounded border border-green-100">Infrastructure</span>
                </div>
                <h3 className="font-h3 text-h3 text-text-primary mb-3">Migration Tooling</h3>
                <p className="font-body-md text-body-md text-text-secondary mb-6">
                  Structured tooling for transitioning 700+ enterprise clients off a legacy platform without workflow loss.
                </p>
                <Link to="/case-study/migration" className="flex items-center gap-4 text-primary font-semibold text-decoration-none">
                  <span className="material-symbols-outlined">link</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Security & Uptime */}
          <div className="col-span-12 md:col-span-6 lg:col-span-12 group">
            <div className="bg-surface border border-border-subtle rounded-xl p-stack-lg hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary" data-weight="fill">security</span>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded">Stability</span>
                  <span className="px-2 py-0.5 bg-yellow-50 text-yellow-700 text-[10px] font-bold uppercase tracking-widest rounded">High-Trust</span>
                </div>
                <h3 className="font-h3 text-h3 text-text-primary mb-3">Security & Uptime</h3>
                <p className="font-body-md text-body-md text-text-secondary max-w-3xl">
                  Resolved ~90% of a critical security backlog and built alerting systems to prevent storage-driven outages on legacy indexers for a $40M ARR suite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Consumer Software */}
      <section className="mb-24">
        <h2 className="font-h2 text-h2 text-text-primary mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-purple-500"></span>
          Consumer Software
        </h2>
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 group">
            <div className="bg-surface border border-border-subtle rounded-2xl p-10 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-32 md:w-64 md:h-40 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                <span className="material-symbols-outlined text-5xl text-purple-300">shield</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-widest rounded">Consumer</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded">macOS</span>
                  <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded">Browser Extensions</span>
                </div>
                <h3 className="font-h2 text-h3 text-text-primary mb-4">Sterkly: Airo & Safari Extensions</h3>
                <p className="font-body-lg text-body-lg text-text-secondary mb-6 max-w-3xl">
                  Owned delivery for Airo, a macOS security product, and a suite of Safari browser extensions for ad tech. Resolved a certificate distribution bottleneck that had been blocking product distribution, built an in-house procurement workflow, and ran QA across a globally distributed engineering team.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="text-xl font-bold text-primary">$1M–$3M</div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-tighter">Revenue Sustained</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="text-xl font-bold text-primary">~$100</div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-tighter">Saved Per Certificate</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="text-xl font-bold text-primary">3</div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-tighter">Countries Coordinated</div>
                  </div>
                </div>
                <Link to="/work-history" className="flex items-center gap-4 text-primary font-semibold text-decoration-none hover:gap-6 transition-all">
                  <span>Full Story in Work History</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: AI & Automation Lab */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-h2 text-h2 text-text-primary flex items-center gap-4">
            <span className="w-12 h-px bg-green-500"></span>
            AI & Automation Lab
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-widest">Independent Projects</span>
        </div>
        
        <div className="grid grid-cols-12 gap-gutter">
          {/* JobAgent */}
          <div className="col-span-12 group mb-8">
            <div className="bg-surface border border-border-subtle rounded-2xl p-10 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-32 md:w-64 md:h-40 bg-green-50 rounded-2xl flex items-center justify-center shrink-0 shadow-inner overflow-hidden">
                <img src="/images/jobagent.png" alt="Applyr Pipeline UI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded">Automation</span>
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-widest rounded">Agentic Workflows</span>
                </div>
                <h3 className="font-h2 text-h3 text-text-primary mb-4">Applyr</h3>
                <p className="font-body-lg text-body-lg text-text-secondary mb-8 max-w-3xl">
                  Built a deterministic job scouting engine with SQLite and React, turning a manual job hunt into an automated pipeline. This project explores local-first agentic architectures and deterministic gate filtering.
                </p>
                <Link to="/case-study/jobagent" className="bg-primary text-on-primary px-6 py-3 rounded-xl font-manrope font-bold inline-flex items-center gap-2 hover:bg-accent-hover transition-colors text-decoration-none text-sm">
                  Explore Lab Project
                  <span className="material-symbols-outlined text-sm">science</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Leaflet PDF */}
          <div className="col-span-12 group mb-8">
            <div className="bg-surface border border-border-subtle rounded-2xl p-10 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-32 md:w-64 md:h-40 bg-gray-900 rounded-2xl flex items-center justify-center shrink-0 shadow-inner overflow-hidden">
                <img src="/images/leafletpdf.png" alt="Leaflet PDF design system" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded">AI Pipeline</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded">Learning Design</span>
                  <span className="px-2 py-0.5 bg-yellow-50 text-yellow-700 text-[10px] font-bold uppercase tracking-widest rounded">MCP</span>
                </div>
                <h3 className="font-h2 text-h3 text-text-primary mb-4">Leaflet PDF</h3>
                <p className="font-body-lg text-body-lg text-text-secondary mb-8 max-w-3xl">
                  An AI pipeline that transforms raw non-fiction content into structured, typeset reading artifacts. Extracts claims, selects learning formats (BLUF, jargon translation, facts-to-implications, mental buckets), and renders to PDF using a full typographic design system — no API key required.
                </p>
                <Link to="/case-study/leafletpdf" className="bg-primary text-on-primary px-6 py-3 rounded-xl font-manrope font-bold inline-flex items-center gap-2 hover:bg-accent-hover transition-colors text-decoration-none text-sm">
                  Explore Lab Project
                  <span className="material-symbols-outlined text-sm">science</span>
                </Link>
              </div>
            </div>
          </div>

          {/* KinBridge */}
          <div className="col-span-12 group">
            <div className="bg-surface border border-border-subtle rounded-2xl p-10 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-32 md:w-64 md:h-40 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 shadow-inner overflow-hidden">
                <img src="/images/kinbridge.png" alt="KinBridge AI Care UI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded">Voice AI</span>
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-widest rounded">LLM Pipeline</span>
                  <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded">Social Impact</span>
                </div>
                <h3 className="font-h2 text-h3 text-text-primary mb-4">KinBridge</h3>
                <p className="font-body-lg text-body-lg text-text-secondary mb-8 max-w-3xl">
                  A voice messaging and letter generation pipeline for end-of-life communication. Built with ElevenLabs for voice synthesis and an LLM layer for generating meaningful letters.
                </p>
                <Link to="/case-study/kinbridge" className="bg-primary text-on-primary px-6 py-3 rounded-xl font-manrope font-bold inline-flex items-center gap-2 hover:bg-accent-hover transition-colors text-decoration-none text-sm">
                  Explore the Project
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Matrix Section */}
      <section className="mt-32">
        <h2 className="font-h2 text-h2 text-text-primary mb-12">System Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-h3 text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span> Strategy & Leadership
            </h4>
            <ul className="space-y-4 text-text-secondary font-body-md p-0 m-0" style={{ listStyle: 'none' }}>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Platform Stabilization</span> <span className="text-primary font-mono text-xs">Expert</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Migration Strategy</span> <span className="text-primary font-mono text-xs">Expert</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Retention Initiatives</span> <span className="text-primary font-mono text-xs">Expert</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-h3 text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Data Systems
            </h4>
            <ul className="space-y-4 text-text-secondary font-body-md p-0 m-0" style={{ listStyle: 'none' }}>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>SQL / Relational DB</span> <span className="text-green-600 font-mono text-xs">Working Knowledge</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>ETL & Data Integrity</span> <span className="text-green-600 font-mono text-xs">Working Knowledge</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Ingestion Pipelines</span> <span className="text-green-600 font-mono text-xs">Advanced</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-h3 text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Operations
            </h4>
            <ul className="space-y-4 text-text-secondary font-body-md p-0 m-0" style={{ listStyle: 'none' }}>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Security Remediation</span> <span className="text-yellow-600 font-mono text-xs">Advanced</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Infrastructure Health</span> <span className="text-yellow-600 font-mono text-xs">Advanced</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Legacy Tech Debt</span> <span className="text-yellow-600 font-mono text-xs">Expert</span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
