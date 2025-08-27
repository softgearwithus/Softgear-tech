import { useState } from "react";

export default function CompliancePage() {
  const [formData, setFormData] = useState({
    founderName: "",
    companyName: "",
    email: "",
    phone: "",
    registrationType: "",
    services: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedServices = [...formData.services];
      if (checked) {
        updatedServices.push(value);
      } else {
        updatedServices = updatedServices.filter((s) => s !== value);
      }
      setFormData({ ...formData, services: updatedServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Compliance Form Submitted:", formData);
    // 👉 Connect this to backend/email service
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Starting a <span className="text-indigo-400">new company?</span>
        </h1>
        
        {/* Description */}
        <p className="text-center text-gray-200 mb-8">
          Your compliances, our responsibility.  
          From <strong>Startup India</strong> to <strong>yearly compliance</strong> & 
          <strong> company incorporation</strong> — we’ve got you covered.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Founder Name */}
          <div>
            <label className="block text-gray-300 mb-2">Founder Name</label>
            <input
              type="text"
              name="founderName"
              value={formData.founderName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-gray-300 mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter your company name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-300 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Registration Type */}
          <div>
            <label className="block text-gray-300 mb-2">Type of Registration</label>
            <select
              name="registrationType"
              value={formData.registrationType}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            >
              <option value="">Select</option>
              <option value="Private Limited">Private Limited</option>
              <option value="LLP">LLP</option>
              <option value="OPC">OPC</option>
              <option value="Partnership">Partnership</option>
              <option value="Proprietorship">Proprietorship</option>
              <option value="NGO/Trust">NGO / Trust</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Services Required */}
          <div>
            <label className="block text-gray-300 mb-2">Services Required</label>
            <div className="grid grid-cols-2 gap-3 text-gray-200">
              {["Company Incorporation", "GST Registration", "Trademark", "Startup India", "Annual Compliance"].map(
                (service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="accent-indigo-500"
                    />
                    {service}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Extra Message */}
          <div>
            <label className="block text-gray-300 mb-2">Additional Details (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Tell us more about your needs..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl shadow-lg transition-all"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
