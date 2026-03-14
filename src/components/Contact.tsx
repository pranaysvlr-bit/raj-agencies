import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="hologram-text">Secure Your</span>
            <br />
            <span className="text-white">Future Today</span>
          </h2>
          <p className="text-lg text-slate-300">
            Get in touch with our security experts for a personalized consultation and advanced threat assessment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="cyber-border rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

              {submitted && (
                <div className="mb-6 cyber-border bg-cyan-500/10 text-cyan-300 px-6 py-4 rounded-xl border-cyan-500/50">
                  Message received! Our security team will respond within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-3">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-3">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-3">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-3">Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    >
                      <option value="" className="bg-slate-900">Select a service</option>
                      <option value="cctv" className="bg-slate-900">CCTV Installation</option>
                      <option value="biometric" className="bg-slate-900">Biometric Systems</option>
                      <option value="sensors" className="bg-slate-900">Sensors & Access Control</option>
                      <option value="computers" className="bg-slate-900">Computers & Accessories</option>
                      <option value="apple" className="bg-slate-900">Apple Products</option>
                      <option value="it-solutions" className="bg-slate-900">IT Solutions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                    placeholder="Describe your security requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity blur disabled:opacity-50"></div>
                  <div className="relative px-8 py-4 bg-slate-950 rounded-lg flex items-center justify-center space-x-2 w-full group-hover:bg-slate-900 transition-colors disabled:opacity-50">
                    {isSubmitting ? (
                      <span className="font-semibold">Processing...</span>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span className="font-semibold">Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="cyber-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-cyan-500/20 p-3 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/40 transition-colors">
                    <Phone className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">+91 98765 43210</p>
                    <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-cyan-500/20 p-3 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/40 transition-colors">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">info@rajagencies.com</p>
                    <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">sales@rajagencies.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-cyan-500/20 p-3 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/40 transition-colors">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Address</p>
                    <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">
                      123 Business District<br />
                      Your City, State - 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-cyan-500/20 p-3 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/40 transition-colors">
                    <Clock className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Business Hours</p>
                    <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">Monday - Saturday</p>
                    <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-border rounded-2xl p-8 hover:border-cyan-400/60 hover:bg-cyan-500/5 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Emergency Hotline</h3>
              <p className="text-slate-300 mb-6">
                24/7 response team for critical security incidents and urgent system failures.
              </p>
              <a href="tel:+919876543210" className="group relative inline-flex items-center justify-center w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                <div className="relative px-6 py-3 bg-slate-950 rounded-lg w-full text-center font-semibold text-white group-hover:bg-slate-900 transition-colors">
                  Call Emergency Line
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
