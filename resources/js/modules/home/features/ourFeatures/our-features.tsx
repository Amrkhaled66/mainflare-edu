import SectionTitle from '@/modules/home/shared/components/SectionTitle';
import CustomFeature from './components/customFeature';

import features from './features';
const OurFeatures = () => {
    return (
        <div className="section-padding container space-y-[60px] lg:space-y-[80px]">
            <SectionTitle icon="fa-solid:graduation-cap" title="مميزات المنصة" subTitle="اكتشف اهم مميزات المنصة" />
            <div className="flex flex-col-reverse justify-between gap-x-6 gap-y-4 lg:flex-row">
                {features.map((feature: { title: string; icon: string; color: string; bg: string }) => (
                    <CustomFeature key={feature.title} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default OurFeatures;
