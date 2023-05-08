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
    console.log('applyOverlayTexts start');
    // すでにラベルが表示されているかチェック
    const existingLabel = document.querySelector('.my-extension-label');
    if (existingLabel) {
        console.log('applyOverlayTexts end');
        return; // ラベルが表示されている場合、処理をスキップ
    }

    const anchorTags = document.querySelectorAll('a[role="row"]');

    anchorTags.forEach((anchor) => {
        const imageContainer = anchor.querySelector('div[style*="height: 72px; width: 72px;"]');

        if (imageContainer) {
            // コレクション名を取得
            const collectionName = anchor.href.split('/').pop();
            console.log('collectionName:', collectionName);
            const result = discriminate(collectionName);
            addOverlayText(imageContainer, result);
        }
    });
    console.log('applyOverlayTexts end');
}

function other_page_main() {
    // 1秒ごとにapplyOverlayTexts関数を実行
    setInterval(applyOverlayTexts, 1000);
}


