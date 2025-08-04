import CheckBoxList from '@/shared/components/ui/CheckBoxList';
import CloseButton from '@/shared/components/ui/CloseButton';
import SearchInput from '@/shared/components/ui/SearchInput';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import useScrollLock from '@/shared/hooks/useScrollLock';
const FilterSideBar = ({
    data,
    onOptionChange,
    options,
    onSubmit,
    loading,
    sidebarOpen,
    closeSidebar,
}: {
    data: any;
    onOptionChange: (key: string, value: number) => void;
    options: any;
    prices: { min: number; max: number };
    onSubmit: () => void;
    closeSidebar: () => void;
    loading: boolean;
    sidebarOpen: boolean;
}) => {
    useScrollLock(sidebarOpen);
    return (
        <div
            className={`lg:bg-main-50 fixed top-0 z-90 h-screen max-w-[90%] min-w-[380px] flex-1 space-y-6 bg-white p-4 transition-all duration-300 lg:!relative lg:start-0 lg:z-0 lg:h-auto lg:max-w-[40%] lg:min-w-auto lg:rounded-2xl lg:p-0 ${
                sidebarOpen ? 'start-0' : 'start-[-150%]'
            } lg:!translate-x-0`}
        >
            <div className="flex justify-end lg:hidden">
                <CloseButton onClick={closeSidebar} />
            </div>

            {loading ? (
                <Skeleton className="!h-[calc(100vh-100px)]" />
            ) : (
                <div className="max-h-[calc(100vh-100px)] overflow-y-auto rounded-2xl border border-stroke bg-[#F8F8F8] lg:max-h-max">
                    <div className="space-y-6 p-4">
                        <SearchInput placeholder="ابحث عن الكتاب" />
                        <CheckBoxList
                            selectedValues={options.grade_ids}
                            title="حسب المرحلة الدراسية"
                            field="grade_ids"
                            items={data.grade}
                            onOptionChange={onOptionChange}
                        />
                        <CheckBoxList
                            selectedValues={options.subject_ids}
                            title="حسب المادة"
                            field="subject_ids"
                            items={data.subject}
                            onOptionChange={onOptionChange}
                        />
                        <button onClick={onSubmit} className="btn-primary btn w-full">
                            تأكيد
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterSideBar;
