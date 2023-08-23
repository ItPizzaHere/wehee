import { useState, ChangeEvent } from 'react';

const useLimitedInput = (initialValue: string, limit: number) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const limitedInput = inputValue.slice(0, limit);
    setValue(limitedInput);
  };

  const handleValueChange = (inputValue: string) => {
    if (inputValue.length <= limit) {
      setValue(inputValue);
    }
  };

  return [value, handleChange, handleValueChange] as const; // 두 개의 핸들러 반환
};

export default useLimitedInput;
