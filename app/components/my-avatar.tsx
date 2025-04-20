import Avatar, { genConfig, AvatarFullConfig } from '@zamplyy/react-native-nice-avatar';
import { Who } from "@/src/domain";
import React from 'react';

export default function MyAvatar({ who }: { who: Who }) {

    const getAvatarConfig = (who: Who): AvatarFullConfig => {
        return (who === Who.MOM ?
            {
                "sex": "woman",
                "faceColor": "#F9C9B6",
                "earSize": "small",
                "eyeStyle": "circle",
                "noseStyle": "short",
                "mouthStyle": "laugh",
                "shirtStyle": "short",
                "glassesStyle": "none",
                "hairColor": "#000",
                "hairStyle": "womanLong",
                "hatStyle": "none",
                "hatColor": "#000",
                "shirtColor": "#F4D150",
                "bgColor": "#9286FE",
                "eyeBrowStyle": "upWoman"
            } : {
                "sex": "man",
                "faceColor": "#F9C9B6",
                "earSize": "big",
                "eyeStyle": "oval",
                "noseStyle": "round",
                "mouthStyle": "laugh",
                "shirtStyle": "polo",
                "glassesStyle": "none",
                "hairColor": "#000",
                "hairStyle": "thick",
                "hatStyle": "none",
                "hatColor": "#000",
                "shirtColor": "#6BD9E9",
                "bgColor": "#FB8F9E",
                "eyeBrowStyle": "up"
            }
        );
    }

    const config = genConfig(getAvatarConfig(who));

    return (
        <>
            <Avatar size={320} {...config} />
        </>
    )
}
