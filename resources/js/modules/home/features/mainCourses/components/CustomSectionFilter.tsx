import { Combobox, ComboboxButton, ComboboxOption, ComboboxOptions, Field, Label } from '@headlessui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
interface ComboBoxProps {
    onSelected?: (value: string) => void;
    options: any[];
    label?: string;
    name?: string;
    value?: string;
}

function CustomSectionFilter({ onSelected, options, label, name, value }: ComboBoxProps) {
    const [query, setQuery] = useState('');

    const filteredOptions =
        query === ''
            ? options
            : options.filter((option) => {
                  return option.name.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <div className={`animate relative z-10  w-full rounded-xl border border-stroke bg-white p-4 drop-shadow-md hover:drop-shadow-xl lg:w-[300px]`}>
            <Field className="flex w-full flex-col space-y-3">
                <Combobox
                    as="div"
                    className="flex w-full justify-between"
                    name={name}
                    value={value}
                    onChange={onSelected}
                    onClose={() => setQuery('')}
                >
                    <div className="flex w-[90%] flex-col gap-y-1">
                        <Label className="text-text-main font-bold">{label}</Label>
                        <p className="line-clamp-1 max-w-[85%]">
                            {options.map((option, index) => (
                                <span className="text-sm whitespace-nowrap text-subTitle" key={option.name}>
                                    {option.name}
                                    {index !== options.length - 1 && '-'}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className={`focus:border-main animate flex gap-2 rounded-xl border border-stroke bg-[#F4F4F4]`}>
                        <ComboboxButton className="items-center rounded px-3">
                            <Icon icon="iconamoon:arrow-down-2" width="24" height="24" />
                        </ComboboxButton>
                    </div>
                    <ComboboxOptions className="absolute z-50 inset-x-0 top-full  mt-1 max-h-[200px] w-full overflow-y-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                        {filteredOptions.map((option, index) => (
                            <ComboboxOption
                                key={`option-${index}`}
                                value={option.name}
                                className="ui-active:bg-blue-100 animate w-full cursor-pointer px-4 py-2 hover:bg-mainColor hover:text-white"
                            >
                                {option.name}
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Combobox>
            </Field>
        </div>
    );
}

export default CustomSectionFilter;
