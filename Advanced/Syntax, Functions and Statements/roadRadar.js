function solve(speed, area) {
    
    const limits = {
        motorway : 130,
        interstate : 90,
        city : 50,
        residential : 20,
    }

    let difference = speed - limits[area]
    
    if (difference <= 0) {
        return `Driving ${speed} km/h in a ${limits[area]} zone`;
    }

    function getStatus(difference) {
        let status = {
            [difference > 40]: "reckless driving",
            [difference > 20 && difference <= 40]: "excessive speeding",
            [difference <= 20]: "speeding",
        }
        return status["true"]
    }
    return `The speed is ${difference} km/h faster than the allowed speed of ${limits[area]} - ${getStatus(difference)}`    
}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));
