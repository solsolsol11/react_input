import { useState, useEffect } from "react";

function InputText(props) {
  const [value, setValue] = useState();
  const [isValid, setValid] = useState(false);
  const onChange = (e) => {
    if (props.textCondition) {
      setValid(props.textCondition.test(e.target.value));
      //   e.target.value.match(props.textCondition);
    }
    setValue(e.target.value);
    console.log("Text :" + e.target.value);
  };

  useEffect(() => {
    console.log(value, isValid);
    if (props.callback) {
      props.callback(value, isValid);
    }
  }, [value, isValid]);

  return (
    <div>
      <input type="text" onChange={onChange}></input>
      {props.resultVisible ? (
        <p>{isValid ? "ok" : "5자 넘으며ㅑㄴ 아됩니다."}</p>
      ) : null}
    </div>
  );
}
export default InputText;
