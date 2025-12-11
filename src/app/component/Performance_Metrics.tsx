import { 
  PERSONAL_INFO, METRICS, FOUNDATIONS, SERVICES, 
  PERFORMANCE_METRICS, TOOLCHAIN, RECENT_WINS 
} from "../data";
import { Github, Linkedin, Twitter, Terminal, Heart } from "lucide-react";
import { Check, Mail, MapPin } from "lucide-react";

export default function Performance_Metrics() {
  return (

    <div className="overflow-x-hidden">
         <section className="container mx-auto px-6 py-24 scroll-mt-20">
            <div className="mb-12 text-center md:text-left">
               <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-3">Performance</h3>
               <h2 className="text-4xl font-extrabold text-slate-900">Key DevOps Metrics</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {PERFORMANCE_METRICS.map((metric, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm p-6 text-center border border-indigo-50">
                  <div className="text-4xl font-black text-indigo-600">{metric.value}</div>
                  <div className="text-sm font-bold text-slate-600 mt-2">{metric.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 text-sm max-w-3xl mx-auto leading-relaxed font-medium">
                These DORA (DevOps Research and Assessment) metrics are targets high-performing teams achieve.
            </p>
          </section>
    </div>
    

  );
}