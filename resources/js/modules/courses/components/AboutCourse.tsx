const AboutCourse = ({ about ,aboutClassName}: { about: string ,aboutClassName?:string}) => {
    return (
        <div className="space-y-3">
            <h2 className="text-xl font-bold lg:text-2xl">عن الكورس</h2>
            <p className={`text-sm font-medium text-subTitle lg:text-base ${aboutClassName}`}>{about}</p>
        </div>
    );
};

export default AboutCourse;
