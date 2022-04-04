import style from "./Flex.module.css";
import clsx from "classnames";

function HorizontalFlex(props){
    return (
        <div className={clsx(style.flex, style.horizontal)}>
            {props.children}
        </div>
    );
}

export default HorizontalFlex;