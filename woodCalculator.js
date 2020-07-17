function woodCalculator (chair, table, bed){
    var chairCount = chair  * 1 ;
    var tableCount = table  * 3;
    var bedCount  = bed * 5;
    var totalWood = (chairCount + tableCount + bedCount);
    return totalWood;
}
var  woodAmount = woodCalculator(14, 5, 12);
console.log(woodAmount);
