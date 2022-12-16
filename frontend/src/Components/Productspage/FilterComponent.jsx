import React,{useEffect} from 'react'
import {CheckboxGroup,  Checkbox ,VStack,Text,Box} from '@chakra-ui/react';
import { useState } from "react";



function FilterComponent() {
  return (
    <Box width={"100%"} mt={"1.5rem"}>
      <Box mb="1rem" borderBottom="1px solid #e8e8e8" pb={"1rem"}>
        <Box mb={"2rem"}>
          <select id="cars1" >
            <option>price</option>
            <option value="low">Low To High</option>
            <option value="high">High To Low</option>
          </select>
        </Box>
        <CheckboxGroup
          colorScheme="green"
          
        >
          <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
            Brand
          </Text>
          <VStack
            direction={["column", "row"]}
            alignItems={"baseline"}
            fontSize={"12px"}
            fontWeight={"375"}
          >
            <Checkbox value="Fresho">Fresho</Checkbox>
            <Checkbox value="Organic">Organic</Checkbox>
            <Checkbox value="Hoovu Fresh">Hoovu Fresh</Checkbox>
            <Checkbox value="Brotos">Brotos</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box pb={"1rem"} mb="1rem" borderBottom="1px solid #e8e8e8">
        <CheckboxGroup
          colorScheme="green"
         
        >
          <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
            Pack Size
          </Text>
          <VStack
            direction={["column", "row"]}
            alignItems={"baseline"}
            fontSize={"12px"}
            fontWeight={"375"}
          >
            <Checkbox value="100 g">100 g</Checkbox>
            <Checkbox value="250 g">250 g</Checkbox>
            <Checkbox value="1 kg">1 kg</Checkbox>
            <Checkbox value="2 kg">2 kg</Checkbox>
            <Checkbox value="1 pc"> 1 pc</Checkbox>
            <Checkbox value="2 pcs">2 pcs</Checkbox>
            <Checkbox value="40 cm">40cm</Checkbox>
            <Checkbox value="2 items">2 items</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box pb={"1rem"} mb="1rem" borderBottom="1px solid #e8e8e8">
        <CheckboxGroup
          colorScheme="green"
          
        >
          <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
            Price
          </Text>
          <VStack
            direction={["column", "row"]}
            alignItems={"baseline"}
            fontSize={"12px"}
            fontWeight={"375"}
          >
            <Checkbox value="0-50">0-50</Checkbox>
            <Checkbox value="51-100">51-100</Checkbox>
            <Checkbox value="101-150">101-150</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
    </Box>
  )
}

export default FilterComponent