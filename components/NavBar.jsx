import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { useState } from 'react';

const NavBar = () => {

    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    const navLinks = ["Home", "About", "Work", "Contact"];

    // Set "Home" as the default active nav link on initial load
    useState(() => {
        setActive("Home");
    }, []);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-center bg-[rgb(217,217,217,0.14)] rounded-[25px] px-6 py-2'>
                <Link to="/" className='flex items-center gap-2' onClick={() => {
                    setActive("Home");
                    window.scrollTo(0, 0);
                }}
                >
                    <img src="./nav_img1.png" alt="logo" className='w-10 h-10 object-contain' />
                </Link>
                <div className='grid'>
                    {/* Desktop view */}
                    <div className='hidden md:flex lg:flex xl:flex items-center justify-between gap-8'>
                        {navLinks.map((text) => (
                            <div
                                key={text}
                                className={`relative group cursor-pointer ${active === text ? "active-nav" : ""}`}
                                style={{ padding: '6px 10px', borderRadius: '8px' }}
                                onClick={() => setActive(text)}
                            >
                                <span className={`${styles.NavLinkText}`}>{text}</span>
                                <svg
                                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                    style={{ borderRadius: '8px' }}
                                >
                                    <rect
                                        className={`stroke-[#F0AEFF] stroke-2 ${active === text ? "opacity-100" : "opacity-0 group-hover:opacity-100 animate-square-border"}`}
                                        x="2%" y="2%" width="96%" height="96%"
                                        fill="none"
                                        strokeDasharray="376"
                                        strokeDashoffset={active === text ? "0" : "376"}
                                        rx="8" ry="8"
                                    />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='lg:grid md:grid hidden'>
                    <div className='flex items-center gap-3'>
                        <img src="./facebook_ic.png" className='w-6 h-6 object-contain' alt="" />
                        <img src="./github_ic.png" className='w-6 h-6 object-contain' alt="" />
                        <img src="./twitterX_ic.png" className='w-6 h-6 object-contain' alt="" />
                    </div>
                </div>

                {/* mobile view */}
                <div className='md:hidden lg:hidden xl:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? "./menu_icon.png" : "./menu_close_icon.png"} alt='menu' className='w-7 h-7 object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map((text) => (
                                <li
                                    key={text}
                                    className={`cursor-pointer px-3 py-2 rounded-md ${active === text ? "text-[#F0AEFF] font-bold bg-[rgba(240,174,255,0.08)]" : "text-white"}`}
                                    onClick={() => setActive(text)}
                                >
                                    <span className={`${styles.NavLinkText}`}>{text}</span>
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
    )
}

export default NavBar