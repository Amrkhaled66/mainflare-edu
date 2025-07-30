import Card from '@/shared/components/CustomCard';
import CustomCardSk from '@/shared/components/ui/Skeletons/CustomCardSk';

import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router';

const FilteredTeachers = ({ data, openSidebar, loading }: { data: any[]; openSidebar: () => void; loading: boolean }) => {
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
                        : data.map((teacher: any) => (
                              <Link to={`/teachers/${teacher.id}`}>
                                  <Card
                                      title={teacher.subject}
                                      subTitle={teacher.name}
                                      img={teacher.img}
                                      footer={
                                          <div className="flex gap-x-2">
                                              {teacher.grades.slice(0, 2).map((grade: any) => (
                                                  <span key={`sm-${grade.id}`} className="rounded-full bg-mainColor-300 px-2 py-1 text-white">
                                                      {grade.name}
                                                  </span>
                                              ))}
                                              {teacher.grades.length > 2 && (
                                                  <span className="flex-center  px-2 rounded-full bg-mainColor-300 text-xs text-white">
                                                      +{teacher.grades.length - 2}
                                                  </span>
                                              )}
                                          </div>
                                      }
                                  />
                              </Link>
                          ))}
                </div>
            )}
        </div>
    );
};

export default FilteredTeachers;
