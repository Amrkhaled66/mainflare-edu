const TutorInfo = ({ img, name, subject }: { img: string; name: string; subject: string }) => {
    return (
        <div className="flex gap-x-3">
            <div className="size-[70px] overflow-hidden rounded-full">
                <img src={img} alt={name} />
            </div>
            <div className="space-y-1">
                <p className="text-xl font-bold text-textColor">{name}</p>
                <p className="text-xl text-subTitle">{subject}</p>
            </div>
        </div>
    );
};

export default TutorInfo;
