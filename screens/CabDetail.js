// screens/CabDetail.js
import React, { useContext } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { CabContext } from '../context/CabContext';
import CabDetailStyles from '../styles/CabDetailStyles';

const CabDetail = ({ route, navigation }) => {
  const { cab } = route.params;
  const { bookCab } = useContext(CabContext);

  const handleBook = () => {
    bookCab(cab);
    Alert.alert('Success', 'You have booked the cab.');
    navigation.navigate('My Cabs');
  };

  return (
    <View style={CabDetailStyles.container}>
      <Text style={CabDetailStyles.cabName}>{cab.companyName}</Text>
      <Text style={CabDetailStyles.cabModel}>Model: {cab.model}</Text>
      <Text>Passengers: {cab.passengers}</Text>
      <Text>Rating: {cab.rating}</Text>
      <Text>Cost/Hour: {cab.costPerHour}</Text>
      <Button title="Book Cab" onPress={handleBook} />
    </View>
  );
};

export default CabDetail;
