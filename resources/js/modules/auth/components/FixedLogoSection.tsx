import logo from '@/assets/logo3.svg';
import { motion } from 'framer-motion';
const FixedLogoSection = () => {
    return (
        <div
            className=" flex h-auto w-screen items-center justify-center py-14 lg:h-screen lg:w-[45%]"
        >
            <motion.img
                className="block scale-90 drop-shadow-xl lg:fixed lg:scale-100"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                }}
                src={logo}
                alt="onSkill"
            />
        </div>
    );
};

export default FixedLogoSection;
