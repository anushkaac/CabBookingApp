// screens/MyCabs.js
import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { CabContext } from '../context/CabContext';
import MyCabsStyles from '../styles/MyCabsStyles';

const MyCabs = () => {
  const { bookedCabs, cancelBooking } = useContext(CabContext);

  return (
    <View style={MyCabsStyles.container}>
      <FlatList
        data={bookedCabs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={MyCabsStyles.cabItem}>
            <Text style={MyCabsStyles.cabName}>{item.companyName}</Text>
            <Text style={MyCabsStyles.cabModel}>{item.model}</Text>
            <Button title="Cancel Booking" onPress={() => cancelBooking(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default MyCabs;
