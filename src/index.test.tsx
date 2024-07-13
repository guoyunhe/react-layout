import { render, screen } from "@testing-library/react";
import { ReactLayout } from ".";

describe("ReactLayout", () => {
  it("render", async () => {
    render(<ReactLayout>foobar</ReactLayout>);
    await screen.findByText("foobar");
  });
});
