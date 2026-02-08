import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../config/content';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed w-full z-50 bg-[#0B1221]/90 backdrop-blur-md border-b border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.a
                        href="#"
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-2xl font-bold text-amber-400">
                            NEONECY
                        </span>
                    </motion.a>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {NAV_LINKS.map((link, idx) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.35 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-amber-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-500 transition-colors"
                            >
                                Contact Us
                            </motion.a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            whileTap={{ scale: 0.95 }}
                            className="text-gray-400 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden bg-[#0B1221] border-b border-gray-800"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link, idx) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: idx * 0.05 }}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, delay: 0.18 }}
                            className="w-full text-center bg-amber-400 text-black mt-4 px-5 py-3 rounded-md font-semibold block"
                        >
                            Contact Us
                        </motion.a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}


