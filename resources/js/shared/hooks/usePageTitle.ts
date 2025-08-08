// hooks/usePageTitle.ts
import { useEffect } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import paths from '../../routes/paths';

export default function usePageTitle() {
    const location = useLocation();

    useEffect(() => {
        const { pathname } = location;

        let foundTitle = 'تطبيق التعليم'; // Default title

        // Flatten paths object (including nested objects like userDashboard)
        const flattenPaths = (obj: Record<string, any>) => {
            let arr: { path: string | ((...args: any) => string); crumb?: string | ((...args: any) => string) }[] = [];
            for (const key in obj) {
                if (obj[key]?.path) arr.push(obj[key]);
                else if (typeof obj[key] === 'object') arr = arr.concat(flattenPaths(obj[key]));
            }
            return arr;
        };

        const allPaths = flattenPaths(paths);

        for (const route of allPaths) {
            const routePath =
                typeof route.path === 'function'
                    ? route.path() // Call without args to get the pattern (with params)
                    : route.path;

            if (matchPath({ path: routePath, end: true }, pathname)) {
                if (typeof route.crumb === 'function') {
                    // Try to extract params from path
                    const matched = matchPath({ path: routePath, end: true }, pathname);
                    foundTitle = route.crumb(matched?.params?.id || matched?.params?.courseId);
                } else if (typeof route.crumb === 'string') {
                    foundTitle = route.crumb;
                }
                break;
            }
        }

        document.title = foundTitle;
    }, [location]);
}
