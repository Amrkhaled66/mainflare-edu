import { Icon } from '@iconify/react/dist/iconify.js';

const CustomLectureCard = ({ title, index }: { title: string; index: number }) => {
    return (
        <div className="animate flex items-center justify-between rounded-xl bg-[#EBEBEF] px-4 py-3 text-lg text-textColor drop-shadow-md hover:bg-mainColor group ">
            <span className='animate group-hover:text-white'>
                {index + 1}- {title}
            </span>
            <div className="rounded-full bg-white p-2 ">
                <Icon icon="mingcute:play-fill" className="size-4" />
            </div>
        </div>
    );
};

export default CustomLectureCard;
