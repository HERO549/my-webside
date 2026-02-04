import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Newsletter CTA */}
        <div className="mb-16 pb-12 border-b border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Get in the flow</h3>
          <p className="text-white/70 mb-6">Get the latest articles straight to your inbox on what keeps your business flowing.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white/10 text-white rounded placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-4">Why Oneflow</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Features</Link></li>
              <li><Link href="#" className="hover:text-white transition">Security</Link></li>
              <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">Guides</Link></li>
              <li><Link href="#" className="hover:text-white transition">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">About us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition">Newsroom</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white transition">Help center</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
              <li><Link href="#" className="hover:text-white transition">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2024 Oneflow AB. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm3.6 10.3h-2.4v7.7h-3V10.3H6.6v-2.6h1.6V6c0-1.3.3-3.3 3.3-3.3h2.6v2.4h-1.9c-.3 0-.5.2-.5.5v1.5h2.4l-.4 2.6z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M19.87 3.54a7.8 7.8 0 01-2.24.61 3.9 3.9 0 001.71-2.15 7.8 7.8 0 01-2.48.95 3.9 3.9 0 00-6.66 3.56A11.1 11.1 0 012.35 2.41a3.9 3.9 0 001.21 5.21 3.87 3.87 0 01-1.77-.49v.05a3.9 3.9 0 003.13 3.82 3.9 3.9 0 01-1.76.07 3.9 3.9 0 003.65 2.71A7.8 7.8 0 01.5 15.52a11.05 11.05 0 006.02 1.76c7.22 0 11.16-5.98 11.16-11.16 0-.17 0-.34-.01-.51a7.95 7.95 0 001.95-2.03z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18.5c-4.7 0-8.5-3.8-8.5-8.5S5.3 1.5 10 1.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5zm3.5-9.5H9V6h1.5v3h1.5v1.5z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
