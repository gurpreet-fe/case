import {
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
} from '@chakra-ui/react';
import { FcDonate, FcLike, FcShare } from 'react-icons/fc';
import H2 from './H2';

const Feature = (props) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {props.icon}
      </Flex>
      <Text fontWeight={600}>{props.title}</Text>
      <Text color={'gray.600'}>{props.text}</Text>
    </Stack>
  );
};

function Features() {
  return (
    <>
      <H2 text='How it works' />
      <Container px={4} maxW={'7xl'}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcLike} w={10} h={10} />}
            title={'View Projects'}
            text={''}
          />
          <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Donate Ethereum'}
            text={''}
          />
          <Feature
            icon={<Icon as={FcShare} w={10} h={10} />}
            title={'Share Across'}
            text={''}
          />
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Features;
