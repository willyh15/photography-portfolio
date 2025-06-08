<script>
  import {
    Box,
    Flex,
    Text,
    Heading,
    VStack,
    HStack,
    Image,
    Button,
    Input,
    Textarea
  } from "@chakra-ui/svelte";
  import { useInView } from "$lib/useInView";

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
  let message = "";

  async function handleSubmit() {
    await fetch("/api/inquiry", {
      method: "POST",
      body: JSON.stringify({ name, message }),
      headers: { "Content-Type": "application/json" }
    });
    name = "";
    message = "";
  }
</script>

<style>
  html {
    scroll-snap-type: y mandatory;
  }
  section {
    scroll-snap-align: start;
    min-height: 100vh;
    padding: 4rem 1rem;
  }
</style>

<!-- HERO -->
<section style="background: url('/hero.jpg') center/cover no-repeat;">
  <Flex class="overlay" justify="center" align="center" h="100%">
    <Box color="white" textAlign="center" px="6">
      <Heading fontSize={{ base: "2xl", md: "4xl" }}>
        Encouraging couples to relive<br />
        moments, expressions,<br />
        and feelings through narrative wedding films.
      </Heading>
    </Box>
  </Flex>
</section>

<!-- FEATURED FILMS -->
<section style="background: #111">
  <VStack spacing="6" align="start" px="6">
    <Heading fontSize="2xl" fontWeight="semibold" color="white">01.</Heading>
    <Text fontSize="xl" fontStyle="italic" color="gray.300">featured wedding films</Text>

    <HStack overflowX="auto" spacing="6" py="4">
      {#each featuredFilms as film}
        <VStack minW="280px" spacing="3" align="start">
          <a href={film.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={film.thumb}
              borderRadius="md"
              alt={film.title}
              loading="lazy"
              decoding="async"
            />
          </a>
          <Box>
            <Text fontWeight="bold" color="white">{film.title}</Text>
            <Text fontSize="sm" color="gray.400">{film.subtitle}</Text>
            <Text fontSize="xs" color="gray.500">{film.date}</Text>
          </Box>
        </VStack>
      {/each}
    </HStack>

    <Button variant="outline" size="lg" borderRadius="none" px="6">
      WATCH MORE FILMS
    </Button>
  </VStack>
</section>

<!-- CONTACT -->
<section>
  <VStack spacing="6" align="stretch" maxW="xl" mx="auto">
    <Heading size="lg" color="white">Get in Touch</Heading>

    <Input
      placeholder="Your Name"
      value={name}
      on:input={(e) => (name = e.target.value)}
    />
    <Textarea
      placeholder="Tell us about your wedding"
      value={message}
      on:input={(e) => (message = e.target.value)}
    />
    <Button on:click={handleSubmit} colorScheme="brand" size="lg">
      Send Inquiry
    </Button>
  </VStack>
</section>