import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Features', path: '/features' },
        { name: 'Contact', path: '/contact' }
    ];

    const handleNavigation = (path) => {
        if (location.pathname !== path) {
            navigate(path);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex fixed top-8 right-16 space-x-10 text-gray-700 text-lg font-medium z-50">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleNavigation(item.path)}
                        className={`hover:text-purple-800 transition-colors duration-300 cursor-pointer ${location.pathname === item.path ? 'text-purple-800 font-bold' : ''}`}
                    >
                        {item.name}
                    </button>
                ))}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden fixed top-6 right-6 z-50">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-purple-700 text-2xl focus:outline-none">
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Mobile Drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed top-0 right-0 w-3/4 h-screen bg-white shadow-xl flex flex-col space-y-6 pt-24 px-6 z-40">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavigation(item.path)}
                            className={`text-lg text-gray-700 hover:text-purple-800 transition-colors duration-300 text-left ${location.pathname === item.path ? 'text-purple-800 font-bold' : ''}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default Navbar;
