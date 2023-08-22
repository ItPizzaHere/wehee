import { useDispatch } from 'react-redux';
import { Person, Message, chatState, setChat, setChatInfo, setChatId, setOwner, setTitle, setCategory, setLimit, setPersonnel, setPeople, setNotice, setSelectedMBTI, setGender, setAgeRange, setMessages, addPerson, removePerson, addMessage } from 'redux/chatSlice';

function useChatUpdate() {
  const dispatch = useDispatch();

  const updateChat = (chat: chatState) => {
    dispatch(setChat(chat));
  };

  const updateChatInfo = (info: { id: number; title: string; category: string; limit: number; personnel: number; people: Person[] }) => {
    dispatch(setChatInfo(info));
  };  

  const updateChatId = (newChatId: number) => {
    dispatch(setChatId(newChatId));
  };

  const updateOwner = (newOwner: Person) => {
    dispatch(setOwner(newOwner));
  };

  const updateTitle = (newTitle: string) => {
    dispatch(setTitle(newTitle));
  };

  const updateCategory = (newCategory: string) => {
    dispatch(setCategory(newCategory));
  };

  const updateLimit = (newLimit: number) => {
    dispatch(setLimit(newLimit));
  };

  const updatePersonnel = (newPersonnel: number) => {
    dispatch(setPersonnel(newPersonnel));
  };

  const updatePeople = (newPeople: Person[]) => {
    dispatch(setPeople(newPeople));
  };

  const updateNotice = (newNotice: string) => {
    dispatch(setNotice(newNotice));
  };

  const updateSelectedMBTI = (newSelectedMBTI: string[]) => {
    dispatch(setSelectedMBTI(newSelectedMBTI));
  };

  const updateGender = (newGender: string) => {
    dispatch(setGender(newGender));
  };

  const updateAgeRange = (newAgeRange: number[]) => {
    dispatch(setAgeRange(newAgeRange));
  };

  const updateMessages = (newMessages: Message[]) => {
    dispatch(setMessages(newMessages));
  };

  const addNewPerson = (person: Person) => {
    dispatch(addPerson(person));
  };

  const removeExistingPerson = (nickname: string) => {
    dispatch(removePerson(nickname));
  };

  const addNewMessage = (message: Message) => {
    dispatch(addMessage(message));
  };

  return {
    updateChat,
    updateChatInfo,
    updateChatId,
    updateOwner,
    updateTitle,
    updateCategory,
    updateLimit,
    updatePersonnel,
    updatePeople,
    updateNotice,
    updateSelectedMBTI,
    updateGender,
    updateAgeRange,
    updateMessages,
    addNewPerson,
    removeExistingPerson,
    addNewMessage,
  };
}

export default useChatUpdate;