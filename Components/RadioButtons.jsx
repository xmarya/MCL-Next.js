"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    padding: 0.75rem;
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
    border: 0.2rem solid var(--colour-primary);
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
        router.push(`${pathname}?${params.toString()}`, {scroll: false});
    }
    
    return (
        <Fieldset>
            <p className="text-lg font-semibold">{pText}</p>
            {options.map(opt => 
                <OptionContainer key={opt.id} className="bg-pink-200">
                    <label htmlFor={opt.htmlFor} className="text-lg font-medium">
                        {opt.label}
                    </label>
                    <StyledRadio name={groupName} type="radio" id={opt.id} value={opt.value} checked={selected === opt.value} onChange={() => handleRadio(opt.value)}/>
                </OptionContainer>
            )}
        </Fieldset>
    )
}

