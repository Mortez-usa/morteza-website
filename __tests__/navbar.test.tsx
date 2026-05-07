import { render, screen } from "@testing-library/react";
import Navbar from "../src/app/components/Navbar";

describe("Navbar", () => {
  it("renders brand and Projects link", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("link", { name: /Morteza Maddahi/i }),
    ).toHaveAttribute("href", "/");
    const projectsHref = screen
      .getByRole("link", { name: /Projects/i })
      .getAttribute("href");
    expect(projectsHref).toContain("/Projects");
  });
});
