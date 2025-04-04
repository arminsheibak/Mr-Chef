import { Drawer, Box, HStack, VStack, CloseButton, Image } from '@chakra-ui/react'
import { RiMenu4Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const NavbarMenu = () => {
  return (
    <Drawer.Root >
        <Drawer.Trigger asChild>
          <Box hideFrom={"md"} marginTop={4}>
            <RiMenu4Fill size={36} color={"#7a7a7a"} />
          </Box>
        </Drawer.Trigger>
        <Drawer.Backdrop />
        <Drawer.Positioner >
          <Drawer.Content>
            <Drawer.Header>
              <HStack>
                <Link to={"/"}>
                  <Image src={logo} height={"40px"} />
                </Link>
                <Drawer.Title marginTop={1} >Mr. Chef</Drawer.Title>
              </HStack>
            </Drawer.Header>
            <Drawer.Body >
              <VStack gap={5} marginTop={3}>
                <Link to={"/recipes"}>Recipes</Link>
                <Link to={"/"}>Trending</Link>
                <Link to={"/favorites"}>Favorites</Link>
                <Link to={"https://github.com/arminsheibak"}>About Us</Link>
              </VStack>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
  )
}

export default NavbarMenu