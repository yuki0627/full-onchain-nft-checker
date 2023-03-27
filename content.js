(function () {
    const message = document.createElement("div");
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
  })();
  