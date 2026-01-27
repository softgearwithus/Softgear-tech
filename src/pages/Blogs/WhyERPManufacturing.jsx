import React from "react";

export default function WhyERPManufacturing() {
  return (
    <main className="bg-gray-50 py-10">
      {/* SEO: FAQ Schema */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why is ERP crucial for manufacturing companies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ERP integrates production, inventory, sales, and finance into one system, improving efficiency, cost control, and visibility."
              }
            },
            {
              "@type": "Question",
              "name": "Is ERP suitable for small and MSME manufacturing units?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, cloud-based ERP solutions are affordable, scalable, and ideal for MSME manufacturing businesses."
              }
            },
            {
              "@type": "Question",
              "name": "What modules does a manufacturing ERP include?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Manufacturing ERP includes production planning, inventory management, BOM, finance, GST, sales, and reporting dashboards."
              }
            }
          ]
        }
        `}
      </script>

      <article className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md px-6 md:px-10 py-10">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Why ERP Is Crucial for Manufacturing Companies
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Published on <time dateTime="2026-01-27">January 27, 2026</time>
          </p>
        </header>

        {/* Intro */}
        <section className="space-y-4 text-gray-700">
          <p>
            Manufacturing businesses today operate in an environment where
            efficiency, accuracy, and speed decide profitability. As production
            volumes increase and operations become more complex, managing
            everything through spreadsheets or disconnected software creates
            bottlenecks.
          </p>
          <p>
            This is where an{" "}
            <strong className="text-gray-900">
              ERP system for manufacturing companies
            </strong>{" "}
            becomes crucial.
          </p>
        </section>

        {/* Challenges */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            The Core Challenges Manufacturing Companies Face Without ERP
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Lack of real-time inventory visibility</li>
            <li>Production delays due to poor planning</li>
            <li>Excess or shortage of raw materials</li>
            <li>Manual errors in billing and reporting</li>
            <li>Difficulty tracking production costs</li>
            <li>GST compliance and audit pressure</li>
          </ul>
        </section>

        {/* What is ERP */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Is an ERP System for Manufacturing?
          </h2>
          <p className="text-gray-700 mb-4">
            An ERP system integrates all core manufacturing operations into a
            single centralized platform, creating a single source of truth.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Production planning and control</li>
            <li>Inventory and raw material management</li>
            <li>Bill of Materials (BOM)</li>
            <li>Purchase and sales orders</li>
            <li>Finance, GST, and compliance</li>
            <li>Reports and dashboards</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Why ERP Is Crucial for Manufacturing Businesses
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                1. Production Planning Becomes Predictable
              </h3>
              <p>
                ERP helps manufacturers plan production based on real demand,
                machine capacity, and material availability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                2. Real-Time Inventory Management
              </h3>
              <p>
                Inventory updates automatically, preventing overstocking and
                production stoppages.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                3. Better Cost Control and Profit Visibility
              </h3>
              <p>
                ERP tracks materials, labor, and overheads to reveal true
                production costs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                4. Data-Driven Decision Making
              </h3>
              <p>
                Real-time dashboards help owners and managers take faster,
                informed decisions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                5. GST and Compliance Made Simple
              </h3>
              <p>
                ERP simplifies GST filing and audit preparation by syncing
                finance and operations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                6. Scalability Without Chaos
              </h3>
              <p>
                ERP systems grow with your business without disrupting existing
                workflows.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                7. Better Coordination Across Departments
              </h3>
              <p>
                ERP removes silos between production, sales, inventory, and
                accounts.
              </p>
            </div>
          </div>
        </section>

        {/* MSME */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Is ERP Suitable for MSME Manufacturing Units?
          </h2>
          <p className="text-gray-700">
            Yes. Modern cloud-based ERP solutions are affordable, flexible, and
            designed specifically for MSME manufacturing businesses.
          </p>
        </section>

        {/* Final */}
        <section className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Final Thoughts
          </h2>
          <p className="text-gray-700">
            ERP is no longer optional. It is the backbone of modern manufacturing.
            Companies that invest in ERP early gain efficiency, clarity, and a
            long-term competitive advantage.
          </p>
        </section>
      </article>
    </main>
  );
}
