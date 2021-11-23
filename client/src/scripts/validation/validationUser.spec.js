import ValidationUser from "./validationUser";

describe("Validation user test", () => {

    const validationUser = new ValidationUser();

    it("should validate an empty user", () => {
        const user = {
            name: "",
            phone: "",
            email: "",
            country: "",
            from: 10000,
            to: 200000,
            radio: "",
            preferences: []
        }; 
        
        const valid = validationUser.validateUser(user);

        expect(valid).toBeFalsy();
    });

    it("should validate a complete user", () => {
        const user = {
            name: "Test",
            phone: "055055055",
            email: "test@test.com",
            country: "Italy",
            from: 10000,
            to: 200000,
            radio: true,
            preferences: ["Test"]
        };

        const valid = validationUser.validateUser(user);

        expect(valid).toBeTruthy();
    });
})