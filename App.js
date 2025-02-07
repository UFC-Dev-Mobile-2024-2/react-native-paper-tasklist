import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Card, Checkbox, IconButton, List, Text } from "react-native-paper";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() && !tasks.some((t) => t.text === task.trim())) {
      setTasks([...tasks, { text: task.trim(), completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.header}>
        Lista de Tarefas
      </Text>
      <TextInput
        label="Nova Tarefa"
        value={task}
        onChangeText={setTask}
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={addTask} style={styles.addButton}>
        Adicionar Tarefa
      </Button>
      <List.Section>
        {tasks.map((t, index) => (
          <Card key={index} style={styles.card}>
          {/* ESCREVA SEU CARD AQUI */}

          </Card>
        ))}
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
  },
  addButton: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 8,
  },
});
