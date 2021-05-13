export default class ValidationUser {

    /**
     * Validates if the user object has empty fields
     * @param {Object} user 
     * @returns Boolean
     */
    validateUser(user) {
        if (!user.name || !user.phone || !user.email || !user.country || !user.radio || user.preferences.lenght === 0) {
            return false;
        }
        return true;
    }
}