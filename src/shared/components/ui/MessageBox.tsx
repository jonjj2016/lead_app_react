import {FC} from "react";
import { Result, ResultProps } from "antd"

interface IMessageBox extends ResultProps {
    show:boolean;
}

const MessageBox:FC<IMessageBox> = ({show, ...rest}:IMessageBox) => {

    if (!show) return null;

    return (
        <div className="w-full flex justify-center align-center">
            <Result {...rest}/>
        </div>
    )
}


export default MessageBox;