import PageTitle from '@/shared/components/ui/PageTitle';
import BooksSection from './features/BooksSection/BooksSection';

const TeacherBooksScreen = () => {
    return (
        <div className="container">
            <div className="space-y-8">
                <PageTitle title="اختار الكتاب اللي عايزة" />
                <BooksSection />
            </div>
        </div>
    );
};

export default TeacherBooksScreen;
