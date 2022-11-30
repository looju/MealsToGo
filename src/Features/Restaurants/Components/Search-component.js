import React, { useContext, useState, useEffect } from "react";
import { Searchbar} from "react-native-paper";
import {View} from 'react-native'
import { LocationContext } from "../../../Services/Location/Location-context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(()=>{
    setSearchKeyword(keyword)
    },[keyword])  // this way, when the search component in the map screen updates the keyword, the useEffect updates the keyword locally to the value of the keyword from the context API

  return (
    <View style={{ padding: 10, bottom:5}}>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        icon="archive-search-outline"
      />
    </View>
  );
};


