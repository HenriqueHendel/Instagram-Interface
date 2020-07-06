import React from "react";
import { Animated } from "react-native";

import {Small, Original} from "./styles";

const opacity = new Animated.Value(0);
const OriginalAnimeted = Animated.createAnimatedComponent(Original);

export default function LazyImage({
    smallSource,
    source,
    aspectRatio,
}){
    function handleAnimate(){
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver:true
        }).start();
    }
    return(
        <Small source={smallSource} ratio={aspectRatio} resizeMode="contain" blurRadius={2}>

            <OriginalAnimeted 
                style={{opacity}}
                source={source} ratio={aspectRatio} resizeMode="contain" onLoadEnd={handleAnimate}
            />
        </Small>
    );
}