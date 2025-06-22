"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

    const RotatingText = ({
    texts = [],
    rotationInterval = 2000,
    mainClassName = "",
    transition = { duration: 0.6, ease: "easeInOut" },
    }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        }, rotationInterval);
        return () => clearInterval(interval);
    }, [texts.length, rotationInterval]);

    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden ${mainClassName}`}>
        <AnimatePresence mode="wait">
            <motion.div
            key={texts[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={transition}
            className="w-full text-center"
            >
            {texts[index]}
            </motion.div>
        </AnimatePresence>
        </div>
    );
    };

export default RotatingText;
