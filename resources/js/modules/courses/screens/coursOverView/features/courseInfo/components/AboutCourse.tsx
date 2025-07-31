const AboutCourse = ({ about }: { about: string }) => {
    return (
        <div className="space-y-3">
            <h2 className="text-xl font-bold lg:text-2xl">عن الكورس</h2>
            <p className="text-sm font-medium text-subTitle lg:text-base">{about}</p>
        </div>
    );
};

export default AboutCourse;
