import React from "react";
import { Link } from "react-router-dom";

export default function EcommerceWebsiteDesignerMohali() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to build an ecommerce website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Most ecommerce websites take 2–4 weeks depending on features, platform, and product count."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build Shopify ecommerce websites in Mohali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, we specialize in Shopify ecommerce website design and development in Mohali."
        }
      },
      {
        "@type": "Question",
        "name": "Will my ecommerce website be SEO-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, all our ecommerce websites are built using SEO best practices for better Google rankings."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide support after website launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, we offer post-launch support, maintenance, and training."
        }
      }
    ]
  };

  return (
    <main className="bg-gray-50 py-10">
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <article className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md px-6 md:px-12 py-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Ecommerce Website Designer in Mohali | Shopify & Custom Stores
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl">
            Looking for a professional ecommerce website designer in Mohali to
            build a powerful online store for your business? We design
            high-performance ecommerce websites that help businesses in Mohali,
            Chandigarh, and Punjab sell more online.
          </p>
        </header>

        {/* Intro */}
        <section className="space-y-4 text-gray-700">
          <p>
            From Shopify ecommerce stores to custom ecommerce website
            development, we deliver secure, fast, and conversion-focused
            solutions tailored to your business goals.
          </p>
        </section>

        {/* Trust Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Trusted Ecommerce Website Design Company in Mohali
          </h2>
          <p className="text-gray-700 mb-4">
            As a leading ecommerce website development company in Mohali, we
            help startups, retailers, manufacturers, and service providers
            launch scalable online stores that attract customers and generate
            revenue.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Easy to manage</li>
            <li>Optimized for Google</li>
            <li>Built for long-term growth</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Why Choose Us as Your Ecommerce Website Designer in Mohali?
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Local Mohali-based team</li>
            <li>✔ SEO-optimized ecommerce websites</li>
            <li>✔ Mobile-first design approach</li>
            <li>✔ Secure payment gateway integration</li>
            <li>✔ Transparent pricing</li>
            <li>✔ Post-launch support & training</li>
          </ul>
        </section>

        {/* Platforms */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Ecommerce Platforms We Specialize In
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900">
                Shopify Ecommerce Development
              </h3>
              <p>
                Perfect for startups and fast-growing businesses. Custom Shopify
                stores optimized for conversions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                WooCommerce Ecommerce Websites
              </h3>
              <p>
                Flexible, scalable, and SEO-friendly WooCommerce solutions for
                WordPress businesses.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Custom Ecommerce Website Development
              </h3>
              <p>
                Tailor-made ecommerce solutions with advanced features and
                integrations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Headless & API-Based Ecommerce
              </h3>
              <p>
                High-performance ecommerce for brands needing speed and complex
                integrations.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Ecommerce Website Development Process
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Business & Requirement Analysis</li>
            <li>UX/UI Ecommerce Website Design</li>
            <li>Development & Feature Integration</li>
            <li>Payment Gateway & Shipping Setup</li>
            <li>Testing, Launch & SEO Setup</li>
          </ol>
        </section>

        {/* Features */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Features Included in Our Ecommerce Websites
          </h2>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
            <li>Mobile-responsive design</li>
            <li>Fast loading speed</li>
            <li>Secure payment gateways</li>
            <li>Product & inventory management</li>
            <li>Order & customer management</li>
            <li>SEO-friendly structure</li>
            <li>WhatsApp & live chat integration</li>
            <li>Google Analytics & Search Console</li>
          </ul>
        </section>

        {/* Pricing */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ecommerce Website Design Cost in Mohali
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>Basic Ecommerce Website – ₹25,000 onwards</li>
            <li>Professional Shopify Store – ₹45,000 onwards</li>
            <li>Advanced Custom Ecommerce – ₹75,000 onwards</li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            Final pricing depends on products, integrations, and custom features.
          </p>
        </section>

        {/* Locations */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ecommerce Website Designer Near You in Mohali
          </h2>
          <p className="text-gray-700">
            We serve businesses across Mohali, Chandigarh, Panchkula, Zirakpur,
            Punjab, and nearby regions.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-14 text-center border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Start Your Ecommerce Website Today
          </h2>
          <p className="text-gray-700 mb-6">
            Let’s build an ecommerce website that delivers real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Get Free Ecommerce Consultation
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              Call / WhatsApp Us
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
