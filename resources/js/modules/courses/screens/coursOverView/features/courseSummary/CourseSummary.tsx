import priceFormatter from '@/shared/utils/priceFormatter';
import { Link } from 'react-router';

import paths from '@/routes/paths';

import CourseSummarySkeleton from './CourseSummarySk';
const CourseSummary = ({
    courseImage,
    loading,
    tutor,
    price,
    subject,
}: {
    courseImage: string;
    loading: boolean;
    tutor: any;
    price: number;
    subject: any;
}) => {
    const isSubscribed = 0;
    const id = '1';
    return loading ? (
        <CourseSummarySkeleton />
    ) : (
        <div className="main-rounded h-fit overflow-hidden border border-stroke bg-white drop-shadow-xl">
            <img className="h-[343px] sm:h-[680px] lg:h-[420px]" src={courseImage} alt={tutor.name} />
            <div className="space-y-5 p-4">
                <div className="space-y-3">
                    <p className="flex items-center space-x-2">
                        <Link className="flex items-center space-x-3" to={`/teachers/${tutor.id}`}>
                            <p className="size-10">
                                <img className="size-full rounded-xl" src={tutor.img} alt={tutor.name} />
                            </p>
                            <span className="text-xl font-medium">{tutor.name}</span>
                        </Link>
                        <Link to={`/courses?subject_ids=${subject.id}`}>
                            <span>({subject.name})</span>
                        </Link>
                    </p>
                    <p className="w-fit rounded-full border border-mainColor px-3 py-1 font-bold">
                        {isSubscribed ? 'انت مشترك في هذا الكورس بالفعل ' : priceFormatter(price)}
                    </p>
                </div>
                <Link to={isSubscribed ? paths.coursePage.path(id) : paths.courseCheckout.path(id)}>
                    <p className="btn btn-primary flex-center w-full">{isSubscribed ? 'اذهب لمشاهدة الكورس' : 'شراء الكورس'}</p>
                </Link>
            </div>
        </div>
    );
};

export default CourseSummary;
