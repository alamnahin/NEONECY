import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { REASONS } from '../config/content';
import { containerVariants, itemVariants } from '../config/animations';

export function WhyChooseUs() {
    return (
        <div className="bg-[#0B1221] bg-grid-pattern py-24">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Why Clients Choose This Team
                    </h2>
                    <p className="text-gray-400">
                        Different from cheap promises. We deliver strategic, scalable, and reliable solutions.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {REASONS.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            className="flex gap-4"
                            variants={itemVariants}
                            whileHover={{ x: 6 }}
                        >
                            <div className="mt-1">
                                <CheckCircle className="text-amber-400 h-6 w-6 flex-shrink-0" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
