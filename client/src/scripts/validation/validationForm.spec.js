import Validation from "./validationForm";

describe("Validate form test", () => {

    const values = {
        name: "",
        phone: "",
        email: "",
        country: "",
        from: "",
        to: "",
        radio: ""
    }

    const validation = new Validation();

    it("validate empty input", () => {
        const errors = validation.validateContact(values);

        expect(errors.name).toBe("Name is required");
        expect(errors.phone).toBe("Phone is required");
        expect(errors.email).toBe("Email is required");
        expect(errors.country).toBe("Country is required");
    });

    it("validate invalid phone", () => {
        values.phone = "abcdefg";

        const errors = validation.validateContact(values);

        expect(errors.phone).toBe("Enter a valid phone");
    });

    it("validate invalid email", () => {
        values.email = "abcdefg";

        const errors = validation.validateContact(values);

        expect(errors.email).toBe("Enter a valid email");
    });

    it("validate without errors", () => {
        values.name = "Test";
        values.phone = "123456789";
        values.email = "test@gmail.com";
        values.country = "Italy";

        const errors = validation.validateContact(values);

        expect(errors).toEqual({});
    });

    it("validate investment plans empty inputs", () => {
        const errors = validation.validateInvestmentPlans(values);

        expect(errors.from).toBe("From is required");
        expect(errors.to).toBe("To is required");
        expect(errors.radio).toBe("Answer is required");
    });

    it("validate investment preferences empty inputs", () => {
        const values = [];
        const errors = validation.validateInvestmentPreferences(values);

        expect(errors.check).toBe("Answer is required");
    });
})