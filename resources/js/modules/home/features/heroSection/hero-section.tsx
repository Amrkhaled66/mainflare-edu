import heroImage from '@/assets/hero.png';
import HeroCircle from './components/HeroCircle';
import HeroContent from './components/HeroContent';
const HeroSection = () => {
    return (
        <div className="container pt-[30px] lg:pb-[30px]">
            <div
                className="relative flex min-h-[426px] items-center justify-between rounded-[50px] text-white lg:h-[556px]"
                style={{
                    background: 'linear-gradient(279deg, #454576 4.65%, #7474C8 126.24%)',
                }}
            >
                <HeroCircle
                    size=" size-[68px] lg:size-[124px]"
                    className="absolute top-[23%] left-5 -translate-y-1/2 lg:top-[25%] lg:left-[32%] lg:-translate-x-1/2"
                />
                <HeroCircle
                    size="size-[30px]"
                    className="absolute top-[29%] left-21 -translate-y-1/2 lg:top-[35%] lg:left-[37%] lg:-translate-x-1/2 lg:-translate-y-1/2"
                />
                <HeroCircle size=" size-[100px] lg:size-[124px]" className="absolute -right-2 -bottom-2" />

                <HeroContent />

                <div className="absolute bottom-0 left-0 h-[270px] w-[100px] translate-y-8 sm:h-[348px] sm:w-[128px] sm:translate-y-22 lg:relative lg:h-[800px] lg:w-[300px] lg:translate-x-10 lg:translate-y-16">
                    <img src={heroImage} alt="" className="size-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
