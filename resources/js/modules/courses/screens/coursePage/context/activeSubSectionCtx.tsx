import { createContext, ReactNode, useContext, useState } from 'react';

type SubSection = {
    id: string | number;
    name: string;
    type: 'video' | 'book' | 'exam';
    url?: string;
    fileUrl?: string;
    examId?: string;
};

type ActiveSubSectionContextType = {
    activeSubSection: SubSection | null;
    updateSubSection: (subSection: SubSection) => void;
};

const ActiveSubSectionContext = createContext<ActiveSubSectionContextType | undefined>(undefined);

export const useActiveSubSection = () => {
    const context = useContext(ActiveSubSectionContext);
    if (!context) throw new Error('useActiveSubSection must be used within ActiveSubSectionProvider');
    return context;
};

export const ActiveSubSectionProvider = ({ children, initialSubSection }: { children: ReactNode; initialSubSection: SubSection | null }) => {
    const [activeSubSection, setActiveSubSection] = useState<SubSection | null>(initialSubSection);

    const updateSubSection = (subSection: SubSection) => {
        setActiveSubSection(subSection);
    };

    return <ActiveSubSectionContext.Provider value={{ activeSubSection, updateSubSection }}>{children}</ActiveSubSectionContext.Provider>;
};
