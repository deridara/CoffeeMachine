function CoffeeMachine(power) {
    let waterAmount = 0;
    let seedsAmount = 0;
    const maxTemp = 90;
    const waterHeatCapacity = 4200;

    this.addWater = function (newAmount) {
        waterAmount += newAmount;
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
                setTimeout(function() {console.log('Coffee is done')}, calcBoilTime());
            }
    }
}

const vitek = new CoffeeMachine(3500);
vitek.addWater(100);
vitek.addSeeds(16);
vitek.launch();
vitek.launch();
vitek.launch();

