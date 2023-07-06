import { Modal, View, Button, Text } from "react-native";

import { styles } from "./styles";

const ModalDelete = ({
    isVisible, setIsVisible, onHandleDelete, selectedTask
}) => {
  return (
    <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Cancel" color="#424D9E" onPress={() => setIsVisible(false)} />
            <Button title="Delete" color="red" onPress={() => onHandleDelete(selectedTask?.id)} />
          </View>
        </View>
      </Modal>
  );
};

export default ModalDelete;