async function fetchNFTInfo({ collectionName = null, contractAddress = null }) {
    console.log('fetchNFTInfo:', collectionName);
    console.log('APIへのリクエストを開始');
    
    try {
        let response = await fetch('https://get-info-s6onvehw4a-uc.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                collection_slug: collectionName,
                contract_address: contractAddress
            })
        });
        
        console.log('APIからのレスポンス:', response);
        
        let data = await response.json();
        console.log('APIからのデータ:', data);
        return data; 
    } catch (error) {
        console.error('APIからのエラー:', error);
        throw error;
    }
}

let obj = [];

async function discriminate({ collectionName = null, contractAddress = null }) {
    if (!collectionName && !contractAddress) {
        throw new Error("Either collectionName or contractAddress must be provided!");
    }

    let type = 0; // Default to Unknown

    // objを検索して、該当するエントリを見つける
    let entry = obj.find(item => 
        (collectionName && item.collectionName === collectionName) || 
        (contractAddress && item.contractAddress === contractAddress)
    );

    if (entry) {
        type = entry.type;
    } else {
        try {
            let info;
            info = await fetchNFTInfo({collectionName: collectionName, contractAddress: contractAddress}); 

            console.log('info:', info);
            type = info["type"];

            obj.push({
                collectionName: collectionName || info.collectionName,
                contractAddress: contractAddress || info.contractAddress,
                type: type
            });
        } catch (error) {
            console.error('Error fetching API info:', error);
            // Handle error appropriately
        }
    }

    const patterns = [
        { backgroundColor: "#D3D3D3", textContent: "UnKnown" },
        { backgroundColor: "#4AAB8C", textContent: "FullOnChain!" },
        { backgroundColor: "#FFCE75", textContent: "OffChain" },
    ];

    return patterns[type];
}

