import { ArrowRight, Layout } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../config/content';
import { containerVariants, itemVariants } from '../config/animations';

export function Projects() {
    return (
        <div className="bg-white py-24" id="work">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Real Project Experience: Delivering Impact
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {PROJECTS.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200"
                        >
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                            <motion.div
                                className="absolute inset-0 bg-gray-200 flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Layout className="text-gray-400 h-20 w-20" />
                            </motion.div>

                            <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                                <motion.div
                                    className="flex justify-between items-end"
                                    initial={{ y: 10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                    <div>
                                        <p className="text-amber-400 text-sm font-medium mb-1">
                                            {proj.category}
                                        </p>
                                        <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                                    </div>
                                    <motion.div
                                        className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white"
                                        whileHover={{ scale: 1.2, rotate: 45 }}
                                    >
                                        <ArrowRight size={20} />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
