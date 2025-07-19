import courses from './data/courses';
import data from './data/options';

import Overlay from '@/shared/components/Overlay';
import Pagination from '@/shared/components/Pagination';
import FilteredCourses from './features/filterdCourses/FilteredCourses';
import FilterSideBar from './features/filterSideBar/FilterSideBar';

import usePageTitle from '@/shared/hooks/usePageTitle';
import { useFilterOptions } from './hooks/useFilterOptions';
import { useSidebar } from './hooks/useSideBar';

const FilterCoursesScreen = () => {
    usePageTitle('المحاضرات');

    const { options, handleOptionChange, handlePriceRangeChange, appliedOptions, page, applyFilters, onPageChange } = useFilterOptions();
    const { sidebarOpen, closeSidebar, toggleSidebar } = useSidebar();

    const onApplyFilter = () => {
        if (JSON.stringify(options) === JSON.stringify(appliedOptions)) return;
        applyFilters();
    };
    return (
        <div className="container flex min-h-dvh flex-col justify-between ">
            <div className="flex h-auto gap-x-6">
                <FilterSideBar
                    loading={false}
                    onSubmit={onApplyFilter}
                    sidebarOpen={sidebarOpen}
                    closeSidebar={closeSidebar}
                    onOptionChange={handleOptionChange}
                    handlePriceRangeChange={handlePriceRangeChange}
                    options={options}
                    prices={{ min: 0, max: 100 }}
                    data={data}
                />
                <FilteredCourses openSidebar={toggleSidebar} data={courses} />
                <Overlay onClick={() => closeSidebar()} isOpen={sidebarOpen} />
            </div>
            {!false && (
                <Pagination
                    forcePage={page}
                    pageCount={Math.ceil(courses?.length / 5) || 0}
                    handlePageClick={({ selected }: { selected: number }) => {
                        onPageChange(selected + 1);
                        window.scroll({
                            behavior: 'smooth',
                            top: 0,
                        });
                    }}
                />
            )}
        </div>
    );
};

export default FilterCoursesScreen;
