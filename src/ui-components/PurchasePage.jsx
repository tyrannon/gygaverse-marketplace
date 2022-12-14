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
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function PurchasePage(props) {
  const { event, overrides, ...rest } = props;
  const buttonThreeFourSevenTwoTwoEightSevenSixOnClick = useNavigateAction({
    type: "url",
    url: "https://buy.stripe.com/test_14k4ihgeE4FM8QEbII",
  });
  const buttonThreeFourSevenTwoTwoEightEightThreeOnClick = useNavigateAction({
    type: "url",
    url: "https://buy.stripe.com/test_5kAaGF4vW2xE9UI7st",
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="954px"
      height="575px"
      position="relative"
      padding="24px 0px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "PurchasePage")}
    >
      <Flex
        gap="29px"
        width="893px"
        height="551px"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 30px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Purchase")}
      >
        <Flex
          gap="0"
          direction="column"
          height="456px"
          shrink="0"
          position="relative"
          padding="19px 0px 19px 0px"
          {...getOverrideProps(overrides, "left column")}
        >
          <Flex
            gap="10px"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="5px 5px 5px 5px"
            {...getOverrideProps(overrides, "closePurchase")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="555px"
            height="39px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Tory lanez live in the gygaverse"
            {...getOverrideProps(overrides, "Event Title")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(103,103,103,1)"
            lineHeight="25px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="555px"
            height="39px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Friday September 9th, 2022 - 9:00 pm EST"
            {...getOverrideProps(overrides, "Event Date")}
          ></Text>
          <Image
            width="555px"
            height="30px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            src="https://gygaverse.com/wp-content/uploads/2022/09/blue-bar.png"
            {...getOverrideProps(overrides, "blue-seperator34722870")}
          ></Image>
          <Flex
            gap="131px"
            width="555px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "general admission and button")}
          >
            <View
              width="251px"
              height="78px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "general admission")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                textTransform="uppercase"
                lineHeight="25px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="555px"
                height="39px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="General admission"
                {...getOverrideProps(overrides, "General Admission")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                textTransform="uppercase"
                lineHeight="25px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="555px"
                height="39px"
                position="absolute"
                top="39px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="$50 (INCLUDES TAX)"
                {...getOverrideProps(overrides, "Cost34722874")}
              ></Text>
            </View>
            <View
              width="150px"
              height="40px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "buy general admission34722875")}
            >
              <Button
                display="flex"
                gap="0"
                position="absolute"
                top="0px"
                left="0px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="rgba(250,56,157,1)"
                size="default"
                isDisabled={false}
                variation="primary"
                children="$50"
                onClick={() => {
                  buttonThreeFourSevenTwoTwoEightSevenSixOnClick();
                }}
                {...getOverrideProps(overrides, "Button34722876")}
              ></Button>
            </View>
          </Flex>
          <Image
            width="555px"
            height="30px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            src="https://gygaverse.com/wp-content/uploads/2022/09/blue-bar.png"
            {...getOverrideProps(overrides, "blue-seperator34722877")}
          ></Image>
          <Flex
            gap="131px"
            width="555px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "VIP admission and button")}
          >
            <View
              width="251px"
              height="78px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "vip admission")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                textTransform="uppercase"
                lineHeight="25px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="555px"
                height="39px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="VIP MEET & GREET"
                {...getOverrideProps(overrides, "VIP Admission")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                textTransform="uppercase"
                lineHeight="25px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="555px"
                height="39px"
                position="absolute"
                top="39px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="$150 (INCLUDES TAX)"
                {...getOverrideProps(overrides, "Cost34722881")}
              ></Text>
            </View>
            <View
              width="150px"
              height="40px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "buy general admission34722882")}
            >
              <Button
                display="flex"
                gap="0"
                position="absolute"
                top="0px"
                left="0px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="rgba(250,56,157,1)"
                size="default"
                isDisabled={false}
                variation="primary"
                children="$150"
                onClick={() => {
                  buttonThreeFourSevenTwoTwoEightEightThreeOnClick();
                }}
                {...getOverrideProps(overrides, "Button34722883")}
              ></Button>
            </View>
          </Flex>
          <Flex
            gap="10px"
            direction="column"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="36px 0px 0px 0px"
            {...getOverrideProps(overrides, "checkout")}
          ></Flex>
        </Flex>
        <Flex
          gap="13px"
          direction="column"
          width="316px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 31px 0px"
          backgroundColor="rgba(230,239,236,1)"
          {...getOverrideProps(overrides, "right column")}
        >
          <Image
            width="315px"
            height="192px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            src="https://gygaverse.com/wp-content/uploads/2022/09/tory-lanez-live-in-the-gygaverse.png"
            {...getOverrideProps(overrides, "event-profile-image")}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
