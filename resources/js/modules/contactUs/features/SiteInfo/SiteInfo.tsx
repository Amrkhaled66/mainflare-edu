import { Icon } from "@iconify/react/dist/iconify.js";

const SiteInfo = () => {
    const info = [
        {
            icon: 'solar:phone-linear',
            label: 'الهاتف',
            value: '01010101010',
            type: 'tel:',
        },
        {
            icon: 'fluent:city-24-regular',
            label: 'العنوان',
            value: '6 أكتوبر, القاهرة, مصر',
        },
        {
            icon: 'fluent:mail-32-regular',
            label: 'البريد الالكتروني',
            value: 'onskills.com',
            type: 'mailto:',
        },
    ];
    return (
        <div className=" space-y-4 lg:space-y-5 flex-1">
                    {info.map((item, index) => (
                        <div key={index} className="flex drop-shadow-md items-center gap-x-3 rounded-2xl border border-stroke bg-bgBackground p-4">
                            <div className="flex-center size-15 rounded-2xl bg-mainColor-100">
                                <Icon icon={item.icon} className="size-6" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xl font-medium">{item.label}</p>
                                {item.type ? (
                                    <a href={item.type + item.value} className="text-subTitle hover:underline">
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-subTitle">{item.value}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
    );
}

export default SiteInfo