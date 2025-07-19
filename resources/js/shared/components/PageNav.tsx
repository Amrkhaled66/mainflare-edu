import { Icon } from '@iconify/react/dist/iconify.js';
import { useLocation, useMatches } from 'react-router';

type CrumbHandle = {
    crumb: (match: any) => React.ReactNode;
};

const PageNav = () => {
    const matches = useMatches();
    const { pathname } = useLocation();
    if (pathname === '/') return null;

    return (
        <nav className="container !mb-5 flex gap-x-1 text-textColor lg:!mb-8">
            {matches
                .filter((match) => (match.handle as CrumbHandle)?.crumb)
                .map((match, index) => {
                    const handle = match.handle as CrumbHandle;
                    return (
                        <span className="flex-center gap-x-1 hover:underline" key={index}>
                            {handle.crumb(match)}
                            {index < matches.length - 1 && <Icon icon="hugeicons:less-than" className="size-[5] font-bold" />}
                        </span>
                    );
                })}
        </nav>
    );
};

export default PageNav;
