import { useState } from "react";

export default function DetailsPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    problems: "",
    age: "",
    sector: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // 👉 you can connect this to backend or email service
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Want to <span className="text-indigo-400">transform your business</span> with us?
        </h1>
        
        {/* Description */}
        <p className="text-center text-gray-200 mb-8">
          Enter your details — tell us your <strong>business name</strong>, 
          <strong> problems faced</strong>, <strong>age of business</strong>, 
          <strong> sector</strong>, and <strong>contact details</strong>.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Business Name */}
          <div>
            <label className="block text-gray-300 mb-2">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter your business name"
              required
            />
          </div>

          {/* Problems Faced */}
          <div>
            <label className="block text-gray-300 mb-2">Problems Faced</label>
            <textarea
              name="problems"
              value={formData.problems}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Describe the challenges you’re facing"
              required
            />
          </div>

          {/* Age of Business */}
          <div>
            <label className="block text-gray-300 mb-2">Age of Business</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="e.g., 2 years"
              required
            />
          </div>

          {/* Sector */}
          <div>
            <label className="block text-gray-300 mb-2">Sector</label>
            <select
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            >
              <option value="">Select sector</option>
              <option value="IT">IT</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Contact Details */}
          <div>
            <label className="block text-gray-300 mb-2">Contact Details</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Phone or Email"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl shadow-lg transition-all"
            >
              Submit Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
