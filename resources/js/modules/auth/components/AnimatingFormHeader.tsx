import { motion } from 'framer-motion';
import React from 'react';
const AnimatingFormHeader = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
            className="space-y-4 lg:text-textColor text-white text-right p-4 lg:p-0 lg:text-center"
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatingFormHeader;
