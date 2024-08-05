// screens/CabsList.js
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CabContext } from '../context/CabContext';
import CabsListStyles from '../styles/CabsListStyles';

const CabsList = ({ navigation }) => {
  const { cabs } = useContext(CabContext);

  return (
    <View style={CabsListStyles.container}>
      <FlatList
        data={cabs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CabDetail', { cab: item })}
            style={CabsListStyles.cabItem}
          >
            <Text style={CabsListStyles.cabName}>{item.companyName}</Text>
            <Text style={CabsListStyles.cabModel}>{item.model}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CabsList;
