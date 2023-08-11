function getImageContainer(anchor) {
    // 画像コンテナセレクタ
    let imageContainer = anchor.querySelector('div[style*="height: 72px; width: 72px;"]');

    if (!imageContainer) {
        imageContainer = anchor.querySelector('.sc-f643b422-1');
    }

    return imageContainer;
}

function addOverlayText(collectionItem, anchor) {
    const overlayText = document.createElement("div");

    // スタイルを適用
    overlayText.style.color = "white";
    overlayText.style.fontWeight = "bold";
    overlayText.style.borderRadius = "5px"; // 角丸にする
    overlayText.style.padding = "5px 10px";
    overlayText.style.position = "absolute";
    overlayText.style.zIndex = "2";
    overlayText.style.top = "0px"; // 画像の上部に配置
    overlayText.style.left = "0px";

    // 初期のメッセージを設定
    overlayText.style.backgroundColor = "#D3D3D3"; // グレー背景
    overlayText.textContent = "analyzing...";
    collectionItem.appendChild(overlayText);

    
    const collectionName = anchor.href.split('/').pop();
    const result = discriminate({collectionName: collectionName});
    overlayText.style.backgroundColor = result.backgroundColor;
    overlayText.textContent = result.textContent;
    collectionItem.appendChild(overlayText);
}

function applyOverlayTexts() {
    // すでにラベルが表示されているかチェック
    const existingLabel = document.querySelector('.my-extension-label');
    if (existingLabel) {
        return; // ラベルが表示されている場合、処理をスキップ
    }

    const anchorTags = document.querySelectorAll('a[role="row"], a[href*="/collection/"]');
    anchorTags.forEach((anchor) => {
        const imageContainer = getImageContainer(anchor);

        if (imageContainer) {
            addOverlayText(imageContainer, anchor);
        }
    });
    console.log('applyOverlayTexts end');
}


function other_page_main() {
    // 1秒ごとにapplyOverlayTexts関数を実行
    // setInterval(applyOverlayTexts, 1000);
}

