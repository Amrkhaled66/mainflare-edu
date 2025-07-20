const TeacherInfo = ({ image, name, biography, subject }: { image: string; name: string; biography: string; subject: string }) => {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-3 gap-x-3 lg:flex-row">
                <img src={image} alt={name} className="size-[120px] rounded-full" />
                <div>
                    <p className="text-[30px] font-bold">{name}</p>
                    <p className="text-xl">{subject}</p>
                </div>
            </div>
            <div className="space-x-2">
                <span className="rounded border-r-5 border-r-white ps-1 text-xl font-bold">السيرة الذاتية : </span>
                <span className="leading-10">{biography}</span>
            </div>
        </div>
    );
};

export default TeacherInfo;
