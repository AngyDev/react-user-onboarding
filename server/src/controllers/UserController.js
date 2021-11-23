import { UserModel } from '../models/UserModel';

export class UserController {
    static getUsers() {
        return UserModel.query().select().orderBy('created_at');
    }

    static getUserById(id) {
        return UserModel.query().findById(id);
    }

    static createUser(user) {
        return UserModel.query().insert({
            name: user.name,
            phone: user.phone,
            email: user.email,
            country: user.country,
            from: user.from,
            to: user.to,
            radio: user.radio,
            preferences: user.preferences
        })
    }

    static deleteUser(id) {
        return UserModel.query().deleteById(id);
    }
}