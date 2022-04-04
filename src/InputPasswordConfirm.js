import { useState, useEffect } from "react";

function InputPasswordConfirm(props) {
  const [value, setValue] = useState();
  const [isValid, setValid] = useState(false);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    setValid(value === props.target);
  }, [value, isValid]);

  return (
    <div>
      <input type="text" onChange={onChange} />
      <p>{isValid ? "ok" : "x"}</p>
    </div>
  );
}

export default InputPasswordConfirm;
