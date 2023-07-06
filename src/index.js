import { useState } from "react";
import {
  View,
  SafeAreaView,
} from "react-native";

import { InputTask, List, ModalDelete, TaskItem } from "./components";
import { styles } from "./styles";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [borderColor, setBorderColor] = useState("#C5C9E7");

  const onHandlerFocus = () => {
    setBorderColor("#424D9E");
  };

  const onHandlerBlur = () => {
    setBorderColor("#C5C9E7");
  };

  const onHandlerChangeText = (text) => {
    setTask(text);
  };

  const onHandlerCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
      },
    ]);

    setTask("");
  };

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setIsVisible(false);
  };

  const renderItem = ({ item }) => <TaskItem item={item} onPressItem={onHandlerModal} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask
          borderColor={borderColor}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeText}
          onHandlerCreateTask={onHandlerCreateTask}
          onHandlerFocus={onHandlerFocus}
          task={task}
        />
        <List
        tasks={tasks}
        renderItem={renderItem}
        />
      </View>
      <ModalDelete
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      onHandleDelete={onHandleDelete}
      selectedTask={selectedTask}
      />
    </SafeAreaView>
  );
}