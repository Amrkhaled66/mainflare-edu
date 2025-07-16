import { ReactNode } from 'react';

const CustomCard = ({ title, subTitle, footer, img }: { title: string; subTitle: string; footer?: ReactNode; img: string }) => {
    return (
        <div className="animate min-w-[300px] cursor-pointer overflow-hidden rounded-[20px] border border-stroke bg-white drop-shadow-md hover:translate-y-[-7px] hover:drop-shadow-xl">
            <div className="h-[300px] !drop-shadow-none">
                <img src={img} className="size-full object-cover" alt={title} />
            </div>
            <div className="flex flex-col gap-y-3 p-4">
                <div className="space-y-2 text-textColor">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-xl font-bold">{subTitle}</p>
                </div>
                {footer}
            </div>
        </div>
    );
};

export default CustomCard;
