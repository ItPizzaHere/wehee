import React from 'react';
import { Stack, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

interface ModalWithCloseProps {
  open: boolean;
  onClose: () => void;
  title: string | null;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

function ModalWithClose({ open, onClose, title, children, actions }: ModalWithCloseProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle color={"#716FDC"}>
        <Stack direction="row" spacing="auto">
          {title}
          {onClose ? (
            <IconButton
              aria-label="close" onClick={onClose}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <Close />
            </IconButton>) : null}
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ minWidth: '240px', paddingBottom: 2 }}>
        <div>
          {children}
        </div>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: 2 }}>
        {actions}
      </DialogActions>
    </Dialog>
  );
}

export default ModalWithClose;