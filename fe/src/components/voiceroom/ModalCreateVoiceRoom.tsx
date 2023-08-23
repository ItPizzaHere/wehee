import React, { useState, useEffect } from 'react';
import useVoiceRoomUpdate from '../../hooks/useVoiceRoomUpdate';
import { Stack, TextField, Typography } from '@mui/material';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import ModalWithClose from 'components/common/ModalWithClose';
import ButtonBasic from 'components/common/ButtonBasic';
import { VoiceInfo, postNewVoice } from 'services/voiceService';
import { useNavigate } from 'react-router-dom';


type ModalCreateVoiceRoomProps = {
  isModalOpen: boolean;
  modalTitle: string;
  onClose: () => void;
};

function ModalCreateVoiceRoom({ isModalOpen, modalTitle, onClose }: ModalCreateVoiceRoomProps) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [limit, setLimit] = useState(100);
  const [isDisabled, setIsisDisabled] = useState(true);

  const navigate = useNavigate();

  const { updateTitle, updateNote, updateLimit, updateStartTime } = useVoiceRoomUpdate();

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;

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
    if (title.length > 0 && note.length > 0 && limit > 0) {
      setIsisDisabled(false);
    } else {
      setIsisDisabled(true);
    }
  }, [title, note, limit]);

  const { handleVoiceRoomViewHostNavigate } = useCustomNavigate();

  const handleCreateVoiceRoom = () => {
    updateTitle(title);
    updateNote(note);
    updateLimit(limit);
    updateStartTime(formattedTime);
    handleVoiceRoomViewHostNavigate();
  };

  // const handleCreateVoiceRoom = async () => {
  //   if (title && note && limit > 0) {
  //     const voiceInfo: VoiceInfo = {
  //       title: title,
  //       description: note,
  //       limit: limit,
  //     };
  //     try {
  //       const response = await postNewVoice(voiceInfo);
  //       console.log('Voice Room 생성 성공:', response);
  //       // handleVoiceRoomViewNavigate();
  //       if (response.data.body.voiceroom) {
  //         const room_id = response.data.body.voiceroom;
  //         // navigate(`/voiceroom/view/${room_id}`);
  //         handleVoiceRoomViewHostNavigate();
  //       } else {
  //           console.error('room_id가 존재하지 않습니다');
  //       }
  //     } catch (error) {
  //       console.error('Voice Room 생성 실패:', error);
  //       throw error;
  //     }
  //   } else {
  //     console.warn('제목, 설명, 제한 인원을 모두 입력하세요.');
  //   }
  // };



  return (
    <ModalWithClose
      open={isModalOpen}
      onClose={onClose}
      title={modalTitle}
      actions={
        <ButtonBasic
          label="보이스룸 생성" variant="contained" color="primary"
          disabled={isDisabled}
          onClick={handleCreateVoiceRoom}
        />
      }
    >
      <Stack spacing={2} sx={{ width: 400 }}>
        <TextField
          label="" placeholder="제목을 작성하세요" fullWidth
          onChange={handleTitleChange}
          inputProps={{ maxLength: 30 }}
          InputProps={{
            endAdornment: (
              <Typography variant="body2" color="#606060">{`${title.length}/30`}</Typography>
            )
          }}
        />
        <TextField
          label="" placeholder="설명을 작성하세요" fullWidth
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
            type="number" label="" value={limit}
            onChange={handleLimitChange}
            sx={{ width: 150 }}
          />
        </Stack>
      </Stack>
    </ModalWithClose>
  );
}

export default ModalCreateVoiceRoom;