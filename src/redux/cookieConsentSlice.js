import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasConsented: false,
  consentGiven: null, // null = pas encore demandé, true = accepté, false = refusé
};

const cookieConsentSlice = createSlice({
  name: 'cookieConsent',
  initialState,
  reducers: {
    setCookieConsent: (state, action) => {
      state.hasConsented = action.payload;
      state.consentGiven = action.payload;
    },
    resetCookieConsent: (state) => {
      state.hasConsented = false;
      state.consentGiven = null;
    },
  },
});

export const { setCookieConsent, resetCookieConsent } = cookieConsentSlice.actions;
export default cookieConsentSlice.reducer;
