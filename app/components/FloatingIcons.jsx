'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';

const icons = [
    assets.react,
    assets.javascript,
    assets.git,
    assets.github,
    assets.figma,
    assets.flutter,
    assets.mysql,
    assets.firebase,
    assets.tailwind,
    assets.vscode,
    assets.html,
    assets.css,
    assets.laravel,
    assets.bootstrap,
    assets.c,
    assets.dart,
    assets.postman,
    assets.oracle,
    assets.firebase,
    assets.php
];

const getRandomPosition = () => ({
  top: `${Math.random() * 100}vh`,
  left: `${Math.random() * 100}vw`,
});

const FloatingIcons = () => {
    const [iconPositions, setIconPositions] = useState([]);

    useEffect(() => {
        const generateIcons = () => {
        const iconCount = 20;

        const shuffledIcons = [...icons]
            .sort(() => Math.random() - 0.5)
            .slice(0, Math.min(iconCount, icons.length));

        return shuffledIcons.map((icon, i) => ({
            ...getRandomPosition(),
            icon,
            id: i
        }));
        };
        setIconPositions(generateIcons());
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        {iconPositions.map(({ top, left, icon, id }) => (
            <motion.img
            key={id}
            src={icon.src}
            alt="floating-icon"
            initial={{ y: 0, x: 0, opacity: 0.05 }}
            animate={{
                y: [0, 20, -20, 0],
                x: [0, 15, -15, 0],
                opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-8 h-8"
            style={{ top, left }}
            />
        ))}
        </div>
    );
};

export default FloatingIcons;
