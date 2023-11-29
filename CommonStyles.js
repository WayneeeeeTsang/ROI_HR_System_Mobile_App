import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'left',
    padding: 8,
  },
  navigatorHeading: 
  {
    headerStyle: 
       {
         backgroundColor: '#ffffff',
       },
       headerTintColor: '#595959',
       headerTitleStyle: 
       {
         fontSize: 14,
         fontWeight: 'bold',
       },
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#cb6d4f',
    textAlign: 'left',
    marginBottom: 20,
  },
  contactListItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#595959',
    paddingVertical: 8,
  },
  contactListName: {
  fontSize: 12,
  fontWeight: 'No bold',
  },
  contactDetailContainer: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'left',
    padding: 8,
  },
  contactDetailHeader:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    borderBottomWidth: 2,
    borderColor: '#cb6d4f', 
    backgroundColor: '#D9D9D9', 
    paddingVertical: 15, 
  },
  contactDetailBox: {
    borderBottomWidth: 1, // Border bottom for each line
    borderColor: '#cb6d4f', // Border color
    backgroundColor: '#D9D9D9', // Background color
    paddingVertical: 10, // Adjust the padding as needed
    marginBottom: 5,
    fontSize: 12,
    fontWeight: 'bold',
    padding: 8,
  },
  contactDetailButton: {
    backgroundColor: '#c64c38', // Background color
    padding: 10, // Padding around the button text
    borderRadius: 5, // Border radius to round the corners
    borderWidth: 1, // Border width
    borderColor: '#cb6d4f', // Border color
    marginBottom: 5,
    textAlign: 'center',
  },
  contactDetailButtonText:{
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  editContactContainer:{
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'left',
    padding: 8,
  },
  editContactTitle:{
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputTextBox: {
    height: 40,
    borderColor: '#cb6d4f',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  contactItem: {
    marginBottom: 10,
  },
  deleteButton: {
     width: 30,
     height: 30,
     borderRadius: 5,
     borderWidth: 2,
     borderColor: "#000",
     backgroundColor: "green"
  },
  deleteText: {
     textAlign: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskItem: {
    marginTop: 30,
  },
  description: {
    fontSize: 16,
  },
});