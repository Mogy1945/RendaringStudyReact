import { memo } from "react";
//πmemoγimportγγ¦γmemo()γ§ε²γγγ¨γ§γpropsγε€ζ΄γγγͺγιγεγ¬γ³γγͺγ³γ°γγγͺγγͺγ
//β»θ¦ͺγγ¬γ³γγͺγ³γ°γγγγ¨ε­γγ¬γ³γγͺγ³γ°γγγγγ©πγ§ε―Ύε¦γ§γγ
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaγγ¬γ³γγͺγ³γ°γγγοΌοΌ");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("....");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>ε­γ³γ³γγΌγγ³γ</p>
          <button onClick={onClickClose}>ιγγ</button>
        </div>
      ) : null}
    </>
  );
});
