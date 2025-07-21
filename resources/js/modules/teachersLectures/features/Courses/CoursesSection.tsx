import CustomCard from '@/shared/components/CustomCard';
import CustomCardSkeleton from '@/shared/components/skeletons/CustomCardSk';

import { Link } from 'react-router';
import courses from '../../courses';
const CoursesSection = () => {
    const loading = false;
    return (
        <div className="gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {loading
                ? Array.from({ length: 6 }).map((_, index) => <CustomCardSkeleton key={index} />)
                : courses.map((course: any) => (
                      <Link to={`/courses/${course.id}`}>
                          <CustomCard
                              key={course.id}
                              title={course.grade.name}
                              subTitle={course.name}
                              img={course.img}
                              footer={<p className="rounded border-r-4 border-r-mainColor pr-2 text-subTitle">({course.lectures}) المحاضرات</p>}
                          />
                      </Link>
                  ))}
        </div>
    );
};

export default CoursesSection;
