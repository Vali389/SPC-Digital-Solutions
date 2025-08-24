import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/15 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground font-bold text-xl">V</span>
              </div>
              <div>
                <div className="font-bold text-2xl font-serif">Vali's Tech Hub</div>
                <div className="text-accent text-sm font-medium">#FullStackDeveloper</div>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into digital reality. Expert MERN stack training, professional web development, and
              mobile app solutions for businesses and individuals.
            </p>
            <div className="flex space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <span className="text-accent font-semibold">📱 Mobile Apps</span>
              </div>
              <div className="bg-accent/10 p-3 rounded-lg">
                <span className="text-accent font-semibold">🌐 Websites</span>
              </div>
              <div className="bg-accent/10 p-3 rounded-lg">
                <span className="text-accent font-semibold">🎓 Training</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 font-serif text-accent">Technologies</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-accent transition-colors cursor-pointer">React.js & Next.js</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Node.js & Express</li>
              <li className="hover:text-accent transition-colors cursor-pointer">MongoDB & MySQL</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Python & C/C++</li>
              <li className="hover:text-accent transition-colors cursor-pointer">AWS & Cloud</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Mobile Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 font-serif text-accent">Get In Touch</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3 hover:text-accent transition-colors">
                <span className="text-accent">📞</span>
                <span>+91 9014084396</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-accent transition-colors">
                <span className="text-accent">✉️</span>
                <span>meeravalisk89@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-accent transition-colors">
                <span className="text-accent">🎓</span>
                <span>Free Classes Available</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-accent transition-colors">
                <span className="text-accent">💼</span>
                <span>Client Projects Welcome</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 Vali's Tech Hub. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/about" className="text-gray-400 hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/courses" className="text-gray-400 hover:text-accent transition-colors">
                Courses
              </Link>
              <Link href="/pricing" className="text-gray-400 hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="text-center mt-6">
            <span className="text-accent font-semibold text-lg">Making Technology Accessible to Everyone</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
