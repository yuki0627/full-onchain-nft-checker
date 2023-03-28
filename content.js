function main() {
    console.log("hoge1");
    const MESSAGE_ID = "my-extension-message"; // メッセージのIDを定義
    // メッセージがすでに存在する場合は削除する
    const existingMessage = document.querySelector(`#${MESSAGE_ID}`);
    if (existingMessage) {
        console.log("hoge2");
        existingMessage.remove();
    }
    // 現在のURLをチェック
    if (!window.location.href.match(/https:\/\/opensea\.io\/collection\/.+/)) {
        return;
    }
    const message = document.createElement("div");
    message.id = MESSAGE_ID; // メッセージにIDを付ける
    message.style.position = "fixed";
    message.style.top = "0px";
    message.style.left = "0px";
    message.style.zIndex = "10000";
    message.style.padding = "0px";
    message.style.borderRadius = "5px";
    message.style.border = "1px solid gray";
    message.style.fontSize = "12px";
  
    // パターンを配列に格納
    const patterns = [
      { backgroundColor: "#4AAB8C", textContent: "FullOnChain!" },
      { backgroundColor: "#4AAB8C", textContent: "FullOnChain!" },
      { backgroundColor: "#4AAB8C", textContent: "FullOnChain!" },
      { backgroundColor: "#FFCE75", textContent: "OffChain" },
      { backgroundColor: "#FFCE75", textContent: "OffChain" },
      { backgroundColor: "#FFCE75", textContent: "OffChain" },
      { backgroundColor: "#FFCE75", textContent: "OffChain" },
      { backgroundColor: "#FFCE75", textContent: "OffChain" },
      { backgroundColor: "#FFCE75", textContent: "OffChain" },
      { backgroundColor: "#D3D3D3", textContent: "UnKnown" },
    ];
  
    // ランダムにパターンを選択
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
  
    // ランダムに選択されたパターンを適用
    message.style.backgroundColor = randomPattern.backgroundColor;
    message.textContent = randomPattern.textContent;
  
    document.body.appendChild(message);
    console.log("hoge3");
}

let previousUrl = '';

function checkForUrlChange() {
  const currentUrl = window.location.href;
  if (previousUrl !== currentUrl) {
    previousUrl = currentUrl;
    main();
  }
  setTimeout(checkForUrlChange, 1000); // 1000ms = 1s
}

checkForUrlChange();