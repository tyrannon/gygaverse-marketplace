/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function EventPage(props) {
  const { event, overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      width="840px"
      height="901px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "EventPage")}
    >
      <View
        width="795px"
        height="871px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <Image
          width="795px"
          height="869px"
          position="absolute"
          top="1px"
          left="0.5px"
          padding="0px 0px 0px 0px"
          src="https://gygaverse.com/wp-content/uploads/2022/09/marketplace-gygaverse-Recovered.png"
          {...getOverrideProps(overrides, "event-image")}
        ></Image>
      </View>
    </Flex>
  );
}
