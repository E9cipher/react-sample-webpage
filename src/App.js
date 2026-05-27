import React from "react";
import { data, useSearchParams } from "react-router";
// import LoginDiv from "./components/Login";
import MainContent from "./components/Main"


const App = () => {
    const myName = "🍜 Yakisboa FC 🍜";
    const mySlogan = "Lema de l'equip"
    const data_myname = {
        name: myName,
        slogan: mySlogan
    }
    const sectData = [
        { id: "products", name: "Qui som", bgcolor: "" },
        { id: "whyus", name: "El nostre objectiu", bgcolor: "#44A08D" },
        { id: "sponsors", name: "Inversors", bgcolor: "#50C878" }
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