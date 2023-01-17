import { render, screen } from "@testing-library/react";
import LoginPage from "@/pages/index";

describe("Home", () => {
   it("renders a heading", () => {
      render(<LoginPage />);

      const heading = screen.getByRole("heading");
      const pageText = "LoginContainer";
      expect(heading).toHaveTextContent(pageText);
   });
});
