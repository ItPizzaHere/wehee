import { useState, ChangeEvent } from 'react';

const useLimitedInput = (initialValue: string, maxLength: number) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const limitedInput = inputValue.slice(0, maxLength);
    setValue(limitedInput);
  };

  return [value, handleChange] as const;
};

export default useLimitedInput;
