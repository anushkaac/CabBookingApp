// styles/MyCabsStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cabItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
  cabName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cabModel: {
    fontSize: 16,
    color: '#555',
  },
});
