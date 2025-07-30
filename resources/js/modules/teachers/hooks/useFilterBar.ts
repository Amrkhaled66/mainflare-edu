import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface FilterOptions {
    grade_ids: number[];
}

const INITIAL_FILTER_OPTIONS: FilterOptions = {
    grade_ids: [],
};

const parseArrayParam = (param: string | null): number[] => {
    if (!param) return [];
    return param
        .split(',')
        .map((id) => parseInt(id))
        .filter((id) => !isNaN(id));
};

const getInitialOptionsFromURL = (searchParams: URLSearchParams): FilterOptions => {
    return {
        grade_ids: parseArrayParam(searchParams.get('grade_ids')),
    };
};

const getInitialPageFromURL = (searchParams: URLSearchParams): number => {
    const pageParam = parseInt(searchParams.get('page') || '1');
    return isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
};

export const useFilterBar = () => {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(() => getInitialPageFromURL(searchParams));

    const [options, setOptions] = useState<FilterOptions>(() => {
        return getInitialOptionsFromURL(searchParams);
    });

    const handleOptionChange = (key: string, value: number) => {
        setOptions((prevOptions) => {
            const currentValues = prevOptions[key as keyof FilterOptions];
            const valueExists = currentValues.includes(value);

            const newValues = valueExists ? currentValues.filter((item) => item !== value) : [...currentValues, value];

            return {
                ...prevOptions,
                [key]: newValues,
            };
        });
    };

    const resetFilters = useCallback(() => {
        setOptions(INITIAL_FILTER_OPTIONS);
    }, []);

    const updateURLParams = useCallback((newAppliedOptions: FilterOptions, currentPage: number) => {
        const newSearchParams = new URLSearchParams();

        if (newAppliedOptions.grade_ids.length > 0) {
            newSearchParams.set('grade_ids', newAppliedOptions.grade_ids.join(','));

            if (currentPage > 1) {
                newSearchParams.set('page', currentPage.toString());
            }

            window.history.replaceState({}, '', `${window.location.pathname}?${newSearchParams.toString()}`);
        }
    }, []);

    useEffect(() => {
        const initialOptions = getInitialOptionsFromURL(searchParams);
        const initialPage = getInitialPageFromURL(searchParams);
        setOptions(initialOptions);
        setPage(initialPage);
        updateURLParams(initialOptions, initialPage);
    }, [searchParams.toString(), updateURLParams]);

    const onPageChange = (newPage: number) => {
        setPage(newPage);
        updateURLParams(options, newPage);
    };

    return {
        options,
        handleOptionChange,
        resetFilters,
        setOptions,
        page,
        setPage,
        updateURLParams,
        onPageChange,
    };
};
