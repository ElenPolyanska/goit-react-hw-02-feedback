import styled from "styled-components";

export const Btn = styled.button`
width: 100px;
padding: 10px;
border: 1px solid black;
border-radius: 4px;
background: transparent;
font-size: 18px;
text-transform: capitalize;

:not(:last-child){
    margin-right: 15px;
}

:hover,
:focus {
    color: white;
    background: ${p => {
        switch (p.children) {
            case "good":
                return "green";
            case "neutral":
                return "#f2cd55";
            case "bad":
                return "red";
            default:
                return "transparent";
        }
}}}`;