"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "../data";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });


  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Name, email and message are required.");
      return;
    }

    if (!validateEmail(form.email)) {
      alert("Enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent - thank you!");
        setForm({
          name: "",
          email: "",
          company: "",
          website: "",
          message: "",
        });
      } else {
        const data = await res.json();
        alert("Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("Network error: try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <section className="container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start scroll-mt-20" id="contact">
        <div>
          <div className="mb-10">
            <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-3">Let's Talk</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Tell me about your goals</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8 font-medium">
              Whether you're starting your DevOps journey or leveling up a mature platform, I can help.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email</div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-indigo-600 font-bold hover:underline text-lg">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Based in</div>
                <div className="text-slate-900 font-bold text-lg">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-indigo-100/40 border border-slate-100">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-500 outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-500"
                placeholder="Your name *"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-500 outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-500"
                placeholder="Work email *"
              />
            </div>

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              type="text"
              className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-500 outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-500"
              placeholder="Company"
            />

            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              type="text"
              className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-500 outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-500"
              placeholder="Website (optional)"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-500 outline-none transition text-sm resize-none font-medium text-slate-900 placeholder:text-slate-500"
              placeholder="What are you trying to achieve?"
            ></textarea>

            <div className="flex justify-between items-center pt-2">
              <span className="text-slate-400 text-xs font-bold">
                I'll never share your info.
              </span>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-bold transition shadow-lg shadow-indigo-200"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
