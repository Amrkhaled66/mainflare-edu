import AnimatingFormHeader from '../../components/AnimatingFormHeader';
import PageHeader from '../../components/PageHeader';
import SignInForm from './features/singupForm/SignInForm';
const SignIn = () => {
    return (
        <div className={`flex h-full w-full flex-col justify-start text-textColor lg:h-fit lg:max-w-[70%]`}>
            <PageHeader />
            <div className="h-full w-full space-y-5 lg:mt-8 lg:space-y-[80px]">
                <AnimatingFormHeader>
                    <p className="lg:text-2xl">مرحبا بعودتك</p>
                    <h1 className="text-2xl font-bold lg:text-3xl">On Skill موقع</h1>
                </AnimatingFormHeader>
                <SignInForm />
            </div>
        </div>
    );
};

export default SignIn;
