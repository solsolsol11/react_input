import { useState, useEffect } from "react";

function InputPassword(props) {
  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
    console.log("Pw :" + e.target.value);
  };

  useEffect(() => {
    console.log(value);
    if (props.callback) {
      props.callback(value);
    }
  }, [value]);

  return (
    <div>
      <input type="password" onChange={onChange} />
    </div>
  );
}

export default InputPassword;
