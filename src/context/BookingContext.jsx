import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tabs } from '../data';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState('flights');
  const [searchData, setSearchData] = useState(() => {
    const defaultTab = tabs.flights;
    return {
      service: 'flights',
      fromLabel: defaultTab.fromLabel,
      toLabel: defaultTab.toLabel,
      from: defaultTab.defaultFrom,
      to: defaultTab.defaultTo,
      date: '2026-11-18',
      travellers: '2 adults, 1 child',
    };
  });

  function startBooking(serviceId = 'flights', customSearch = null) {
    const validService = tabs[serviceId] ? serviceId : 'flights';
    setActiveService(validService);

    if (customSearch) {
      setSearchData({ ...customSearch, service: validService });
    } else {
      const tab = tabs[validService];
      setSearchData({
        service: validService,
        fromLabel: tab.fromLabel,
        toLabel: tab.toLabel,
        from: tab.defaultFrom,
        to: tab.defaultTo,
        date: '2026-11-18',
        travellers: '2 adults, 1 child',
      });
    }

    navigate('/booking');
  }

  return (
    <BookingContext.Provider
      value={{
        activeService,
        setActiveService,
        searchData,
        setSearchData,
        startBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
