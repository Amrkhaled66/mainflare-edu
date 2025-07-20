import Card from '@/shared/components/CustomCard';
import CustomCardSk from '@/shared/components/skeletons/CustomCardSk';

import { Icon } from '@iconify/react/dist/iconify.js';

const FilteredCourses = ({ data, openSidebar, loading }: { data: any[]; openSidebar: () => void; loading: boolean }) => {
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
                <div className="gap gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {loading
                        ? Array.from({ length: 12 }).map((_, index) => <CustomCardSk key={index} />)
                        : data.map((course: any) => (
                              <Card
                                  title={course.grade}
                                  subTitle={course.name}
                                  img={course.img}
                                  footer={
                                      <div className="flex gap-x-3">
                                          <img src={course.tutorImg} className="size-[36px] rounded-full" />
                                          <p className="text-subTitle">{course.tutor}</p>
                                      </div>
                                  }
                              />
                          ))}
                </div>
            )}
        </div>
    );
};

export default FilteredCourses;
