import { Combobox, ComboboxButton, ComboboxOption, ComboboxOptions, Field } from '@headlessui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

import FormInputWithLabel from './FormInputWithLabel';
interface ComboBoxProps {
    bgColor?: string;
    onSelected: (value: any) => void;
    options: { name: string; [key: string]: any }[];
    label?: string;
    value: any;
    placeholder?: string;
    name?: string;
}
function ComboBox({ bgColor = 'bg-white', onSelected, options, label, value, placeholder, name }: ComboBoxProps) {
    const [query, setQuery] = useState('');

    const filteredOptions = query === '' ? options : options.filter((option) => option.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <div dir="rtl" className="relative w-full">
            <Field className="flex flex-col gap-y-4">
                {label && <label className="text-sm font-bold text-textColor">{label}</label>}

                <Combobox
                    value={value}
                    onChange={(val) => {
                        setQuery('');
                        onSelected(val);
                    }}
                >
                    <div className={`relative w-full `}>
                        <FormInputWithLabel inputClassName={bgColor} value={value} type="text" placeholder="الفصل الدراسي" />
                        <ComboboxButton className="absolute end-1 top-1/2 size-fit -translate-y-1/2 rounded px-3">
                            <Icon icon="iconamoon:arrow-down-2" width="24" height="24" />
                        </ComboboxButton>

                        {filteredOptions.length > 0 && (
                            <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5">
                                {filteredOptions.map((option, index) => (
                                    <ComboboxOption
                                        key={index}
                                        value={option}
                                        className={({ active }) =>
                                            `animate w-full cursor-pointer px-4 py-2 ${active ? 'bg-mainColor text-white' : ''}`
                                        }
                                    >
                                        {option.name}
                                    </ComboboxOption>
                                ))}
                            </ComboboxOptions>
                        )}
                    </div>
                </Combobox>
            </Field>
        </div>
    );
}

export default ComboBox;
