import { 
  PERSONAL_INFO, METRICS, FOUNDATIONS, SERVICES, 
  PERFORMANCE_METRICS, TOOLCHAIN, RECENT_WINS 
} from "../data";
import { Github, Linkedin, Twitter, Terminal, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="overflow-x-hidden"> 
      <footer className="relative z-10 border-t border-slate-200 bg-white/60 backdrop-blur-xl mt-20">
        <div className="container mx-auto px-6 py-12">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"> 
            
            {/* LEFT SECTION */}
            <div className="col-span-1 md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-md shadow-indigo-200">
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                  {PERSONAL_INFO.name}
                </span>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
                Automating the future, one pipeline at a time. Specializing in cloud-native architectures and developer experience.
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full w-fit border border-emerald-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                All Systems Operational
              </div>
            </div>

            {/* NAVIGATION – NOW IN TWO COLUMNS */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">
                Navigation
              </h4>

              <ul className="grid grid-cols-2 gap-y-4 text-sm font-medium text-slate-500 md:w-44">
                <li><a href="#home" className="hover:text-indigo-600 transition-colors">Home</a></li>
                <li><a href="#capabilities" className="hover:text-indigo-600 transition-colors">Capabilities</a></li>

                <li><a href="#about" className="hover:text-indigo-600 transition-colors">About</a></li>
                <li><a href="#wins" className="hover:text-indigo-600 transition-colors">Wins</a></li>

                <li><a href="#foundations" className="hover:text-indigo-600 transition-colors">Foundations</a></li>
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">
                Connect
              </h4>

              <div className="flex gap-4">
                <a 
                  href="https://github.com/Manish636700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/manish-kumar-mittal-254a16212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a 
                  href="https://x.com/ManishK00080453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-sky-500 hover:text-white transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a
                  href="https://wa.me/6367003811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs font-bold">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
              <span>Built with Next.js</span>
              <Heart className="w-3 h-3 text-red-400 fill-current" />
              <span>& Tailwind</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
