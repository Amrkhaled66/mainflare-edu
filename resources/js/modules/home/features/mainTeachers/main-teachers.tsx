import SectionTitle from '@/modules/home/shared/components/SectionTitle';
import chunkWithSlice from '@/shared/utils/chunkWithSlice';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomTeacherCard from './components/CustomTeacherCard';
import CustomTeacherCardSkeleton from './components/CustomTeacherCardSk';
import teachers from './teachers';

import { Link } from 'react-router-dom';
const MainTeachers = () => {
    const loading = false;
    return (
        <div className="">
            <div className="container mx-auto space-y-[50px] px-2 py-sectionPadding lg:space-y-[80px]">
                <SectionTitle icon="fa-solid:chalkboard-teacher" title="اهم المدرسين" subTitle="اكتشف ابرز المدرسين" />

                <div className="flex w-full flex-col items-center gap-y-8">
                    <div className="gap hidden w-full grid-cols-3 lg:grid">
                        {loading
                            ? Array.from({ length: 4 }).map((_, index) => <CustomTeacherCardSkeleton key={index} />)
                            : teachers.map((teacher) => (
                                  <Link to="/teachers/5">
                                      <CustomTeacherCard
                                          name={teacher.tutor}
                                          subject={teacher.subjectName}
                                          img={teacher.img}
                                          grades={teacher.grades}
                                      />
                                  </Link>
                              ))}
                    </div>
                    <div className="block px-1 w-screen lg:hidden">
                        <Swiper
                            className="h-full w-full "
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
                                ? chunkWithSlice(Array.from({ length: 4 }), 3).map((group, index) => (
                                      <SwiperSlide className="!h-auto" key={index}>
                                          <div className="flex h-full flex-col gap-4">
                                              {group.map((_, index) => (
                                                  <CustomTeacherCardSkeleton key={index} />
                                              ))}
                                          </div>
                                      </SwiperSlide>
                                  ))
                                : chunkWithSlice(teachers, 3).map((group, index) => (
                                      <SwiperSlide key={index}>
                                          <div className="flex !h-auto flex-col gap-4">
                                              {group.map((teacher) => (
                                                  <Link to="/teachers/5">
                                                      <CustomTeacherCard
                                                          name={teacher.tutor}
                                                          subject={teacher.subjectName}
                                                          img={teacher.img}
                                                          grades={teacher.grades}
                                                      />
                                                  </Link>
                                              ))}
                                          </div>
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
