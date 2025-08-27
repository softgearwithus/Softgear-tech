import { useState } from "react";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessStage: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultation Booking Submitted:", formData);
    // 👉 Connect this to backend or Google Calendar / email service
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Need <span className="text-indigo-400">guidance</span> on business growth?
        </h1>
        
        {/* Description */}
        <p className="text-center text-gray-200 mb-8">
          Book a free consultation session with our experts today.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter your full name"
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

          {/* Business Stage */}
          <div>
            <label className="block text-gray-300 mb-2">Stage of Business</label>
            <select
              name="businessStage"
              value={formData.businessStage}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            >
              <option value="">Select</option>
              <option value="Idea Stage">Idea Stage</option>
              <option value="Early Stage">Early Stage</option>
              <option value="Growing">Growing</option>
              <option value="Established">Established</option>
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-gray-300 mb-2">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-gray-300 mb-2">Preferred Time</label>
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-gray-300 mb-2">Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Tell us what you’d like to discuss..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl shadow-lg transition-all"
            >
              Book Free Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
