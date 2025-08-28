import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { linkedinLink, githubLink, whatsAppLink } from '@/app/data/links'

export default function Footer() {

    const whatsappOnClick = () => {
        (window as any)?.gtag('event', 'whatsapp_click', {
            event_label: "Whatsapp Click"
        })
        window.location.href = whatsAppLink
    }

    return (
        <footer className="bg-gray-800 text-white py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Contact Information */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Contact Me</h4>
                    <p><a href="tel:+60102440732" className="hover:text-[#FF8A00] transition-colors">📞 +60 (102) 440-732</a></p>
                    <p><a href="mailto:to.msaads@gmail.com" className="hover:text-[#FF8A00] transition-colors">✉️ to.msaads@gmail.com</a></p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Connect with Me</h4>
                    <div className="flex space-x-4 mb-4">
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="w-6 h-6 hover:text-[#FF8A00] transition-colors" />
                        </a>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub className="w-6 h-6 hover:text-[#FF3CAC] transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Site Map</h4>
                    <ul>
                        {['Featured', 'Portfolio', 'Skills', 'Experience', 'Testimonials'].map((item) => (
                            <li key={item} className="mb-2">
                                <Link href={`#${item.toLowerCase()}`} className="hover:text-[#FF8A00] transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Branding & Copyright */}
                <div>
                    <div className="bg-white/10 p-4 rounded-lg">
                        <p className="mb-2">Latest from LinkedIn:</p>
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7361349067970408448?collapsed=1" 
                                height="200" width="100%" className="border-none" frameBorder="0" allowFullScreen={true} title="Embedded post"></iframe>
                    </div>
                    <br/>
                    <p className="text-sm">
                        © 2024 Max Saad. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Live Chat Section */}
            <div className="mt-8 text-center">
                <button
                    onClick={whatsappOnClick}
                    className="bg-[#6A0DAD] hover:bg-[#FF3CAC] text-white font-bold py-2 px-4 rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    💬 Live Chat
                </button>
            </div>
        </footer>
    )
}