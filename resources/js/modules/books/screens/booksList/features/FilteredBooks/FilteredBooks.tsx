import BookCard from '@/shared/components/ui/BookCard';
import CustomCardSk from '@/shared/components/ui/Skeletons/CustomCardSk';

import { Icon } from '@iconify/react/dist/iconify.js';
const FilteredBooks = ({ data, openSidebar, loading }: { data: any[]; openSidebar: () => void; loading: boolean }) => {
    return (
        <div className="flex h-fit w-full flex-col gap-y-8 lg:w-auto">
            <button
                onClick={openSidebar}
                className="text-main animate flex w-full items-center justify-center gap-2 rounded-2xl border border-transparent bg-mainColor py-2 font-bold text-white hover:!border-mainColor hover:bg-white hover:text-mainColor lg:hidden"
            >
                <Icon icon="mingcute:filter-fill" width="24" height="24" />
                فلتر
            </button>
            {data.length === 0 && 1 ? (
                <div className="bg-main-50 rounded-xl py-9">
                    <p className="text-center font-bold">مفيش دروس للفلتر ده هنضيف قريب ان شاء الله</p>
                </div>
            ) : (
                <div className="gap gap grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                    {loading
                        ? Array.from({ length: 12 }).map((_, index) => <CustomCardSk key={index} />)
                        : data.map((book: any) => <BookCard book={book} />)}
                </div>
            )}
        </div>
    );
};

export default FilteredBooks;
