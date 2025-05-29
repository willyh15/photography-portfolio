<script>
  import { Box, Flex, Text, Heading, Image, Button, VStack, HStack, Input, Textarea, useToast } from "@chakra-ui/svelte";

  const featuredFilms = [
    {
      title: "Oxford, Mississippi",
      subtitle: "Beautiful Speeches, Beautiful Couple",
      date: "Jul 8, 2023",
      thumb: "/gallery1.jpg",
      link: "https://example.com/film1"
    },
    {
      title: "Raymond, Mississippi",
      subtitle: "Stunning Couple / Thoughtful Wedding",
      date: "Mar 26, 2022",
      thumb: "/gallery2.jpg",
      link: "https://example.com/film2"
    }
  ];

  let name = "";
  let email = "";
  let message = "";

  const toast = useToast();

  const handleSubmit = () => {
    if (!name || !email || !message) {
      toast({
        title: "Missing Fields",
        description: "Please fill out all fields.",
        status: "error",
        duration: 4000,
        isClosable: true
      });
      return;
    }

    console.log("Submitted:", { name, email, message });

    toast({
      title: "Message Sent",
      description: "We'll get back to you shortly.",
      status: "success",
      duration: 4000,
      isClosable: true
    });

    name = "";
    email = "";
    message = "";
  };
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

<!-- Hero Section -->
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

<!-- Featured Wedding Films -->
<Box px="6" py="12" bg="white">
  <VStack spacing="6" align="start">
    <Heading fontSize="2xl" fontWeight="semibold">01.</Heading>
    <Text fontSize="xl" fontStyle="italic">featured wedding films</Text>

    <HStack overflowX="auto" spacing="6" py="4">
      {#each featuredFilms as film}
        <VStack minW="280px" spacing="3" align="start">
          <a href={film.link} target="_blank" rel="noopener noreferrer">
            <Image src={film.thumb} borderRadius="md" alt={film.title} />
          </a>
          <Box>
            <Text fontWeight="bold">{film.title}</Text>
            <Text fontSize="sm">{film.subtitle}</Text>
            <Text fontSize="xs" color="gray.500">{film.date}</Text>
          </Box>
        </VStack>
      {/each}
    </HStack>

    <Button variant="outline" size="lg" borderRadius="none" px="6">
      WATCH MORE FILMS
    </Button>
  </VStack>
</Box>

<!-- Interactive Contact / Booking Section -->
<Box bg="white" px="6" py="16">
  <VStack spacing="8" maxW="2xl" mx="auto" align="stretch">
    <Heading textAlign="center" fontSize="2xl">03. let’s get together</Heading>
    <Text fontSize="md" textAlign="center">
      We'd love to hear more about your day. Tell us your wedding date, your vision, or any questions you have —
      and we’ll start the conversation.
    </Text>

    <VStack spacing="4">
      <Input placeholder="Your Name" bind:value={name} />
      <Input placeholder="Your Email" type="email" bind:value={email} />
      <Textarea placeholder="Your Message..." rows="6" bind:value={message} />
      <Button colorScheme="teal" on:click={handleSubmit}>
        Send Message
      </Button>
    </VStack>
  </VStack>
</Box>

<!-- Final CTA Section -->
<Box bg="green.700" color="white" px="6" py="16">
  <VStack spacing="6" maxW="2xl" mx="auto" textAlign="center">
    <Heading fontSize="2xl">04. want to know more?</Heading>
    <Text fontSize="md">
      You’ve come here for more info and we’re here to provide it! Click the button below for details, FAQs,
      and client reviews. Or just shoot us an email — we’re here for you.
    </Text>
    <Button variant="outline" color="white" borderColor="white" _hover={{ bg: "whiteAlpha.200" }}>
      FIND OUT MORE
    </Button>
  </VStack>
</Box>

<!-- Footer Section -->
<Box bg="white" py="12" px="6" textAlign="center">
  <VStack spacing="4">
    <Text fontSize="sm" color="gray.600" fontStyle="italic">
      Cinematic Wedding Videography<br />
      Mississippi. Memphis. Birmingham. Nationwide.
    </Text>

    <Box fontSize="xl" fontWeight="bold">abundant films</Box>

    <HStack justify="center" spacing="4">
      <a href="https://youtube.com" target="_blank">📺</a>
      <a href="https://instagram.com" target="_blank">📸</a>
      <a href="mailto:hello@weareabundant.co">📧</a>
      <a href="https://facebook.com" target="_blank">📘</a>
    </HStack>

    <Text fontSize="sm" color="gray.500">hello@weareabundant.co<br />901.833.9039</Text>
  </VStack>
</Box>