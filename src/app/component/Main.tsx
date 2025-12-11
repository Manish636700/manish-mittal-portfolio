"use client";

import React, { useEffect, useRef, useState, JSX } from "react";
import {
  PERSONAL_INFO,
  METRICS,
  FOUNDATIONS,
  SERVICES,
  PERFORMANCE_METRICS,
  TOOLCHAIN,
  RECENT_WINS,
} from "../data";
// optional icons (keep if used)
import { Github, Linkedin, Twitter, Terminal, Heart, Check, Mail, MapPin } from "lucide-react";

export default function Main(): JSX.Element {
  const pipelines = [
    {
      id: "azure",
      title: "azure-pipeline.yml",
      content: (
        <>
          <span className="text-slate-500"># Azure DevOps Pipeline</span>
          <br />
          <span className="text-purple-400">trigger</span>
          <span className="text-slate-300">:</span>
          <span className="text-yellow-300">
  {`{ branches: ['main'] }`}
</span>


          <br />


          <span className="text-purple-400">pool</span>
          <span className="text-slate-300">:</span>
          <br />
          &nbsp;&nbsp;<span className="text-blue-300">vmImage</span>
          <span className="text-slate-300">:</span>
          <span className="text-green-300">'ubuntu-latest'</span>

          <br />
          <br />

          <span className="text-purple-400">stages</span>
          <span className="text-slate-300">:</span>
          <br />
          <span className="text-slate-300">-</span>
          <span className="text-purple-400">stage</span>
          <span className="text-slate-300">:</span>
          &nbsp;<span className="text-blue-300">Build</span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-400">jobs</span>
          <span className="text-slate-300">:</span>
          <br />
          &nbsp;&nbsp;<span className="text-slate-300">-</span>
          <span className="text-purple-400">job</span>
          <span className="text-slate-300">:</span>
          &nbsp;<span className="text-blue-300">BuildApp</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">steps</span>
          <span className="text-slate-300">:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-300">-</span>
          <span className="text-purple-400">task</span>
          <span className="text-slate-300">:</span>
          &nbsp;<span className="text-blue-300">NodeTool@0</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">inputs</span>
          <span className="text-slate-300">:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">versionSpec</span>
          <span className="text-slate-300">:</span>
          <span className="text-green-300">'20.x'</span>

          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-300">-</span>
          <span className="text-purple-400">script</span>
          <span className="text-slate-300">:</span>
          &nbsp;<span className="text-slate-300">npm ci &amp;&amp; npm test</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">displayName</span>
          <span className="text-slate-300">:</span>
          &nbsp;<span className="text-green-300">'Install &amp; Test'</span>

          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-300">-</span>
          <span className="text-purple-400">script</span>
          <span className="text-slate-300">:</span>
          &nbsp;<span className="text-slate-300">npm run build</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">displayName</span>
          <span className="text-slate-300">:</span>
          &nbsp;<span className="text-green-300">'Build Application'</span>

          <br />
          <br />

          <span className="text-slate-300">-</span>
          <span className="text-purple-400">stage</span>
          <span className="text-slate-300">:</span>
          &nbsp;<span className="text-blue-300">Deploy</span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-400">jobs</span>
          <span className="text-slate-300">:</span>
          <br />
          &nbsp;&nbsp;<span className="text-slate-300">-</span>
          <span className="text-purple-400">deployment</span>
          <span className="text-slate-300">:</span>
          &nbsp;<span className="text-blue-300">DeployToAzure</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">environment</span>
          <span className="text-slate-300">:</span>
          &nbsp;<span className="text-green-300">'production'</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">strategy</span>
          <span className="text-slate-300">:</span>
          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">runOnce</span>
          <span className="text-slate-300">:</span>
          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">deploy</span>
          <span className="text-slate-300">:</span>
          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">steps</span>
          <span className="text-slate-300">:</span>
          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">-</span>
          &nbsp;<span className="text-purple-400">task</span>
          <span className="text-slate-300">:</span>
          &nbsp;<span className="text-blue-300">AzureWebApp@1</span>
          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">inputs</span>
          <span className="text-slate-300">:</span>
          <br />

           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">azureSubscription</span>
           <span className="text-slate-300">:</span>
           &nbsp;<span className="text-green-300">'prod-subscription'</span>
           <br/>
           
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">appName</span>
           <span className="text-slate-300">:</span> 
           &nbsp;<span className="text-green-300">'myapp-prod'</span>
           
           <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">package</span>
           <span className="text-slate-300">:</span>
           &nbsp;<span className="text-green-300">'$(Pipeline.Workspace)/**/*.zip'</span>


        </>
      ),
    },

    {
      id: "github",
      title: "github-actions.yml",
      content: (
    <>
      <div className="p-6 overflow-x-auto text-sm min-h-[220px]">
        <pre className="leading-relaxed">

          <span className="text-slate-500"># GitHub Actions Workflow</span>
          <br />

          <span className="text-purple-400">name</span>
          <span className="text-slate-300">:</span>
          <span className="text-green-300"> CI Pipeline</span>
          <br />

          <span className="text-purple-400">on</span>
          <span className="text-slate-300">:</span>
          <br />
          &nbsp;&nbsp;<span className="text-blue-300">push</span>
          <span className="text-slate-300">:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">branches: ['main']</span>
          <br />
          &nbsp;&nbsp;<span className="text-blue-300">pull_request</span>
          <span className="text-slate-300">:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">branches: ['main']</span>

          <br />
          <br />

          <span className="text-purple-400">jobs</span>
          <span className="text-slate-300">:</span>

          <br />
          &nbsp;&nbsp;<span className="text-purple-400">build</span>
          <span className="text-slate-300">:</span>
          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">runs-on</span>
          <span className="text-slate-300">:</span>
          <span className="text-green-300"> ubuntu-latest</span>

          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">strategy</span>
          <span className="text-slate-300">:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">matrix</span>
          <span className="text-slate-300">:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">node-version</span>
          <span className="text-slate-300">:</span>
          <span className="text-yellow-300"> [18, 20]</span>

          <br />
          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">steps</span>
          <span className="text-slate-300">:</span>

          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span className="text-purple-400">uses</span>
          <span className="text-slate-300">:</span>
          <span className="text-blue-300"> actions/checkout@v3</span>

          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span className="text-purple-400">uses</span>
          <span className="text-slate-300">:</span>
          <span className="text-blue-300"> actions/setup-node@v3</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">with</span>
          <span className="text-slate-300">:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-blue-300">node-version</span>
          <span className="text-slate-300">:</span>
          <span className="text-green-300"> 22</span>

          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span className="text-purple-400">run</span>
          <span className="text-slate-300">:</span>
          <span className="text-slate-300"> npm ci</span>

          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span className="text-purple-400">run</span>
          <span className="text-slate-300">:</span>
          <span className="text-slate-300"> npm test</span>

          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span className="text-purple-400">run</span>
          <span className="text-slate-300">:</span>
          <span className="text-slate-300"> npm run build</span>

          <br />
          <br />

          &nbsp;&nbsp;<span className="text-purple-400">deploy</span>
          <span className="text-slate-300">:</span>
          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">runs-on</span>
          <span className="text-slate-300">:</span>
          <span className="text-green-300"> ubuntu-latest</span>

          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">needs</span>
          <span className="text-slate-300">:</span>
          <span className="text-yellow-300"> build</span>

          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">steps</span>
          <span className="text-slate-300">:</span>
          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span className="text-purple-400">run</span>
          <span className="text-slate-300">:</span>
          <span className="text-slate-300"> echo \"Deploying application...\"</span>

        </pre>
      </div>
    </>
  ),
    },
  ];

  const [index, setIndex] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);
  const delay = 5000;

  useEffect(() => {
    // start interval
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % pipelines.length);
    }, delay);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <main id="home" 
    className="container mx-auto px-6 mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="flex flex-wrap gap-3 text-xs font-semibold">
          <span className="px-3 py-1 bg-indigo-600 text-white rounded-full">CI/CD • IaC • Observability</span>
          <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full">Azure • Bicep • PowerShell</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">By Manish Mittal</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
          Ship better software,<br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 text-transparent bg-clip-text">
            faster with confidence
          </span>
        </h1>

        <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
          I help teams adopt modern DevOps practices—continuous delivery, infrastructure as code, and enterprise-grade
          observability—without slowing developers down. Specialized in Azure cloud infrastructure, Bicep IaC, and
          PowerShell automation.
        </p>

        <div className="flex items-center gap-4">
          <div className="bg-gray-200 rounded-full p-1 flex">
            <div className="bg-blue-600 w-8 h-4 rounded-full" />
            <div className="w-8 h-4" />
            <div className="bg-green-600 w-8 h-4 rounded-full ml-2" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="bg-white p-4 rounded-2xl shadow-lg shadow-indigo-100 border border-slate-100 text-center">
            <div className="text-2xl font-bold text-indigo-600">50%</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Lead time reduction</div>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg shadow-indigo-100 border border-slate-100 text-center">
            <div className="text-2xl font-bold text-indigo-600">&lt; 1h</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Mean time to restore</div>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg shadow-indigo-100 border border-slate-100 text-center">
            <div className="text-2xl font-bold text-indigo-600">99.95%</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Uptime targets</div>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />

        <div className="relative bg-[#0f172a] rounded-xl shadow-2xl overflow-hidden border border-slate-800">
          <div className="bg-[#1e293b] px-4 py-3 flex items-center justify-between border-b border-slate-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="text-xs text-slate-400 font-mono">{pipelines[index].title}</div>
            <div className="w-8" />
          </div>

          <div className="p-6 overflow-x-auto text-sm min-h-[220px]">
            <pre className="leading-relaxed">{pipelines[index].content}</pre>
          </div>

          <div className="px-4 pb-4 flex justify-center gap-2">
            {pipelines.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-opacity ${i === index ? 'opacity-100' : 'opacity-40'}`}
                aria-label={`Show pipeline ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
