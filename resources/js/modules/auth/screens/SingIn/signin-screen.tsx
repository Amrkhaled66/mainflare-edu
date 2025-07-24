import paths from '@/routes/paths';
import usePageTitle from '@/shared/hooks/usePageTitle';
import AnimatingFormHeader from '../../components/AnimatingFormHeader';
import PageHeader from '../../components/PageHeader';
import SignInForm from './features/singupForm/SignInForm';
const SignIn = () => {
    usePageTitle(paths.login.crumb);
    return (
        <div className={`flex h-fit   w-full flex-col justify-start text-textColor lg:max-w-[70%]`}>
            <PageHeader />
            <div className="h-full w-full  lg:space-y-[80px] ">
                <AnimatingFormHeader>
                    <p className="lg:text-2xl">مرحبا بعودتك</p>
                    <h1 className="text-2xl font-bold lg:text-3xl">On Skill موقع</h1>
                </AnimatingFormHeader>
                <SignInForm />
            </div>
            {/* footer */}
        </div>
    );
};

export default SignIn;
