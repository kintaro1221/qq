import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickbuttun = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です" />

      <button onClick={onClickbuttun}>ボタン</button>
    </>
  );
};

export default App;
