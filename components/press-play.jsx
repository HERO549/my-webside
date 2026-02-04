import Image from 'next/image'

export default function PressPlay() {
  return (
    <section className="relative bg-gradient-to-b from-pink-100 to-pink-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-78EcYp5USI7f5V71fmYl3yaxTBe3iH.png"
            alt="Press play - Video preview"
            fill
            className="object-cover"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition cursor-pointer">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition transform">
              <svg className="w-7 h-7 text-teal-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
