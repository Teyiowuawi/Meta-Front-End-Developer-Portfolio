import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc}) => {
  return (
    <VStack
      backgroundColor="#ffffff"
      borderRadius="3%"
      
    >
      <Image
        borderRadius="3%"
        img src={imageSrc} />
      <Text
        fontWeight="bold"
        color="#000000">{title}
      </Text>
      <Text
        color="#5a5a5a">{description}
      </Text>
      <Text
        color="#000000">See More
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </Text>
    </VStack>
    
    
  )
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
};

export default Card;
