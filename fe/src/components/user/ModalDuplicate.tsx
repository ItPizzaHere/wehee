import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface ModalDuplicateProps {
  open: boolean;
  onClose: () => void;
  isDuplicated: boolean;
}

function ModalDuplicate({open, onClose, isDuplicated}: ModalDuplicateProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle color={"#716FDC"}>중복 확인</DialogTitle>
      <DialogContent>
        <Typography>{!isDuplicated ? '사용 가능한 닉네임입니다.' : '이미 존재하는 닉네임입니다.'}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDuplicate;
