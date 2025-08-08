import courses from './data/courses';
import data from './data/options';

import Pagination from '@/shared/components/Pagination';
import Overlay from '@/shared/components/ui/Overlay';
import FilteredCourses from './features/filterdCourses/FilteredCourses';
import FilterSideBar from './features/filterSideBar/FilterSideBar';

import { useSidebar } from '@/shared/hooks/useSideBar';
import { useFilterOptions } from './hooks/useFilterOptions';
const FilterCoursesScreen = () => {
    const { options, handleOptionChange, handlePriceRangeChange, appliedOptions, page, applyFilters, onPageChange } = useFilterOptions();
    const { sidebarOpen, closeSidebar, toggleSidebar } = useSidebar();

    const onApplyFilter = () => {
        if (JSON.stringify(options) === JSON.stringify(appliedOptions)) return;
        applyFilters();
    };
    return (
        <div className="container flex min-h-dvh flex-col justify-between">
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
                <FilteredCourses loading={false} openSidebar={toggleSidebar} data={courses} />
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
