import React,{useState} from "react";
import { ScrollView, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RestaurantInfoCard } from "../Components/restaurant-info-card";
import { List } from 'react-native-paper';
export const RestaurantDetails = ({ route }) => {
  const { restaurant } = route.params;

  const ListAccordion = () => {
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded); // to control the expansion of the accordion
    return (
      <List.Section>
        <List.Accordion
          title="Breakfast"
          left={(props) => (
            <List.Icon {...props} icon="bowl-mix" color="#A020F0" />
          )}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item title="Eggs"  left={props => <List.Icon {...props} icon="egg" color="#808080" />}/>
          <List.Item title="Oats"  left={props => <List.Icon {...props} icon="bowl" color="#808080" />}/>
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="rice" color="#A020F0" />}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item title="Rice"  left={props => <List.Icon {...props} icon="rice" color="#808080" />}/>
          <List.Item title="Cookie"  left={props => <List.Icon {...props} icon="cookie" color="#808080" />}/>
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon {...props} icon="bread-slice" color="#A020F0" />
          )}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item title="spaghetti"  left={props => <List.Icon {...props} icon="noodles" color="#808080" />}/>
          <List.Item title="Chiili"  left={props => <List.Icon {...props} icon="chili-hot" color="#808080" />}/>
        </List.Accordion>
      </List.Section>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
      <RestaurantInfoCard restaurant={restaurant} />
      <ListAccordion />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
