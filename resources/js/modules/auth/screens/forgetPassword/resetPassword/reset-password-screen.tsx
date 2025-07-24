import AnimatingFormBody from '@/modules/auth/components/AnimatingFormBody';
import AnimatingFormHeader from '@/modules/auth/components/AnimatingFormHeader';
import PageHeader from '@/modules/auth/components/PageHeader';
import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';

const ResetPasswordScreen = () => {
    return (
        <div className={`flex h-full w-full flex-col justify-start gap-y-8 text-textColor lg:h-fit lg:max-w-[70%]`}>
            <PageHeader />
            <div className="h-full w-full space-y-5">
                <AnimatingFormHeader>
                    <h1 className="text-2xl font-bold lg:text-3xl">اعادة تعيين كلمة المرور</h1>
                </AnimatingFormHeader>
                <AnimatingFormBody>
                    <form className='flex flex-col gap-y-6'>
                        <FormInputWithLabel type="password" label="كلمة المرور الجديدة" name="password" placeholder="كلمة المرور" />
                        <FormInputWithLabel type="password" label="تاكيد كلمة المرور" name="confirmPassword" placeholder="تاكيد كلمة المرور" />
                        <button className="btn mt-2.5 btn-primary w-full">تأكيد</button>
                    </form>
                </AnimatingFormBody>
            </div>
        </div>
    );
};

export default ResetPasswordScreen;
