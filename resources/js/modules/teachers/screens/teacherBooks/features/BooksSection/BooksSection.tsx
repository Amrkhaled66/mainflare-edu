import CustomCardSkeleton from '@/shared/components/ui/Skeletons/CustomCardSk';

import BookCard from '@/shared/components/ui/BookCard';
const BooksSection = ({ data }: { data: any }) => {
    const loading = false;

    if (!loading && data.length === 0) {
        return <div className="h-fit flex-1 rounded-2xl bg-mainColor-50 p-6 text-center text-lg font-semibold"> مفيش كتب للصف ده للاسف</div>;
    }

    return (
        <div className="gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {loading
                ? Array.from({ length: 6 }).map((_, index) => <CustomCardSkeleton key={index} />)
                : data.map((book: any) => <BookCard book={book} />)}
        </div>
    );
};

export default BooksSection;
