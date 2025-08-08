import examData from './exams';
import UserExams from './features/UserExams/UserExams';
import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';

import ExamResult from './features/ExamResult/ExamResult';
import { useState } from 'react';

import { useCallback } from 'react';

const ExamsScreen = () => {
    const [activeResult, setActiveResult] = useState(null);

    const handleShowResult = useCallback((result: any) => {
        setActiveResult(result);
    }, []);

    const handleCloseResult = useCallback(() => {
        setActiveResult(null);
    }, []);

    return (
        <div>
            {activeResult && <ExamResult onCloseResult={handleCloseResult} result={activeResult} />}
            {!activeResult && <UserExams onShowResult={handleShowResult} exams={examData} />}
        </div>
    );
};

export default ExamsScreen;
