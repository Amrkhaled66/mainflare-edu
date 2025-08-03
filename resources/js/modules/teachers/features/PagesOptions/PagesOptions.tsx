import paths from '@/routes/paths';
import { Link, useLocation, useParams } from 'react-router';

const PagesOptions = () => {
    const { id } = useParams();
    const { pathname } = useLocation();

    const basePath = `${paths.teachers.path}/${id}`;

    const pages = [
        { name: 'تفاصيل المدرس', url: `${basePath}` },
        { name: 'الكورسات', url: `${basePath}/courses` },
        { name: 'الكتب', url: `${basePath}/books` },
        { name: 'الامتحانات', url: `${basePath}/exams` },
    ];

    return (
        <div className="gap grid grid-cols-1 rounded-3xl border border-stroke bg-mainColor-50 p-4 lg:grid-cols-4 lg:p-6">
            {pages.map((page) => {
                const isActive = pathname === page.url;

                return (
                    <Link
                        className={`flex-center animate h-[50px] w-full rounded-[50px] text-lg font-bold hover:bg-mainColor hover:text-white ${isActive ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} `}
                        to={page.url}
                    >
                        {page.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default PagesOptions;
