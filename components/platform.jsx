import Image from 'next/image'

export default function Platform() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              The complete platform for smart contracts
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">◆</span>
                <div>
                  <h3 className="font-bold text-foreground">Forget friction</h3>
                  <p className="text-muted text-sm">Reduce the time spent on admin by automating the contract process a complete overview of all your contracts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">◆</span>
                <div>
                  <h3 className="font-bold text-foreground">Unleash data</h3>
                  <p className="text-muted text-sm">Get insights from your contract data that you never had before</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">◆</span>
                <div>
                  <h3 className="font-bold text-foreground">Take control</h3>
                  <p className="text-muted text-sm">Choose how and when your contracts are managed with Oneflow</p>
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
