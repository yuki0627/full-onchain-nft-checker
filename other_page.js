function getImageContainer(anchor) {
    // 既存の画像コンテナセレクタ
    let imageContainer = anchor.querySelector('div[style*="height: 72px; width: 72px;"]');

    // 新たな画像コンテナセレクタ
    if (!imageContainer) {
        imageContainer = anchor.querySelector('.sc-f643b422-1');
    }

    return imageContainer;
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
    console.log('applyOverlayTexts start');
    // すでにラベルが表示されているかチェック
    const existingLabel = document.querySelector('.my-extension-label');
    if (existingLabel) {
        console.log('applyOverlayTexts end');
        return; // ラベルが表示されている場合、処理をスキップ
    }

    const anchorTags = document.querySelectorAll('a[role="row"], a[href*="/collection/"]');

    anchorTags.forEach((anchor) => {
        const imageContainer = getImageContainer(anchor);

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


