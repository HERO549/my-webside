import Image from 'next/image'

export default function Platform() {
  return (
    <section className="bg-gradient-to-b from-white via-pink-50 to-yellow-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The complete platform for smart contracts
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold mt-1">◆</span>
                <div>
                  <h3 className="font-bold text-gray-900">Forget friction</h3>
                  <p className="text-gray-700 text-sm">Reduce the time spent on admin by automating the contract process a complete overview of all your contracts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">◆</span>
                <div>
                  <h3 className="font-bold text-gray-900">Unleash data</h3>
                  <p className="text-gray-700 text-sm">Get insights from your contract data that you never had before</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold mt-1">◆</span>
                <div>
                  <h3 className="font-bold text-gray-900">Take control</h3>
                  <p className="text-gray-700 text-sm">Choose how and when your contracts are managed with Oneflow</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qx1kwy6AweHKAevawtpaC93OH0SYFf.png"
              alt="Platform benefits illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
