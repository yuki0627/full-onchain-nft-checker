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

function collection_page_main() {
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