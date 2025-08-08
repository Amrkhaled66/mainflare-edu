import AnimatingFormBody from '@/modules/auth/components/AnimatingFormBody';
import AnimatingFormHeader from '@/modules/auth/components/AnimatingFormHeader';
import PageHeader from '@/modules/auth/components/PageHeader';
import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';

import { useReset } from '@/modules/auth/context/resetCtx';
import { FormEvent, useState } from 'react';
const ResetPasswordScreen = () => {
    const { token } = useReset();

    const [error, setError] = useState('');

    // if (!token) return <Navigate to={paths.forgetPassword.path} />;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);

        const form = Object.fromEntries(formData) as { password: string; confirmPassword: string };
        if (!form.password) return setError('كلمة المرور مطلوبة');
        if (form.password !== form.confirmPassword) return setError('يجب استخدام نفس كلمة المرور');

        console.log(form);
        // mutate(
        //   {
        //     new_password: form.password,
        //     confirm_password: form.password,
        //     token,
        //   },
        //   {
        //     onSuccess: () => {
        //       Alert({
        //         title: "Success",
        //         text: "Password Reset Successfully",
        //         icon: "success",
        //         confirmButtonText: "Okay",
        //       });
        //       navigate("/signin");
        //     },
        //     onError: (err: any) => setError(err.response.data.message),
        //   },
        // );
    };

    return (
        <div className={`flex h-full w-full flex-col justify-start gap-y-8 text-textColor lg:h-fit lg:max-w-[70%]`}>
            <PageHeader />
            <div className="h-full w-full space-y-[80px]">
                <AnimatingFormHeader>
                    <h1 className="text-2xl font-bold lg:text-3xl">اعادة تعيين كلمة المرور</h1>
                </AnimatingFormHeader>
                <AnimatingFormBody>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
                        <FormInputWithLabel
                            onChange={() => setError('')}
                            error={error}
                            type="password"
                            label="كلمة المرور الجديدة"
                            name="password"
                            placeholder="كلمة المرور"
                        />
                        <FormInputWithLabel type="password" label="تاكيد كلمة المرور" name="confirmPassword" placeholder="تاكيد كلمة المرور" />
                        <button type="submit" className="btn btn-primary mt-2.5 w-full">
                            تأكيد
                        </button>
                    </form>
                </AnimatingFormBody>
            </div>
        </div>
    );
};

export default ResetPasswordScreen;
