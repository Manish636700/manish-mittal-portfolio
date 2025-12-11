import { 
  PERSONAL_INFO, METRICS, FOUNDATIONS, SERVICES, 
  PERFORMANCE_METRICS, TOOLCHAIN, RECENT_WINS 
} from "../data";
import { Github, Linkedin, Twitter, Terminal, Heart } from "lucide-react";
import { Check, Mail, MapPin } from "lucide-react";

export default function Toolchain() {
  return (

    <div className="overflow-x-hidden">
        <section className="container mx-auto px-6 py-24 scroll-mt-20" id="toolchain">
            <div className="mb-12">
              <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-3">Ecosystem</h3>
              <h2 className="text-4xl font-extrabold text-slate-900">Toolchain I love</h2>
            </div>
            <div className="space-y-10">
              {Object.entries(TOOLCHAIN).map(([category, tools]) => (
                <div key={category}>
                  {/* UPDATED: Darker sub-headers */}
                  <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-4">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                  <div className="flex flex-wrap gap-3">
                    {tools.map((tool) => (
                      <span key={tool} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold shadow-sm border border-indigo-100">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
    </div>
    
  );
}