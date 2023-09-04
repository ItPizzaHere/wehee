import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface ModalDropProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function ModalDrop({ open, onClose, onConfirm }: ModalDropProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle color={"#716FDC"}>회원 탈퇴</DialogTitle>
      <DialogContent>
        <Typography>탈퇴 후에는 복구할 수 없습니다. 그래도 탈퇴하시겠습니까?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          취소
        </Button>
        <Button onClick={onConfirm} color="primary">
          탈퇴
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDrop;
