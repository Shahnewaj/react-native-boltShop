import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResult from '../hook/useResult';

const SearchScreen = (props) => {
  const [term, setTerm] = useState('');
  const [results, handleSearchApi, errormsg] = useResult();

  const filterResult = (price) => {
    return results.filter((result) => result.price === price);
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => handleSearchApi(term)}
      />
      <Text>{errormsg}</Text>

      <ScrollView>
        <ResultList result={filterResult('$')} title="Cost Effective " />
        <ResultList result={filterResult('$$')} title="Bit Pricer " />
        <ResultList result={filterResult('$$$')} title="Spender " />
      </ScrollView>
    </>
  );
};

SearchScreen.navigationOptions = (navData) => ({
  headerTitle: 'Search Business',
});
const styles = StyleSheet.create({
  SearchMain: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default SearchScreen;
