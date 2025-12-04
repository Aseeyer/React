import { test, expect } from "vitest";
import Register from "../auth/Register/Register.jsx";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

test("that the input collects firstName", () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );

  const input = screen.getByLabelText(/First Name/i);
  fireEvent.change(input, { target: { value: "John" } });

  expect(input.value).toBe("John");
});


// test("that the input collects email", () => {
//     const email = "john@example.com";
//     expect(email).toBe("john@example.com");
// });

// test("that the input collects password", () => {
//     const password = "password123";
//     expect(password).toBe("password123");    
// });

// test("that the input collects confirmPassword", () => {
//     const confirmPassword = "password123";
//     expect(confirmPassword).toBe("password123");
// });

// test("that registration is successful", () => {
//     const message = "Registration successful";
//     expect(message).toBe("Registration successful");
// });

// test("that the link to login page works", () => {
//     const link = "/";
//     expect(link).toBe("/");
// });