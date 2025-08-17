import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AppRouter from "@/Router/AppRouter";
import AppProviders from "@/context/AppProviders";

describe("AppRouter", () => {
  it("renders without crashing", () => {
    render(
      <AppProviders>
        <AppRouter />
      </AppProviders>
    );

    const homeLink = screen.getByRole("link", { name: /หน้าแรก/i });
    expect(homeLink).toBeInTheDocument();
  });
});
