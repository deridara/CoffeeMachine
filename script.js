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
        return waterAmount;
    }

    this.getSeedsAmount = function() {
        return seedsAmount;
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
                console.log('Not enough water');
                waterMessage();
            } else if (seedsAmount < 8) {
                console.log('Not enough seeds');
                seedsMessage();
            } else {
                console.log('water is heating...');
                inProcessMessage();
                waterAmount -= 50;
                seedsAmount -= 8;
           
                timeoutId = setTimeout(function() {
                    console.log('Coffee is done');
                    finalMessage();
                }, calcBoilTime());
            }
    }
    this.stop = function () {
        clearInterval(timeoutId);
        stopMessage();
        console.log('Process stopped.');
        waterAmount += 50;
        seedsAmount += 8;
    }
}

const vitek = new CoffeeMachine(3500);

const infoBlock = document.getElementsByClassName('info-text')[0];
const waterBtn = document.getElementById('addWater');
const seedBtn = document.getElementById('addSeeds');
const launchBtn = document.getElementById('launch');
const stopBtn = document.getElementById('stop');
const processBlock = document.getElementsByClassName('processing')[0];

function writeInfo() {
    infoBlock.innerText = 'water: ' + vitek.getWaterAmount() + 'ml \n seeds: ' + vitek.getSeedsAmount() + 'g\n \nTime of waiting: ' + vitek.getBoilTime();
}
writeInfo();


waterBtn.addEventListener('click', function () {
    vitek.addWater(50);
    writeInfo();
});

seedBtn.addEventListener('click', function() {
    vitek.addSeeds(8);
    writeInfo();
});

launchBtn.addEventListener('click', function () {
    vitek.launch();
    writeInfo();
});

stopBtn.addEventListener('click', function() {
    vitek.stop();
});

function inProcessMessage() {
    processBlock.innerText = 'Water is heating...';
}

function finalMessage() {
    processBlock.innerHTML = 'Your coffee <img src="img/cup.jpg">';
}

function stopMessage() {
    processBlock.innerHTML = 'Process stopped';
}

function waterMessage() {
    processBlock.innerHTML = 'Add some water, please';
}
function seedsMessage() {
    processBlock.innerHTML = 'Add some seeds, please';
}