import { Shield, Zap, Grid3x3, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      <div className="grid-bg absolute inset-0"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <nav className="relative container mx-auto px-6 py-6 z-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 cyber-border rounded-lg pulse-glow">
              <Shield className="h-8 w-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold hologram-text">RAJ AGENCIES</h1>
              <p className="text-xs text-cyan-400">Next-Gen Security Solutions</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">Services</a>
            <a href="#dealer" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">Technology</a>
            <a href="#contact" className="border border-cyan-500/50 hover:border-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-6 py-2 rounded-lg transition-all text-sm">Contact</a>
          </div>
        </div>
      </nav>

      <div className="relative container mx-auto px-6 py-32 z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl">
          <div className="inline-flex items-center space-x-2 cyber-border rounded-full px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Advanced Security Intelligence</span>
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="hologram-text">Next Generation</span>
            <br />
            <span className="text-white">Security Platform</span>
          </h2>

          <p className="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
            Experience cutting-edge surveillance and security systems powered by artificial intelligence, real-time threat detection, and seamless integration across all your facilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#contact" className="group relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity blur"></div>
              <div className="relative px-8 py-4 bg-slate-950 rounded-lg flex items-center space-x-2 group-hover:bg-slate-900 transition-colors">
                <span className="font-semibold">Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a href="#services" className="border-2 border-cyan-500/50 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm text-center hover:bg-cyan-500/10">
              Explore Solutions
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {[
              { icon: Shield, label: 'Military-Grade', value: 'Encryption' },
              { icon: Grid3x3, label: 'AI-Powered', value: 'Analytics' },
              { icon: Zap, label: '24/7', value: 'Monitoring' }
            ].map((item, idx) => (
              <div key={idx} className="cyber-border rounded-lg p-4">
                <item.icon className="h-6 w-6 text-cyan-400 mb-2" />
                <p className="text-xs text-slate-400">{item.label}</p>
                <p className="text-lg font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
