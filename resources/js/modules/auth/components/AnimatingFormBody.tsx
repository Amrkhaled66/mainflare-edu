import { motion } from 'framer-motion';
import React from 'react';
const AnimatingFormBody = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
            viewport={{ once: true }}
            className="w-full bg-white rounded-ss-[30px] rounded-se-[30px] lg:p-0  py-10 px-4 h-full lg:h-fit space-y-6"
        >
            {children}
        </motion.div>
    );
};

export default AnimatingFormBody;
