import { render, screen } from "@testing-library/react";
import Page from "../src/app/(pages)/Home/page";

describe("Home page", () => {
  it("renders intro text and key links", () => {
    render(<Page />);

    expect(screen.getByText(/Hello, I'm Morteza Maddahi/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /architecture design/i }),
    ).toHaveAttribute("href", "https://archinect.com/Morteza-Maddahi");
    expect(screen.getByRole("link", { name: /software/i })).toHaveAttribute(
      "href",
      "https://www.docktorly.com",
    );
    expect(
      screen.getByRole("link", { name: /Science fiction/i }),
    ).toHaveAttribute(
      "href",
      "https://editorial.rottentomatoes.com/guide/essential-sci-fi-movies-of-all-time/",
    );
  });

  it("shows the profile image", () => {
    render(<Page />);
    expect(screen.getByAltText("Picture of the author")).toBeInTheDocument();
  });
});
