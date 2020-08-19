import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/core';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { theme } from '../../theme';
import { FlexContainer } from './FlexContainer';
import { FlexNavItem } from './FlexNavItem';
import { NavMenu } from './NavMenu';

export const Header: React.FC = () => {
  const [show, setShow] = useState(true);
  const [value, setValue] = useState('');
  return (
    <>
      <Flex
        as='header'
        backgroundColor={theme.colors.primary[100]}
        justifyContent='center'
      >
        <FlexContainer>
          <FlexNavItem display={[show ? 'Flex' : 'none', null, 'Flex']}>
            <NextLink href='/'>
              <Box width='10rem' flex='0 0 auto'>
                <StyledImage
                  src='https://salt.tikicdn.com/ts/banner/33/ba/89/54c02d2475983f93a024c0cd13f238e4.png'
                  alt=''
                />
              </Box>
            </NextLink>
          </FlexNavItem>

          <FlexNavItem flex='1 1 auto'>
            <InputGroup flex='0 1 40rem'>
              <label htmlFor='product-search-bar' aria-label='search'></label>
              <StyledInput
                id='product-search-bar'
                onBlur={() => setShow(true)}
                onFocus={() => setShow(false)}
                placeholder='Search'
                focusBorderColor='primary.400'
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setValue(e.currentTarget.value);
                }}
              ></StyledInput>
              <InputRightElement>
                <NextLink href={`/search?q=${value}`}>
                  <Box as={IoMdSearch} size='2rem' color='#ccc'></Box>
                </NextLink>
              </InputRightElement>
            </InputGroup>
          </FlexNavItem>
          <NavMenu display={['none', null, 'flex']} flex='0'></NavMenu>
        </FlexContainer>
      </Flex>
      <NavMenu
        display={['flex', null, 'none']}
        position='fixed'
        bottom='0'
      ></NavMenu>
    </>
  );
};

const StyledInput = styled(Input)`
  ::placeholder {
    color: #fff;
  }
`;

const StyledImage = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
