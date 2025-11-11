import { Star } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    rating: number;
    quote: string;
    avatar: string;
}

export default function TestimonialsSection() {
    const testimonials: Testimonial[] = [
        {
            name: "Arun Venu Panickar",
            role: "Software Testing Professional",
            rating: 5,
            quote: "It is a great institute to learn software testing. Our mentor Shoeb Sir is a great person, he helps you to understand concepts in a simple manner. Thank you.",
            avatar: "AV",
        },
        {
            name: "Faiz Khan",
            role: "Data Analyst",
            rating: 5,
            quote: "Everything about this course is great! From the comprehensive content to the engaging delivery, it's been an enlightening journey.",
            avatar: "FK",
        },
        {
            name: "Kishore Jha",
            role: "Analytics Professional",
            rating: 5,
            quote: "This course is designed in an efficient and effective manner. The instructor is excellent and under his guidance I was able to learn a lot of new things.",
            avatar: "KJ",
        },
        {
            name: "Krutika Penkar",
            role: "Certified Data Professional",
            rating: 5,
            quote: "I completed the certification course from Cinute Digital. The course is well organized. Thank you Cinute.",
            avatar: "KP",
        },
        {
            name: "Ragini Kumari",
            role: "Data Science Student",
            rating: 5,
            quote: "Best training institute for learning. It has the best skilled faculty in my experience and they have placed me in a good company.",
            avatar: "RK",
        },
        {
            name: "Dakshali Merya",
            role: "Analytics Graduate",
            rating: 5,
            quote: "The instructor is highly skilled and the concepts are well comprehended. I recommend this institute to anyone serious about data analytics.",
            avatar: "DM",
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                        Student <span className="text-orange-600">Testimonials</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Hear from our successful graduates who have transformed their careers through our comprehensive data analytics program.
                    </p>
                </div>

                {/* Rating Summary */}
                <div className="flex justify-center items-center gap-8 mb-16">
                    <div className="text-center">
                        <p className="text-5xl font-bold text-slate-900">4.8</p>
                        <div className="flex gap-1 mt-2 justify-center">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                            ))}
                        </div>
                        <p className="text-sm text-slate-600 mt-2">Average Rating</p>
                    </div>
                    <div className="w-px h-16 bg-slate-300"></div>
                    <div className="text-center">
                        <p className="text-5xl font-bold text-slate-900">500+</p>
                        <p className="text-sm text-slate-600 mt-2">Successful Graduates</p>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-slate-600 leading-relaxed mb-5 italic">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                                    <p className="text-xs text-slate-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Students Trust Us</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "🎓",
                                title: "Industry-Recognized Certification",
                                description: "Get certified by AAA with international recognition",
                            },
                            {
                                icon: "👨‍🏫",
                                title: "Expert Mentors",
                                description: "Learn from professionals with 14+ years of industry experience",
                            },
                            {
                                icon: "💼",
                                title: "Job Placement Support",
                                description: "100% job assistance and placement support from our dedicated team",
                            },
                            {
                                icon: "📈",
                                title: "Career Growth",
                                description: "Average salary increase of 40-50% post-course completion",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                    <p className="text-sm text-slate-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
