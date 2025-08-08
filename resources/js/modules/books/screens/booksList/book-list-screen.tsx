import { useSidebar } from '@/shared/hooks/useSideBar';
import { useFilterOptions } from './hooks/useFilterOptions';

import Pagination from '@/shared/components/Pagination';
import Overlay from '@/shared/components/ui/Overlay';
import PageTitle from '@/shared/components/ui/PageTitle';
import FilteredBooks from './features/FilteredBooks/FilteredBooks';
import FilterSideBar from './features/filterSideBar/FilterSideBar';

import books from './data/books';
import data from './data/options';

const BookListScreen = () => {
    const loading = false;

    const { options, handleOptionChange, appliedOptions, page, applyFilters, onPageChange } = useFilterOptions();
    const { sidebarOpen, closeSidebar, toggleSidebar } = useSidebar();

    const onApplyFilter = () => {
        if (JSON.stringify(options) === JSON.stringify(appliedOptions)) return;
        applyFilters();
    };

    return (
        <div className="container flex min-h-dvh flex-col justify-between gap-y-8">
            <PageTitle title="قائمة الكتب" />
            <div className="flex h-auto gap-x-6">
                <FilterSideBar
                    loading={loading}
                    onSubmit={onApplyFilter}
                    sidebarOpen={sidebarOpen}
                    closeSidebar={closeSidebar}
                    onOptionChange={handleOptionChange}
                    options={options}
                    prices={{ min: 0, max: 100 }}
                    data={data}
                />
                <FilteredBooks loading={loading} openSidebar={toggleSidebar} data={books} />
                <Overlay onClick={() => closeSidebar()} isOpen={sidebarOpen} />
            </div>
            {!false && (
                <Pagination
                    forcePage={page}
                    pageCount={Math.ceil(books?.length / 5) || 0}
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

export default BookListScreen;
