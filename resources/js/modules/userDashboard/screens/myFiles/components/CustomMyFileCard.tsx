import { Icon } from '@iconify/react/dist/iconify.js';

const CustomMyFileCard = ({ file }: { file: any }) => {
    return (
        <div className="animate flex cursor-pointer items-center justify-between rounded-3xl border border-stroke bg-white p-4 drop-shadow-sm hover:drop-shadow-xl">
            <div className="flex items-center gap-x-3">
                <img className="size-20 rounded-xl" src={file.courseImg} alt={file.courseName} />
                <div className="flex flex-col gap-y-2 font-medium lg:gap-y-3">
                    <p className="line-clamp-2 text-sm text-wrap lg:text-lg">{file.fileName}</p>
                    <p className="line-clamp-1 text-xs lg:text-sm text-wrap">{file.courseName}</p>
                    <p className="line-clamp-1 text-xs lg:text-sm text-wrap text-subTitle">{file.teacherName}</p>
                </div>
            </div>
            <div className="flex-center animate size-10 cursor-pointer rounded-xl border border-rose bg-rose text-white hover:bg-transparent hover:text-rose">
                <a target="_blank" href={file.link}>
                    <Icon icon="mingcute:pdf-fill" className="size-6" />
                </a>
            </div>
        </div>
    );
};

export default CustomMyFileCard;
