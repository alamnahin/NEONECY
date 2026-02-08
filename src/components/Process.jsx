import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../config/content';

export function Process() {
    return (
        <div className="bg-white py-24" id="process">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="mb-16 md:w-2/3"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        How We Work
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Process over claims, results over promises. A disciplined, transparent approach focused on delivering measurable outcomes, not marketing hype.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {PROCESS_STEPS.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="relative p-8 bg-white rounded-2xl border border-gray-200 shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                        >
                            <div className="text-6xl font-black text-amber-400/30 mb-6">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                            {idx !== PROCESS_STEPS.length - 1 && (
                                <div className="hidden md:block absolute top-12 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent translate-x-1/2" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
