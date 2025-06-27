import React, { useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Section3Dev = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const logos = [
        { id: 1, url: "/dev_logo/react_ic.png", label: "React" },
        { id: 2, url: "/dev_logo/angular_ic.png", label: "Angular" },
        { id: 3, url: "/dev_logo/nodejs_ic.png", label: "Node.js" },
        { id: 4, url: "/dev_logo/nextjs_ic.png", label: "Next.js" },
        { id: 5, url: "/dev_logo/framer_ic.png", label: "Framer" },
        { id: 6, url: "/dev_logo/html_ic.png", label: "HTML5" },
        { id: 7, url: "/dev_logo/css_ic.png", label: "CSS3" },
        { id: 8, url: "/dev_logo/threejs_ic.png", label: "Three.js" },
        { id: 9, url: "/dev_logo/javascript_ic.png", label: "JavaScript" },
        { id: 10, url: "/dev_logo/laravel_ic.png", label: "Laravel" },
        { id: 11, url: "/dev_logo/firebase_ic.png", label: "Firebase" },
        { id: 12, url: "/dev_logo/bootstrap_ic.png", label: "Bootstrap" },
        { id: 13, url: "/dev_logo/flutter_ic.png", label: "Flutter" },
        { id: 14, url: "/dev_logo/tailwind_ic.png", label: "Tailwind CSS" },
        { id: 15, url: "/dev_logo/figma_ic.png", label: "Figma" },
        { id: 16, url: "/dev_logo/php_ic.png", label: "PHP" },
        { id: 17, url: "/dev_logo/mysql_ic.png", label: "MySQL" },
        { id: 18, url: "/dev_logo/csharp_ic.png", label: "C#" },
        { id: 19, url: "/dev_logo/mongodbN_ic.png", label: "Mongo DB" },
    ];

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className={`${styles.customGradientHorizontal} w-full min-h-auto pb-12 px-[3%]`}>
            <div className="flex flex-col justify-start max-w-full mx-auto">
                <span className={styles.subTopicText}>my stack</span>
                <span className={styles.mainTitleText}>Toolkit.</span>
            </div>

            <div className="flex flex-col items-center mt-8 space-y-8">
                <motion.div
                    className="flex flex-wrap justify-center gap-12"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                >
                    {logos.slice(0, Math.ceil(logos.length / 2)).map((logo) => (
                        <motion.div
                            key={logo.id}
                            variants={item}
                            className="relative group"
                            onMouseEnter={() => setHoveredId(logo.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="bg-[#37254E] rounded-full w-24 h-24 flex items-center justify-center p-1
                                        transition-all duration-300 transform hover:scale-110">
                                <img
                                    src={logo.url}
                                    className="w-full h-full object-contain p-3"
                                    alt={logo.label}
                                    style={{
                                        filter: hoveredId === logo.id ?
                                            "drop-shadow(0 0 8px rgba(240, 174, 255, 0.8))" : "none",
                                        transition: "filter 0.3s ease"
                                    }}
                                />
                            </div>
                            {hoveredId === logo.id && (
                                <motion.div
                                    className="absolute bottom-[-25px] left-0 right-0 text-center text-white text-xs"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {logo.label}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-12"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                >
                    {logos.slice(Math.ceil(logos.length / 2)).map((logo) => (
                        <motion.div
                            key={logo.id}
                            variants={item}
                            className="relative group"
                            onMouseEnter={() => setHoveredId(logo.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="bg-[#37254E] rounded-full w-24 h-24 flex items-center justify-center p-1
                                        transition-all duration-300 transform hover:scale-110">
                                <img
                                    src={logo.url}
                                    className="w-full h-full object-contain p-3"
                                    alt={logo.label}
                                    style={{
                                        filter: hoveredId === logo.id ?
                                            "drop-shadow(0 0 8px rgba(240, 174, 255, 0.8))" : "none",
                                        transition: "filter 0.3s ease"
                                    }}
                                />
                            </div>
                            {hoveredId === logo.id && (
                                <motion.div
                                    className="absolute bottom-[-25px] left-0 right-0 text-center text-white text-xs"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {logo.label}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Section3Dev;