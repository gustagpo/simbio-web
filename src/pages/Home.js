import React, { useState, useEffect } from "react";
import { formatValue } from "../utils/format";
import {
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Icon
} from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import api from '../services/api';
import {BsHeart} from 'react-icons/bs'

export default function Home() {
  const [data, setData] = useState([]);

  async function checkData(){
    const response = await api.get('/projects', {
      headers: {}
    });
    console.log(response.data);
    setData(response.data)
  }

  useEffect(() => {
    checkData();
    
  }, []);

  return (
    <Container
      py={8}
      px={0}
      maxW={{
        base: "100%",
        sm: "35rem",
        md: "43.75rem",
        lg: "57.5rem",
        xl: "75rem",
        xxl: "87.5rem"
      }}
    >
      <Heading
        noOfLines={2}
        fontSize={{ base: "lg", md: "xl" }}
        textAlign="left"
        w="full"
        mb={50}
        ml={10}
        color="teal"
      >
        Ver outros Projetos do Proponente
      </Heading>
      <Carousel gap={32}>
        {data.map((post, index) => (
          <Flex
            key={index}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px"
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            rounded={5}
            flex={1}
            p={5}
          >
            <VStack spacing={3} mb={2} alignItems="flex-start" >
              <Heading px='2' py='1' rounded='5' bg='orange.100' color='orange.600' fontSize='sm' textAlign='left'>
                ROUANET
              </Heading>
              <Heading
                noOfLines={2}
                fontSize={{ base: "lg", md: "xl" }}
                w="full"
                height="48px"
                mb={2}
                color="base.d700"
                fontWeight="semibold"
              >
                {post.nome}
              </Heading>
              <Text w="full" color="gray.500">{post.municipio} ● {post.uf}</Text>
              <Text noOfLines={3} w="full" color="gray.500">{post.justificativa}</Text>
            </VStack>

            <Flex flexDirection="column">
              <VStack spacing={3} mt={2} mb={2} alignItems="flex-start">
                <HStack w="full">
                  <Text color="base.d700" w="50%">
                    Aprovado
                  </Text>
                  <Text color="base.d700" w="100%">
                    <b>{formatValue(post.valor_captado)}</b>
                  </Text>
                </HStack>
                <HStack w="full">
                  <Text color="base.d700" w="50%">
                    Captado
                  </Text>
                  <Text color="base.d700" w="100%">
                    <b>{formatValue(post.valor_aprovado)}</b>
                  </Text>
                </HStack>
              </VStack>
              <HStack mt={5} justifyContent="center">
                <Button
                  onClick={() => alert(`Projeto ${post.id_projeto} clicked`)}
                  w="80%"
                  fontWeight="semibold"
                  color="gray.400"
                  bg="gray.100"
                  size="md"
                >
                  ADICIONAR
                </Button>
                <Icon as={BsHeart}  w="20%" h={8} color='gray.300'/>
              </HStack>
            </Flex>
          </Flex>
        ))}
      </Carousel>
    </Container>
  );
}
