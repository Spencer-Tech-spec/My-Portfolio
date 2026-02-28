import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "John Kamau",
            role: "CEO, Wx Technologies",
            content: "Oscar delivered a robust backend for our systems that has scaled seamlessly with our growth. His attention to detail and proactive problem-solving is exceptional.",
            rating: 5
        },
        {
            name: "Mary Wanjiku",
            role: "Hotel Manager, Paradise Stays",
            content: "The hotel reservation system Oscar built revolutionized our booking process. It's user-friendly and perfectly integrates with our payment processing.",
            rating: 5
        },
        {
            name: "Peter Mwangi",
            role: "Operations Manager, NetConnect ISP",
            content: "Automating our subscriber management was a game-changer. Oscar's expertise in FastAPI and M-Pesa integration saved us hundreds of man-hours.",
            rating: 5
        },
        {
            name: "Sarah Nekesa",
            role: "Fintech Lead, Global Payments Kenya",
            content: "Working with Oscar on M-Pesa STK Push implementations was a breeze. He understands the Daraja API deeply and handles callbacks with precision.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-mesh">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Client <span className="text-gradient">Feedback</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Trusted by Kenyan business leaders to deliver high-impact digital solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl border border-white/10 relative group hover:border-primary/40 transition-all duration-500"
                        >
                            <Quote className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={60} />

                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                                ))}
                            </div>

                            <p className="text-gray-300 text-lg mb-8 italic relative z-10 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-black text-xl">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
