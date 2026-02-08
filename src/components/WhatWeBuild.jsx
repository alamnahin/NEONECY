import { motion } from 'framer-motion';
import { SERVICES } from '../config/content';
import { getIcon } from '../config/icons';
import { containerVariants, itemVariants } from '../config/animations';

// Gold accent for all service icons
const colorClasses = {
    blue: 'text-amber-400',
    purple: 'text-amber-400',
    pink: 'text-amber-400',
    green: 'text-amber-400',
};

export function WhatWeBuild() {
    return (
        <div className="bg-[#0B1221] bg-grid-pattern py-24" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        What We Actually Build
                    </h2>
                    <p className="text-gray-400">Real systems that power real businesses</p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {SERVICES.map((item, idx) => {
                        const Icon = getIcon(item.icon);
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: '0 20px 40px rgba(251, 191, 36, 0.2)',
                                }}
                                transition={{ duration: 0.3 }}
                                className="p-8 rounded-2xl bg-[#0d1629] border border-gray-800 hover:border-amber-400/50 transition-colors group"
                            >
                                <motion.div
                                    className="bg-[#151f35] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gray-800"
                                    whileHover={{ rotate: 10 }}
                                >
                                    {Icon && <Icon className={`h-8 w-8 ${colorClasses[item.color]}`} />}
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
