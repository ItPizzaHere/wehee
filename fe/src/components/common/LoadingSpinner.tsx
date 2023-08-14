import React from 'react';
import { CircularProgress, Box } from '@mui/material';

function LoadingSpinner() {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh" // 화면 높이만큼 세로 중앙 정렬
        >
            <CircularProgress color="primary" />
        </Box>
    );
}

export default LoadingSpinner;