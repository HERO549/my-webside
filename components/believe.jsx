import Image from 'next/image'

export default function Believe() {
  return (
    <section className="relative bg-gradient-to-b from-teal-900 to-teal-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Believe your eyes
            </h2>
            <p className="text-white text-lg opacity-90">
              Let us show you how to work smarter with contracts in Oneflow.
            </p>
            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition">
              Get a demo
            </button>
          </div>

          <div className="relative h-96 order-1 md:order-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4XXpBSm0iyXrQWH3SdbLeKlgJnCQGj.png"
              alt="VR demonstration - Believe your eyes"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
