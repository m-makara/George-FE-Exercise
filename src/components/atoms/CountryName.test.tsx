import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { CountryName } from "./CountryName";

describe("CountryName Component", () => {
  test("renders the CountryName component correctly", () => {
    const name = "Japanese Yen";
    render(<CountryName name={name} />);
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
