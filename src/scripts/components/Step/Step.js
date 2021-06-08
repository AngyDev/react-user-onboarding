import React, { useContext } from "react";
import { Route, Switch } from "react-router";
import { StepContext } from "../../context/StepContext";
import steps from "../../data/steps.json";
import ContactDetails from "../ContactDetails/ContactDetails";
import InvestmentPlans from "../InvestmentPlans/InvestmentPlans";
import InvestmentPreferences from "../InvestmentPreferences/InvestmentPreferences";

export default function Step() {

    const [step, setStep] = useContext(StepContext);

    return (
        <div data-testid="step" name="step" className="flex flex-col">
            <div className="step">
                <div className="step__title">{steps.stepPage[step].title}</div>
                <div className="step__caption">{steps.stepPage[step].caption}</div>
            </div>
            <Switch>
                <Route exact path="/" component={ContactDetails} />
                <Route path="/step2" component={InvestmentPlans} />
                <Route path="/step3" component={InvestmentPreferences} />
            </Switch>
        </div>
    )
}