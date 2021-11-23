import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { renderHook, act } from '@testing-library/react-hooks';
import useForm from "./useForm";

import { UserContext, UserProvider } from "../../context/UserContext";

describe("use form test", () => {

    afterEach(cleanup);

    //const { handleChange, values, handleSubmit, errors } = useForm();

    it("should handle the changes of the user object", () => {
        //const wrapper = ({ children }) => <UserProvider>{children}</UserProvider>;
        /*const user = {
            name: "",
            phone: "",
            email: "",
            country: "",
            from: 10000,
            to: 200000,
            radio: "",
            preferences: []
        };
        const wrapper = ({ wrapper }) => <UserProvider values={[user]}>{children}</UserProvider>;

        const { result } = renderHook(() => useForm(), { wrapper });
        console.log(useForm().handleChange({}));*/
        /*const e = {
            target: {
                name: "name",
                value: "Angela"
            }
        }
 
        act(() => result.current.handleChange(e));
       console.log(); */
    });
})