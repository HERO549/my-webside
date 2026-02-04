import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-pink-100 to-pink-50 pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Floating Avatar */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-pink-100">
          <div className="flex items-center justify-center gap-1">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">0</div>
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">D</div>
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">S</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
              Work wonders
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Be more effective with smart contracts that make work faster, and life easier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition">
                Get Oneflow free
              </button>
              <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition">
                Take a tour
              </button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-at6Ah6OwRj131CLxQZhyfIqVk7oydB.png"
                alt="Woman sitting with rabbits - Oneflow illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
