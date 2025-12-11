import { 
  PERSONAL_INFO, METRICS, FOUNDATIONS, SERVICES, 
  PERFORMANCE_METRICS, TOOLCHAIN, RECENT_WINS 
} from "../data";

import { Github, Linkedin, Twitter, Terminal, Heart, Check, Mail, MapPin } from "lucide-react";

export default function Foundations() {
  return (
    <section
      id="foundations"
      className="scroll-mt-40 w-full py-18"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="mb-12">
          <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-3">
            Foundations
          </h3>
          <h2 className="text-4xl font-extrabold text-slate-900">
            What is DevOps?
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FOUNDATIONS.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm 
              hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <item.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
