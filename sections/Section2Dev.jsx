import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import FirstCustomCard from "../components/FirstCustomCard";

const Section2Dev = () => {

    const cards = [
        { title: "Web Developer", image: "web_dev.png" },
        { title: "App Developer", image: "app_dev.png" },
        { title: "Backend Developer", image: "backend_dev.png" },
        { title: "Game Developer", image: "game_dev.png" }
    ];

    return (
        <div className={`${styles.customGradientHorizontal} w-full min-h-screen px-[3%] py-[5%] relative overflow-hidden`}>
            <div className="w-full mx-auto">
                <div className="flex flex-col justify-start mb-16">
                    <span className={`${styles.subTopicText}`}>introduction</span>
                    <span className={`${styles.mainTitleText}`}>Overview.</span>
                    <div className="max-w-5xl">
                        <p className={`${styles.defineAreaText}`}>
                            Full-stack developer specializing in JavaScript, React, Node.js, and modern web frameworks. Expert in building high-performance frontend interfaces (React, Three.js, GSAP) and scalable backend solutions (Node, APIs, databases). Passionate about seamless user experiences, optimized workflows, and cutting-edge tech. Proven track record in full-cycle development—from concept to deployment. Let’s collaborate and turn ideas into reality with clean, efficient code!
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <FirstCustomCard
                            key={index}
                            title={card.title}
                            image={card.image}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-[#6f3fc7] opacity-20 blur-xl"
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-[#F0AEFF] opacity-10 blur-xl"
                animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
        </div>
    );

}

export default Section2Dev;




// import React from "react";
// import { styles } from "../styles";
// import { motion } from "framer-motion";
// import FirstCustomCard from "../components/FirstCustomCard";

// const Section2Dev = () => {
//   const expertise = [
//     {
//       title: "Web Developer",
//       image: "web_dev.png",
//       description: "Crafting responsive, performant websites with modern frameworks"
//     },
//     {
//       title: "App Developer",
//       image: "app_dev.png",
//       description: "Building cross-platform mobile experiences with React Native"
//     },
//     {
//       title: "Backend Developer",
//       image: "backend_dev.png",
//       description: "Designing scalable APIs and database architectures"
//     },
//     {
//       title: "Game Developer",
//       image: "game_dev.png",
//       description: "Creating immersive WebGL and Three.js experiences"
//     }
//   ];

//   return (
//     <section className={`${styles.customGradientHorizontal} w-full min-h-screen px-[5%] py-24 relative`}>
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           className="mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <span className={`${styles.subTopicText}`}>Expertise</span>
//           <h2 className={`${styles.mainTitleText}`}>My Specializations.</h2>
//           <p className={`${styles.defineAreaText} max-w-3xl`}>
//             Focused on delivering exceptional digital experiences through specialized skills.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {expertise.map((item, index) => (
//             <FirstCustomCard
//               key={index}
//               title={item.title}
//               image={item.image}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Decorative floating elements */}
//       <motion.div
//         className="absolute top-1/4 left-0 w-80 h-80 bg-[#6f3fc7] rounded-full filter blur-[100px] opacity-10"
//         animate={{
//           x: [-50, 50, -50],
//           y: [0, -50, 0]
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
//     </section>
//   );
// };

// export default Section2Dev;