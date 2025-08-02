import { Icon } from '@iconify/react/dist/iconify.js';
const SearchBox = ({
    className = 'bg-transparent',
    onSearch,
    placeholder,
}: {
    className?: string;
    onSearch: (searchTerm: string) => void;
    placeholder?: string;
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchTerm = formData.get('search') as string;
        onSearch(searchTerm);
    };
    return (
        <form onSubmit={handleSubmit} className={`relative flex rounded-2xl h-[50px] w-full items-center justify-between ${className} lg:max-w-[400px]`}>
            <input
                placeholder={placeholder}
                className="animate input size-full rounded-2xl border border-stroke ps-3 outline-none placeholder:text-sm placeholder:text-subTitle focus:border-mainColor"
                type="text"
                name="search"
            />
            <button type="submit" className="btn btn-primary flex-center absolute end-1 h-[85%] gap-x-1 rounded-2xl px-2.5 text-base font-normal">
                ابحث
                <Icon icon="weui:search-outlined" width="24" height="24" />
            </button>
        </form>
    );
};

export default SearchBox;
