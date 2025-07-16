import HeroSection from './features/heroSection/hero-section';
import MainCourses from './features/mainCourses/main-courses';
import MainSubjects from './features/mainSubjects/main-subjects';
import MainTeachers from './features/mainTeachers/main-teachers';
import OurFeatures from './features/ourFeatures/our-features';

const HomeScreen = () => {
    return (
        <>
            <HeroSection />
            <OurFeatures />
            <MainSubjects />
            <MainCourses />
            <MainTeachers />
        </>
    );
};

export default HomeScreen;
