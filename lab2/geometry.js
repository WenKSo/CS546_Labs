//Name: Wenkang Su
//CWID: 10409507
//I pledge my honor that I have abided by the Stevens Honor System.

module.exports = {
    description: "This is a geometry tool for CS-546 Lab2",
    volumeOfRectangularPrism: (length, width, height) => {
    if (length === undefined || typeof length !== 'number') {
        throw "length is either not defined or not a valid number."
    }
    if (width === undefined || typeof width !== 'number') {
        throw "width is either not defined or not a valid number."
    }
    if (height === undefined || typeof height !== 'number') {
        throw "height is either not defined or not a valid number."
    }
    if (length <= 0){
        throw "Length should be positive."
    }
    if (width <= 0){
        throw "Width should be positive."
    }
    if (height <= 0){
        throw "Height should be positive."
    }
    return length*width*height;
},

surfaceAreaOfRectangularPrism: (length, width, height) => {
    if (length === undefined || typeof length !== 'number') {
        throw "length is either not defined or not a valid number."
    }
    if (width === undefined || typeof width !== 'number') {
        throw "width is either not defined or not a valid number."
    }
    if (height === undefined || typeof height !== 'number') {
        throw "height is either not defined or not a valid number."
    }
    if (length <= 0){
        throw "Length should be positive."
    }
    if (width <= 0){
        throw "Width should be positive."
    }
    if (height <= 0){
        throw "Height should be positive."
    }
    return (length*width + width*height + length*height)*2;
},

volumeOfSphere: (radius) => {
    if (radius === undefined || typeof radius !== 'number') {
        throw "radius is either not defined or not a valid number."
    }
    if (radius <= 0){
        throw "Raidus should be positive."
    }
    return 4/3 * (radius * radius * radius) * Math.PI;
},

surfaceAreaOfSphere: (radius) => {
    if (radius === undefined || typeof radius !== 'number') {
        throw "radius is either not defined or not a valid number."
    }
    if (radius <= 0){
        throw "Radius should be positive."
    }
    return 4 * (radius * radius) * Math.PI;
}
};

//console.log(volumeOfRectangularPrism(2,2,2));
//console.log(surfaceAreaOfRectangularPrism(2,2,2));
//console.log(volumeOfSphere(2));
//console.log(surfaceAreaOfSphere("hello"));