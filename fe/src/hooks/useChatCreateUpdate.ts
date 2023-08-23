import { useDispatch } from 'react-redux';
import {
  Person,
  ChatCreateState,
  setChatCreate,
  setOwner,
  setTitle,
  setCategory,
  setLimit,
  setSelectedMBTI,
  setGender,
  setAgeRange,
  setIsCreateButtonEnabled,
  resetChatCreate,
} from 'redux/chatCreateSlice';

function useChatCreateUpdate() {
  const dispatch = useDispatch();

  const updateChatCreate = (chatCreate: ChatCreateState) => {
    dispatch(setChatCreate(chatCreate));
  };

  const updateOwner = (newOwner: Person) => {
    dispatch(setOwner(newOwner));
  }

  const updateTitle = (newTitle: string) => {
    dispatch(setTitle(newTitle));
  };

  const updateCategory = (newCategory: string) => {
    dispatch(setCategory(newCategory));
  };

  const updateLimit = (newLimit: number) => {
    dispatch(setLimit(newLimit));
  };

  const updateSelectedMBTI = (newSelectedMBTI: string[]) => {
    dispatch(setSelectedMBTI(newSelectedMBTI));
  };
  
  const resetSelectedMBTI = () => {
    dispatch(setSelectedMBTI([]));
  };

  const updateGender = (newGender: string) => {
    dispatch(setGender(newGender));
  };

  const updateAgeRange = (newAgeRange: number[]) => {
    dispatch(setAgeRange(newAgeRange));
  };

  const updateIsCreateButtonEnabled = (newIsCreateButtonEnabled: boolean) => {
    dispatch(setIsCreateButtonEnabled(newIsCreateButtonEnabled));
  };

  const updateChatCreateInit = () => {
    dispatch(resetChatCreate());
  }

  return {
    updateChatCreate,
    updateOwner,
    updateTitle,
    updateCategory,
    updateLimit,
    updateSelectedMBTI, resetSelectedMBTI,
    updateGender,
    updateAgeRange,
    updateIsCreateButtonEnabled,
    updateChatCreateInit,
  };
}

export default useChatCreateUpdate;