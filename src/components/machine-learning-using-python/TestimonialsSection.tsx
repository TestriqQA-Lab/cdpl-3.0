import ReviewsMarquee from "../sections/ReviewMarque";


export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Join hundreds of successful graduates who have transformed their careers through our comprehensive ML program.
          </p>
        </div>

        <ReviewsMarquee />

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 border border-slate-200 text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">4.8/5</p>
            <p className="text-slate-700 font-semibold">Average Rating</p>
            <p className="text-sm text-slate-600 mt-2">From 500+ students</p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-slate-200 text-center">
            <p className="text-4xl font-bold text-indigo-600 mb-2">500+</p>
            <p className="text-slate-700 font-semibold">Successful Graduates</p>
            <p className="text-sm text-slate-600 mt-2">Placed in top companies</p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-slate-200 text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">100%</p>
            <p className="text-slate-700 font-semibold">Job Assistance</p>
            <p className="text-sm text-slate-600 mt-2">Career support included</p>
          </div>
        </div>

        {/* Review Platforms */}
        <div className="mt-16 text-center">
          <p className="text-slate-700 font-semibold mb-6">
            Verified Reviews on Leading Platforms
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-slate-200">
              <span className="text-2xl">⭐</span>
              <div className="text-left">
                <p className="font-semibold text-slate-900">Google Reviews</p>
                <p className="text-sm text-slate-600">4.8/5 Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-slate-200">
              <span className="text-2xl">⭐</span>
              <div className="text-left">
                <p className="font-semibold text-slate-900">Sulekha Reviews</p>
                <p className="text-sm text-slate-600">5.0/5 Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-slate-200">
              <span className="text-2xl">⭐</span>
              <div className="text-left">
                <p className="font-semibold text-slate-900">Justdial Reviews</p>
                <p className="text-sm text-slate-600">4.8/5 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
