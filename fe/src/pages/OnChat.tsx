import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkChatCreation, getOnChatList } from 'services/chatService';
import { setOnChatList, selectOnChatList } from 'redux/onChatSlice';
import { Container, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';
import LayoutAfterLogin from 'components/layout/LayoutAfterLogin';
import SearchBar from 'components/common/SearchBar';
import CategorySelect from 'components/chat/CategorySelect';
import OnChatList from 'components/chat/OnChatList';
import ButtonHasIcon from 'components/common/ButtonHasIcon';
import ModalCreateChat from 'components/chat/ModalCreateChat';
import ModalError from 'components/common/ModalError';

function OnChat() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOnChatList();
        console.log(data);
        dispatch(setOnChatList(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>('');


  const handleSearch = async (query?: string, categories?: string[]) => {
    if (query !== undefined) {
      setKeyword(query);
    }

    if (categories) {
      setSelectedCategories(categories);
    }

    try {
      const data = await getOnChatList(query || keyword, categories || selectedCategories);
      dispatch(setOnChatList(data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenCreationModal = async () => {
    try {
      const response = await checkChatCreation();

      if (response.body === null) {
        setErrorMessage(response.header.message);
        setIsErrorModalOpen(true);
      }
      else if (response.body.result === true) {
        setIsModalOpen(true);
      } else {

      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <LayoutAfterLogin>
        <Container maxWidth="lg">
          <Stack spacing={4} sx={{ paddingTop: 4, paddingBottom: 10 }}>
            <SearchBar onSearch={(query) => handleSearch(query)} />
            <Stack direction="row" spacing="auto">
              <CategorySelect onSelectCategories={(categories) => handleSearch(undefined, categories)} />
              <ButtonHasIcon
                icon={<Add />}
                label="채팅 생성"
                variant="contained"
                onClick={handleOpenCreationModal} // 모달 열기
              />
            </Stack>
            <OnChatList />
          </Stack>
          <ModalCreateChat
            isModalOpen={isModalOpen}
            onClose={handleCloseModal}
            modalTitle="채팅룸 만들기"
          />
        </Container>
        <ModalError
          open={isErrorModalOpen}
          onClose={() => setIsErrorModalOpen(false)}
          errorMessage={errorMessage}
        />
      </LayoutAfterLogin>
    </div>
  );
}

export default OnChat;
