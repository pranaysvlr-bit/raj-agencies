import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-cyan-500/20">
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                <Shield className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold hologram-text">Raj Agencies</h3>
                <p className="text-xs text-cyan-400">Security Intelligence Platform</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Next-generation security solutions combining AI-powered surveillance, biometric access control, and integrated threat intelligence.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500/30 p-2 rounded-lg transition-all text-cyan-400 hover:text-cyan-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500/30 p-2 rounded-lg transition-all text-cyan-400 hover:text-cyan-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500/30 p-2 rounded-lg transition-all text-cyan-400 hover:text-cyan-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500/30 p-2 rounded-lg transition-all text-cyan-400 hover:text-cyan-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Solutions</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  CCTV Installation
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Biometric Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Access Control
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Computers & Accessories
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Apple Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  IT Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Industries We Serve</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-cyan-400 transition-colors cursor-default">Industrial Plants</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Jewelry Stores</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Educational Institutions</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Retail Outlets</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Commercial Complexes</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Healthcare Facilities</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Government Offices</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Residential Complexes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <Phone className="h-5 w-5 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <div className="text-sm">
                  <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">+91 98765 43210</p>
                  <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">+91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="h-5 w-5 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <div className="text-sm">
                  <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">info@rajagencies.com</p>
                  <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">sales@rajagencies.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <div className="text-sm">
                  <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">
                    123 Business District<br />
                    Your City, State - 400001<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} Raj Agencies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Warranty Information
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-slate-500 text-xs">
              Authorized Dealer of Hikvision | Next-Generation Security Solutions Provider
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
