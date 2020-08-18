import {
  Button,
  ButtonProps,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FlexProps,
  useDisclosure,
  useToast,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { IoMdHome, IoMdList, IoMdPerson } from 'react-icons/io';
import { theme } from '../../theme';
import CartDropdown from '../cart/CartDropdown';
import { FlexNavItem } from './FlexNavItem';

export const NavLinkButton: React.FC<ButtonProps> = (props) => (
  <Button variant='link' color='white' {...props}></Button>
);

const NavMenu: React.FC<FlexProps> = (props) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      {...props}
      as='nav'
      bg={theme.colors.primary[100]}
      width='full'
      justifyContent='space-around'
    >
      <FlexNavItem display={['block', 'block', 'none']}>
        <NextLink href={`/`}>
          <NavLinkButton size='lg' leftIcon={IoMdHome}>
            Home
          </NavLinkButton>
        </NextLink>
      </FlexNavItem>

      <FlexNavItem>
        <NavLinkButton size='lg' leftIcon={IoMdList} onClick={onOpen}>
          List
        </NavLinkButton>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Apple</DrawerHeader>
            <DrawerBody>
              <NextLink href={`/search?q=Iphone-11`}>Iphone 11</NextLink>
              <br />
              <NextLink href={`/search?q=Iphone-11-pro`}>
                Iphone 11 Pro
              </NextLink>
              <br />
              <NextLink href={`/search?q=Iphone-11-pro-max`}>
                Iphone 11 Pro Max
              </NextLink>
              <br />
              <NextLink href={`/search?q=op-lung-iphone`}>
                Ốp lưng Iphone
              </NextLink>
            </DrawerBody>
            <DrawerHeader borderBottomWidth='1px'>Samsung</DrawerHeader>
            <DrawerBody>
              <NextLink href={`/search?q=samsung-galaxy-s20`}>
                Samsung Galaxy S20
              </NextLink>
              <br />
              <NextLink href={`/search?q=samsung-galaxy-s20-plus`}>
                Samsung Galaxy S20+
              </NextLink>
              <br />
              <NextLink href={`/search?q=samsung-galaxy-note-20-ultra-5g`}>
                Samsung Galaxy Note 20 Ultra 5G
              </NextLink>
              <br />
              <p>Coming soon...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </FlexNavItem>

      <FlexNavItem>
        <CartDropdown />
      </FlexNavItem>

      <FlexNavItem>
        <NavLinkButton
          size='lg'
          leftIcon={IoMdPerson}
          onClick={() =>
            toast({
              title: 'Coming soon',
              description: 'Unable to create user account.',
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          }
        >
          Login
        </NavLinkButton>
      </FlexNavItem>
    </Flex>
  );
};

export { NavMenu };
