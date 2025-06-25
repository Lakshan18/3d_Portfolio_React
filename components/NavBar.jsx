import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { id: "1", name: "Home" },
        { id: "2", name: "About" },
        { id: "3", name: "Work" },
        { id: "4", name: "Contact" },
    ];

    useEffect(() => {
        setActive("Home");

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#150f25] backdrop-blur-sm bg-opacity-90' : 'bg-transparent'
            }`}>
            <div className={`w-full xl:flex lg:flex md:flex hidden justify-between items-center rounded-[25px] px-6 py-2 transition-all duration-300 ${scrolled ? 'bg-[#2f2842]' : 'bg-[rgba(217,217,217,0.06)]'}`}>
                <Link to="/" className='flex items-center gap-2' onClick={() => {
                    setActive("Home");
                    window.scrollTo(0, 0);
                }}>
                    <img src="./nav_img1.png" alt="logo" className='w-10 h-10 object-contain' />
                </Link>
                <div className='grid'>
                    <ul className='hidden md:flex lg:flex xl:flex items-center justify-between gap-8'>
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`relative group cursor-pointer duration-300 transition-all ${active === link.name ? "text-white" : "text-[#C1B2D5] hover:text-purple-200"}`}
                                style={{ padding: '6px 10px', borderRadius: '8px' }}
                                onClick={() => setActive(link.name)}
                            >
                                <span className={`${styles.NavLinkText}`}>{link.name}</span>
                                <svg
                                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                    style={{ borderRadius: '8px' }}
                                >
                                    <rect
                                        className={`stroke-[#F0AEFF] stroke-2 ${active === link.name ? "opacity-100" : "opacity-0 group-hover:opacity-100 animate-square-border"}`}
                                        x="2%" y="2%" width="96%" height="96%"
                                        fill="none"
                                        strokeDasharray="376"
                                        strokeDashoffset={active === link.name ? "0" : "376"}
                                        rx="8" ry="8"
                                    />
                                </svg>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='xl:grid lg:grid md:grid hidden'>
                    <div className='flex items-center gap-3'>
                        <img src="./facebook_ic.png" className='w-5 h-5 object-contain' alt="facebook" />
                        <img src="./github_ic.png" className='w-5 h-5 object-contain' alt="github" />
                        <img src="./twitterX_ic.png" className='w-5 h-5 object-contain' alt="twitter" />
                    </div>
                </div>
                <div className='md:hidden lg:hidden xl:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? "./menu_close_icon.png" : "./menu_icon.png"} alt='menu' className='w-7 h-7 object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`cursor-pointer px-3 py-2 rounded-md ${active === link.name ? "text-[#F0AEFF] font-bold bg-[rgba(240,174,255,0.08)]" : "text-white"}`}
                                    onClick={() => {
                                        setActive(link.name);
                                        setToggle(false);
                                    }}
                                >
                                    <span className={`${styles.NavLinkText}`}>{link.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`w-full flex lg:hidden xl:hidden md:hidden 2xl:hidden justify-between items-center rounded-[25px] px-6 py-2`}>
                <Link to="/" className='flex items-center gap-2' onClick={() => {
                    setActive("Home");
                    window.scrollTo(0, 0);
                }}>
                    <img src="./nav_img1.png" alt="logo" className='w-10 h-10 object-contain' />
                </Link>
                <div className='grid'>
                    <ul className='hidden md:flex lg:flex xl:flex items-center justify-between gap-8'>
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`relative group cursor-pointer duration-300 transition-all ${active === link.name ? "text-purple-200" : "text-white hover:text-purple-200"}`}
                                style={{ padding: '6px 10px', borderRadius: '8px' }}
                                onClick={() => setActive(link.name)}
                            >
                                <span className={`${styles.NavLinkText}`}>{link.name}</span>
                                <svg
                                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                    style={{ borderRadius: '8px' }}
                                >
                                    <rect
                                        className={`stroke-[#F0AEFF] stroke-2 ${active === link.name ? "opacity-100" : "opacity-0 group-hover:opacity-100 animate-square-border"}`}
                                        x="2%" y="2%" width="96%" height="96%"
                                        fill="none"
                                        strokeDasharray="376"
                                        strokeDashoffset={active === link.name ? "0" : "376"}
                                        rx="8" ry="8"
                                    />
                                </svg>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='lg:grid md:grid hidden'>
                    <div className='flex items-center gap-3'>
                        <img src="./facebook_ic.png" className='w-6 h-6 object-contain' alt="facebook" />
                        <img src="./github_ic.png" className='w-6 h-6 object-contain' alt="github" />
                        <img src="./twitterX_ic.png" className='w-6 h-6 object-contain' alt="twitter" />
                    </div>
                </div>
                {/* mobile view with menu */}
                <div className='md:hidden lg:hidden xl:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? "./menu_close_icon.png" : "./menu_icon.png"} alt='menu' className='w-7 h-7 object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`cursor-pointer px-3 py-2 rounded-md ${active === link.name ? "text-[#F0AEFF] font-bold bg-[rgba(240,174,255,0.08)]" : "text-white"}`}
                                    onClick={() => {
                                        setActive(link.name);
                                        setToggle(false);
                                    }}
                                >
                                    <span className={`${styles.NavLinkText}`}>{link.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
              .group:hover .animate-square-border {
                animation: square-border-anim 0.7s linear forwards;
                opacity: 1;
              }
              .active-nav .stroke-\\[\\#F0AEFF\\] {
                opacity: 1 !important;
                stroke-dashoffset: 0 !important;
                transition: opacity 0.2s, stroke-dashoffset 0.2s;
              }
              @keyframes square-border-anim {
                from {
                  stroke-dashoffset: 376;
                  opacity: 1;
                }
                to {
                  stroke-dashoffset: 0;
                  opacity: 1;
                }
              }
            `}</style>
        </nav>
    );
};

export default NavBar;