import logo from '@/assets/logo2.svg';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router';
import navLinks from '@/shared/data/navLinks';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const social = [
        {
            icon: 'line-md:facebook',
            link: '#',
        },
        {
            icon: 'fa-brands:twitter',
            link: '#',
        },
        {
            icon: 'fa-brands:instagram',
            link: '#',
        },
        {
            icon: 'fa-brands:linkedin',
            link: '#',
        },
    ];

    return (
        <footer className="bg-mainColor-700 py-8 px-4 lg:p-[90px] text-center text-white">
            <div className="mx-auto lg:w-[60%] space-y-10">
                <div className="flex flex-col gap-y-5 items-center lg:items-start justify-center gap-x-10 lg:flex-row">
                    <div className="space-y-8">
                        <img className='mx-auto' src={logo} alt="onskill" />
                        <div className="flex gap-x-3">
                            {social.map((item) => (
                                <Link to={item.link}>
                                    <button className="flex-center animate size-10 rounded-xl bg-white text-mainColor hover:bg-mainColor hover:text-white">
                                        <Icon icon={item.icon} className="size-5" />
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mx-auto flex flex-col gap-x-5 gap-y-5 font-bold lg:flex-row">
                        {navLinks.map((link) => {
                            if (link.mob) return;
                            return (
                                <Link to={link.path}>
                                    <p className="animate text-nowrap hover:underline">{link.name}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <p>حقوق النشر © {currentYear} جميع الحقوق محفوظة لمنصة On Skill.</p>
            </div>
        </footer>
    );
};

export default Footer;
