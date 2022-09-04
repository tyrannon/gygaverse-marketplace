/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="27px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="34px 55px 34px 55px"
      backgroundColor="rgba(45,57,86,1)"
      {...rest}
      {...getOverrideProps(overrides, "Footer")}
    >
      <View
        width="1331px"
        height="1px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 422")}
      ></View>
      <Image
        width="1226px"
        height="240px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "footer-gygaverse-react 1")}
      ></Image>
      <Flex
        gap="193px"
        width="1754px"
        height="115px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="20px 417px 20px 417px"
        {...getOverrideProps(overrides, "Frame 421")}
      >
        <Image
          width="85.25px"
          grow="1"
          basis="85.25px"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "facebook")}
        ></Image>
        <Image
          width="85.25px"
          grow="1"
          basis="85.25px"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "instagram")}
        ></Image>
        <Image
          width="85.25px"
          grow="1"
          basis="85.25px"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "twitter")}
        ></Image>
        <Image
          width="85.25px"
          grow="1"
          basis="85.25px"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "discord")}
        ></Image>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.01px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="© 2022 GYGAVERSE. All Rights Reserved."
        {...getOverrideProps(
          overrides,
          "\u00A9 2022 GYGAVERSE. All Rights Reserved."
        )}
      ></Text>
    </Flex>
  );
}
