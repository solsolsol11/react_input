import logo from "./logo.svg";
import "./App.css";
import VerticalFlex from "./flex/VerticalFlex";
import HorizontalFlex from "./flex/HorizontalFlex";
import FlexChild from "./flex/FlexChild";
import style from "./App.module.css";
import InputText from "./InputText";
import InputPassword from "./InputPassword";
import InputPasswordConfirm from "./InputPasswordConfirm";
import { useState } from "react";

function App(props) {
  const [id, setCheckText] = useState();
  const [password, setpassword] = useState();
  const [passwordCheckResult, setCheckPwConfirm] = useState();

  const callback = (a) => {
    console.log(a);
  };

  const callbackPw = (b) => {
    setpassword(b);
  };

  const checkPw = () => {
    if (password === passwordCheckResult) {
    } else {
    }
  };

  const textCondition = /^.{1,5}$/;
  return (
    <div className={style.container}>
      <VerticalFlex>
        <FlexChild>
          <div className={style.testWrapper}>
            <div className={style.test}>
              <p>asd</p>
            </div>
          </div>
        </FlexChild>
        <FlexChild height={60}>
          <div className={style.inputs}>
            <HorizontalFlex>
              <FlexChild>
                <InputText
                  callback={callback}
                  textCondition={textCondition}
                  resultVisible={true}
                />
              </FlexChild>
              <FlexChild>
                <InputPassword callback={callbackPw} />
              </FlexChild>
              <FlexChild>
                <InputPasswordConfirm target={password} />
              </FlexChild>
            </HorizontalFlex>
          </div>
        </FlexChild>
      </VerticalFlex>
    </div>
  );
}

export default App;
