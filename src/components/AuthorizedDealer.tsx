import { BadgeCheck, Award, Users, Wrench } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Wrench, value: '1000+', label: 'Installations' },
  { icon: BadgeCheck, value: '100%', label: 'Satisfaction' }
];

const expertise = [
  'Complete range of Hikvision IP & Analog cameras',
  'NVR/DVR systems with advanced analytics',
  'Professional installation and commissioning',
  'Comprehensive after-sales support',
  'Genuine products with manufacturer warranty',
  'Custom surveillance solutions design'
];

export default function AuthorizedDealer() {
  return (
    <section id="dealer" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 cyber-border rounded-full px-4 py-2 mb-8">
              <BadgeCheck className="h-5 w-5 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-semibold">Authorized Partner</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="hologram-text">Hikvision</span>
              <br />
              <span className="text-white">Next-Gen Platform</span>
            </h2>

            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              As an authorized Hikvision dealer, Raj Agencies brings cutting-edge surveillance technology with AI-powered analytics, real-time threat detection, and enterprise-grade security infrastructure.
            </p>

            <div className="space-y-4 mb-10">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                  <div className="mt-1 bg-cyan-500/20 rounded-full p-1 group-hover:bg-cyan-500/40 transition-colors border border-cyan-500/30">
                    <BadgeCheck className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-cyan-300 transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div className="cyber-border rounded-xl p-6 hover:border-cyan-400/60 hover:bg-cyan-500/5 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg border border-cyan-500/30">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Why Hikvision?</h3>
                  <p className="text-cyan-400 text-sm">Global leader in visual security</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Hikvision leads the industry with innovative AI technology, superior image quality, and robust reliability. Comprehensive security coverage for any application with enterprise support.
              </p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-border rounded-xl p-6 text-center group hover:border-cyan-400/60 hover:bg-cyan-500/5 transition-all hover:scale-105">
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-4 group-hover:text-cyan-300 transition-colors" />
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="relative cyber-border rounded-xl p-8 overflow-hidden group hover:border-cyan-400/60 hover:bg-cyan-500/5 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-blue-600/0 group-hover:from-cyan-600/10 group-hover:to-blue-600/10 transition-all"></div>
              <div className="relative z-10 text-center">
                <p className="text-2xl font-bold text-white mb-3">Trusted by Leaders</p>
                <p className="text-cyan-400">Industries • Retail • Education • Healthcare</p>
                <div className="mt-6 flex justify-center space-x-4 text-3xl font-bold text-slate-500">
                  <span className="text-cyan-500">█</span>
                  <span className="text-slate-700">█</span>
                  <span className="text-cyan-500">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
