import Image from 'next/image'

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-teal-900 to-teal-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center mb-16">
          <p className="text-white text-sm md:text-base font-medium mb-8">
            Join these companies making business flow
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {['Salesforce', 'TELE2', 'Handelsbanken', 'Aurubis', 'Experty', 'Hyresbörsen', 'AstraCos'].map((company) => (
              <div key={company} className="text-white text-xs md:text-sm font-semibold opacity-60">
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Main Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Turn <br /> signatures <br /> into smart <br /> contracts
            </h2>
            <p className="text-white text-lg opacity-90">
              Experience the contract magic by automating the entire contract process — from creating to signing and managing.
            </p>
            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition">
              Take our product tour
            </button>
          </div>

          <div className="relative h-96">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vsYVTfN5V783GkgP8N1oFIVuSZCyNN.png"
              alt="Smart contracts interface - Oneflow"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
