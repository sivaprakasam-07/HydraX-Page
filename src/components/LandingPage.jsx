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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            className="relative min-h-screen bg-white font-righteous overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            {/* Background blobs */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-200 to-transparent z-0 blur-[100px] opacity-80" />
            <div className="absolute top-[-250px] right-[-250px] w-[600px] h-[600px] bg-purple-400 rounded-full blur-[100px] z-0" />
            <div className="absolute bottom-[-250px] left-[-250px] w-[600px] h-[600px] bg-purple-300 rounded-full blur-[100px] z-0" />

            {/* Navigation */}
            <Navbar />

            {/* Content */}
            <div className="relative z-10 h-screen flex flex-col justify-center px-6 sm:px-12 md:pl-16 md:ml-8 max-w-[600px]">
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-8xl text-purple-900 mb-4 leading-tight"
                    variants={itemVariants}
                >
                    HydraX
                </motion.h1>
                <motion.p
                    className="text-base sm:text-lg md:text-xl text-black font-medium leading-7"
                    variants={itemVariants}
                >
                    Hydrax gives you full control over your drink’s temperature. Switch
                    between hot or cold—instantly, manually. No tech hassle. Just pure
                    performance.
                </motion.p>
            </div>

            {/* Footer */}
            <motion.div
                className="absolute bottom-6 left-6 sm:left-8 text-xs sm:text-sm text-gray-600 z-10"
                variants={itemVariants}
            >
                © 2025 HydraX <a href="#" className="underline">Terms</a> <a href="#" className="underline ml-2">Privacy</a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                className="absolute bottom-6 right-6 sm:right-16 flex space-x-4 text-purple-400 text-lg z-10"
                variants={itemVariants}
            >
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
            </motion.div>

            {/* Arrow Button */}
            <motion.button
                onClick={goToAbout}
                className="absolute right-6 sm:right-10 top-1/2 transform -translate-y-1/2 bg-pink-100 border-4 border-pink-200 rounded-full p-4 hover:scale-105 transition duration-300 shadow-md z-10"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FontAwesomeIcon icon={faArrowRight} className="text-purple-800 text-xl" />
            </motion.button>
        </motion.div>
    );
};

export default Landing;
