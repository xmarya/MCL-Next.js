"use client"

import styled from "styled-components"
import Button from "./Button";

const Form = styled.form`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    padding: 1.4rem 0;

    label {
        align-self: start;
        color: var(--colour-secondary);
        font-size: 1.3rem;
        font-weight: 500;
    }

    input {
        background-color: var(--colour-grey-light-1);
        width: 100%;
        height: 3rem;
        font-size: 1.3rem;
        color: var(--colour-secondary);
        text-align: left;
        border-radius: 3px;
        box-shadow: var(--shadow-sm);
        padding: 0.8rem 1.2rem;

        &:focus {
            border: 0.2rem solid var(--colour-primary);
            outline: none;
            
        }
    }

    p {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--error);
    }

`;

const FormButton = styled(Button)`
    align-self: center;
    margin-top: 3rem;
`;

export {Form, FormButton};