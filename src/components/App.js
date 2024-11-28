import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, SetHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    // TODO: write code to add a new habit here
    SetHabits([...habits, { id: Date.now(), name: habitName, completed: false }]);

  };

  const handleToggleHabit = (id) => {
    // TODO: write code to toggle a habit's status
    SetHabits(habits.map((habit) => (habit.id === id ? { ...habit, completed: !habit.completed } : habit)));

  };

  const handleDeleteHabit = (id) => {
    // TODO: write code to delete a habit
    SetHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
        {/*TODO: add a form to add a new habit*/}
      <AddHabitForm onAddHabit={handleAddHabit} />
      {/*TODO: add a list of habits*/}
      <HabitList
        habits={habits}
        onToggleHabit={handleToggleHabit}
        onDeleteHabit={handleDeleteHabit}
      />
    </div>
  );
}

export default App;
