import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // ✅ Imported Navbar just like Landing page

const About = () => {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);

    const goToNext = () => {
        navigate("/features");
    };

    return (
        <div className="relative min-h-screen bg-white font-righteous overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-200 to-transparent z-0 blur-[100px] opacity-80" />
            <div className="absolute top-[-250px] right-[-250px] w-[600px] h-[600px] bg-purple-400 rounded-full blur-[100px] z-0" />
            <div className="absolute bottom-[-250px] left-[-250px] w-[600px] h-[600px] bg-purple-300 rounded-full blur-[100px] z-0" />

            {/* ✅ Replaced hardcoded nav with shared Navbar component */}
            <Navbar />

            {/* Main Content */}
            <div className="relative z-10 px-16 pt-24">
                <h1 className="text-6xl text-purple-900 mb-4">About Us</h1>
                <p className="text-black font-medium text-md max-w-[750px] leading-7 mb-12">
                    Hydrax gives you full control over your drink’s temperature. Switch
                    between hot or cold—instantly, manually. No tech hassle. Just pure
                    performance.
                </p>

                {/* Cards */}
                <div className="flex flex-wrap gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-6 w-[300px] md:w-[380px] text-black border border-white/40"
                        onMouseEnter={() => setHoveredCard('vision')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="flex items-center mb-2 text-xl font-bold">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-purple-700 mr-2" />
                            Our vision
                        </div>
                        <AnimatePresence>
                            {hoveredCard === 'vision' && (
                                <motion.p
                                    className="font-medium text-md"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    To empower people to hydrate better, smarter, and cleaner with technology.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-6 w-[300px] md:w-[380px] text-black border border-white/40"
                        onMouseEnter={() => setHoveredCard('mission')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="flex items-center mb-2 text-xl font-bold">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-purple-700 mr-2" />
                            Our Mission
                        </div>
                        <AnimatePresence>
                            {hoveredCard === 'mission' && (
                                <motion.p
                                    className="font-medium text-md"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    To deliver precision-controlled hydration with stylish and smart product.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 left-16 text-sm text-gray-400 z-10">
                © 2025 HydraX <a href="#" className="underline">Terms</a> <a href="#" className="underline ml-2">Privacy</a>
            </div>

            {/* Social Icons */}
            <div className="absolute bottom-8 right-16 flex space-x-4 text-purple-400 text-lg z-10">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
            </div>

            {/* Next Arrow */}
            <button
                onClick={goToNext}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-pink-100 border-4 border-pink-200 rounded-full p-4 hover:scale-105 transition duration-300 shadow-md z-10"
            >
                <FontAwesomeIcon icon={faArrowRight} className="text-purple-800 text-xl" />
            </button>
        </div>
    );
};

export default About;
