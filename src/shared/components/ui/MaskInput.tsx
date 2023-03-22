import {FC} from "react";
import { Input, InputProps } from 'antd';
import { PatternFormat, PatternFormatProps } from 'react-number-format';


const MaskInput:FC<InputProps> = (props: any) => {
  return (
    <PatternFormat format={props.format} customInput={Input} {...props}/>
  );
};


export default MaskInput;