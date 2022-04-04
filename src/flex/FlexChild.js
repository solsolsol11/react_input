import style from "./Flex.module.css";
import clsx from "classnames";

function FlexChild(props){
    const isFixed = props.width||props.height?true:false;
    return(
        <div className={clsx(style.flexChild, {[style.fixed] : isFixed})}  style={{width:(props.width?props.width+"px":null), height:(props.height?props.height+"px":null)}} >
            {props.children}
        </div>
    );
}

export default FlexChild;