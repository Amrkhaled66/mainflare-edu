import SectionTitle from '@/shared/components/SectionTitle';
import CustomSubject from './components/CustomSubject';
import subjects from './subjects';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const MainSubjects = () => {
    const chunkedSubjects = [];
    for (let i = 0; i < subjects.length; i += 4) {
        chunkedSubjects.push(subjects.slice(i, i + 4));
    }

    return (
        <div className="bg-[#F4F4F4]">
            <div className="mx-auto space-y-[60px] px-2 py-sectionPadding lg:container lg:space-y-[80px]">
                <SectionTitle icon="bxs:book" title="المواد الدراسية" subTitle="اكتشف اهم المواد الدراسية" />

                <div className="hidden grid-cols-4 gap-6 lg:grid">
                    {subjects.map((subject) => (
                        <CustomSubject key={subject.subjectId} {...subject} />
                    ))}
                </div>
                <div className="block lg:hidden">
                    <Swiper
                        className="!pr-3 sm:!pr-6"
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
                        {chunkedSubjects.map((group, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col gap-4">
                                    {group.map((subject) => (
                                        <CustomSubject key={subject.subjectId} {...subject} />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MainSubjects;
