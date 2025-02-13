import ashemark from "../assets/images/ashemark.png";
import casterlyrock_house from "../assets/images/casterlyrock_house.png";
import Crag from "../assets/images/Crag.png";
import crakehall_house from "../assets/images/crakehall_house.png";
import lannisport_house from "../assets/images/lannisportport_house.png";

import big_bogged_face from "../assets/images/big-bogged-face.png";
import big_ghast_face from "../assets/images/big-ghast-face.png";
import big_iron_golem_face from "../assets/images/big-iron-golem-face.png";
import big_mooshroom_face from "../assets/images/big-mooshroom-face.png";
import big_shulker_face from "../assets/images/big-shulker-face.png";

const houses = [
    {
        id: 1,
        image: ashemark,
        name: "Ashemark Keep",
        category: "Castle",
        position: "250, -70, 8",
        beds: 3,
        bathrooms: 2,
        chests: 5,
        author: "Roland Westerling",
        authorImage: big_bogged_face,
        posted: "12/15/2019"
    },
    {
        id: 2,
        image: casterlyrock_house,
        name: "Casterly Rock",
        category: "Stronghold",
        position: "320, 64, -150",
        beds: 10,
        bathrooms: 8,
        chests: 20,
        author: "Tybolt Lannister",
        authorImage: big_ghast_face,
        posted: "06/10/2021"
    },
    {
        id: 3,
        image: Crag,
        name: "The Crag",
        category: "Manor",
        position: "150, 70, 200",
        beds: 5,
        bathrooms: 3,
        chests: 7,
        author: "Gawen Westerling",
        authorImage: big_iron_golem_face,
        posted: "09/05/2023"
    },
    {
        id: 4,
        image: crakehall_house,
        name: "Crakehall Fortress",
        category: "Fortress",
        position: "-80, 65, 300",
        beds: 6,
        bathrooms: 4,
        chests: 10,
        author: "Benedict Crakehall",
        authorImage: big_mooshroom_face,
        posted: "01/20/2024"
    },
    {
        id: 5,
        image: lannisport_house,
        name: "Lannisport Manor",
        category: "City House",
        position: "400, 62, -75",
        beds: 4,
        bathrooms: 2,
        chests: 6,
        author: "Jason Lannister",
        authorImage: big_shulker_face,
        posted: "02/10/2025"
    }
];

export default houses;