function calculates(steps, footprint, speed) {
    let speedInMS = speed * 1000 / 3600;
    let distanceInMeters = steps * footprint;
    let rest = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedInMS + rest;
    
    let hours = Math.floor(time/60/60).toFixed(0).padStart(2, "0");
    let minutes = Math.floor(time/60).toFixed(0).padStart(2, "0");
    let seconds = (time%60).toFixed(0).padStart(2, "0");
    
    return `${hours}:${minutes}:${seconds}`
}

console.log(calculates(4000, 0.60, 5));
console.log(calculates(2564, 0.70, 5.5));
