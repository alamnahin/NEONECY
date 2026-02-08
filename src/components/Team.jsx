import { Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../config/content';
import { containerVariants, itemVariants } from '../config/animations';

export function Team() {
    return (
        <div className="bg-white py-24 border-t border-gray-200" id="team">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-gray-900 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Team Behind the Systems
                </motion.h2>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {TEAM_MEMBERS.map((name, idx) => (
                        <motion.div key={idx} className="text-center group" variants={itemVariants}>
                            <motion.div
                                className="aspect-square bg-gray-100 rounded-2xl mb-4 overflow-hidden relative border border-gray-200"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50 group-hover:bg-white transition-colors">
                                    <Users size={48} />
                                </div>
                            </motion.div>
                            <h3 className="text-gray-900 font-bold">{name}</h3>
                            <p className="text-gray-600 text-sm">Engineering Lead</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
