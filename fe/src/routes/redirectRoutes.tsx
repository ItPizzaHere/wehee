import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OAuthRedirectHandler from 'components/redirectHandler/OAuth';

const RedirectRoutes = () => {
  return (
    <Routes>
      <Route path="/oauth/redirect" element={<OAuthRedirectHandler />} />
    </Routes>
  );
};

export default RedirectRoutes;
