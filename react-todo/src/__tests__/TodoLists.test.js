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

test("toggles a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Learn React"));
  expect(screen.getByText("Learn React")).toHaveStyle(
    "text-decoration: line-through"
  );
});

test("deletes a todo", () => {
  render(<TodoList />);
  fireEvent.click(
    screen.getByText("Learn React").closest("li").querySelector("button")
  );
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
