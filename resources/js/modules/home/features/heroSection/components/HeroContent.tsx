import colorfullogo from '@/assets/colorfullogo.svg';
import { Icon } from '@iconify/react/dist/iconify.js';

import paths from '@/routes/paths';
import { Link } from 'react-router';
const HeroContent = () => {
    return (
        <div className="z-10 space-y-8 px-6 py-[50px] lg:pr-14">
            <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-x-3">
                    <img src={colorfullogo} alt="" />
                    <p className="lg:text-xl">تعليم على يد نخبة من المدرسين في مصر</p>
                </div>
                <div className="space-y-2 text-2xl lg:text-6xl">
                    <h1 className="flex items-center gap-x-3 font-bold">
                        اتقن
                        <Icon className="size-[48px] lg:size-[60px]" icon="line-md:arrow-left" />
                    </h1>
                    <h2 className="font-bold lg:leading-20">
                        أي مادة دراسية مع <br className="hidden lg:block" /> أفضل المدرسين.
                    </h2>
                </div>
                <p>
                    منصتنا توفر لك دروسًا خصوصية ومجموعات تقوية في مختلف المواد، <br className="hidden lg:block" /> يقدمها مدرسون معتمدون من أنحاء
                    مصر.
                </p>
            </div>
            <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4">
                <Link to={paths.signup.path}>
                    <button className="btn btn-secondary w-full lg:w-[200px]">اشترك الآن</button>
                </Link>
                <Link to="/courses">
                    <button className="animate h-[50px] w-full rounded-[50px] border border-mainColor font-bold hover:bg-mainColor lg:w-[200px]">
                        تصفح الدروس
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HeroContent;
