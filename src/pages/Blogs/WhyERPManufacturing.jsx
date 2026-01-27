import React from "react";
import image from "../../assets/erp-manufacturing.jpeg";
import { Link } from "react-router-dom";
export default function WhyERPManufacturing() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is ERP crucial for manufacturing companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ERP integrates production, inventory, sales, and finance into one system, improving efficiency, visibility, and cost control.",
        },
      },
      {
        "@type": "Question",
        name: "How does ERP help manufacturing businesses improve efficiency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ERP automates production planning, tracks inventory in real time, reduces manual errors, and improves coordination across departments.",
        },
      },
      {
        "@type": "Question",
        name: "Is ERP suitable for small and MSME manufacturing units?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, modern cloud-based ERP systems are cost-effective, scalable, and ideal for MSME manufacturing units.",
        },
      },
      {
        "@type": "Question",
        name: "What are the key modules of an ERP system for manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Production planning, inventory management, BOM, purchase and sales, finance, GST, and reporting dashboards.",
        },
      },
      {
        "@type": "Question",
        name: "What problems do manufacturers face without ERP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manufacturers face inventory issues, production delays, cost visibility problems, manual errors, and scaling difficulties.",
        },
      },
    ],
  };

  return (
    <main className="bg-gray-50 py-10">
      {/* SEO FAQ Schema */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

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

        <Link
          to="/intouch"
          className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-base shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Contact Us
        </Link>

        {/* Hero Image */}
        <div className="mb-8">
          <img
            src={image}
            alt="ERP system for manufacturing companies"
            className="w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>

        {/* Intro */}
        <section className="space-y-4 text-gray-700">
          <p>
            Manufacturing businesses today operate in an environment where
            efficiency, accuracy, and speed decide profitability. As production
            volumes increase and operations become more complex, managing
            everything through spreadsheets, manual registers, or disconnected
            software creates bottlenecks.
          </p>
          <p>
            This is where an{" "}
            <strong className="text-gray-900">
              ERP system for manufacturing companies
            </strong>{" "}
            becomes crucial.
          </p>
          <p>
            ERP (Enterprise Resource Planning) is no longer limited to large
            enterprises. Today, manufacturing ERP software is essential for
            small, medium, and growing manufacturing businesses seeking control,
            visibility, and scalable growth.
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
            <li>Stress during audits and GST compliance</li>
          </ul>
          <p className="mt-4 text-gray-700">
            When data is scattered across departments, decision-making becomes
            reactive instead of planned, directly impacting margins and customer
            satisfaction.
          </p>
        </section>

        {/* What is ERP */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Is an ERP System for Manufacturing?
          </h2>
          <p className="text-gray-700 mb-4">
            An ERP system for manufacturing integrates all core business
            functions into one centralized platform, connecting operations in
            real time.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Production planning and control</li>
            <li>Inventory and raw material management</li>
            <li>Bill of Materials (BOM)</li>
            <li>Purchase and sales orders</li>
            <li>Finance, GST, and compliance</li>
            <li>Reporting and dashboards</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Why ERP Is Crucial for Manufacturing Businesses
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900">
                1. Production Planning Becomes Predictable
              </h3>
              <p>
                ERP enables production planning based on actual orders, material
                availability, and capacity.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                2. Real-Time Inventory Management
              </h3>
              <p>
                Stock updates automatically, helping avoid overstocking and
                production stoppages while maintaining optimal reorder levels.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                3. Better Cost Control and Profit Visibility
              </h3>
              <p>
                ERP tracks materials, labor, and overheads to calculate accurate
                cost per unit and margins.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                4. Improved Decision-Making Through Data
              </h3>
              <p>
                Real-time dashboards allow faster, data-driven decisions instead
                of assumptions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                5. Seamless Compliance and GST Management
              </h3>
              <p>
                ERP simplifies GST reporting and audit preparation by syncing
                finance and operations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                6. Scalability Without Operational Chaos
              </h3>
              <p>
                ERP systems scale with the business as new products, suppliers,
                or locations are added.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                7. Better Coordination Across Departments
              </h3>
              <p>
                ERP removes silos, ensuring everyone works on the same real-time
                data.
              </p>
            </div>
          </div>
        </section>

        {/* MSME */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Is ERP Suitable for Small and MSME Manufacturing Units?
          </h2>
          <p className="text-gray-700 mb-3">
            Yes. Modern cloud-based ERP solutions are affordable, flexible, and
            easy to implement.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Lower operational costs</li>
            <li>Better planning and control</li>
            <li>Reduced manual dependency</li>
            <li>Faster response to customer demand</li>
          </ul>
        </section>

        {/* Choosing ERP */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Choosing the Right ERP for Manufacturing
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Aligns with your production workflow</li>
            <li>Supports inventory and BOM management</li>
            <li>Integrates finance and GST</li>
            <li>Scalable and customizable</li>
            <li>Implemented by manufacturing experts</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Final Thoughts
          </h2>
          <p className="text-gray-700">
            ERP is more than software—it is the backbone of modern
            manufacturing. Businesses that invest in ERP early will not only
            survive but lead in the years to come.
          </p>
        </section>
      </article>
    </main>
  );
}
