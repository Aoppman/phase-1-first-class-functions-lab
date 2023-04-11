const returnFirstTwoDrivers = function (drivers) {
return (drivers.slice(0, 2))
};

const returnLastTwoDrivers = (drivers) => {return (drivers.slice(2, 4))};

//returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (s) => {
    return (cost) => (s * s);
}

function fareDoubler(createFareMultiplier) {
    return (createFareMultiplier + createFareMultiplier);
}

function fareTripler(createFareMultiplier) {
    return (createFareMultiplier * 3);
}

function selectDifferentDrivers (drivers, selectingDrivers) {

    if (selectingDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else { return returnLastTwoDrivers(drivers);
    }

}


