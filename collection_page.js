function collection_page_main() {
    const MESSAGE_ID = "my-extension-message"; // メッセージのIDを定義
    // メッセージがすでに存在する場合は削除する
    const existingMessage = document.querySelector(`#${MESSAGE_ID}`);
    if (existingMessage) {
        existingMessage.remove();
    }
    // 現在のURLをチェック
    if (!window.location.href.match(/https:\/\/opensea\.io\/(\w+\/)?collection\/.+/)) {
      return;
    }

    const message = document.createElement("div");
    message.id = MESSAGE_ID; // メッセージにIDを付ける
    message.style.position = "fixed";
    message.style.top = "0px";
    message.style.left = "0px";
    message.style.zIndex = "10000";
    message.style.padding = "10px";
    message.style.fontWeight = "bold"; // テキストを太字にする
    message.style.borderRadius = "5px";
    message.style.border = "1px solid gray";
    message.style.fontSize = "12px";
  
    const collectionName = getCollectionNameByUrl();
    const result = discriminate(collectionName);
    console.log('collectionName:', collectionName);
    message.style.backgroundColor = result.backgroundColor;
    message.textContent = result.textContent;

    document.body.appendChild(message);
}
