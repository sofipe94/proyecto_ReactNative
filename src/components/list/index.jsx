import { View, FlatList } from "react-native";

import { styles } from "./styles";

const List = ({
  tasks, renderItem
}) => {
  return (
    <View style={styles.inputContainer}>
      <FlatList
          data={tasks}
          renderItem={renderItem}
          style={styles.listContainer}
          convtentContainerStyle={styles.list}
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id}
        />
    </View>
  );
};

export default List;