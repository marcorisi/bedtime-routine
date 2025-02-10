import { Text } from "react-native"
import Avatar, { genConfig, SexType } from '@zamplyy/react-native-nice-avatar';
import { Who } from "../src/domain";
import React from 'react';

export function MyAvatar({ who }: { who: Who }) {

    const getAvatarConfig = (who: Who): AvatarConfig => {
        if (who === Who.MOM) {
            return {
                "sex": "woman",
                "faceColor": "#F9C9B6",
                "earSize": "small",
                "eyeStyle": "circle",
                "noseStyle": "short",
                "mouthStyle": "laugh",
                "shirtStyle": "polo",
                "glassesStyle": "none",
                "hairColor": "#000",
                "hairStyle": "womanLong",
                "hatStyle": "none",
                "hatColor": "#000",
                "eyeBrowStyle": "up",
                "shirtColor": "#F4D150",
                "bgColor": "linear-gradient(45deg, #3e1ccd 0%, #ff6871 100%)"
            }
        } else {
            return {
                "sex": "man",
                "faceColor": "#F9C9B6",
                "earSize": "big",
                "eyeStyle": "oval",
                "noseStyle": "round",
                "mouthStyle": "laugh",
                "shirtStyle": "short",
                "glassesStyle": "none",
                "hairColor": "#000",
                "hairStyle": "thick",
                "hatStyle": "none",
                "hatColor": "#000",
                "eyeBrowStyle": "up",
                "shirtColor": "#6BD9E9",
                "bgColor": "linear-gradient(45deg, #1729ff 0%, #ff56f7 100%)"
            }
        }
    }

    const config = genConfig(getAvatarConfig(who));

    return (
        <>
            <Avatar size={320} {...config} />
        </>
    )
}
