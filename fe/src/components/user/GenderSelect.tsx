import React from 'react';
import { FormControlLabel, RadioGroup, Radio, Box } from '@mui/material';

function GenderSelect() {
  return (
    <Box>
      <RadioGroup row>
        <FormControlLabel value="male" control={<Radio />} label="남" />
        <FormControlLabel value="female" control={<Radio />} label="여" />
      </RadioGroup>
    </Box>
  );
}

export default GenderSelect;