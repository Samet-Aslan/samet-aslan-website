import React from "react";
import Avatar from "avataaars";
import me from "../images/me.jpg"

function MyAvatar(){

    return(
                    <Avatar
                        avatarStyle='Circle'
                        topType='ShortHairShortFlat'
                        accessoriesType='Blank'
                        hairColor='BrownDark'
                        facialHairType='BeardLight'
                        facialHairColor='BrownDark'
                        clotheType='Hoodie'
                        clotheColor='Heather'
                        eyeType='Happy'
                        eyebrowType='DefaultNatural'
                        mouthType='Smile'
                        skinColor='Light'
                    />    
    );
}
export default MyAvatar;
