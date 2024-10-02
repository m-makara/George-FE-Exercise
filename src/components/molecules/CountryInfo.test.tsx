import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { CountryInfo } from "./CountryInfo"; // Adjust the path as needed

describe("CountryInfo Component", () => {
  it("renders CountryFlag and CurrencyNameWrapper with correct props", () => {
    const name = "US Dollar";
    const currency = "USD";

    render(<CountryInfo name={name} flagCode="us" currency={currency} />);
    const currencyWrapper = screen.getByText(name);
    expect(currencyWrapper).toBeInTheDocument();
    expect(screen.getByText(currency)).toBeInTheDocument();
  });

  it("renders correctly when name is not provided", () => {
    render(<CountryInfo flagCode="jp" currency="JPY" />);

    expect(screen.queryByText("Japanese Yen")).not.toBeInTheDocument();
    expect(screen.getByText("JPY")).toBeInTheDocument();
  });
});
