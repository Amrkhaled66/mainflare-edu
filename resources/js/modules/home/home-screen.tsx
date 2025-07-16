import HeroSection from './features/heroSection/hero-section';
import MainCourses from './features/mainCourses/main-courses';
import MainSubjects from './features/mainSubjects/main-subjects';
import OurFeatures from './features/ourFeatures/our-features';

const HomeScreen = () => {
    return (
        <>
            <HeroSection />
            <OurFeatures />
            <MainSubjects />
            <MainCourses />
        </>
    );
};

export default HomeScreen;
