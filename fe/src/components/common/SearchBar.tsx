import React, { useState } from 'react';
import { Box, Stack, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import ButtonBasic from 'components/common/ButtonBasic';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Box>
      <form onSubmit={handleSearch}>
        <Stack direction="row" alignContent="center">
          <TextField
            label="" variant="outlined" fullWidth
            placeholder="관심있는 키워드를 검색해보세요!"
            value={query}
            onChange={e => setQuery(e.target.value)}
            InputProps={{
              style: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
              startAdornment: <Search color="action" sx={{ fontSize: "24px", paddingRight: 1 }} />,
            }}
            sx={{ '& .MuiOutlinedInput-root': {'&:hover fieldset': { borderColor: '#968AE1'}} }}
          />
          <ButtonBasic
            label="검색" variant="contained" size="large"
            onClick={handleSearch}
            type="submit"
            sx={{ flex: "none", borderTopLeftRadius: 0, borderBottomLeftRadius: 0, width: 96 }}
          />
        </Stack>
      </form>
    </Box>
  );
}

export default SearchBar;
