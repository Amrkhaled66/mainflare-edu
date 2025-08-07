import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import SearchBox from '@/shared/components/ui/SearchBox';
import { useCallback, useState } from 'react';
import courses from './courses';
import UserCourses from './features/UserCourses/UserCourses';
const name = 'عمرو';
const CoursesScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const onSearch = useCallback((searchTerm_: string) => {
        if (searchTerm_ === searchTerm) return;
        setSearchTerm(searchTerm_);
    }, []);

    const filteredCourses = courses.filter((course) => course?.courseInfo?.name?.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="">
            <DashBoardContainer>
                <div className="w-full space-y-6">
                    <div className="flex flex-col justify-between gap-y-4 lg:flex-row">
                        <div className="space-y-3">
                            <h1 className="text-xl font-semibold">الكورسات اللي {name} مشترك فيها</h1>
                            <p className="text-subTitle">اخر الكورسات التي تم الاشتراك بها خلال هذه السنه</p>
                        </div>
                        <SearchBox placeholder="ابخث باسم الكورس" onSearch={onSearch} className="bg-white" />
                    </div>

                    <UserCourses courses={filteredCourses} />
                </div>
            </DashBoardContainer>
        </div>
    );
};

export default CoursesScreen;
