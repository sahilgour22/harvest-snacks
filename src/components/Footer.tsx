'use client';

export default function Footer() {
    return (
        <footer className="bg-[#1F6F43] text-white pt-20 pb-10">
            <div className="container px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-display">Three Fields</h2>
                        <p className="text-white/80 leading-relaxed max-w-xs">
                            Clean fuel from nature's fields. Premium nutrition for your everyday energy.
                        </p>
                        <div className="flex gap-4">
                            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                                <a
                                    key={social}
                                    href={`#${social}`}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4C430] hover:text-[#1A1A1A] transition-all duration-300 transform hover:scale-110"
                                >
                                    <span className="sr-only">{social}</span>
                                    {/* Simple Social Icon Placeholders - Replace with actual SVGs or Icon component */}
                                    <div className="w-5 h-5 bg-current rounded-sm opacity-80" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-[#F4C430]">Explore</h3>
                        <ul className="space-y-4">
                            {['Home', 'Products', 'Recipes', 'About Us'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-[#F4C430] transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-[#F4C430] transition-all duration-300" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-[#F4C430]">Products</h3>
                        <ul className="space-y-4">
                            {['Makhana', 'Almonds', 'Cashews', 'Super Seeds'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white/80 hover:text-[#F4C430] transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-[#F4C430] transition-all duration-300" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-[#F4C430]">Contact</h3>
                        <ul className="space-y-4 text-white/80">
                            <li className="flex items-start gap-3">
                                <span className="mt-1">📍</span>
                                <span>123 Nature's Way,<br />Green Valley, CA 90210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span>📧</span>
                                <a href="mailto:hello@threefields.com" className="hover:text-[#F4C430] transition-colors">hello@threefields.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span>📞</span>
                                <a href="tel:+1234567890" className="hover:text-[#F4C430] transition-colors">+1 (234) 567-890</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>© 2026 Three Fields. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
