import PageTitle from '@/shared/components/ui/PageTitle';
import { Icon } from '@iconify/react/dist/iconify.js';
const ContactUsScreen = () => {
    const info = [
        {
            icon: 'solar:phone-linear',
            value: '01010101010',
            type: 'tel:',
        },
        {
            icon: 'fluent:city-24-regular',
            value: 'مصر',
        },
        {
            icon: 'fluent:mail-32-regular',
            value: 'onskills.com',
            type: 'mailto:',
        },
    ];
    return (
        <div className="container space-y-8 text-textColor">
            <PageTitle title="تواصل معنا" />
            <div className="space-y-6 rounded-2xl bg-bgBackground p-5">
                <p className="text-2xl font-bold">معلومات الأتصال</p>
                <div className="space-y-5">
                    {info.map((item, index) => (
                        <div key={index} className="flex items-center gap-x-3">
                            <Icon icon={item.icon} className="size-6" />
                            {item.type ? <a href={item.type + item.value} className="hover:underline">{item.value}</a> : <p>{item.value}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactUsScreen;
