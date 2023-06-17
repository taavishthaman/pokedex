const cardStyle = {
    width : "280px",
    height : "160px",
    boxShadow : "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginTop : "100px",
    borderRadius : "20px",
    backgroundColor : "#1E1E1E",
    position : "relative"
};

const imgStyle = {
    width : "140px",
    height : "140px",
    position : "absolute",
    right : "-40px",
    top : "20px"
};

const nameStyle = {
    fontFamily : "Roboto",
    fontSize : "20px",
    color : "#FFFFFF",
    position : "absolute",
    top : "50px",
    left : "50px",
    maxWidth : "150px"
};

const imageContainer = {
    width : "66px",
    height : "24px",
    top : "100px",
    position : "absolute",
    left : "50px"
};

const typeIcon = {
    height : "24px",
    width : "24px",
    marginRight : "9px"
}

const idStyle = {
    position : "absolute",
    fontSize : "14px",
    fontFamily : "roboto",
    color : "#fff",
    top : "20px",
    left : "20px",
    fontWeight : "400"
}

const imgMap = {
    "bug" : require("../assets/icons/bug_icon.png"),
    "dark" : require("../assets/icons/dark_icon.png"),
    "dragon" : require("../assets/icons/dragon_icon.png"),
    "electric" : require("../assets/icons/electric_icon.png"),
    "fairy" : require("../assets/icons/fairy_icon.png"),
    "fighting" : require("../assets/icons/fighting_icon.png"),
    "fire" : require("../assets/icons/fire_icon.png"),
    "flying" : require("../assets/icons/flying_icon.png"),
    "ghost" : require("../assets/icons/ghost_icon.png"),
    "grass" : require("../assets/icons/grass_icon.png"),
    "ground" : require("../assets/icons/ground_icon.png"),
    "ice" : require("../assets/icons/ice_icon.png"),
    "normal" : require("../assets/icons/normal_icon.png"),
    "psychic" : require("../assets/icons/psychic_icon.png"),
    "poison" : require("../assets/icons/poison_icon.png"),
    "rock" : require("../assets/icons/rock_icon.png"),
    "steel" : require("../assets/icons/steel_icon.png"),
    "water" : require("../assets/icons/water_icon.png")
}


function PokemonCard (props) {
    return (
        <div style={cardStyle}>
            <div style={idStyle}>{props.id.padStart(5, '0').padStart(6, '#')}</div>
            <div style={nameStyle}>{props.name[0].toUpperCase()+props.name.substring(1)}</div>
            <div style={imageContainer}>{
                props.types.map(type => {
                    return <img style={typeIcon} src={imgMap[type["type"]["name"]]}></img>
                })
            }</div>
            <img style={imgStyle} src={props.image} alt=""/>
        </div>
    )
};

export default PokemonCard;