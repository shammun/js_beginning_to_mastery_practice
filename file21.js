// object destructuring

const band = {
    bandName: "The Beatles",
    members: 4,
    genre: "Rock",
    famousSong: "Yesterday",
    famousAlbum: "Abbey Road"
};

let {bandName, members, ...restProps} = band;
console.log(bandName);
console.log(restProps);