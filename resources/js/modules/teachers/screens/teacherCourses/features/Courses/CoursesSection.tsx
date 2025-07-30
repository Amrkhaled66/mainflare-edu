import CustomCard from '@/shared/components/CustomCard';
import CustomCardSkeleton from '@/shared/components/ui/Skeletons/CustomCardSk';

import priceFormatter from '@/shared/utils/priceFormatter';
import { Link } from 'react-router';
import courses from '../../courses';
const CoursesSection = () => {
    const loading = false;
    return (
        <div className="gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {loading
                ? Array.from({ length: 6 }).map((_, index) => <CustomCardSkeleton key={index} />)
                : courses.map((course: any) => (
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
