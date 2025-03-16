import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate search process, e.g., API call or filtering data
    setTimeout(() => {
      setIsSearching(false);
      // alert(`Searching for: ${searchQuery}`);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Type here to search"
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={handleSearch}
        disabled={isSearching}
      >
        <Text style={styles.buttonText}>{isSearching ? 'Searching...' : 'Search'}</Text>
      </TouchableOpacity>

      {isSearching && <Text style={styles.loadingText}>Please wait...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  searchButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default Search;
