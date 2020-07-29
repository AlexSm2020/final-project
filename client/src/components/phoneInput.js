import React, { useState } from "react"
import PhoneInput from "react-phone-number-input"

const PhoneInputComponent = (props) => {
    const [value, setValue] = useState()

    return (
        
            <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                defaultCountry="US"
            >
            </PhoneInput>
        
    )

}

export default PhoneInputComponent;

