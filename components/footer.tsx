import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-400/15 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-green-400/8 rounded-full blur-xl animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-center bg-slate-800/50 rounded-2xl p-8 border border-green-500/20">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h3 className="text-3xl font-bold mb-4 font-serif">Stay Connected</h3>
              <p className="text-gray-300 text-lg mb-6">
                Receive technology insights, architectural best practices, and project updates from our engineering team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                />
                <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                  Subscribe →
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-green-500 shadow-lg shadow-green-500/50">
                  <img src="/female-developer-portrait.png" alt="Sarah - Founder" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">Sarah & Babu</div>
                <div className="text-sm text-green-400 font-medium">
                  Founders, SPC Digital Solutions
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                <span className="text-white font-bold text-sm tracking-wider">SPC</span>
              </div>
              <div>
                <div className="font-bold text-2xl font-serif">SPC Digital Solutions</div>
                <div className="text-green-400 text-sm font-medium">#SPCDigitalSolutions</div>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Transforming complex business challenges into high-performance digital products. Expert web engineering,
              enterprise mobile solutions, and scalable cloud software built for global growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30">
                <span className="text-green-400 font-semibold">📱 Mobile Apps</span>
              </div>
              <div className="bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30">
                <span className="text-green-400 font-semibold">🌐 Web Platforms</span>
              </div>
              <div className="bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30">
                <span className="text-green-400 font-semibold">⚡ Cloud & DevOps</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 font-serif text-green-400">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-green-400 transition-colors cursor-pointer">Web Application Development</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Mobile App Development (iOS/Android)</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Custom Enterprise Software</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Cloud Architecture & AWS</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">UI/UX Design & Prototyping</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">API Integration & Microservices</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 font-serif text-green-400">Get In Touch</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3 hover:text-green-400 transition-colors">
                <span className="text-green-400">📞</span>
                <span>+91 9014084396</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-green-400 transition-colors">
                <span className="text-green-400">✉️</span>
                <span>contact@spcdigitalsolutions.com</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-green-400 transition-colors">
                <span className="text-green-400">🌍</span>
                <span>Global Client Delivery</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-green-400 transition-colors">
                <span className="text-green-400">💼</span>
                <span>Client Projects Welcome</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 SPC Digital Solutions. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-green-400 transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="text-gray-400 hover:text-green-400 transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="text-center mt-6">
            <span className="text-green-400 font-semibold text-lg">Engineering Digital Excellence for Forward-Thinking Businesses</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
