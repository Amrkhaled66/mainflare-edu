import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';

const UserImage = ({ img, name }: { img: string; name: string }) => {
    return (
        <DashBoardContainer>
            <div className="flex-center text-center flex-col gap-y-4">
                <img className="size-[120px] rounded-full" src={img} alt={name} />
                <label className="btn-outline flex-center relative w-[200px] cursor-pointer overflow-hidden">
                    رفع صورة
                    <input
                        type="file"
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        onChange={(e) => console.log(e.target.files?.[0])}
                    />
                </label>

                <p className="text-sm">الصورة الشخصية لازم تكون بصيغة jpg, jpeg, png و متكونش اكبر من 800px طول او عرض</p>
            </div>
        </DashBoardContainer>
    );
};

export default UserImage;
