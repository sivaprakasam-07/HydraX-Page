import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Landing = () => {
    const navigate = useNavigate();

    const goToAbout = () => {
        setTimeout(() => {
            navigate("/about");
        }, 300);
    };

    const letters = "HydraX".split("");

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 500,
                damping: 20,
            },
        }),
    };

    return (
        <motion.div
            className="relative min-h-screen bg-white font-righteous overflow-hidden"
            initial="hidden"
            animate="visible"
        >
            {/* Blobs */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-200 to-transparent z-0 blur-[100px] opacity-80" />
            <div className="absolute top-[-250px] right-[-250px] w-[600px] h-[600px] bg-purple-400 rounded-full blur-[100px] opacity-70 animate-pulse z-0" />
            <div className="absolute bottom-[-250px] left-[-250px] w-[600px] h-[600px] bg-purple-300 rounded-full blur-[100px] opacity-70 animate-pulse z-0" />

            {/* Navbar animation (drop from top with bounce) */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.2 }}
                className="z-20"
            >
                <Navbar />
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 h-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 max-w-[700px]">
                {/* Typewriter HydraX */}
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-8xl text-purple-900 mb-6 leading-tight flex gap-[2px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {letters.map((char, index) => (
                        <motion.span
                            key={index}
                            custom={index}
                            variants={letterVariants}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl text-gray-800 font-medium leading-7"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    The smart water bottle that cools and heats on demand. No tech hassle — just hydration, redefined.
                </motion.p>
                <motion.button
                    className="mt-8 w-fit bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full text-md font-semibold shadow-md"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        delay: 2,
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                    }}
                    onClick={() => navigate("/features")}
                >
                    Explore Features
                </motion.button>
            </div>
            {/* Footer text */}
            <motion.div
                className="absolute bottom-6 left-6 sm:left-8 text-xs sm:text-sm text-gray-600 z-10"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.5, type: "spring", stiffness: 100, damping: 14 }}
            >
                © 2025 HydraX <a href="#" className="underline">Terms</a> <a href="#" className="underline ml-2">Privacy</a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                className="absolute bottom-6 right-6 sm:right-16 flex space-x-4 text-purple-400 text-lg z-10"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.7, type: "spring", stiffness: 100, damping: 14 }}
            >
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
            </motion.div>

            {/* Arrow Button */}
            <motion.button
                onClick={goToAbout}
                className="absolute right-6 sm:right-10 top-1/2 transform -translate-y-1/2 bg-pink-100 border-4 border-pink-200 rounded-full p-4 hover:scale-105 transition duration-300 shadow-md z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, duration: 0.5 }}
            >
                <FontAwesomeIcon icon={faArrowRight} className="text-purple-800 text-xl" />
            </motion.button>
        </motion.div>
    );
};

export default Landing;
