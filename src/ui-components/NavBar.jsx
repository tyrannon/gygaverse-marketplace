/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const imageThreeFourSixOneTwoSixNineNineOnClick = useNavigateAction({
    type: "url",
    url: "https://gygaverse.com",
  });
  return (
    <Flex
      gap="20px"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(6,88,179,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Image
        width="220px"
        height="45px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src="https://gygaverse.com/wp-content/uploads/2022/08/gygaverse-logo-text-pink-white.png"
        onClick={() => {
          imageThreeFourSixOneTwoSixNineNineOnClick();
        }}
        {...getOverrideProps(overrides, "image34612699")}
      ></Image>
      <Flex
        gap="32px"
        width="1136px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="1136px"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.05px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Hello, Kaiya"
          {...getOverrideProps(overrides, "Hello, Kaiya")}
        ></Text>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="33px"
          position="relative"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Signout"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Image
          width="45px"
          height="45px"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image29767085")}
        ></Image>
      </Flex>
    </Flex>
  );
}
