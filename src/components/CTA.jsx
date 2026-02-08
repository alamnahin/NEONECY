import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CTA_CARDS } from '../config/content';
import { containerVariants, itemVariants } from '../config/animations';

export function CTA() {
    return (
        <div id="contact" className="bg-[#0B1221] bg-grid-pattern py-24">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-white mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    For Builders, Partners & Talent
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {CTA_CARDS.map((card, idx) => {
                        const isGradient = card.gradient;
                        const cardClass = isGradient
                            ? 'bg-gradient-to-br from-amber-500 to-amber-600 border-amber-400/50'
                            : 'bg-[#0d1629] border-gray-800';

                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{
                                    y: -10,
                                    boxShadow: isGradient
                                        ? '0 20px 50px rgba(251, 191, 36, 0.25)'
                                        : '0 20px 50px rgba(59, 130, 246, 0.15)',
                                }}
                                className={`p-8 rounded-2xl border flex flex-col justify-between ${cardClass}`}
                            >
                                <div>
                                    <div className={`font-bold mb-2 ${isGradient ? 'text-black' : 'text-amber-400'}`}>
                                        {card.badge}
                                    </div>
                                    <h3 className={`text-2xl font-bold ${isGradient ? 'text-black' : 'text-white'} mb-4`}>
                                        {card.title}
                                    </h3>
                                </div>
                                {isGradient ? (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-8 bg-black text-white px-6 py-3 rounded-full font-bold text-sm w-fit hover:bg-gray-900 transition-colors"
                                    >
                                        {card.buttonText}
                                    </motion.button>
                                ) : (
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="mt-8 text-amber-400 flex items-center hover:gap-2 transition-all"
                                    >
                                        {card.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                                    </motion.button>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
