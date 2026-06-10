import { Link } from 'react-router-dom';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-surface-container-low min-h-screen py-12 px-4 print:p-0 print:bg-white">
      {/* Controls - Hidden on Print */}
      <div className="max-w-[8.5in] mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link to="/work-history" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-manrope font-medium text-decoration-none">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Work History
        </Link>
        <button 
          onClick={handlePrint}
          className="bg-primary text-on-primary px-6 py-3 rounded-lg font-manrope font-bold hover:bg-accent-hover transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
        >
          <span className="material-symbols-outlined text-sm">download</span>
          Download / Print PDF
        </button>
      </div>

      {/* Resume Content Area */}
      <div className="max-w-[8.5in] mx-auto bg-white shadow-2xl print:shadow-none min-h-[11in] p-[0.75in] font-serif text-gray-900 overflow-hidden">
        
        {/* Header */}
        <header className="text-center mb-10 border-b-2 border-gray-900 pb-8">
          <h1 className="text-4xl font-bold uppercase tracking-tight mb-3">Jason Taylor</h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 font-sans">
            <span>San Diego, CA</span>
            <span className="text-gray-300">|</span>
            <a href="mailto:jason.wayne.t@gmail.com" className="hover:text-primary">jason.wayne.t@gmail.com</a>
            <span className="text-gray-300">|</span>
            <a href="https://linkedin.com/in/jasonwaynetaylor" className="hover:text-primary">linkedin.com/in/jasonwaynetaylor</a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1 font-sans">Product Manager – Platform & Revenue Systems (B2B SaaS)</h2>
          <p className="text-[11pt] leading-relaxed italic text-gray-700">
            Product Manager with 6+ years of experience owning complex B2B SaaS platforms (~$40M ARR). Specialized in defining product strategy for platform modernization, reducing high-impact churn drivers, and leading cross-functional teams through data-intensive migration and stabilization initiatives. Proven track record defining and executing roadmaps for revenue-bearing legacy systems, prioritizing high-risk stability initiatives, and leading architectural simplifications that eliminate systemic data integrity failures.
          </p>
        </section>

        {/* Core Expertise */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1 font-sans">Core Expertise</h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-[10pt] font-sans font-medium text-gray-800">
            <div className="flex justify-between border-b border-gray-100 pb-1"><span>Platform Strategy & Stabilization</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-1"><span>Data Integrity & Ingestion Systems</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-1"><span>Legacy System Modernization</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-1"><span>Migration Tooling & Sunset Planning</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-1"><span>Stakeholder Management & Alignment</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-1"><span>Capacity Planning & Roadmap Discipline</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-1"><span>Technical-Business Translation</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-1"><span>Agile / Scrum Methodology</span></div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-6 pb-1 font-sans">Professional Experience</h2>

          {/* Cision */}
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-xl font-bold">Cision</h3>
              <span className="text-sm font-bold font-sans">Sept 2021 – Jan 2026</span>
            </div>
            <div className="text-md font-bold text-gray-700 mb-4 font-sans italic uppercase tracking-wide">Product Manager • Platform & Revenue Systems</div>
            
            <p className="text-[10.5pt] leading-relaxed mb-4">
              Defined and executed the product roadmap for Legacy C3 and CPRE, generating approximately $40M in annual recurring revenue across ~3,500 active accounts and ~25,000 users. Directed platform strategy during a multi-year transition while the organization migrated customers to newer systems.
            </p>
            
            <ul className="list-disc ml-5 space-y-2 text-[10pt] leading-relaxed text-gray-800">
              <li><strong>Bellwether Initiative:</strong> Led architectural bypass of legacy ETL pipelines to establish direct GPOD integration, eliminating a 30–40% data drop-off and neutralizing the platform's primary driver of customer churn.</li>
              <li><strong>Platform Ownership:</strong> Integrated C3 with upstream systems (GPOD, UCP) and aligned with enterprise-wide data initiatives (Nexus/EDP) while managing engineering teams of 6–15 engineers.</li>
              <li><strong>Stability & Security:</strong> Resolved ~90% of a 300-item penetration test backlog. Reduced recurring outages tied to DT Search indexing failures through storage monitoring and dead-account cleanup.</li>
              <li><strong>Migration Strategy:</strong> Developed phased voluntary migration tooling that transitioned ~700 high-risk accounts to new platforms while protecting revenue during legacy sunset.</li>
              <li><strong>Premium Content:</strong> Executed licensing-compliant integrations for providers including LexisNexis, NYT, Bloomberg, and Dow Jones/Factiva.</li>
              <li><strong>Prioritization:</strong> Introduced PTO-adjusted capacity modeling and T-shirt sizing with uncertainty bands to stabilize delivery cadences and prevent team burnout.</li>
            </ul>
          </div>

          {/* Sterkly */}
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-xl font-bold">Sterkly Services</h3>
              <span className="text-sm font-bold font-sans">Feb 2019 – Aug 2021</span>
            </div>
            <div className="text-md font-bold text-gray-700 mb-4 font-sans italic uppercase tracking-wide">Product Manager</div>
            <p className="text-[10pt] leading-relaxed text-gray-800">
              Maintained delivery continuity in a technical environment where throughput depended on removing operational bottlenecks. Facilitated requirements sessions, aligned cross-functional stakeholders, and bridged the gap between engineering execution and business constraints.
            </p>
          </div>

          {/* Zero To Sixty */}
          <div className="mb-0">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-xl font-bold">Zero To Sixty Media</h3>
              <span className="text-sm font-bold font-sans">June 2017 – Jan 2019</span>
            </div>
            <div className="text-md font-bold text-gray-700 mb-4 font-sans italic uppercase tracking-wide">Account Manager / Product Owner</div>
            <p className="text-[10pt] leading-relaxed text-gray-800">
              Co-created and improved operational products that automated onboarding and internal fulfillment. Implemented Salesforce automation that saved roughly $22,000 annually and managed vendor contracts for $288,000 in equipment fulfillment.
            </p>
          </div>
        </section>

        {/* Education & Tools */}
        <section className="mt-10 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-8 text-[9pt] font-sans text-gray-600">
            <div>
              <span className="font-bold text-gray-900 uppercase block mb-1">Education & Certifications</span>
              Bachelor of Business Administration — National University <br />
              Certified Scrum Master (Scrum Alliance)
            </div>
            <div>
              <span className="font-bold text-gray-900 uppercase block mb-1">Technical Environment</span>
              SQL, RabbitMQ, Kafka (Architecture), ETL pipelines, DT Search indexing, Jira & Confluence
            </div>
          </div>
        </section>

      </div>
      
      {/* Print Footer Note */}
      <div className="max-w-[8.5in] mx-auto mt-8 text-center text-xs text-text-secondary font-manrope print:hidden">
        Designed to be a "Technical Specs" sheet for professional history. 
        Best viewed as a PDF or printed on standard A4/Letter.
      </div>
    </div>
  );
}
