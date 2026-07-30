import { createContext, useContext, useState, useCallback } from 'react';

const QuoteModalContext = createContext(null);

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteModal = useCallback(() => setIsOpen(true), []);
  const closeQuoteModal = useCallback(() => setIsOpen(false), []);

  return (
    <QuoteModalContext.Provider value={{ isOpen, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  return ctx;
}
