"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    /* border: 0.13rem solid var(--colour-primary-dark); */
    padding: 0.75rem;
    /* margin: 0.97rem 0; // the gap between elements in BeansFilter.jsx is 1rem, after adding the border, 0.13rem has been taken from the total gap space, so I get around this and added a margin in the y-axis */
`;

const OptionContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    gap: .5rem;
    padding: 0 .5rem;
    margin-top: 1rem;
`;

const StyledRadio = styled.input`
    appearance: none;
    width: 2rem;
    height: 2rem;
    border: 0.2rem solid var(--colour-grey-light-3);
    border-radius: 100%;
    transition:  all 0.2s ease-in-out;
    margin: 0;

    &::after {
        content: "";
        display: block;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        margin: .2rem;
    }

    &:checked::after {
        background-color: var(--colour-secondary-dark-1);
    }

    &:hover::after {
        background-color: var(--colour-secondary-dark-2);
        /* outline: .3rem solid var(--colour-primary-dark); */
    }

    &:focus {
        outline: .1rem solid var(--colour-primary);
    }
`;



export default function RadioButtons({groupName, pText, options, paramsName, selected}) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [_, setSelected] = useState();
    
    function handleRadio(selectedValue) {
        setSelected(selectedValue);
        const params = new URLSearchParams(searchParams);
        params.set(paramsName, selectedValue);
        params.set("page", 1); // reset the page whenever there was a change to the other params
        router.push(`${pathname}?${params.toString()}`);
    }
    
    return (
        <Fieldset>
        <p className="text-[1.6rem] font-semibold text-gray-500">{pText}</p>
            {options.map(opt => 
                <OptionContainer key={opt.id}>
                    <label htmlFor={opt.htmlFor} className="text-[1.2rem] font-medium text-gray-500">
                        {opt.label}
                    </label>
                    <StyledRadio name={groupName} type="radio" id={opt.id} value={opt.value} checked={selected === opt.value} onChange={() => handleRadio(opt.value)}/>
                </OptionContainer>
            )}
        </Fieldset>
    )
}

