import SectionTitle from '@/modules/home/shared/components/SectionTitle';
import GridView from '@/shared/components/ui/GridView';
import CustomCard from '@/shared/components/CustomCard';
import CustomCardSkeleton from '@/shared/components/ui/Skeletons/CustomCardSk';
import teachers from './teachers';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';
const MainTeachers = () => {
    const loading = false;
    return (
        <div className="">
            <div className="mx-auto space-y-[50px] px-2 py-sectionPadding lg:container lg:space-y-[80px]">
                <SectionTitle icon="fa-solid:chalkboard-teacher" title="اهم المدرسين" subTitle="اكتشف ابرز المدرسين" />

                <div className="flex w-full flex-col items-center gap-y-8">
                    <GridView className="hidden lg:grid">
                        {loading
                            ? Array.from({ length: 4 }).map((_, index) => <CustomCardSkeleton key={index} />)
                            : teachers.map((teacher) => (
                                  <Link to="/teachers/5">
                                      <CustomCard
                                          title={teacher.grade}
                                          subTitle={teacher.subjectName}
                                          img={teacher.img}
                                          footer={
                                              <div className="flex gap-x-3">
                                                  <img src={teacher.tutorImg} className="size-[36px] rounded-full" />
                                                  <p className="text-subTitle">{teacher.tutor}</p>
                                              </div>
                                          }
                                      />
                                  </Link>
                              ))}
                    </GridView>
                    <div className="block !w-full lg:hidden">
                        <Swiper
                            className="!pr- !w-full sm:!pr-6"
                            spaceBetween={16}
                            slidesPerView={1.1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.1,
                                },
                                744: {
                                    slidesPerView: 2.2,
                                },
                                1024: {
                                    slidesPerView: 3.1,
                                },
                            }}
                        >
                            {loading
                                ? Array.from({ length: 4 }).map((_, index) => (
                                      <SwiperSlide key={index}>
                                          <CustomCardSkeleton />
                                      </SwiperSlide>
                                  ))
                                : teachers.map((teacher, index) => (
                                      <SwiperSlide key={index}>
                                          <CustomCard
                                              title={teacher.grade}
                                              subTitle={teacher.subjectName}
                                              img={teacher.img}
                                              footer={
                                                  <div className="flex gap-x-3">
                                                      <img src={teacher.tutorImg} className="size-[36px] rounded-full" />
                                                      <p className="text-subTitle">{teacher.tutor}</p>
                                                  </div>
                                              }
                                          />
                                      </SwiperSlide>
                                  ))}
                        </Swiper>
                    </div>
                    <button className="btn-outline w-[90%] lg:w-[200px]">
                        <Link className="mx-auto w-full lg:w-fit" to="teachers">
                            تصفح المزيد
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainTeachers;
