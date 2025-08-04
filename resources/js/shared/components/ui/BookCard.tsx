import paths from '@/routes/paths';
import priceFormatter from '@/shared/utils/priceFormatter';
import { Link } from 'react-router';
import CustomCard from '../CustomCard';
const BookCard = ({ book }: { book: any }) => {
    return (
        <Link to={paths.bookPage.path(book.id)}>
            <CustomCard
                key={book.id}
                title={book.grade.name}
                subTitle={book.name}
                img={book.img}
                footer={
                    <div className="flex !w-full flex-col items-end justify-between gap-y-4">
                        <p className="font-bold text-textColor">{priceFormatter(book.price)}</p>
                        <button className="btn btn-primary !w-full"> أضف الي السلة</button>
                    </div>
                }
            />
        </Link>
    );
};

export default BookCard;
