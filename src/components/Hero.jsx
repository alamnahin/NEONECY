import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../config/animations';

export function Hero() {
    return (
        <div className="relative bg-[#0B1221] bg-grid-pattern text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="inline-block px-4 py-1.5 mb-6 rounded-full border border-amber-400/30 bg-amber-400/10 backdrop-blur-sm"
                    variants={itemVariants}
                >
                    <span className="text-sm font-medium text-amber-400">
                        Empowering Technology Strong Team
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
                    variants={itemVariants}
                >
                    Powering real businesses with <br />
                    <span className="text-amber-400">Web2, Web3 & Blockchain.</span>
                </motion.h1>

                <motion.p
                    className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
                    variants={itemVariants}
                >
                    From blockchain infrastructure to business management platforms, we build software that actually runs companies.
                </motion.p>

                <motion.div className="mt-10 flex justify-center gap-4" variants={itemVariants}>
                    <motion.a
                        href="#work"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-amber-400 text-black rounded-full font-bold text-lg hover:bg-amber-500 transition-all flex items-center"
                    >
                        View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.a>
                </motion.div>

                {/* Stats section */}
                <motion.div
                    className="mt-16 grid grid-cols-2 gap-8 max-w-lg mx-auto border-t border-gray-800 pt-8"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <div className="text-3xl font-bold text-white">20+</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Global Clients</div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <div className="text-3xl font-bold text-white">90%</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Client Retention</div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
