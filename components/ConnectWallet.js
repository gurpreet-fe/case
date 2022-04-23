import { Button } from '@chakra-ui/react';
import { FaEthereum } from 'react-icons/fa';

function ConnectWallet() {
  const connectWalletHandler = () => {};

  return (
    <Button
      leftIcon={<FaEthereum />}
      colorScheme='purple'
      variant={'solid'}
      rounded={'full'}
      onClick={connectWalletHandler}
    >
      Connect Wallet
    </Button>
  );
}

export default ConnectWallet;
