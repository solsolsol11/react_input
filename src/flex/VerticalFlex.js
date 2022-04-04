import style from "./Flex.module.css";
import clsx from "classnames";

function VerticalFlex(props){
    return (
        <div className={clsx(style.flex, style.vertical)} style={{alignItems:(props.alignItems?props.alignItems:"center")}} >
            {props.children}
        </div>
    );
}

export default VerticalFlex;