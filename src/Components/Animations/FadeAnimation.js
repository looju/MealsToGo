import React, { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";

export const FadeInView = ({ duration, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export const SlideInView = ({ duration, ...props }) => {
  const slideAnim = useRef(new Animated.Value(50)).current;
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 5,
      duration: duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  }, [slideAnim, duration]);
  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [
          {
            translateX: slideAnim,
          },
        ],
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export const SlideOutView = ({ duration, ...props }) => {
  const slideOutAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(slideOutAnim, {
      toValue: 15,
      duration: duration,
      useNativeDriver: true,
      easing: Easing.circle,
    }).start();
  }, [slideOutAnim, duration]);
  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [
          {
            translateX: slideOutAnim,
          },
        ],
      }}
    >
      {props.children}
    </Animated.View>
  );
};
