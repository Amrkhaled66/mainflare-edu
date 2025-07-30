import CustomCard from '@/shared/components/CustomCard';
import CustomCardSkeleton from '@/shared/components/ui/Skeletons/CustomCardSk';

import priceFormatter from '@/shared/utils/priceFormatter';
import { Link } from 'react-router';
const CoursesSection = ({ data }: { data: any }) => {
    const loading = false;

    if (!loading && data.length === 0) {
        return <div className="h-fit flex-1 rounded-2xl bg-mainColor-50 p-6 text-center text-lg font-semibold"> مفيش كورسات للصف ده للاسف</div>;
    }

    return (
        <div className="gap grid flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {loading
                ? Array.from({ length: 6 }).map((_, index) => <CustomCardSkeleton key={index} />)
                : data.map((course: any) => (
                      <Link to={`/courses/${course.id}/overview`}>
                          <CustomCard
                              key={course.id}
                              title={course.grade.name}
                              subTitle={course.name}
                              img={course.img}
                              footer={
                                  <div>
                                      <p className="rounded border-r-4 border-r-mainColor pr-2 text-subTitle">({course.lectures}) المحاضرات</p>
                                      <p className="text-end font-bold">{priceFormatter(course.price)}</p>
                                      <button className="btn btn-primary mt-4 w-full">عرض تفاصيل الكورس</button>
                                  </div>
                              }
                          />
                      </Link>
                  ))}
        </div>
    );
};

export default CoursesSection;
