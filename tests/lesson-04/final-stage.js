function cacCapChiaHetCho17(){
    let pairs = [];

    for (let i = 1; i <= 100; i++) {
        for (let j = i; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                pairs.push([i, j]);
            }
        }
    }

    console.log(`Total pairs: ${pairs.length}`);
    return pairs;
}