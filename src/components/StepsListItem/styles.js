import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'col',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    
    justifyContent: 'left',
    alignItems: 'left'
    // backgroundColor: '#2cd18a'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  }, 
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#2ca18a'
  }, 
  stepHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'flex-start',
  },
  stepContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'flex-start',
  },
});

export default styles;
