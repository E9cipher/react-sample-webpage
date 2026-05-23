import React from "react";
import { data, useSearchParams } from "react-router";
// import LoginDiv from "./components/Login";
import MainContent from "./components/Main"


const App = () => {
    const myName = "Banana Companies LTD";
    const mySlogan = "Eat bananas every day"
    const data_myname = {
        name: myName,
        slogan: mySlogan
    }
    const sectData = [
        { id: "products", name: "Products", bgcolor: "" },
        { id: "whyus", name: "Why Choose Us", bgcolor: "#44A08D" },
        { id: "sponsors", name: "Our Sponsors", bgcolor: "#50C878" }
    ]
    const [searchParams] = useSearchParams();
    const forcedLogin = searchParams.get("forceLogin");
    // Renders login or main content
    let session;
    if (forcedLogin === "true") {
        session = false; // Display login
    } else {
        session = true; // Display main content
    }

    // Session is true, display main content
    return (
        <>
            {session === true ?
                <MainContent data={data} data_myname={data_myname} sectData={sectData}></MainContent>
                :
                // <LoginDiv></LoginDiv>
                <p>Login Div goes here</p>
            }
        </>
    )
}
export default App;