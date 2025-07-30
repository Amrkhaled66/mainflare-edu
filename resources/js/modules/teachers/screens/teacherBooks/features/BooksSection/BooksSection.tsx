import CustomCard from '@/shared/components/CustomCard';
import CustomCardSkeleton from '@/shared/components/ui/Skeletons/CustomCardSk';

import priceFormatter from '@/shared/utils/priceFormatter';
import books from '../../books';
const BooksSection = () => {
    const loading = false;
    return (
        <div className="gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {loading
                ? Array.from({ length: 6 }).map((_, index) => <CustomCardSkeleton key={index} />)
                : books.map((book: any) => (
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
                  ))}
        </div>
    );
};

export default BooksSection;
