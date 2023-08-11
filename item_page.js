async function item_page_main() {
    console.log('item_page_main:');

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

    // 初期のメッセージを設定
    message.style.backgroundColor = "#D3D3D3"; // グレー背景
    message.textContent = "analyzing...";
    document.body.appendChild(message);

    const contractAddress = getContractAddressByUrl();
    console.log('contractAddress:', contractAddress);
    const result = await discriminate({contractAddress: contractAddress});
    
    message.style.backgroundColor = result.backgroundColor;
    message.textContent = result.textContent;
    document.body.appendChild(message);
}
