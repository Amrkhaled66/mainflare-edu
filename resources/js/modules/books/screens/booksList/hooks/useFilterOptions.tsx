import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface FilterOptions {
    grade_ids: number[];
    subject_ids: number[];
    price_range: number[];
}

const INITIAL_FILTER_OPTIONS: FilterOptions = {
    grade_ids: [],
    subject_ids: [],
    price_range: [0, Math.max(Number.MAX_SAFE_INTEGER, 100)],
};

const STRING_ARRAY_KEYS = new Set<keyof FilterOptions>(['grade_ids', 'subject_ids']);

const parseArrayParam = (param: string | null): number[] => {
    if (!param) return [];
    return param
        .split(',')
        .map((id) => parseInt(id))
        .filter((id) => !isNaN(id));
};

const parsePriceRange = (minParam: string | null, maxParam: string | null): number[] => {
    const min = minParam ? parseInt(minParam) : INITIAL_FILTER_OPTIONS.price_range[0];
    const max = maxParam ? parseInt(maxParam) : INITIAL_FILTER_OPTIONS.price_range[1];
    return [isNaN(min) ? INITIAL_FILTER_OPTIONS.price_range[0] : min, isNaN(max) ? INITIAL_FILTER_OPTIONS.price_range[1] : max];
};

const getInitialOptionsFromURL = (searchParams: URLSearchParams): FilterOptions => {
    return {
        grade_ids: parseArrayParam(searchParams.get('grade_ids')),
        subject_ids: parseArrayParam(searchParams.get('subject_ids')),
        price_range: parsePriceRange(searchParams.get('price_min'), searchParams.get('price_max')),
    };
};

const getInitialPageFromURL = (searchParams: URLSearchParams): number => {
    const pageParam = parseInt(searchParams.get('page') || '1');
    return isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
};

export const useFilterOptions = () => {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(() => getInitialPageFromURL(searchParams));

    const [options, setOptions] = useState<FilterOptions>(() => {
        return getInitialOptionsFromURL(searchParams);
    });

    const [appliedOptions, setAppliedOptions] = useState<FilterOptions>(() => {
        return getInitialOptionsFromURL(searchParams);
    });

    const handleOptionChange = (key: string, value: number) => {
        if (!STRING_ARRAY_KEYS.has(key as keyof FilterOptions)) {
            return;
        }

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
        }
        if (newAppliedOptions.subject_ids.length > 0) {
            newSearchParams.set('subject_ids', newAppliedOptions.subject_ids.join(','));
        }

        if (newAppliedOptions.price_range[0] !== INITIAL_FILTER_OPTIONS.price_range[0]) {
            newSearchParams.set('price_min', newAppliedOptions.price_range[0].toString());
        }
        if (newAppliedOptions.price_range[1] !== INITIAL_FILTER_OPTIONS.price_range[1]) {
            newSearchParams.set('price_max', newAppliedOptions.price_range[1].toString());
        }

        // Add page to URL
        if (currentPage > 1) {
            newSearchParams.set('page', currentPage.toString());
        }

        window.history.replaceState({}, '', `${window.location.pathname}?${newSearchParams.toString()}`);
    }, []);

    const applyFilters = useCallback(() => {
        setAppliedOptions(options);
        setPage(1);
        updateURLParams(options, 1);
    }, [options, updateURLParams]);

    useEffect(() => {
        const initialOptions = getInitialOptionsFromURL(searchParams);
        const initialPage = getInitialPageFromURL(searchParams);
        setOptions(initialOptions);
        setAppliedOptions(initialOptions);
        setPage(initialPage);
        updateURLParams(initialOptions, initialPage);
    }, [searchParams.toString(), updateURLParams]);

    const onPageChange = (newPage: number) => {
        setPage(newPage);
        updateURLParams(appliedOptions, newPage);
    };

    return useMemo(
        () => ({
            options,
            appliedOptions,
            handleOptionChange,
            resetFilters,
            setOptions,
            page,
            setPage,
            applyFilters,
            updateURLParams,
            onPageChange,
        }),
        [options, appliedOptions, handleOptionChange, resetFilters, applyFilters, updateURLParams],
    );
};
