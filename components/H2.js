import { Container, Divider, Heading } from '@chakra-ui/react';

function H2(props) {
  return (
    <Container py={{ base: '4', md: '8' }} maxW={'7xl'}>
      <Heading as='h2' size='lg'>
        {props.text}
      </Heading>

      <Divider marginTop='4' />
    </Container>
  );
}

export default H2;
