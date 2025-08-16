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

    // สมมติว่ามีข้อความ "Home" อยู่ในหน้าแรก
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
