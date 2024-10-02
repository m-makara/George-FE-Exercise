import { render, screen } from "@testing-library/react";
import { CountryCurrency } from "./CountryCurrency";
import { describe, test, expect } from "vitest";

describe("CountryCurrency Component", () => {
  test("renders the CountryCurrency component correctly", () => {
    const currency = "USD";
    render(<CountryCurrency currency={currency} />);
    expect(screen.getByText(/Currency:/i)).toBeInTheDocument();
    expect(screen.getByText(currency)).toBeInTheDocument();
  });
});
