import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { CountryFlag } from "./CountryFlag";

describe("CountryFlag Component", () => {
  test("renders the flag image correctly", () => {
    render(<CountryFlag flagCode="us" />);

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/flags/us.png");
  });

  test("hides the image when onError is triggered", () => {
    render(<CountryFlag flagCode="invalid" />);
    const img = screen.getByRole("img");
    fireEvent.error(img);
    expect(img).not.toBeInTheDocument();
  });
});
