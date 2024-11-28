import React from "react";

export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
  const handleToggle = () => onToggleHabit(habit.id);

  return (
    <li>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={handleToggle}
      />
      <span
        style={{
          textDecoration: habit.completed ? "line-through" : "none",
        }}
      >
        {habit.name}
      </span>
      <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
    </li>
  );
}

