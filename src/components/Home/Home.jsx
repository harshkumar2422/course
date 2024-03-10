import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import './Home.css';
import logo from '../../assets/images/logo.png';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing="5"
          >
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text
              fontSize={'2xl'}
              fontFamily="cursive"
              textAlign={['center', 'left']}
              children="Find valueable content as Reasonable Price"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme={'yellow'}>
                Explore now
              </Button>
            </Link>
          </VStack>

          <Image src={logo} className="vector-graphics" boxSize={'md'} />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="OUR BRANDS"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          autoPlay
          muted
          loop
          controls
          src="https://res.cloudinary.com/dbibpsvgt/video/upload/v1710087248/student_-_73007_360p_wmk5d4.mp4"
          controlsList="nodownload nofullscreen noremoteplayback"
        ></video>
      </div>
    </section>
  );
};

export default Home;
