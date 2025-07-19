import SectionTitle from '@/shared/components/SectionTitle';

import CustomCard from '@/shared/components/CustomCard';
import courses from './courses';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';
import SectionFilters from './components/SectionFilters';

const MainCourses = () => {
    const chunkedSubjects = [];
    for (let i = 0; i < courses.length; i += 2) {
        chunkedSubjects.push(courses.slice(i, i + 2));
    }

    return (
        <div className="">
            <div className="section-padding mx-auto space-y-[50px] px-2 lg:container lg:space-y-[80px]">
                <SectionTitle icon="fa-solid:graduation-cap" title="اهم الدروس" subTitle="اكتشف الدروس المتاحة" />

                <SectionFilters />
                <div className="flex w-full flex-col items-center gap-y-8">
                    <div className="container hidden grid-cols-4 gap-6 lg:grid">
                        {courses.map((course) => (
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
                        ))}
                    </div>
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
                            {chunkedSubjects.map((group, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col gap-4">
                                        {group.map((lesson) => (
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
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <button className="btn-outline w-[90%] lg:w-[200px]">
                        <Link className="mx-auto w-full lg:w-fit" to="courses">
                            تصفح المزيد
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainCourses;
