function brickCalculator(brickCount){
    if (firstToTenFloor ) {
        var heightFeet = 15  * 10;
        var amountOfBrick1 = heightFeet  * 1000;
        }
        else if(elevenToTwentyFloor) {
            var heightFeet = 12  * 10;
            var amountOfBrick2 = heightFeet  * 1000;
            
        }
        else if (twentyoneToOver){
            var heightFeet = 10  * 10;
            var amountOfBrick3 = heightFeet  * 1000;
        }
     var totalBrick = amountOfBrick1 + amountOfBrick2 +amountOfBrick1;
     return totalBrick;
}
var firstAmount = brickCalculator(8);
console.log(firstAmount);
var secondAmount = brickCalculator(17);
console.log(secondAmount);

