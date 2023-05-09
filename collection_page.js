// const collectionPageRegex = /https:\/\/(?:testnets\.)?opensea\.io\/(\w+\/)?collection\/.+/;
const collectionPageRegex = /https:\/\/(?:testnets\.)?opensea\.io(\/[a-z]{2})?\/collection\/([\w-]+)/;

function collection_page_main() {
    // 現在のURLをチェック
    if (!window.location.href.match(collectionPageRegex)) {
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
