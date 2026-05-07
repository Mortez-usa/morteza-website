import { render, screen } from "@testing-library/react";
import Footer from "../src/app/components/Footer";

describe("Footer", () => {
  it("shows the footer attribution", () => {
    render(<Footer />);
    expect(screen.getByText(/@Morteza Maddahi 2035/i)).toBeInTheDocument();
  });
});
