function CoffeeMachine(power) {
    let waterAmount = 100;
    let seedsAmount = 16;
    const maxTemp = 90;
    const waterHeatCapacity = 4200;
    let timeoutId;

    this.addWater = function (newAmount) {
        waterAmount += newAmount;
    }
    
    this.getWaterAmount = function() {
        console.log(waterAmount);
    }

    this.getSeedsAmount = function() {
        console.log(seedsAmount);
    }

    this.addSeeds = function (seeds) {
        seedsAmount += seeds;
    }

    const calcBoilTime = function () {
        return (waterAmount * waterHeatCapacity * maxTemp)/power;
    }

    this.getBoilTime = function () {
        return calcBoilTime();
    }

    this.launch = function () {
            if (waterAmount < 50) {
                console.log('Not enough water')
            } else if (seedsAmount < 8) {
                console.log('Not enough seeds')
            } else {
                console.log('water is heating...');
                waterAmount -= 50;
                seedsAmount -= 8;
           
                timeoutId = setTimeout(function() {console.log('Coffee is done')}, calcBoilTime());
            }
    }
    this.stop = function () {
        clearInterval(timeoutId);
    }
}

const vitek = new CoffeeMachine(3500);

const infoBlock = document.getElementsByClassName('info')[0];
infoBlock.innerText = 'water: ' + vitek.getWaterAmount() + 'ml';
