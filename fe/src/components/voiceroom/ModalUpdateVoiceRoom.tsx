import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import useVoiceRoomUpdate from '../../hooks/useVoiceRoomUpdate';
import { Stack, TextField, Typography } from '@mui/material';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import ModalWithClose from 'components/common/ModalWithClose';
import ButtonBasic from 'components/common/ButtonBasic';


type ModalUpdateVoiceRoomProps = {
  isModalOpen: boolean;
  modalTitle: string;
  onClose: () => void;
};

function ModalUpdateVoiceRoom({ isModalOpen, modalTitle, onClose }: ModalUpdateVoiceRoomProps) {
  const voiceroom = useSelector((state: RootState) => state.voiceroom);

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [limit, setLimit] = useState(100);
  const [isDisabled, setIsDisabled] = useState(true);

  const { updateTitle, updateNote, updateLimit } = useVoiceRoomUpdate();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 30) {
      setTitle(e.target.value);
    }
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 50) {
      setNote(e.target.value);
    }
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = parseInt(e.target.value, 10);
    if (newLimit <= 100) {
      setLimit(newLimit);
    }
  };

  useEffect(() => {
    if (
      (title !== voiceroom.title || title.length > 0) &&
      (note !== voiceroom.note || note.length > 0) &&
      (limit !== voiceroom.limit || limit > 0)
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [title, note, limit, voiceroom.title, voiceroom.note, voiceroom.limit]);

  const { handleVoiceRoomViewNavigate } = useCustomNavigate();

  const handleCreateVoiceRoom = () => {
    updateTitle(title);
    updateNote(note);
    updateLimit(limit);
    handleVoiceRoomViewNavigate();
  };

  return (
    <ModalWithClose
      open={isModalOpen}
      onClose={onClose}
      title={modalTitle}
      actions={
        <ButtonBasic
          label="정보 수정" variant="contained" color="primary"
          disabled={isDisabled}
          onClick={handleCreateVoiceRoom}
        />
      }
    >
      <Stack spacing={2} sx={{ width: 400 }}>
        <TextField
          label="" placeholder={voiceroom.title} fullWidth
          onChange={handleTitleChange}
          inputProps={{ maxLength: 30 }}
          InputProps={{
            endAdornment: (
              <Typography variant="body2" color="#606060">{`${title.length}/30`}</Typography>
            )
          }}
        />
        <TextField
          label="" placeholder={voiceroom.note} fullWidth
          multiline rows={3}
          onChange={handleNoteChange}
          inputProps={{ maxLength: 50 }}
          InputProps={{
            endAdornment: (
              <Typography variant="body2" color="#606060">{`${note.length}/50`}</Typography>
            )
          }}
        />
        <Stack direction="row" spacing="auto" alignItems="center">
          <Typography noWrap>제한 인원</Typography>
          <TextField
            type="number" label="" value={voiceroom.limit}
            onChange={handleLimitChange}
            sx={{ width: 150 }}
          />
        </Stack>
      </Stack>
    </ModalWithClose>
  );
}

export default ModalUpdateVoiceRoom;