function getCollectionNameByUrl() {
    const url = window.location.href;
    const collectionNameRegex = /https:\/\/opensea\.io\/collection\/([\w-]+)/;
    const match = url.match(collectionNameRegex);
  
    if (match) {
      return match[1];
    } else {
      return null;
    }
}

function addOverlayText(collectionItem, result) {
    const overlayText = document.createElement("div");

    // スタイルを適用
    overlayText.style.backgroundColor = result.backgroundColor;
    overlayText.style.color = "white";
    overlayText.style.fontWeight = "bold";
    overlayText.style.borderRadius = "5px"; // 角丸にする
    overlayText.style.padding = "5px 10px";
    overlayText.style.position = "absolute";
    overlayText.style.zIndex = "2";
    overlayText.style.top = "0px"; // 画像の上部に配置
    overlayText.style.left = "0px";
  
    overlayText.textContent = result.textContent;
  
    collectionItem.appendChild(overlayText);
}

function applyOverlayTexts() {
    console.log('applyOverlayTexts:');
    const anchorTags = document.querySelectorAll('a[role="row"]');

    anchorTags.forEach((anchor) => {
        const imageContainer = anchor.querySelector('div[style*="height: 72px; width: 72px;"]');

        if (imageContainer) {
            const result = discriminate("hoge");
            addOverlayText(imageContainer, result);
        }
    });
}

function main() {
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

let previousUrl = '';

function checkForUrlChange() {
    applyOverlayTexts();
    const currentUrl = window.location.href;
    if (previousUrl !== currentUrl) {
        previousUrl = currentUrl;
        main();
    }
    setTimeout(checkForUrlChange, 1000); // 1000ms = 1s
}

checkForUrlChange();
