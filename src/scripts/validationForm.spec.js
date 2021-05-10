import validate from "./validateForm";

describe("Validate form test", () => {

    const values = {
        name: "",
        phone: "",
        email: "",
        country: "",
        from: ""
    }

    it("validate empty input", () => {
        const errors = validate(values);
        
        expect(errors.name).toBe("Name is required");
        expect(errors.phone).toBe("Phone is required");
        expect(errors.email).toBe("Email is required");
        expect(errors.country).toBe("Country is required");
    });

    it("validate invalid phone", () => {
        values.phone = "abcdefg";

        const errors = validate(values);

        expect(errors.phone).toBe("Enter a valid phone");
    });

    it("validate invalid email", () => {
        values.email = "abcdefg";

        const errors = validate(values);

        expect(errors.email).toBe("Enter a valid email");
    });

    it("validate without errors", () => {
        values.name = "Test";
        values.phone = "123456789";
        values.email = "test@gmail.com";
        values.country = "Italy";

        const errors = validate(values);

        expect(errors).toEqual({});
    });
})