 import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

test("render counter with initial value 0", () => {
  render(<Counter />);
  const countText = screen.getByTestId("count-value");
  expect(countText).toHaveTextContent("0");
});

test("increment counter value when increment button is clicked", () => {
  render(<Counter />);
  const button = screen.getByTestId("increment-btn");
  fireEvent.click(button);
  const countText = screen.getByTestId("count-value");
  expect(countText).toHaveTextContent("1");
});

test("decrement counter value when decrement button is clicked", () => {
  render(<Counter />);
  const button = screen.getByTestId("decrement-btn");
  fireEvent.click(button);
  const valueText = screen.getByTestId("count-value");
  expect(valueText).toHaveTextContent("-1");
});
