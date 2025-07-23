import paths from '@/routes/paths';
import usePageTitle from '@/shared/hooks/usePageTitle';

const SignIn = () => {
    usePageTitle(paths.login.crumb);
    return <div>SignIn</div>;
};

export default SignIn;
