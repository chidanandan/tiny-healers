
"use client";

import { motion } from 'framer-motion';
import React from 'react';

const Booking = () => {
    return (
        <>
            <main>
                <motion.h1
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                >Welcome to booking</motion.h1>
            </main>
        </>
    )
}

export default Booking;
