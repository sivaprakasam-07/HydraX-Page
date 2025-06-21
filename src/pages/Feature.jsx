import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faThermometerHalf, faSnowflake, faSun, faTint, faCog } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Features = () => {
    const navigate = useNavigate();

    const goToNext = () => {
        navigate('/contact');
    };

    const featureCards = [
        {
            icon: faCog,
            title: 'Manual Temp Control',
            description: 'Instantly switch between hot and cold with a smooth control ring. No app, just twist and go.',
            color: 'text-blue-500'
        },
        {
            icon: faThermometerHalf,
            title: 'Smart Temp Display',
            description: 'Built-in LED shows current water temperature in real-time.',
            color: 'text-red-500'
        },
        {
            icon: faTint,
            title: 'Easy-to-Clean Body',
            description: 'Modular, detachable body for quick cleaning and hygiene.',
            color: 'text-yellow-500'
        },
        {
            icon: faSnowflake,
            title: 'Dual Mode Cooling/Heat',
            description: 'Keeps your drink chilled or warm for hours with precision insulation.',
            color: 'text-cyan-500'
        }
    ];

    return (
        <motion.div
            className="relative min-h-screen bg-white font-righteous overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            {/* Background blobs */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-purple-100 to-white z-0 blur-[100px] opacity-80" />
            <div className="absolute top-[-250px] right-[-250px] w-[600px] h-[600px] bg-purple-400 rounded-full blur-[120px] z-0" />
            <div className="absolute bottom-[-250px] left-[-250px] w-[600px] h-[600px] bg-purple-300 rounded-full blur-[120px] z-0" />

            {/* Navigation */}
            <nav className="absolute top-8 right-30 flex space-x-10 text-gray-700 text-lg font-medium z-10">
                <button onClick={() => navigate('/')} className="hover:text-purple-800 transition-colors duration-300">Home</button>
                <button onClick={() => navigate('/about')} className="hover:text-purple-800 transition-colors duration-300">About</button>
                <button onClick={() => navigate('/features')} className="hover:text-purple-800 transition-colors duration-300">Features</button>
                <button onClick={() => navigate('/contact')} className="hover:text-purple-800 transition-colors duration-300">Contact</button>
            </nav>

            {/* Main Content */}
            <div className="relative z-10 px-16 pt-24 flex flex-col items-start">
                <h1 className="text-8xl text-purple-900 mb-16 self-start">Features</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl">
                    {featureCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-6 text-black border border-white/40"
                            initial={{ opacity: 0, y: 60, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.2 }}
                        >
                            <div className={`flex items-center mb-2 text-2xl font-bold ${card.color}`}>
                                <FontAwesomeIcon icon={card.icon} className="mr-3" />
                                {card.title}
                            </div>
                            <p className="font-medium text-md">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 left-16 text-sm text-gray-600 z-10">
                © 2025 HydraX <a href="#" className="underline">Terms</a> <a href="#" className="underline ml-2">Privacy</a>
            </div>

            {/* Social Icons */}
            <div className="absolute bottom-8 right-16 flex space-x-4 text-purple-400 text-lg z-10">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
            </div>

            {/* Arrow Button */}
            <button
                onClick={goToNext}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-pink-100 border-4 border-pink-200 rounded-full p-4 hover:scale-105 transition duration-300 shadow-md z-10"
            >
                <FontAwesomeIcon icon={faArrowRight} className="text-purple-800 text-xl" />
            </button>
        </motion.div>
    );
};

export default Features;