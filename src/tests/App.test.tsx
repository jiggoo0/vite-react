import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AppRouter from "@/Router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeProvider";

describe("AppRouter", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    );

    // สมมติว่ามีข้อความ "Home" อยู่ในหน้าแรก
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
