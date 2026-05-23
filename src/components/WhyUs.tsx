import { ShieldCheck, Target } from "lucide-react";


const WhyUs = () => {
  return <section id="why-us" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Why Choose <span className="text-blue-400">Exepath</span></h2>
              <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-8"></div>
              <p className="text-xl text-slate-300 leading-relaxed mb-10 font-light">
                At Exepath, we believe sustainable growth is built on a foundation of solid principles. We are dedicated to transforming potential into measurable success.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Clarity', 'Structure', 'Systems', 'Accountability', 'Disciplined Execution'].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-semibold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative w-full">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="relative z-10 w-full h-full bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl">
                  <div className="w-24 h-24 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                     <Target className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">The Exepath Formula</h3>
                  <p className="text-slate-400 text-lg">
                    Moving you from scattered effort to structured progress and measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
};

export default WhyUs;
