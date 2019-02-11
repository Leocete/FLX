function formatTime(min) {

    let numdays = Math.floor(min / 1440);
    let numhours = Math.floor((min % 1440) / 60);
    let numminutes = min % 60;

    return `${numdays} day(s) ${numhours} hour(s) ${numminutes} minute(s)`;

}
console.log(formatTime(59));