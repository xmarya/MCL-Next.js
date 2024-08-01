"use client"
import styled from "styled-components";

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    padding: 0.75rem;
    margin-bottom: 1.6rem;
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



export default function RadioButtons({groupName, sortTitle, options, selected, onChange}) {
    
    return (
        <Fieldset className="bg-yellow-100">
            <p className="text-lg font-semibold">{sortTitle}</p>
            {options.map(opt => 
                <OptionContainer key={opt.id} className="bg-pink-200">
                    <label htmlFor={opt.htmlFor} className="text-lg font-medium">
                        {opt.label}
                    </label>
                    <StyledRadio name={groupName} type="radio" id={opt.id} value={opt.value} checked={selected === opt.value} onChange={() => onChange(opt.value)}/>
                </OptionContainer>
            )}
        </Fieldset>
    )
}

