import React, {ForwardedRef, forwardRef} from 'react';
import PropTypes from 'prop-types';
import PhoneInput from "react-phone-number-input/input";
import {Input, InputProps} from 'antd';

const InputPhone = forwardRef((props: InputProps, ref:ForwardedRef<unknown>) => {
    return (
        <PhoneInput  defaultCountry="AM" {...props} ref={ref}/>
    );
});

InputPhone.propTypes = {

};

export default InputPhone;