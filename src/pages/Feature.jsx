import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faThermometerHalf,
  faTint,
  faSnowflake,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Features = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const goToNext = () => {
    navigate('/contact');
  };

  const featureCards = [
    {
      icon: faCog,
      title: 'Manual Temp Control',
      description: 'Instantly switch between hot and cold with a smooth control ring. No app, just twist and go.',
      color: 'text-white',
      components: ['Rotary Dial', 'Temperature Sensor', 'Control Ring'],
      image: 'https://source.unsplash.com/random/600x400?control'
    },
    {
      icon: faThermometerHalf,
      title: 'Smart Temp Display',
      description: 'Built-in LED shows current water temperature in real-time.',
      color: 'text-white',
      components: ['LED Display', 'Thermometer Sensor', 'Microcontroller'],
      image: 'https://source.unsplash.com/random/600x400?display'
    },
    {
      icon: faTint,
      title: 'Easy-to-Clean Body',
      description: 'Modular, detachable body for quick cleaning and hygiene.',
      color: 'text-white',
      components: ['Modular Body', 'Silicone Seals', 'Detachable Base'],
      image: 'https://source.unsplash.com/random/600x400?clean'
    },
    {
      icon: faSnowflake,
      title: 'Dual Mode Cooling/Heat',
      description: 'Keeps your drink chilled or warm for hours with precision insulation.',
      color: 'text-white',
      components: ['Thermal Layer', 'Cooling Plate', 'Heating Coil'],
      image: 'https://source.unsplash.com/random/600x400?cooling'
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
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 pt-24 flex flex-col items-start">
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-purple-900 mb-12 sm:mb-16">Features</h1>

        <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 w-full">
          {featureCards.map((card, index) => {
            const isHovered = index === hoveredIndex;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                className={`relative rounded-3xl cursor-pointer transition-all duration-500 ease-in-out overflow-hidden flex-shrink-0 snap-center ${
                  isHovered ? 'w-[80vw] sm:w-[550px]' : 'w-[60vw] sm:w-[280px]'
                } h-[300px] sm:h-[400px] bg-white/30 backdrop-blur-lg shadow-lg border border-white/40`}
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Shadow Overlay */}
                <div className="absolute inset-0 bg-black/30 z-10" />

                {/* Card Content */}
                <div className="relative z-20 h-full flex flex-col justify-end p-5 text-white">
                  <div className={`flex items-center mb-2 text-xl sm:text-2xl font-bold ${card.color}`}>
                    <FontAwesomeIcon icon={card.icon} className="mr-3" />
                    {card.title}
                  </div>

                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-sm sm:text-base mb-2">{card.description}</p>
                      <p className="text-xs uppercase font-semibold text-gray-300">Components Used:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {card.components.map((comp, i) => (
                          <span key={i} className="bg-white/20 px-2 py-1 rounded-full text-xs">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
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

export default Features;
