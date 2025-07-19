type CheckboxListProps = {
    items: any[];
    onOptionChange: (key: string, value: number) => void;
    field: string;
    selectedValues?: number[];
    title?: string;
};

const CheckboxList = ({ onOptionChange, items, field, selectedValues = [], title }: CheckboxListProps) => {
    return (
        <div className="flex flex-col gap-y-4">
            <p className="font-bold">{title}</p>
            {items.map((item, index) => {
                return (
                    <div key={index} className="inline-flex items-center gap-x-2">
                        <label className="relative flex cursor-pointer items-center">
                            <input
                                checked={selectedValues.includes(item.id)}
                                onChange={() => onOptionChange(field, item.id)}
                                type="checkbox"
                                className="peer size-4 cursor-pointer appearance-none rounded-sm border border-mainColor shadow transition-all checked:border-mainColor checked:bg-mainColor hover:shadow-md"
                            />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </label>

                        <span>{item.name}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default CheckboxList;
