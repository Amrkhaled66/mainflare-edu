import { Icon } from '@iconify/react/dist/iconify.js';

const CustomFeature = ({ icon, bg, color, title }: { icon: string; bg: string; color: string; title: string }) => {
    return (
        <div
            style={{
                background: bg,
            }}
            className="animate flex h-[90px] w-full cursor-pointer items-center justify-between rounded-2xl  px-4 drop-shadow-sm hover:translate-y-[-9px] hover:drop-shadow-xl"
        >
            <p className="text-xl font-semibold text-textColor">{title}</p>
            <div className="flex-center relative pl-4">
                <svg
                    className="absolute top-1/2 -translate-y-1/2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="65"
                    height="66"
                    viewBox="0 0 65 66"
                    fill="none"
                >
                    <path
                        d="M41.6624 1.93503L31.5 6L25.0245 2.91645C22.3749 1.65472 19.4772 1 16.5425 1H15.3136C11.554 1 7.91027 2.30069 5.00055 4.68137L4.80485 4.84149C4.26912 5.27981 3.76898 5.75989 3.30912 6.27724C1.17747 8.67534 0 11.7723 0 14.9809V18.3287C0 21.7295 0.791799 25.0836 2.31269 28.1254L5 33.5L2.05355 39.6875C0.701557 42.5267 0 45.6318 0 48.7764V50.2804C0 52.7234 0.594573 55.1297 1.73239 57.2915C3.80383 61.2273 7.50966 64.0456 11.8557 64.9904L12.2373 65.0733C15.0275 65.6799 17.9296 65.5235 20.6384 64.6205L24 63.5L31.5 60L42.3443 63.9434C46.0129 65.2774 50.0182 65.3693 53.7441 64.205L54.2647 64.0423C55.4165 63.6823 56.5157 63.1718 57.5339 62.5239C60.1044 60.8881 62.0564 58.4422 63.0812 55.5728L63.1613 55.3483C63.7163 53.7943 64 52.1565 64 50.5064V49.0541C64 47.6875 63.877 46.3236 63.6325 44.979L63.613 44.8718C63.2064 42.6353 62.484 40.4679 61.4674 38.4348L59 33.5L61.8149 28.574C62.6021 27.1964 63.2203 25.7288 63.6562 24.2032C64.5387 21.1144 64.6541 17.857 63.9923 14.7135L63.6595 13.1328C63.2238 11.0633 62.3973 9.09591 61.2242 7.33623L60.993 6.98955C60.3339 6.00085 59.547 5.10361 58.6527 4.32114C56.9135 2.79928 54.8123 1.74995 52.5507 1.27384L51.5985 1.07336C48.274 0.373476 44.8168 0.673295 41.6624 1.93503Z"
                        fill={color}
                    />
                </svg>
                <Icon icon={icon} className="relative size-[36px] text-white" />
            </div>
        </div>
    );
};

export default CustomFeature;
