import { Link } from 'react-router-dom';

export function createCrumb(label: string, to: string) {
    return () => <Link to={to}>{label}</Link>;
}
