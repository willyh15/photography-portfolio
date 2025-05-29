<script>
  import { Box, Flex, Text, Heading } from "@chakra-ui/svelte";
</script>

<style>
  .hero-bg {
    background-image: url('/path-to-your-image.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
  }
</style>

<Flex class="hero-bg" justify="center" align="center">
  <Box class="overlay" display="flex" alignItems="center" justifyContent="center" px="6" textAlign="center">
    <Box color="white">
      <Heading fontSize={{ base: "2xl", md: "4xl" }}>
        Encouraging couples to relive<br />
        moments, expressions,<br />
        and feelings through narrative wedding films.
      </Heading>
    </Box>
  </Box>
</Flex>