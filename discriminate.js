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
    // 例：
    // if (条件) {
    //   return { backgroundColor: "#4AAB8C", textContent: "FullOnChain!" };
    // } else {
    //   return { backgroundColor: "#FFCE75", textContent: "OffChain" };
    // }
  
    // 仮のロジック
    const hashedValue = hashString(name);
    const group = Math.abs(hashedValue % 3); // 0, 1, 2のいずれかに分類
    const patterns = [
        { backgroundColor: "#4AAB8C", textContent: "FullOnChain!" },
        { backgroundColor: "#FFCE75", textContent: "OffChain" },
        { backgroundColor: "#D3D3D3", textContent: "UnKnown" },
    ];
  
    return patterns[group];
}