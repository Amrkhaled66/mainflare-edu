import data from './data/options';
import teachers from './data/teachers';

import Pagination from '@/shared/components/Pagination';
import Overlay from '@/shared/components/ui/Overlay';
import FilteredTeachers from './features/filterdTeachers/FilteredTeachers';
import FilterSideBar from './features/filterSideBar/FilterSideBar';

import { useSidebar } from '@/shared/hooks/useSideBar';
import { useFilterOptions } from './hooks/useFilterOptions';
const TeachersListScreen = () => {
    const { options, handleOptionChange, appliedOptions, page, applyFilters, onPageChange } = useFilterOptions();
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
                    options={options}
                    data={data}
                />
                <FilteredTeachers loading={false} openSidebar={toggleSidebar} data={teachers} />
                <Overlay onClick={() => closeSidebar()} isOpen={sidebarOpen} />
            </div>
            {!false && (
                <Pagination
                    forcePage={page}
                    pageCount={Math.ceil(teachers?.length / 5) || 0}
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

export default TeachersListScreen;
