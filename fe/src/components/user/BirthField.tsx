import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import useUserUpdate from 'hooks/useUserUpdate';
import { Autocomplete, TextField } from '@mui/material';

function BirthField() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 123 }, (_, index) => (currentYear - index).toString());

  const user = useSelector((state: RootState) => state.user);
  const { updateBirth } = useUserUpdate();

  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  useEffect(() => {
    if (user.birth !== "0") {
      setSelectedYear(user.birth);
    }
  }, [user.birth]);

  const handleYearChange = (_event: React.SyntheticEvent, value: string | null) => {
    setSelectedYear(value);

    if (value !== null) {
      updateBirth(value);
    } else {
      updateBirth("0");
    }
  };

  return (
    <Autocomplete
      options={years}
      getOptionLabel={(option) => option.toString()}
      renderInput={(params) => (
        <TextField
          {...params}
          type="text"
          label=""
          placeholder="생년 선택"
          variant="outlined"
          size="small"
        />
      )}
      value={selectedYear}
      onChange={handleYearChange}
      disablePortal
    />
  );
}

export default BirthField;

