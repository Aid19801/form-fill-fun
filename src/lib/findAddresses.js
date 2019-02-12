const findAddresses = (arr, str) => {
    let obj = {};
    arr.map(each => {
        each.buildingUnit === str ? console.log('yay') : console.log('no');
        if (each.buildingUnit.includes(str)) {
            console.log(`matched ${each.buildingUnit} with ${str}`);
            obj = each;
        }
    })
    return obj;
}

export default findAddresses;