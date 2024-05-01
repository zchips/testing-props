import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

const NumberDisplay = ({ number }) => {
  return (
    <div>
      <span data-testid="number-display">{number}</span>
    </div>
  )
}

test("calling render with multiple props", () => {
  // The {rerender} method is returned by render()
  const { rerender } = render(<NumberDisplay number={1} />)
  expect(screen.getByTestId("number-display")).toHaveTextContent("1")
  rerender(<NumberDisplay number={2} />)
  expect(screen.getByTestId("number-display")).toHaveTextContent("2")
})