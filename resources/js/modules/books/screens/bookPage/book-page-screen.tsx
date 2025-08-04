import BookCard from '@/shared/components/ui/BookCard';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useParams } from 'react-router';
import book from './book';
const BookPageScreen = () => {
    const { id } = useParams();

    return (
        <div className="container flex flex-col !gap-x-10 gap-y-6 md:flex-row">
            <div className="lg:w-[28%]">
                <BookCard book={book} />
            </div>
            <div className=" space-y-4">
                <div className="space-y-3 border-b border-b-stroke pb-4 font-bold">
                    <p className="text-xl">{book.grade.name}</p>
                    <p className="text-3xl sm:text-4xl">{book.name}</p>
                </div>
                <div className="flex gap-x-2">
                    <div className="flex-center size-10 rounded-2xl bg-mainColor text-white">
                        <Icon icon="ri:time-fill" className="size-6" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <p>تاريخ النشر</p>
                        <p className="text-subTitle">{book.createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPageScreen;
