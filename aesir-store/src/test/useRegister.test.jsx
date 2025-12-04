import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import useRegister from "../customHooks/useRegister";

describe("useRegister hook", () => {
  it("should return first name and success message on registration", () => {
    const userDetails = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123"
    };

    const { result } = renderHook(() => useRegister(userDetails));

    expect(result.current.name).toBe("John");
    expect(result.current.message).toBe("Registration successful");
  });
});
