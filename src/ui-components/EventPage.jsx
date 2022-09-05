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
        width="616px"
        height="674px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <Image
          width="615px"
          height="673px"
          position="absolute"
          top="0.5px"
          left="0.5px"
          padding="0px 0px 0px 0px"
          src={event?.event_image}
          {...getOverrideProps(overrides, "event-image")}
        ></Image>
      </View>
    </Flex>
  );
}
