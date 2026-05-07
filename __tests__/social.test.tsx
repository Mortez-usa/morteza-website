import { render, screen } from "@testing-library/react";
import Social from "../src/app/components/Social";

describe("Social", () => {
  it("renders all social links with correct destinations", () => {
    render(<Social />);

    const links = screen.getAllByRole("link") as HTMLAnchorElement[];
    const hrefs = links.map((link) => link.getAttribute("href"));

    expect(links).toHaveLength(5);
    expect(hrefs).toEqual([
      "https://github.com/Mortez-usa",
      "https://www.instagram.com/mortezaauss/",
      "https://www.linkedin.com/in/morteza-maddahi/",
      "https://twitter.com/MortezaMaddahi",
      "https://www.youtube.com/@mortezamaddahi7617/videos",
    ]);
  });
});
