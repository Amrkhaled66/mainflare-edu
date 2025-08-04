const CustomTeacherCard = ({
    img,
    subject,
    name,
    grades,
}: {
    img: string;
    subject: string;
    name: string;
    grades: { id: string | number; name: string }[];
}) => {
    const oneGrade = grades.slice(0, 1);
    const twoGrades = grades.slice(0, 2);

    const extraSmall = grades.length - 1;
    const extraLarge = grades.length - 2;

    return (
        <div className="flex gap-x-3 bg-white rounded-3xl border border-stroke p-3 drop-shadow-sm y-animate">
            <img src={img} alt={name} className="h-[90px] rounded-[20px]" />
            <div className="space-y-2">
                <p>{subject}</p>
                <p>{name}</p>
                <div className="flex items-center gap-x-2 text-sm">
                    <div className="flex gap-x-2 xl:hidden">
                        {oneGrade.map((grade) => (
                            <span key={`sm-${grade.id}`} className="rounded-full bg-mainColor-300 px-2 py-1 text-white">
                                {grade.name}
                            </span>
                        ))}
                        {grades.length > 1 && (
                            <span className="flex-center size-6 rounded-full bg-mainColor-300 text-xs text-white">+{extraSmall}</span>
                        )}
                    </div>

                    <div className="hidden gap-x-2 xl:flex">
                        {twoGrades.map((grade) => (
                            <span key={`lg-${grade.id}`} className="rounded-full bg-mainColor-300 px-2 py-1 text-white">
                                {grade.name}
                            </span>
                        ))}
                        {grades.length > 2 && (
                            <span className="flex-center size-6 rounded-full bg-mainColor-300 text-xs text-white">+{extraLarge}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomTeacherCard;
