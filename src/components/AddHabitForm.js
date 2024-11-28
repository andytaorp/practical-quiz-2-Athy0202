import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName.trim()) {
      setError("Habit name cannot be empty.");
      return;
    }
    setError("");
    onAddHabit(habitName);
    setHabitName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Habit"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button type="submit">Add Habit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
