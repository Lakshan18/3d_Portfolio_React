// import React from 'react';
// import { motion } from 'framer-motion';

// const FirstCustomCard = ({ title, image }) => {
//   return (
//     <motion.div
//       className="w-full h-[250px] perspective-1000 group"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ duration: 0.6, type: 'spring' }}
//     >
//       <motion.div
//         className="relative w-full h-full rounded-xl overflow-hidden bg-[#1a103d] border border-[#6f3fc7]/30 shadow-xl transform-style-preserve-3d"
//         whileHover={{ 
//           scale: 1.02,
//           boxShadow: "0 25px 50px -12px rgba(113, 63, 199, 0.4)"
//         }}
//         style={{
//           transformStyle: 'preserve-3d'
//         }}
//       >
//         {/* Full-cover image container */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.img 
//             src={`./images/${image}`} 
//             alt={title}
//             className="w-full h-full opacity-60 object-cover object-center"
//             initial={{ scale: 1 }}
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.5 }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0615]/90 via-[#0a0615]/30 to-transparent" />
//         </div>

//         {/* 3D floating effect */}
//         <motion.div 
//           className="absolute inset-0"
//           whileHover={{
//             rotateY: 5,
//             rotateX: -3,
//             transition: { type: 'spring', stiffness: 300, damping: 15 }
//           }}
//         />

//         {/* Content */}
//         <div className="relative z-10 h-full flex flex-col justify-end p-6">
//           <motion.h3 
//             className="text-2xl font-bold text-white mb-2"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             {title}
//           </motion.h3>
//           <motion.div 
//             className="h-[3px] bg-gradient-to-r from-[#F0AEFF] to-[#6f3fc7]"
//             initial={{ width: 0 }}
//             whileInView={{ width: '100%' }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             viewport={{ once: true }}
//           />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default FirstCustomCard;



import React, { useRef } from 'react';
import { motion, useTransform, useMotionTemplate, useScroll, useAnimation } from 'framer-motion';

const ExpertiseCard = ({ title, image }) => {
    const ref = useRef(null);
    const controls = useAnimation();

    // 3D tilt effect on hover
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        controls.start({
            rotateY: x,
            rotateX: -y,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        });
    };

    const handleMouseLeave = () => {
        controls.start({
            rotateY: 0,
            rotateX: 0,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        });
    };

    return (
        <motion.div
            ref={ref}
            className="w-full h-[300px] perspective-1000"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: 'spring' }}
        >
            <motion.div
                className="relative w-full h-full rounded-xl overflow-hidden bg-[#1a103d] border border-[#6f3fc7]/50 shadow-lg transform-style-preserve-3d"
                animate={controls}
                whileHover={{
                    scale: 1.03,
                    boxShadow: "0 25px 50px -12px rgba(113, 63, 199, 0.3)"
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Background image with consistent sizing */}
                <div className="absolute inset-0">
                    <img
                        src={`./images/${image}`}
                        alt={title}
                        className="w-full h-full object-cover opacity-75 object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0615] to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <motion.h3
                        className="text-2xl font-bold text-white mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {title}
                    </motion.h3>
                    <motion.div
                        className="h-[2px] bg-gradient-to-r from-[#F0AEFF] to-transparent"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ExpertiseCard;