"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCookieConsent } from '../redux/cookieConsentSlice';

const CookieBanner = () => {
  const dispatch = useDispatch();
  const cookieConsent = useSelector((state) => state.cookieConsent);
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    } else {
      dispatch(setCookieConsent(consent === 'accepted'));
    }
  }, [dispatch]);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    dispatch(setCookieConsent(true));
    setIsVisible(false);
    
    // Réactiver Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    dispatch(setCookieConsent(false));
    setIsVisible(false);
    
    // Désactiver Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  const handleShowPreferences = () => {
    setShowPreferences(true);
    setIsVisible(false);
  };

  const handleClosePreferences = () => {
    setShowPreferences(false);
  };

  // Bouton flottant pour accéder aux préférences
  const FloatingCookieButton = () => (
    <button
      onClick={() => setShowPreferences(true)}
      className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primaryLight text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      title="Gérer les cookies"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Cookies
      </span>
    </button>
  );

  // Modal des préférences
  const PreferencesModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white border border-border rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">🍪 Préférences des cookies</h2>
            <button
              onClick={handleClosePreferences}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Cookies d&apos;analyse</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Ces cookies nous aident à comprendre comment vous utilisez notre site pour l&apos;améliorer.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Google Analytics</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookieConsent.hasConsented}
                    onChange={(e) => {
                      const isEnabled = e.target.checked;
                      localStorage.setItem('cookieConsent', isEnabled ? 'accepted' : 'declined');
                      dispatch(setCookieConsent(isEnabled));
                      if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('consent', 'update', { 
                          analytics_storage: isEnabled ? 'granted' : 'denied' 
                        });
                      }
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted border-2 border-border peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:border-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Bouton flottant - toujours visible */}
      <FloatingCookieButton />
      
      {/* Bannière initiale */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  🍪 Gestion des cookies
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic. 
                  En continuant à naviguer, vous acceptez l&apos;utilisation de cookies à des fins d&apos;analyse. 
                  Vous pouvez modifier vos préférences à tout moment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                <button
                  onClick={handleShowPreferences}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground bg-muted border border-border rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
                >
                  Préférences
                </button>
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm font-medium text-foreground bg-secondary border border-border rounded-md hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
                >
                  Refuser
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary border border-transparent rounded-md hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal des préférences */}
      {showPreferences && <PreferencesModal />}
    </>
  );
};

export default CookieBanner;
