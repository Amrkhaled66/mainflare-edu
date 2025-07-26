import { grade, subject, term } from './filters';

import CustomSectionFilter from './CustomSectionFilter';
const SectionFilters = () => {
    return (
        <div className="  mx-auto flex w-[90%] flex-col gap-4 gap-x-6 lg:w-fit lg:flex-row">
            <CustomSectionFilter  label="اختر الصف الدراسي" options={grade} name="term" value="" />
            <CustomSectionFilter  label="اختر الترم المناسب" options={term} name="term" value="" />
            <CustomSectionFilter  label="اختر المادة" options={subject} name="term" value="" />
        </div>
    );
};

export default SectionFilters;
