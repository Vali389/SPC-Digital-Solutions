import { Header } from "@/components/header"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-wide">
              <span className="text-white">asmit</span>
              <span className="text-green-500">ap</span>
              <span className="text-white">atel</span>
            </h1>

            {/* Profile image placeholder */}
            <div className="mb-8 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-500">
                <img src="/professional-woman-stock-market-mentor-portrait.png" alt="Asmita Patel" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">A HIGHLY ADMIRED</h2>
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-wider">STOCK MARKET MENTOR</h2>
            </div>

            <div className="text-xl md:text-2xl text-gray-400 tracking-[0.3em] font-light mb-8">
              A S M I T A &nbsp;&nbsp;&nbsp; P A T E L
            </div>

            <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
              <p>
                A woman who is on a mission to uplift the lives of people, Asmita Patel seeks to empower people with the
                right knowledge when it comes to finance, stock market and investing one's wealth in a responsible and
                mindful manner. Born in a traditional Gujarati family, and embodying strong values and ethics as a
                teacher, she has won numerous awards, for her contribution to thousands of lives. With 17 years of
                trading experience, and 10+ years of teaching experience, Asmita Patel is a thought leader and an
                admired mentor.
              </p>
            </div>
          </div>

          {/* Large stylized name at bottom */}
          <div className="mt-20">
            <h3 className="text-6xl md:text-8xl font-bold text-white opacity-80">Asmit</h3>
            <h3 className="text-6xl md:text-8xl font-bold text-white opacity-80 -mt-4">aPatel</h3>
          </div>
        </div>

        {/* Floating animation elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-green-500 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-green-500 text-xl font-semibold mb-4">Contact Us</h3>
          <a href="mailto:hello@asmitapatel.com" className="text-white hover:text-green-500 transition-colors">
            hello@asmitapatel.com
          </a>
          <div className="mt-8 text-gray-400 text-sm">© 2024 Asmita Patel. All Rights Reserved.</div>
        </div>
      </section>
    </div>
  )
}
