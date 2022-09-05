/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function EventDetail(props) {
  const { event, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      width="1040px"
      height="1683px"
      alignItems="flex-start"
      position="relative"
      padding="27px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "EventDetail")}
    >
      <View
        width="1040px"
        height="1656px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 424")}
      >
        <Flex
          gap="32px"
          position="absolute"
          top="0px"
          left="0px"
          direction="column"
          width="599px"
          height="1367px"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 401")}
        >
          <Image
            width="550px"
            height="309px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            src={event?.ticket_image}
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Flex
            gap="0"
            direction="column"
            width="551px"
            height="988px"
            shrink="0"
            position="relative"
            padding="13px 18px 0px 12px"
            backgroundColor="rgba(230,239,236,1)"
            {...getOverrideProps(overrides, "Frame 6")}
          >
            <Flex
              gap="-401px"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7")}
            >
              <View
                width="521px"
                height="200px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "About this event")}
              >
                <Text
                  fontFamily="Hind Guntur"
                  fontSize="24px"
                  fontWeight="700"
                  color="rgba(250,56,157,1)"
                  lineHeight="30px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="flex-start"
                  width="521px"
                  height="38px"
                  position="absolute"
                  top="0px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="ABOUT THIS EVENT"
                  {...getOverrideProps(overrides, "ABOUT THIS EVENT")}
                ></Text>
                <Divider
                  width="521px"
                  height="1px"
                  position="absolute"
                  top="69px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  size="small"
                  orientation="horizontal"
                  {...getOverrideProps(overrides, "Divider29766957")}
                ></Divider>
                <Text
                  fontFamily="Hind Guntur"
                  fontSize="24px"
                  fontWeight="400"
                  color="rgba(0,0,0,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="flex-start"
                  letterSpacing="0.09px"
                  width="521px"
                  position="absolute"
                  top="101px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="For the first time ever in concert history Tory Lanez performs live in virtual reality."
                  {...getOverrideProps(overrides, "AboutDetails")}
                ></Text>
              </View>
            </Flex>
            <View
              width="521px"
              height="182px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Artist")}
            >
              <Text
                fontFamily="Hind Guntur"
                fontSize="24px"
                fontWeight="700"
                color="rgba(250,56,157,1)"
                lineHeight="30px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="521px"
                height="38px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="TORY LANEZ"
                {...getOverrideProps(overrides, "ARTIST")}
              ></Text>
              <Divider
                width="521px"
                height="1px"
                position="absolute"
                top="46px"
                left="0px"
                padding="0px 0px 0px 0px"
                size="small"
                orientation="horizontal"
                {...getOverrideProps(overrides, "Divider34762747")}
              ></Divider>
              <Text
                fontFamily="Hind Guntur"
                fontSize="24px"
                fontWeight="400"
                color="rgba(0,0,0,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.09px"
                width="521px"
                position="absolute"
                top="55px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Live inside the Gygaverse&#xA;or&#xA;Download the Gygaverse App on the Oculus"
                {...getOverrideProps(overrides, "ArtistDetails34762749")}
              ></Text>
            </View>
            <View
              width="521px"
              height="415px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Event Details")}
            >
              <Text
                fontFamily="Hind Guntur"
                fontSize="24px"
                fontWeight="700"
                color="rgba(250,56,157,1)"
                lineHeight="30px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="521px"
                height="38px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="SEPTEMBER 9TH"
                {...getOverrideProps(overrides, "Event Time")}
              ></Text>
              <Divider
                width="521px"
                height="1px"
                position="absolute"
                top="46px"
                left="0px"
                padding="0px 0px 0px 0px"
                size="small"
                orientation="horizontal"
                src=""
                {...getOverrideProps(overrides, "Divider34762754")}
              ></Divider>
              <Text
                fontFamily="Hind Guntur"
                fontSize="24px"
                fontWeight="400"
                color="rgba(0,0,0,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.09px"
                width="521px"
                position="absolute"
                top="55px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="General Admission Tickets $50&#xA;&#xA;Includes Admission to event&#xA;Includes Collectible NFT ticket&#xA;Includes Meet & Greet with Tory Lanez virtually"
                {...getOverrideProps(overrides, "ArtistDetails34762755")}
              ></Text>
            </View>
            <Divider
              height="1px"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider34762744")}
            ></Divider>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          position="absolute"
          top="0px"
          left="608px"
          direction="column"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 402")}
        >
          <View
            width="331px"
            height="309px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "buy tickets")}
          >
            <Image
              width="331px"
              height="309px"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              src="https://gygaverse.com/wp-content/uploads/2022/09/for-the-first-time-ever.png"
              {...getOverrideProps(overrides, "buyTickets")}
            ></Image>
          </View>
          <Flex
            gap="10px"
            direction="column"
            width="331px"
            height="992px"
            shrink="0"
            position="relative"
            padding="12px 0px 0px 22px"
            backgroundColor="rgba(230,239,236,1)"
            {...getOverrideProps(overrides, "Frame 425")}
          >
            <Text
              fontFamily="Hind Guntur"
              fontSize="24px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="DATE & TIME"
              {...getOverrideProps(overrides, "DATE & TIME")}
            ></Text>
            <Text
              fontFamily="Hind Guntur"
              fontSize="18px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Friday September 9th, 2022&#xA;Doors open @5:00pm EST&#xA;Showtime @ 9:00pm EST"
              {...getOverrideProps(
                overrides,
                "Friday September 9th, 2022 Doors open @5:00pm EST Showtime @ 9:00pm EST"
              )}
            ></Text>
          </Flex>
        </Flex>
      </View>
    </Flex>
  );
}
