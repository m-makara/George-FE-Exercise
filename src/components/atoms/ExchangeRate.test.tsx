import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ExchangeRate } from "./ExchangeRate";

describe("ExchangeRate Component", () => {
  test("renders the component correctly with exchangeRate and currency", () => {
    const exchangeRate = 1.25;
    const currency = "USD";
    render(<ExchangeRate exchangeRate={exchangeRate} currency={currency} />);
    expect(screen.getByText(exchangeRate)).toBeInTheDocument();
    expect(screen.getByText(currency)).toBeInTheDocument();
  });
});
