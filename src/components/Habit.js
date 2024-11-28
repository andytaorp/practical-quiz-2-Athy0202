import React, { useState } from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * @param {Object} props - Props passed to the component.
 * @param {Object} props.habit - The habit object containing id and name.
 * @param {Function} props.onToggleHabit - Callback to toggle habit state.
 * @param {Function} props.onDeleteHabit - Callback to delete the habit.
 */
export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
    const [completed, setCompleted] = useState(false);

    // Toggle the habit's completion state
    const handleToggle = () => {
        setCompleted(!completed);
        onToggleHabit(habit.id);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleToggle}
            />
            <span style={{ textDecoration: completed ? "line-through" : "none" }}>
                {habit.name}
            </span>
            <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
        </li>
    );
}
