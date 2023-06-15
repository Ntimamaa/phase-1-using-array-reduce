const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const reducer = (accumulator,item)=>{
    let total = item += accumulator;
    return total;
}
let totalBatteries = batteryBatches.reduce(reducer,0)
