import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Features', path: '/features' },
        { name: 'Contact', path: '/contact' }
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <nav className="absolute top-8 right-30 flex space-x-10 text-gray-700 text-lg font-medium z-10">
            {navItems.map((item) => (
                <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className={`hover:text-purple-800 transition-colors duration-300 cursor-pointer ${location.pathname === item.path ? 'text-purple-800 font-bold' : ''
                        }`}
                >
                    {item.name}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;