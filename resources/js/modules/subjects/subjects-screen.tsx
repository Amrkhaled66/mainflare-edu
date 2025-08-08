import PageTitle from '@/shared/components/ui/PageTitle';

import SearchBox from '@/shared/components/ui/SearchBox';
import SubjectsSection from './features/subjectsSection/SubjectsSection';

import { useState } from 'react';
import subjects from './subjects';
const SubjectsScreen = () => {
    const [filteredSubjects, setFilteredSubjects] = useState(subjects);

    const handleSearch = (searchTerm: string) => {
        const filtered = subjects.filter((subject) => subject.subjectName.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredSubjects(filtered);
    };
    const loading = false;
    return (
        <div className="container space-y-8">
            <PageTitle title="اختار المادة اللي عايز تذاكرها" />
            <div className="space-y-8">
                <SearchBox placeholder="ابحث عن المادة الدراسية" onSearch={handleSearch} />
                <SubjectsSection loading={loading} subjects={filteredSubjects} />
            </div>
        </div>
    );
};

export default SubjectsScreen;
