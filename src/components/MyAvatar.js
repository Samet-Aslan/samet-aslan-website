import React from "react";
import Avatar from "avataaars";
import me from "../images/me.jpg"

function MyAvatar(){

    return(

        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
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
    </div>
    <div class="flip-box-back">
        <img src={me}></img>
    </div>
  </div>
</div>
            
    );
}
export default MyAvatar;
