import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

// test("toggles a todo", () => {
//   render(<TodoList />);
//   const todo = screen.getByText("Learn React");
//   fireEvent.click(todo);
//   expect(todo).toHaveStyle("text-decoration: line-through");
// });

test("deletes a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React").closest("li");
  fireEvent.click(todo.querySelector("button")); // Click delete button
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
