import { useDispatch } from 'react-redux';
import { UserState, setUser, setUserSign, setUserId, setNickname, setMBTI, setGender, setBirth, setDuplicate, setCanModifyMBTI, setCanModifyGender, setCanModifyBirth, } from 'redux/userSlice';

function useUserUpdate() {
  const dispatch = useDispatch();

  const updateUser = (originalUser: UserState) => {
    dispatch(setUser(originalUser));
  };

  const updateUserSign = (newSign: boolean) => {
    dispatch(setUserSign(newSign));
  };

  const updateUserId = (newUserId: number) => {
    dispatch(setUserId(newUserId));
  };

  const updateNickname = (newNickname: string) => {
    dispatch(setNickname(newNickname));
  };

  const updateMBTI = (newMBTI: string) => {
    dispatch(setMBTI(newMBTI));
  };

  const updateGender = (newGender: string) => {
    dispatch(setGender(newGender));
  };

  const updateBirth = (newBirth: string) => {
    dispatch(setBirth(newBirth));
  };

  const updateDuplicate = (newDuplicate: boolean) => {
    dispatch(setDuplicate(newDuplicate));
  };

  const updateCanModifyMBTI = (newCanModifyMBTI: boolean) => {
    dispatch(setCanModifyMBTI(newCanModifyMBTI));
  };

  const updateCanModifyGender = (newCanModifyGender: boolean) => {
    dispatch(setCanModifyGender(newCanModifyGender));
  };

  const updateCanModifyBirth = (newCanModifyBirth: boolean) => {
    dispatch(setCanModifyBirth(newCanModifyBirth));
  };

  return {
    updateUser,
    updateUserSign,
    updateUserId,
    updateNickname,
    updateMBTI,
    updateGender,
    updateBirth,
    updateDuplicate,
    updateCanModifyMBTI,
    updateCanModifyGender,
    updateCanModifyBirth,
  };
}

export default useUserUpdate;
