function timeToWalk(steps, stepMeters, kmPerHour) {
    let mPerHour = kmPerHour * 1000 / 3600; 
    let totalMeters = steps * stepMeters;
    let add = Math.floor(totalMeters / 500) * 60;
    let time = totalMeters / mPerHour + add;
    
    const seconds = Math.floor(time / 3600);
    

}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)