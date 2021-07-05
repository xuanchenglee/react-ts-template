import { cleanup, render, screen } from "@testing-library/react";
import ClickCounter from "./ClickCounter";

describe("<ClickCounter />", () => {
  beforeEach(cleanup);

  test("should render in document", () => {
    render(<ClickCounter />);
    const clickCounterElement = screen.getByTestId("clickCounter-1");
    expect(clickCounterElement).toBeInTheDocument();
    expect(clickCounterElement).toHaveTextContent("Count 0");
  });

  test("should render Count 1 after clicking the button", () => {
    render(<ClickCounter />);
    const clickCounterElement = screen.getByTestId("clickCounter-1");
    const btn: HTMLButtonElement = clickCounterElement.getElementsByTagName(
      "button"
    )[0] as HTMLButtonElement;
    btn.click();
    expect(clickCounterElement).toHaveTextContent("Count 1");
  });
});
