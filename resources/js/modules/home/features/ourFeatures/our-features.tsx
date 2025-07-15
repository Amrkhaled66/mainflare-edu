import SectionTitle from '@/shared/components/SectionTitle';
import CustomFeature from './components/customFeature';

import features from './features';
const OurFeatures = () => {
    return (
        <div className="container space-y-[60px] py-sectionPadding lg:space-y-[80px]">
            <SectionTitle icon="fa-solid:graduation-cap" title="مميزات المنصة" subTitle="اكتشف اهم مميزات المنصة" />
            <div className="flex flex-col-reverse justify-between gap-y-4 gap-x-6 lg:flex-row">
                {features.map((feature: { title: string; icon: string; color: string; bg: string }) => (
                    <CustomFeature key={feature.title} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default OurFeatures;
