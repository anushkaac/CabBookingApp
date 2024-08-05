// context/CabContext.js
import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

export const CabContext = createContext();

export const CabProvider = ({ children }) => {
  const [cabs, setCabs] = useState([]);
  const [bookedCabs, setBookedCabs] = useState([]);

  useEffect(() => {
    const fetchCabs = async () => {
      try {
        const cabsCollection = collection(db, 'cabs');
        const cabsSnapshot = await getDocs(cabsCollection);
        const cabsList = cabsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCabs(cabsList.filter(cab => !cab.booked));
        setBookedCabs(cabsList.filter(cab => cab.booked));
      } catch (error) {
        console.error('Error fetching cabs: ', error);
      }
    };

    fetchCabs();
  }, []);

  const bookCab = async (cab) => {
    if (bookedCabs.length >= 2) {
      alert('You cannot book more than 2 cabs at a time.');
      return;
    }

    const cabRef = doc(db, 'cabs', cab.id);
    await updateDoc(cabRef, { booked: true });

    setBookedCabs([...bookedCabs, cab]);
    setCabs(cabs.filter((c) => c.id !== cab.id));
  };

  const cancelBooking = async (cabId) => {
    const cabRef = doc(db, 'cabs', cabId);
    await updateDoc(cabRef, { booked: false });

    const canceledCab = bookedCabs.find((c) => c.id === cabId);
    setCabs([...cabs, canceledCab]);
    setBookedCabs(bookedCabs.filter((cab) => cab.id !== cabId));
  };

  return (
    <CabContext.Provider value={{ cabs, bookedCabs, bookCab, cancelBooking }}>
      {children}
    </CabContext.Provider>
  );
};
