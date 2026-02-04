import Image from 'next/image'

export default function Resources() {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              And for our next trick...
            </h2>
            <button className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded text-sm hover:bg-yellow-500 transition">
              Get it free
            </button>
          </div>

          {/* Featured Guide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-pink-100 rounded-lg p-8 space-y-4">
              <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center text-white font-bold">
                📄
              </div>
              <h3 className="text-xl font-bold text-gray-900">A Basic Guide on E-signatures and What Makes Them Legally Binding</h3>
              <p className="text-gray-700 text-sm">13 min read</p>
            </div>

            {/* Guide Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-b from-teal-600 to-teal-700 rounded-lg p-8 text-white space-y-4">
                <h3 className="text-xl font-bold">50 documents you can sign online in 2025</h3>
                <button className="px-4 py-2 bg-white text-teal-700 font-semibold rounded text-sm hover:bg-gray-100 transition">
                  Read article
                </button>
              </div>
              <div className="bg-gradient-to-b from-pink-300 to-pink-400 rounded-lg p-8 space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Master digital sales: How to close deals without touching hands</h3>
                <button className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded text-sm hover:bg-yellow-500 transition">
                  Get it free
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* More From Oneflow */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">More from Oneflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-b from-pink-200 to-pink-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="relative h-48 bg-pink-300 flex items-center justify-center">
                <span className="text-4xl">🐰</span>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900">E-signature of ownership</h4>
              </div>
            </div>
            <div className="bg-gradient-to-b from-teal-600 to-teal-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition text-white">
              <div className="p-8 space-y-4">
                <h4 className="text-2xl font-bold">Sweco</h4>
                <p className="text-teal-100">Customer success story</p>
                <button className="px-4 py-2 bg-white text-teal-700 font-semibold rounded text-sm hover:bg-gray-100 transition">
                  Read story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
