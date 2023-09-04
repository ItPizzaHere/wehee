import React from 'react';
import ModalWithClose from 'components/common/ModalWithClose';
import ButtonBasic from 'components/common/ButtonBasic';
import NicknameField from 'components/user/NicknameField';
import MBTISelect from 'components/user/MBTISelect';
import GenderSelect from 'components/user/GenderSelect';
import BirthField from 'components/user/BirthField';

interface ModalEditProps {
  isModalOpen: boolean;
  modalTitle: string | null;
  modalContent: "nickname" | "mbti" | "gender" | "birth" | null;
  onClose: () => void;
  onConfirm: () => void;
};

function ModalEdit({isModalOpen, modalTitle, modalContent, onClose, onConfirm } : ModalEditProps){
  return (
    <ModalWithClose
      open={isModalOpen}
      onClose={onClose}
      title={modalTitle}
      actions={<ButtonBasic label="수정" variant="contained" color="primary" onClick={onConfirm} />}
    >
      {modalContent === "nickname" && <NicknameField />}
      {modalContent === "mbti" && <MBTISelect />}
      {modalContent === "gender" && <GenderSelect />}
      {modalContent === "birth" && <BirthField />}
    </ModalWithClose>
  );
};

export default ModalEdit;