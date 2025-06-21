import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // ✅ use shared Navbar

const Contact = () => {
    const navigate = useNavigate();

    const goToNext = () => {
        alert('Next section coming soon!');
    };

    return (
        <motion.div
            className="relative min-h-screen bg-white font-righteous overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            {/* Background blobs */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-100 to-white z-0 blur-[100px] opacity-80" />
            <div className="absolute top-[-250px] right-[-250px] w-[600px] h-[600px] bg-purple-400 rounded-full blur-[120px] z-0" />
            <div className="absolute bottom-[-250px] left-[-250px] w-[600px] h-[600px] bg-purple-300 rounded-full blur-[120px] z-0" />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <div className="relative z-10 px-6 sm:px-10 md:px-16 pt-24 flex flex-col items-start">
                <h1 className="text-4xl sm:text-6xl md:text-8xl text-purple-900 mb-10 sm:mb-16">Contact Us</h1>
                <motion.form
                    className="w-full max-w-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-purple-900 text-xs font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-white/30 backdrop-blur-lg text-black border border-white/40 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white/50 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-purple-900 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="your.email@example.com"
                                className="w-full bg-white/30 backdrop-blur-lg text-black border border-white/40 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white/50 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-purple-900 text-xs font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Your message..."
                                className="w-full h-48 resize-none bg-white/30 backdrop-blur-lg text-black border border-white/40 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white/50 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end px-3">
                        <button
                            type="button"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </motion.form>
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 left-6 sm:left-16 text-xs sm:text-sm text-gray-600 z-10">
                © 2025 HydraX <a href="#" className="underline">Terms</a> <a href="#" className="underline ml-2">Privacy</a>
            </div>

            {/* Social Icons */}
            <div className="absolute bottom-6 right-6 sm:right-16 flex space-x-4 text-purple-400 text-lg z-10">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
            </div>

            {/* Arrow Button */}
            <button
                onClick={goToNext}
                className="absolute right-6 sm:right-10 top-1/2 transform -translate-y-1/2 bg-pink-100 border-4 border-pink-200 rounded-full p-4 hover:scale-105 transition duration-300 shadow-md z-10"
            >
                <FontAwesomeIcon icon={faArrowRight} className="text-purple-800 text-xl" />
            </button>
        </motion.div>
    );
};

export default Contact;
