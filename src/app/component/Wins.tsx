import { 
  PERSONAL_INFO, METRICS, FOUNDATIONS, SERVICES, 
  PERFORMANCE_METRICS, TOOLCHAIN, RECENT_WINS 
} from "../data";
import { Github, Linkedin, Twitter, Terminal, Heart } from "lucide-react";
import { Check, Mail, MapPin } from "lucide-react";
export default function Wins() {
  return (

    <div className="overflow-x-hidden">
          <section className="container mx-auto px-6 py-24 scroll-mt-20" id="wins">
        <div className="mb-12">
            <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-3">Proof</h3>
            <h2 className="text-4xl font-extrabold text-slate-900">Recent wins</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECENT_WINS.map((win, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${win.color}`}>
                <win.icon className="w-5 h-5" />
              </div>
              {/* UPDATED: Darker text color (text-slate-900) */}
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">{win.title}</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                {win.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
   
  );
}