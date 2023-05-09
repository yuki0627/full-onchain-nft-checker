function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function discriminate(name) {
    // この部分に判別ロジックを記述し、適切なパターンを返します。

    // 仮のロジック
    const hashedValue = hashString(name);
    const ratio = Math.abs(hashedValue % 1000) / 1000; // 0～1の値に変換

    // 割合に基づいてグループを割り当て
    let group;
    if (ratio < 0.2) {
        group = 0;
    } else if (ratio < 0.2 + 0.5) {
        group = 1;
    } else {
        group = 2;
    }

    const patterns = [
        { backgroundColor: "#4AAB8C", textContent: "FullOnChain!" },
        { backgroundColor: "#FFCE75", textContent: "OffChain" },
        { backgroundColor: "#D3D3D3", textContent: "UnKnown" },
    ];
  
    return patterns[group];
}
