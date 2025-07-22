import PageTitle from '@/shared/components/ui/PageTitle';

import SearchBox from './features/searchBox/SearchBox';
import SubjectsSection from './features/subjectsSection/SubjectsSection';

import { useState } from 'react';
import subjects from './subjects';
const SubjectsScreen = () => {
    const [filteredSubjects, setFilteredSubjects] = useState(subjects);

    const handleSearch = (searchTerm: string) => {
        const filtered = subjects.filter((subject) => subject.subjectName.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredSubjects(filtered);
    };
    const loading = true;
    return (
        <div className="container space-y-8">
            <PageTitle title="اختار المادة اللي عايز تذاكرها" />
            <div className="space-y-8">
                <SearchBox onSearch={handleSearch} />
                <SubjectsSection loading={loading} subjects={filteredSubjects} />
            </div>
        </div>
    );
};

export default SubjectsScreen;
