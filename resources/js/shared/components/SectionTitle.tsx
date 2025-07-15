import sectionLine from '@/assets/sectionLine.png';
import { Icon } from '@iconify/react/dist/iconify.js';

const SectionTitle = ({ icon, title, subTitle }: { icon: string; title: string; subTitle: string }) => {
    return (
        <div className="relative mx-auto w-fit space-y-3 text-center">
            <p className="flex-center gap-x-3 font-bold text-mainColor">
                <Icon icon={icon} className="size-6 bg-clip-text" />
                {title}
            </p>
            <p className=" text-2xl lg:text-3xl font-bold text-textColor">{subTitle}</p>
            <img className="absolute -bottom-9 left-1/2 -translate-x-1/2" src={sectionLine} alt="sectionLine" />
        </div>
    );
};

export default SectionTitle;
