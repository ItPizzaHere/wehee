import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import { Add } from '@mui/icons-material';
import SearchBar from 'components/common/SearchBar';
import VoiceRoomList from 'components/voiceroom/VoiceRoomList';
import ButtonHasIcon from 'components/common/ButtonHasIcon';
import ModalCreateVoiceRoom from 'components/voiceroom/ModalCreateVoiceRoom';

function VoiceRoomHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    // 여기서 검색 요청
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Stack spacing={4} sx={{ paddingTop: 4, paddingBottom: 10 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={{ flex: 1 }}>
            <SearchBar onSearch={handleSearch} />
          </Box>
          <ButtonHasIcon
            icon={<Add />}
            label="보이스룸 생성"
            variant="contained"
            onClick={handleOpenModal} // 모달 열기
          />
        </Stack>
        <VoiceRoomList />
      </Stack>
      <ModalCreateVoiceRoom
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        modalTitle="보이스룸 만들기"
      />
    </div>
  );
}

export default VoiceRoomHome;