import useScrollLock from '@/shared/hooks/useScrollLock';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Overlay from './Overlay';

const Model = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: ReactNode }) => {
    useScrollLock(isOpen);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-1/2 left-1/2 z-[90] max-h-[85vh] w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 overflow-auto lg:w-fit"
                    >
                        {children}
                    </motion.div>
                    {/* <div className="absolute inset-0"> */}
                    <Overlay onClick={onClose} isOpen={isOpen} />
                    {/* </div> */}
                </>
            )}
        </AnimatePresence>,
        document.body,
    );
};

export default Model;
