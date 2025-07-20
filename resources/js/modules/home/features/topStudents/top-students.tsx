import SectionTitle from '@/shared/components/SectionTitle';

import CustomCard from '@/shared/components/CustomCard';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import CustomCardSkeleton from '@/shared/components/skeletons/CustomCardSk';
import students from './students';
const TopStudents = () => {
    const loading = false;
    return (
        <div className="">
            <div className="section-padding mx-auto space-y-[50px] px-2 lg:container lg:space-y-[80px]">
                <SectionTitle title="ابرز الطلبة" subTitle="اكتشف ابرز الطالبة المتفوقين" icon="fa-solid:graduation-cap" />

                <div className="flex w-full flex-col items-center gap-y-8">
                    <div className="container hidden grid-cols-4 gap-6 lg:grid">
                        {loading
                            ? Array.from({ length: 4 }).map((_, index) => <CustomCardSkeleton key={index} />)
                            : students.map((student: { name: string; grade: string; avatar: string }) => (
                                  <CustomCard title={student.grade} subTitle={student.name} img={student.avatar} />
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
                            {loading
                                ? Array.from({ length: 4 }).map((_, index) => (
                                      <SwiperSlide key={index}>
                                          <CustomCardSkeleton />
                                      </SwiperSlide>
                                  ))
                                : students.map((student: { name: string; grade: string; avatar: string }, index) => (
                                      <SwiperSlide key={index}>
                                          <CustomCard title={student.grade} subTitle={student.name} img={student.avatar} />
                                      </SwiperSlide>
                                  ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopStudents;
