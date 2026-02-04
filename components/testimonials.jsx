export default function Testimonials() {
  const testimonials = [
    {
      quote: '"With Oneflow, I\'ve been able to reduce the time spent on admin work significantly. Every team member loves the product. We love signing on the line. We save two working days by not sitting on the back."',
      author: 'Markus Johnson',
      role: 'Contract Manager',
      initials: 'MJ',
      color: 'bg-orange-500'
    },
    {
      quote: '"The best Oneflow is 100% digital native. Is so reliable and a complete overview of all your contracts, and everything is so easy and compliance-wise approved."',
      author: 'Lisa Bergström',
      role: 'Chief Legal Officer',
      initials: 'LB',
      color: 'bg-gray-400'
    },
    {
      quote: '"With the Oneflow I'm confident we can meet clients faster and efficiently implement our support for an amazing value in and beyond what we do."',
      author: 'Tor Peterson',
      role: 'Business Director',
      initials: 'TP',
      color: 'bg-blue-600'
    }
  ]

  const integrations = [
    'HubSpot', 'Salesforce', 'Microsoft', 'Zapier', 'Integromat',
    'HubSpot', 'Slack', 'Twilio', 'Mailchimp'
  ]

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Don't just take our word for it...
          </h2>
          <p className="text-muted mb-12">Hear from customers transforming their contract processes</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border border-border">
                <p className="text-foreground mb-6 italic text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-muted text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8">Seamless integration</h3>
          <p className="text-muted mb-8">Integrate your favorite tools with Oneflow - contract workflow and work wonders</p>

          <div className="bg-background border border-border rounded-lg p-12">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
              {integrations.slice(0, 5).map((integration, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white font-bold mb-2 mx-auto">
                    {integration[0]}
                  </div>
                  <p className="text-foreground font-semibold text-sm">{integration}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button className="btn-primary">
                View all integrations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
