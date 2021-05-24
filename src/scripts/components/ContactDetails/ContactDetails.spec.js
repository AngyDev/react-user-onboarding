import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Input from "../Input/Input";

Enzyme.configure({ adapter: new Adapter() });

import ContactDetails from "./ContactDetails";

describe("Contact details test", () => {

    afterEach(cleanup);

    /**
     * Render the contact details component
     * @returns The render of the contact details component
     */
    function renderContactDetails() {
        return render(
            <ContactDetails />
        );
    }

    it("should render the contact component", () => {
        renderContactDetails();
        expect(screen.getByTestId("contact")).toBeInTheDocument();

    });

    it("should render the form in the component", () => {
        renderContactDetails();
        expect(screen.getByTestId("contact-form")).toBeInTheDocument();
    });

    it("should render the full name label in the component", () => {
        renderContactDetails();
        expect(screen.getByText("Full name")).toBeInTheDocument();
    });

    it("should render three input field", () => {
        renderContactDetails();
        expect(screen.queryAllByTestId("input")).toHaveLength(3);
    });

    it("should render name field", () => {
        renderContactDetails();
        expect(screen.getByText("Full name")).toBeTruthy();
    });

    it("change value on input change", () => {
        renderContactDetails();
        const input = screen.getByLabelText(/name/i);
        const inputValue = "Angela";
        const mockChange = jest.fn();

        expect(input.value).toEqual("");
        input.onChange = mockChange;
        fireEvent.change(input, { target: { value: inputValue } });
        expect(input.value).toBe("Angela");
        //expect(mockChange).toHaveBeenCalled();
    });

    /*it("onChange() is called upon changing the text field", () => {
        /*const value = "Makers Academy";
        const onChange = jest.fn();
        const wrapper = shallow(<ContactDetails onChange={onChange} />);
        const result = wrapper.find('#form-id');
        expect(result.length).toEqual(1);
        expect(wrapper.find(Input)).toHaveLength(3);
        const input = wrapper.find(Input);
        input.simulate('change', { target: { value } });
        expect(onChange.called).toBe(true);
        /*result.simulate('change', {target: {value}});
        expect(onChange.called).toBe(true);*/

        /*const wrapper = shallow(<ContactDetails />);
        const instance = wrapper.instance();

        jest.spyOn(instance, 'onChange');

        wrapper.find('select').simulate('change');
        expect(instance.onSubmit).toHaveBeenCalled();
    });*/

});