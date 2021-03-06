import { Button, Divider, Flex, Image, Text } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { Router, withRouter } from 'next/router';
import React, { Component, useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { IoMdArrowBack, IoMdCart } from 'react-icons/io';
import { CartContext } from '../../providers/cart/cart.provider';

type IRightBox = {
  id: number;
  images: string[];
  name: string;
  price: number;
  description: string;
  router: Router;
  addItem: (item) => void;
};

type ImageState = {
  Image: string;
};
class RightBox extends Component<IRightBox, ImageState> {
  constructor(props) {
    super(props);
    this.state = {
      Image: this.props.images[1],
    };
  }

  render() {
    const {
      router,
      images,
      name,
      description,
      price,
      id,
      addItem,
    } = this.props;

    const item = {
      imgUrl: `https://media3.scdn.vn${images[0]}`,
      name: name,
      price: price,
      id: id,
    };

    return (
      <Flex as='section' justifyContent='center'>
        <Flex
          flex='0 22 60rem'
          backgroundColor='white'
          justifyContent='center'
          flexWrap='wrap'
          paddingX={['1rem', null, '5rem']}
          borderColor='blue.200'
        >
          {/* big image */}
          <Flex flex='0 2 25rem' paddingY={['2rem', null, '5rem']}>
            <Image
              maxHeight='400px'
              borderWidth='2px'
              borderColor='black.200'
              borderRadius='5px'
              src={`https://media3.scdn.vn${this.state.Image}`}
            />
          </Flex>
          {/* divider */}
          <Flex
            display={['none', null, 'flex']}
            flex='0 1 5rem'
            paddingY='2rem'
            justifyContent='center'
          >
            <Divider orientation='vertical' borderColor='#BBB' />
          </Flex>
          {/* name */}
          <Flex
            flex='0 1 20rem'
            paddingY={['2rem', null, '5rem']}
            justifyContent='center'
            flexWrap='wrap'
            alignItems='center'
          >
            <Text fontSize='2xl' width='100%'>
              {name}
            </Text>
            <Flex flex='0 1 100%'>
              <Text fontSize='3xl' fontWeight={'100'}></Text>
            </Flex>
            {/* list images */}
            {images
              .filter((image, index) => index < 3)
              .map((img) => (
                <StyledImage
                  src={`https://media3.scdn.vn${img}`}
                  onClick={() => this.setState({ Image: img })}
                  height='70px'
                  marginTop='10px'
                  width='78px'
                />
              ))}

            <Flex paddingY='1rem' flex='0 1 100%'>
              <Divider orientation='vertical' borderColor='#BBB' />
              <Button
                variantColor='primary'
                width='100%'
                leftIcon={IoMdCart}
                onClick={() => addItem(item)}
              >
                {price}
              </Button>
              <Divider orientation='vertical' borderColor='#BBB' />
              <Button
                size='md'
                variantColor='secondary'
                onClick={() => router.push('/')}
              >
                <IoMdArrowBack></IoMdArrowBack>
              </Button>
              <Divider orientation='vertical' borderColor='#BBB' />
            </Flex>
          </Flex>
          <Flex paddingBottom='2rem'></Flex>
          {ReactHtmlParser(description)}
        </Flex>
      </Flex>
    );
  }
}

export { RightBox };

const StyledImage = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;
const Bo1x = ({ images, name, description, price, id, router }) => {
  const { addItem } = useContext(CartContext);

  return (
    <RightBox
      router={router}
      images={images}
      name={name}
      description={description}
      price={price}
      id={id}
      addItem={addItem}
    ></RightBox>
  );
};

export default withRouter(Bo1x);
