async function fetchAPIInfo(collectionName) {
    console.log('fetchAPIInfo開始:', collectionName);
    console.log('APIへのリクエストを開始');
    
    try {
        let response = await fetch('https://get-info-s6onvehw4a-uc.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                collection_slug: collectionName
            })
        });
        
        console.log('APIからのレスポンス:', response);
        
        let data = await response.json();
        console.log('APIからのデータ:', data);

        // TODO: data から必要な情報を取得して返す
        return data; 
    } catch (error) {
        console.error('APIからのエラー:', error);
        throw error;
    }
}

let obj = {};

async function discriminate(name) {
    let type = 0; 
    if (name in obj) {
        type = obj[name];
    } else {
        try {
            let info = await fetchAPIInfo(name);
            console.log('info:', info);
            
            type = info["type"];
            obj[name] = type;
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
