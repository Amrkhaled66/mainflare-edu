import SectionTitle from '@/modules/home/shared/components/SectionTitle';
import CustomSubject from '@/shared/components/ui/CustomSubject';
import CustomSubjectSk from '@/shared/components/ui/Skeletons/CustomSubjectSk';
import chunkWithSlice from '@/shared/utils/chunkWithSlice';
import subjects from './subjects';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router';
const MainSubjects = () => {
    const loading = false;

    return (
        <div className="bg-[#F4F4F4]">
            <div className="section-padding container flex flex-col gap-y-[60px] lg:gap-y-[80px]">
                <SectionTitle icon="bxs:book" title="المواد الدراسية" subTitle="اكتشف اهم المواد الدراسية" />

                <div className="flex-center w-full flex-col gap-y-8">
                    <div className="hidden w-full grid-cols-3 xl:grid-cols-4 gap lg:grid">
                        {loading
                            ? Array.from({ length: 8 }, (_, index) => <CustomSubjectSk key={index} />)
                            : subjects.map((subject) => <CustomSubject  key={subject.subjectId} {...subject} />)}
                    </div>
                    <div className="block w-full lg:hidden">
                        <Swiper
                            className="!pr-3 h-full sm:!pr-6"
                            spaceBetween={16}
                            slidesPerView={1.1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.1,
                                    spaceBetween: 16,
                                },
                                744: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 16,
                                },
                                1024: {
                                    slidesPerView: 3.1,
                                    spaceBetween: 16,
                                },
                            }}
                        >
                            {loading
                                ? chunkWithSlice(Array.from({ length: 12 }), 4).map((group, index) => (
                                      <SwiperSlide key={index}>
                                          <div key={index} className="flex !h-auto flex-col gap-4">
                                              {group.map((_, i) => (
                                                  <CustomSubjectSk key={i} />
                                              ))}
                                          </div>
                                      </SwiperSlide>
                                  ))
                                : chunkWithSlice(subjects, 4).map((group, index) => (
                                      <SwiperSlide key={index}>
                                          <div className="flex !h-auto flex-col gap-4">
                                              {group.map((subject) => (
                                                  <CustomSubject key={subject.subjectId} {...subject} />
                                              ))}
                                          </div>
                                      </SwiperSlide>
                                  ))}
                        </Swiper>
                    </div>
                    <Link className="mx-auto w-full lg:w-fit" to="subjects">
                        <button className="btn-outline w-[90%] lg:w-[200px]">تصفح المزيد</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainSubjects;
