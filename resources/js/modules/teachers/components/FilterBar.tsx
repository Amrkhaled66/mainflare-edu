import CheckBoxList from '@/shared/components/ui/CheckBoxList';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FilterBar = ({
    data,
    onOptionChange,
    options,
    loading,
}: {
    data: any;
    onOptionChange: (key: string, value: number) => void;
    options: any;
    loading: boolean;
}) => {
    return (
        <div
            className={`relative h-fit w-full flex-1 space-y-6 transition-all duration-300 lg:start-0 lg:z-0 lg:h-auto lg:max-w-[25%] lg:min-w-auto lg:rounded-2xl`}
        >
            {loading ? (
                <Skeleton className="!h-[calc(100vh-100px)]" />
            ) : (
                <div className="max-h-[calc(100vh-100px)] overflow-y-auto rounded-2xl border border-stroke bg-[#F8F8F8] lg:max-h-max">
                    <div className="space-y-6 p-4">
                        <CheckBoxList
                            selectedValues={options.grade_ids}
                            title="حسب المرحلة الدراسية"
                            field="grade_ids"
                            items={data}
                            onOptionChange={onOptionChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterBar;
