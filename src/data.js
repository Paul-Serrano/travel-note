import imgBanaue from "../public/img/banaue.png";
import imgFlorence from "../public/img/florence.png";
import imgMarrakech from "../public/img/marrakech.png";
const data = [
    {
        key: 1,
        img: imgBanaue,
        location: "PHILIPPINES",
        name: "Les Rizières de Banaue",
        date:"Février 2021",
        link:"https://www.google.com/maps/place/Rizi%C3%A8res+de+Banaue/@16.9238726,116.5732286,6z/data=!4m5!3m4!1s0x3390283d6532de53:0x9e3aa754850e375f!8m2!3d16.9346698!4d121.1353736",
        description:"Treck dans les Rizières de Banaue, région montagneuse du nord de Luzon."
    },

    {
        key: 2,
        img: imgMarrakech,
        location: "MAROC",
        name: "La Medina de Marrakech",
        date:"Avril 2022",
        link:"https://www.google.com/maps/place/M%C3%A9dina,+Marrakech+40000,+Maroc/@31.6309944,-9.1071619,8z/data=!4m5!3m4!1s0xdafee4403481913:0x8a258af8dd23db99!8m2!3d31.6317937!4d-7.9892605",
        description:"Ballade dans la medina de marrakech, coeur populaire de la cité rouge."
    },

    {
        key: 3,
        img: imgFlorence,
        location: "ITALIE",
        name: "Le Duomo de Florence",
        date:"Mars 2015",
        link:"https://www.google.com/maps/place/Cath%C3%A9drale+Santa+Maria+del+Fiore/@43.773145,9.0147493,7z/data=!4m5!3m4!1s0x132a5403bfe22ff5:0x5591438487aaf1f5!8m2!3d43.773145!4d11.2559602",
        description:"Découverte du Duomo de la Cathédrale de Florence, premiers pas de mno échange Erasmus"
    }
]

export default data;
