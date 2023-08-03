import { createAction } from '@reduxjs/toolkit';

// createAction을 사용 -> 액션 생성자 함수를 정의
export const loginAction = createAction('LOGIN');
export const logoutAction = createAction('LOGOUT');