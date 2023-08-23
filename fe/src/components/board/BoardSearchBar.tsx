import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useCustomNavigate from 'hooks/useCustomNavigate';

function BoardSearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const { handleBoardSearchNavigate } = useCustomNavigate();

  const handleSearch = () => {
    handleBoardSearchNavigate(searchTerm);
    window.location.reload();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <TextField
        variant="outlined"
        placeholder="검색어 입력"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon onClick={handleSearch} sx={{ fontSize: '24px', color: '#968AE1' }} />
            </InputAdornment>
          ),
        }}
        sx={{ '& .MuiOutlinedInput-root': {
          '&:hover fieldset': { borderColor: '#968AE1'},
          '& fieldset': { borderColor: '#968AE1' }
        } }}
      />
  );
};

export default BoardSearchBar;
