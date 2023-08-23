import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface ModalErrorProps {
  open: boolean;
  onClose: () => void;
  errorMessage: string;
}

function ModalError({open, onClose, errorMessage}: ModalErrorProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle color={"#716FDC"}>에러 발생</DialogTitle>
      <DialogContent>
        <Typography>{errorMessage}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalError;
