import { useDispatch } from 'react-redux';
import {
  Person,
  voiceroomState,
  setVoiceroom,
  setTitle,
  setNote,
  setPersonnel,
  setLimit,
  setStartTime,
  setOwner,
  setPeople,
} from 'redux/voiceroomSlice';

function useVoiceRoomUpdate() {
  const dispatch = useDispatch();

  const updateVoiceroom = (voiceroom: voiceroomState) => {
    dispatch(setVoiceroom(voiceroom));
  };

  const updateTitle = (newTitle: string) => {
    dispatch(setTitle(newTitle));
  };

  const updateNote = (newNote: string) => {
    dispatch(setNote(newNote));
  };

  const updatePersonnel = (newPersonnel: number) => {
    dispatch(setPersonnel(newPersonnel));
  };

  const updateLimit = (newLimit: number) => {
    dispatch(setLimit(newLimit));
  };

  const updateStartTime = (newStartTime: string) => {
    dispatch(setStartTime(newStartTime));
  };

  const updateOwner = (newOwner: Person) => {
    dispatch(setOwner(newOwner));
  };

  const updatePeople = (newPeople: Person[]) => {
    dispatch(setPeople(newPeople));
  };

  return {
    updateVoiceroom,
    updateTitle,
    updateNote,
    updatePersonnel,
    updateLimit,
    updateStartTime,
    updateOwner,
    updatePeople,
  };
}

export default useVoiceRoomUpdate;