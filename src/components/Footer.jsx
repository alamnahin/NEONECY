export function Footer() {
    return (
        <footer className="bg-[#0B1221] bg-grid-pattern py-12 border-t border-gray-800 text-gray-400 text-sm">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <span className="text-2xl font-bold text-amber-400 block mb-6">NEONECY</span>
                    <p>Secure, Scalable & Innovative Digital Solutions.</p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
                        <li><a href="#work" className="hover:text-amber-400 transition-colors">Products</a></li>
                        <li><a href="#team" className="hover:text-amber-400 transition-colors">About Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Services</h4>
                    <ul className="space-y-2">
                        <li>Backend Architecture</li>
                        <li>Blockchain Systems</li>
                        <li>System Integration</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Contact</h4>
                    <p className="mb-2">hello@neonecy.com</p>
                    <p>+1 555 123-567</p>
                    <a
                        href="mailto:hello@neonecy.com?subject=Job Application"
                        className="mt-4 border border-amber-400 px-4 py-2 rounded-lg text-amber-400 hover:bg-amber-400 hover:text-black transition-colors inline-block"
                    >
                        Apply & Send CV
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-900 text-center text-gray-600">
                © 2024 NEONECY. All rights reserved.
            </div>
        </footer>
    );
}
