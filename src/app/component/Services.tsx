import { 
  PERSONAL_INFO, METRICS, FOUNDATIONS, SERVICES, 
  PERFORMANCE_METRICS, TOOLCHAIN, RECENT_WINS 
} from "../data";
import { Github, Linkedin, Twitter, Terminal, Heart } from "lucide-react";
import { Check, Mail, MapPin } from "lucide-react";

export default function Services() {
  return (

    <div className="overflow-x-hidden"> 
    <section className="container mx-auto px-8 pb-28 pt-32 scroll-mt-20" id="capabilities">
            <div className="mb-12">
              <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-3">Services</h3>
              <h2 className="text-4xl font-extrabold text-slate-900">What I deliver</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <div key={i} className="bg-indigo-50/50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors duration-300">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm border border-indigo-50">
                    <service.icon className="w-6 h-6" />
                  </div>
                  {/* UPDATED: Darker text color (text-slate-900) */}
                  <h3 className="text-lg font-extrabold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>
          </div>
    

  );
}