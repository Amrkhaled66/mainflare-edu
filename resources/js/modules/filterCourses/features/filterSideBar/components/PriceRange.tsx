const PriceRange = ({
    min,
    max,
    handlePriceRangeChange,
}: {
    min: number;
    max: number;
    handlePriceRangeChange: (min: number, max: number) => void;
}) => {
    return (
        <div className="space-y-3">
            <p className="font-bold">السعر</p>

            <div className="animate flex-center gap-x-2 *:h-10 *:w-[45%] *:rounded-2xl *:border *:border-stroke *:bg-white *:outline-none *:focus:border-mainColor [&>input]:ps-4">
                <input
                    onChange={(e) => handlePriceRangeChange(parseInt(e.target.value), max)}
                    defaultValue={min}
                    inputMode="numeric"
                    type="number"
                    className="animate input"
                    min={min}
                    max={max}
                />
                اِلي
                <input
                    onChange={(e) => handlePriceRangeChange(min, parseInt(e.target.value))}
                    defaultValue={max}
                    inputMode="numeric"
                    type="number"
                    className="animate input"
                    min={min}
                    max={max}
                />
            </div>
        </div>
    );
};

export default PriceRange;
