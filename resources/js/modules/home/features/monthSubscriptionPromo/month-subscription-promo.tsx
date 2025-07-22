import SectionTitle from '@/modules/home/shared/components/SectionTitle';

import { Icon } from '@iconify/react/dist/iconify.js';
import pros from './pros';
const MonthSubscriptionPromo = () => {
    return (
        <div className="section-padding bg-[#F4F4F4]">
            <div className="container space-y-[50px]">
                <SectionTitle title="الاشتراك الشهري" subTitle="تعرّف على مميزات وقيمة الاشتراك الشهري في المنصة" icon="fa-solid:graduation-cap" />
                <div
                    className="flex flex-row flex-wrap justify-between gap-y-7 rounded-3xl p-9 text-white lg:flex-row lg:items-center"
                    style={{
                        background: ' linear-gradient(279deg, #454576 4.65%, #7474C8 126.24%)',
                    }}
                >
                    <div className="w-full space-y-3 lg:w-fit">
                        <p className="text-2xl font-bold">قيمة الأشتراك</p>
                        <p className="space-x-2">
                            <span className="text-xl font-bold">199.99</span>
                            <span>جنية مصري / شهر</span>
                        </p>
                    </div>

                    {pros.map((group) => (
                        <div className="space-y-3">
                            {group.map((pro) => (
                                <div className="flex items-center space-x-2">
                                    <Icon icon="material-symbols:check" className="size-6" />
                                    <p className="font-semibold lg:text-lg">{pro}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MonthSubscriptionPromo;
