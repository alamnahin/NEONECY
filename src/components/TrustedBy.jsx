import { motion } from 'framer-motion';
import { COMPANIES } from '../config/content';

export function TrustedBy() {
    return (
        <div className="bg-white py-12 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-sm font-semibold text-gray-600 tracking-widest uppercase mb-8"
                >
                    Trusted by Forward-Thinking Companies
                </motion.p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {COMPANIES.map((company, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            whileHover={{ scale: 1.1, opacity: 1 }}
                            className="text-2xl font-bold text-gray-800 cursor-pointer"
                        >
                            {company}
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
    );
}
