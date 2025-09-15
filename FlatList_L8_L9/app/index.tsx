import ListItemSseparator from "@/components/ListItemSeperator";
import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {

  type dataType = {
    id: string; //refer to the unique identifier
    title: string; //text we will show in list
  }

  //using all caps because DATA array will not change
  //during its use
  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},
  ];

  // create a simple function telling me what was selected
  const selectedList = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id);
  };

  //add a state var to keep track of which id is selected
  const [selectedId, setSelectedId] = useState<string>("1")


  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            extraData={selectedId}
            keyExtractor={(item: dataType) => item.id}
            ItemSeparatorComponent={() =>
            <ListItemSseparator color={colors.text.light} />}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectedList(item)}>
                  <View style={[
                  styles.flatListRow,
                  {
                    backgroundColor: item.id === selectedId
                      ? colors.primary
                      : colors.secondary,
                  }
                ]}>
                    <Text style={[styles.titleText,
                      {
                        color:
                          item.id === selectedId
                            ? colors.text.light
                            : colors.text.dark,
                      }
                    ]}>{item.title}</Text>
                  </View>
              </TouchableOpacity>
            )
            }
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  flatListRow:{
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
  listText: {
    fontSize: 18,
    padding: 10, 
    textAlign: "center",
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "lightgrey",
    overflow: "hidden",
    textAlignVertical: "center",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 5,
    fontWeight: "bold",
    color: "black",
    textShadowColor: "white",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
