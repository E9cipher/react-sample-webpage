import React from "react";
import LoginDiv from "./components/Login";
import { useSearchParams } from "react-router";

const App = () => {
    const name = 'Enric';
    const [searchParams] = useSearchParams();
    const forcedLogin = searchParams.get("forceLogin");
    // Renders login or main content
    let session;
    if (forcedLogin === "true") {
        session = true;
    } else {
        session = false;
    }
    const country = 'Spain';

    return (
        <>
            {session === true ?
                <div>
                    <h1 className="title">Hello {name}</h1>
                    <p>Have a good day!</p>
                    {country && <p>You are from {country}</p>}
                </div>
                :
                <LoginDiv></LoginDiv>
            }
        </>
    )
}
export default App;