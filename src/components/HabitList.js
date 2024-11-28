import React from "react";
import Habit from "./Habit";

export default function HabitList({ habits, onToggleHabit, onDeleteHabit }) {
  if (habits.length === 0) {
    return <p>No habits added yet. Start tracking your habits!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: "0" }}>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          onToggleHabit={onToggleHabit}
          onDeleteHabit={onDeleteHabit}
        />
      ))}
    </ul>
  );
}
