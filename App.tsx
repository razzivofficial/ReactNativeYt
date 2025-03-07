import {useState} from 'react';
import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    console.log('Pressed');
    setSubmittedText(text);
    setText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Kya re beekhmagia</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={text}
        onChangeText={newText => setText(newText)}
      />
      <Button title="Submit" onPress={handleSubmit} color="#fff" />
      {submittedText ? (
        <Text style={styles.resultText}>Results: {submittedText}</Text>
      ) : null}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8', // Lighter background color
    padding: 20,
    gap: 15,
  },
  title: {
    fontSize: 28, // Increased title font size for better visibility
    fontWeight: '700',
    color: '#3e3e3e', // Darker text color for title
    marginBottom: 20, // Adds space below the title
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10, // Rounded corners
    borderWidth: 2,
    borderColor: '#007BFF', // Blue border color for input
    backgroundColor: '#fff', // White background for input
    marginBottom: 20, // Adds space below the input field
    fontSize: 16, // Slightly larger font size
  },
  resultText: {
    fontSize: 18, // Larger text for results
    fontWeight: '500',
    color: '#28a745', // Green color for the result
    marginTop: 20, // Adds space before the result text
  },
  button: {
    backgroundColor: '#007BFF', // Blue button background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 10,
  },
});
