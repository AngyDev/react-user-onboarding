import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import { StepContext } from "../../context/StepContext";
import { UserProvider } from "../../context/UserContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import InvestmentPlans from "../../components/InvestmentPlans/InvestmentPlans";
import InvestmentPreferences from "../../components/InvestmentPreferences/InvestmentPreferences";

export default function App() {

    const [step, setStep] = useState(1);

    return (
        <StepContext.Provider value={[step, setStep]}>
            <UserProvider >
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Layout><ContactDetails /></Layout>
                        </Route>
                        <Route path="/step2">
                            <Layout><InvestmentPlans /></Layout>
                        </Route>
                        <Route path="/step3">
                            <Layout><InvestmentPreferences /></Layout>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </UserProvider>
        </StepContext.Provider>
    )
}