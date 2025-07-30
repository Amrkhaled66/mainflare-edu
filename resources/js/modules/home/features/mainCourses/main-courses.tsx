import SectionTitle from '@/modules/home/shared/components/SectionTitle';
import CustomCard from '@/shared/components/CustomCard';
import chunkWithSlice from '@/shared/utils/chunkWithSlice';
import SectionFilters from './components/SectionFilters';

import courses from './courses';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import CustomCardSkeleton from '@/shared/components/ui/Skeletons/CustomCardSk';
import { Link } from 'react-router-dom';
import GridView from '@/shared/components/ui/GridView';

const MainCourses = () => {
    const loading = false;
    return (
        <div className="">
            <div className="section-padding mx-auto space-y-[50px] px-2 lg:container lg:space-y-[80px]">
                <SectionTitle icon="fa-solid:graduation-cap" title="اهم الدروس" subTitle="اكتشف الدروس المتاحة" />

                <SectionFilters />
                <div className="flex w-full flex-col items-center gap-y-8">
                    <GridView className=" hidden  lg:grid">
                        {loading
                            ? Array.from({ length: 8 }).map((_, index) => <CustomCardSkeleton key={index} />)
                            : courses.map((course) => (
                                <Link to={`/courses/${course.id}/overview`}>
                                    <CustomCard
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
                                </Link>
                            ))}
                    </GridView>
                    <div className="block !w-full lg:hidden">
                        <Swiper
                            className="!w-full h-full sm:!pr-6"
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
                                ? chunkWithSlice(Array.from({ length: 8 }), 2).map((group, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex !h-auto flex-col gap-4">
                                            {group.map((_, i) => (
                                                <CustomCardSkeleton key={i} />
                                            ))}
                                        </div>
                                    </SwiperSlide>
                                ))
                                : chunkWithSlice(courses, 2).map((group, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex !h-auto flex-col gap-4">
                                            {group.map((lesson) => (
                                                <Link to={`/courses/${lesson.id}/overview`}>
                                                    <CustomCard
                                                        title={lesson.grade}
                                                        subTitle={lesson.name}
                                                        img={lesson.img}
                                                        footer={
                                                            <div className="flex gap-x-3">
                                                                <img src={lesson.tutorImg} className="size-[36px] rounded-full" />
                                                                <p className="text-subTitle">{lesson.tutor}</p>
                                                            </div>
                                                        }
                                                    />
                                                </Link>
                                            ))}
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>

                    <Link className="mx-auto w-full lg:w-fit" to="courses">
                        <button className="btn-outline w-[90%] lg:w-[200px]">تصفح المزيد</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainCourses;
