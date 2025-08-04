import { Icon } from '@iconify/react/dist/iconify.js';

const SearchInput = ({placeholder}:{placeholder?:string}) => {
    return (
        <div className="relative flex h-12  items-center !rounded-2xl pe-2 justify-end bg-white">
            <input
                type="text"
                placeholder={placeholder ||"ابحث عن المدرس"}
                className="input animate absolute inset-0 w-full  rounded-2xl border border-stroke ps-3 outline-none placeholder:text-sm placeholder:text-subTitle focus:ring-1 focus:ring-stroke"
            />
            <button className="btn btn-primary flex-center h-[80%] min-w-fit justify-between gap-x-1 !rounded-2xl p-2.5 text-sm !font-normal">
                ابحث
                <Icon icon="ic:baseline-search" className="size-6" />
            </button>
        </div>
    );
};

export default SearchInput;
