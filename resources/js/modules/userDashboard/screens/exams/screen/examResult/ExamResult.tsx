import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import ResultOverviewScreen from './screens/resultOverViewScreen/result-overview-screen';
import ResultQuestionsScreen from './screens/resultQuestionsScreen/ResultQusetionsScreen';

import { ReactNode, useState } from 'react';
import result from './result';
const tabsNames = ['overview', 'questions'];

const ExamResult = () => {
    const [activeComponent, setActiveComponent] = useState(tabsNames[0]);

    const toggleTabs = () => {
        const currentIndex = tabsNames.indexOf(activeComponent);
        const nextIndex = (currentIndex + 1) % tabsNames.length;
        setActiveComponent(tabsNames[nextIndex]);
    };

    const tabs: {
        [key: string]: () => ReactNode;
    } = {
        overview: () => <ResultOverviewScreen result={result} toggleTabs={toggleTabs} />,
        questions: () => <ResultQuestionsScreen result={result} toggleTabs={toggleTabs} />,
    };

    return <div>{tabs[activeComponent]()}</div>;
};

export default ExamResult;
