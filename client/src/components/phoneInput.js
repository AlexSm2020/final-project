import React, { useState } from "react"
import PhoneInput from "react-phone-number-input"

const PhoneInputComponent = (props) => {
    const [value, setValue] = useState()

    const onChange = e => {
        props.handleChange(e);
        setValue();
    }

    return (
        
            <PhoneInput
                placeholder={props.pocPhone}
                value={value}
                name="pocPhoneNumber"
                onChange={onChange}
                defaultCountry="US"
            >
            </PhoneInput>
        
    )

}

export default PhoneInputComponent;

