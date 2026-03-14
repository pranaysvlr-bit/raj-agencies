import { Camera, Fingerprint, Monitor, Laptop, Smartphone, Network } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'CCTV Installation',
    description: 'Professional surveillance systems for industrial plants, jewelry stores, schools, retail outlets, and commercial complexes with 24/7 monitoring capabilities.',
    features: ['HD & 4K Cameras', 'Night Vision', 'Remote Monitoring', 'Cloud Storage']
  },
  {
    icon: Fingerprint,
    title: 'Biometric Systems',
    description: 'Advanced biometric access control solutions including fingerprint scanners, face recognition, and attendance management systems.',
    features: ['Fingerprint Scanners', 'Face Recognition', 'Time Attendance', 'Access Control']
  },
  {
    icon: Network,
    title: 'Sensors & Access Control',
    description: 'Comprehensive sensor installation including motion detectors, door sensors, fire alarms, and integrated security solutions.',
    features: ['Motion Sensors', 'Door Contacts', 'Fire Alarms', 'Smart Integration']
  },
  {
    icon: Monitor,
    title: 'Computers & Accessories',
    description: 'Complete range of desktop computers, laptops, peripherals, and networking equipment for business and personal use.',
    features: ['Desktop PCs', 'Peripherals', 'Networking', 'Enterprise Solutions']
  },
  {
    icon: Smartphone,
    title: 'Apple Products',
    description: 'Authorized dealer of Apple products including iPhones, iPads, MacBooks, and accessories with warranty support.',
    features: ['iPhones', 'iPads', 'MacBooks', 'Accessories']
  },
  {
    icon: Laptop,
    title: 'IT Solutions',
    description: 'End-to-end IT infrastructure setup, maintenance, and support services for businesses of all sizes.',
    features: ['System Setup', 'Network Config', 'IT Support', 'Maintenance']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="hologram-text">Advanced Solutions</span>
          </h2>
          <p className="text-lg text-slate-400">
            Comprehensive security and technology systems powered by cutting-edge AI and real-time intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cyber-border rounded-xl p-6 hover:border-cyan-400/60 hover:bg-cyan-500/5 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 to-blue-600/0 group-hover:from-cyan-600/10 group-hover:to-blue-600/10 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="bg-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/40 transition-colors border border-cyan-500/30">
                  <service.icon className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-cyan-500/20">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-cyan-400 text-sm font-semibold flex items-center">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
