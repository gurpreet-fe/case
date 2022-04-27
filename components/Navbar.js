import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Link,
  Heading,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { IoMoon, IoSunny } from 'react-icons/io5';
import NextLink from 'next/link';
import { FaEthereum } from 'react-icons/fa';
import { useState } from 'react';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        as={'header'}
        pos='fixed'
        top='0'
        w={'full'}
        minH={'60px'}
        boxShadow={'sm'}
        zIndex='999'
        justify={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.8)',
            'rgba(26, 32, 44, 0.8)'
          ),
        }}
      >
        <Container as={Flex} maxW={'7xl'} align={'center'}>
          <Container
            as={Flex}
            align={'center'}
            justifyContent={'center'}
            flex={{ base: 1, md: 'auto' }}
            justify={{ base: 'start', md: 'start' }}
            p={0}
          >
            <Link href={'/'} passhref='true'>
              <Heading
                as={'h1'}
                fontSize={'xl'}
                display={{ base: 'none', md: 'block' }}
              >
                CASE
              </Heading>
            </Link>
          </Container>

          <Container as={Flex} align={'center'} justifyContent={'center'} p={0}>
            <HStack>
              <NextLink href={'/'} passHref>
                <Button as={'a'} variant={'link'}>
                  Home
                </Button>
              </NextLink>
            </HStack>
          </Container>

          <Container as={Flex} align={'center'} justifyContent={'end'} p={0}>
            <HStack>
              <IconButton
                isRound
                size={'sm'}
                variant={'ghost'}
                icon={<AiFillGithub size={25} />}
              />
              <IconButton
                isRound
                size={'sm'}
                variant={'ghost'}
                aria-label={'Toggle Color Mode'}
                onClick={toggleColorMode}
                icon={
                  colorMode == 'light' ? (
                    <IoMoon size={20} />
                  ) : (
                    <IoSunny size={28} />
                  )
                }
              />
              <ConnectWallet />
            </HStack>
          </Container>
        </Container>
      </Flex>
    </Box>
  );
}

const ConnectWallet = () => {
  const [walletButtonText, setWalletButtonText] = useState('Connect Wallet');

  const connectWalletHandler = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({
          method: 'eth_requestAccounts',
        })
        .then((accounts) => {
          const account = accounts[0];

          setWalletButtonText(
            account.substring(0, 7) +
              '...' +
              account.substring(account.length - 4)
          );
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert('Please install MetaMask browser extension');
    }
  };

  return (
    <Button
      isTruncated
      maxWidth={172}
      leftIcon={<FaEthereum />}
      colorScheme='purple'
      variant={'solid'}
      rounded={'full'}
      onClick={connectWalletHandler}
    >
      {walletButtonText}
    </Button>
  );
};

export default Navbar;
