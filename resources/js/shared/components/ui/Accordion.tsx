import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type AccordionProps = {
    header: React.ReactNode;
    children: React.ReactNode;
    defaultOpen?: boolean;
    bg?: string;
    isSubSection?: boolean;
    accordionIcon?: string;
};

const Accordion = ({
    bg = 'bg-white',
    header,
    children,
    defaultOpen = false,
    isSubSection = false,
    accordionIcon = 'stash:play-solid',
}: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={clsx('main-rounded overflow-hidden ', !isSubSection && 'flex flex-col gap-5')}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={clsx('cursor-pointer border border-stroke transition-colors', bg, isSubSection ? 'rounded-ee-none rounded-es-none px-4 py-5' : 'p-6')}
            >
                <div className={clsx('flex items-center justify-between', isSubSection && isOpen && 'border-b border-mainColor pb-3')}>
                    <div className="flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center text-mainColor rounded-full border border-stroke bg-white">
                            <Icon icon={accordionIcon} className="size-6" />
                        </span>
                        <span className={clsx('font-medium', isSubSection ? 'text-base lg:text-xl' : 'text-xl')}>{header}</span>
                    </div>
                    <Icon icon="rivet-icons:chevron-down" className={clsx('size-6 transition-transform duration-300', isOpen && 'rotate-180')} />
                </div>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { height: 'auto', opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={clsx('main-rounded overflow-hidden', bg, isSubSection && 'flex flex-col gap-5 rounded-ss-none rounded-se-none')}
                    >
                        <div className={clsx('main-rounded p-4 lg:p-6', isSubSection && 'pt-0')}>
                            <div className={clsx(isSubSection && 'border-b-4 border-mainColor pb-3')}>{children}</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
