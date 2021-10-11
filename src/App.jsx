import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea.";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  //useCallbackをReactから呼び出し、関数をuseCallback()で囲うと
  //第２引数[]に入れた変数のみ監視するため、onChangeTextの際には再レンダリングがスキップされる
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  //変数の最適化の際にはuseMemoを利用する。
  //第二引数が空なので、最初のレンダリングの時に設定された4のまま使いまわすイメージ。
  const temp = useMemo(() => 1 + 3, []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      {/* onClickCloseをただ追加すると、onChangeText➡再レンダリング➡
      onClickCloseが生成➡新しいpropsとして{onClickClose}に値が入る
      ➡memoをつけていても新しい値のため子も再レンダリングになってしまう */}
    </div>
  );
}
