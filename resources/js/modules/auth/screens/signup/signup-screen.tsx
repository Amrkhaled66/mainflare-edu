import paths from '@/routes/paths';
import usePageTitle from '@/shared/hooks/usePageTitle';

import { Link } from 'react-router';

import AnimatingFormHeader from '../../components/AnimatingFormHeader';
import PageHeader from '../../components/PageHeader';
import SignUpForm from './features/SignUpForm';
const SignUp = () => {
    usePageTitle(paths.signup.crumb);
    return (
        <div className={`flex h-fit w-full flex-col  bg-white justify-start text-textColor lg:max-w-[75%]`}>
            <PageHeader>
                <Link className="flex gap-x-2" to={paths.login.path}>
                    <span>لديك حساب بالفعل ؟ </span>
                    <span className="font-bold text-mainColor hover:underline">الدخول الي حسابك</span>
                </Link>
            </PageHeader>
            <div className="h-full w-full   lg:space-y-[50px]">
                <AnimatingFormHeader>
                    <h1 className="text-2xl font-bold lg:text-3xl">انشاء حساب</h1>
                </AnimatingFormHeader>
                <SignUpForm />
            </div>
        </div>
    );
};

export default SignUp;
