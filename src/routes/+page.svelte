<script>
  import {
    Box, Flex, Text, Heading, VStack, Button, Input, Textarea, Image, useToast
  } from "@chakra-ui/svelte";
  import { fade, slide } from "svelte/transition";
  import { useInView } from "$lib/useInView.js";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  // Scroll observer for animations
  const [visibleHero, observeHero] = useInView();
  const [visibleFilms, observeFilms] = useInView();
  const [visibleContact, observeContact] = useInView();
  const [visibleQuick, observeQuick] = useInView();
  const [visibleCTA, observeCTA] = useInView();

  // Current section store for nav dots
  export const currentSection = writable("hero");
  const sections = ["hero", "films", "contact", "quick", "cta"];

  function handleScroll() {
    const scrollY = document.querySelector(".snap-container").scrollTop;
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && scrollY >= el.offsetTop - 50) {
        currentSection.set(id);
      }
    });
  }

  // Contact form state
  let name = "", email = "", message = "";
  const toast = useToast();

  const handleContactSubmit = async () => {
    if (!name || !email || !message) {
      toast({
        title: "Missing fields",
        description: "Please complete the form.",
        status: "error",
        duration: 3000
      });
      return;
    }

    const res = await fetch("/api/full-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      toast({ title: "Message sent", status: "success" });
      name = email = message = "";
    } else {
      toast({ title: "Failed to send", status: "error" });
    }
  };

  // Quick inquiry
  const inquiries = [
    "Are you available for my wedding date?",
    "How much do you charge for elopements?",
    "Can I see a full wedding video?",
    "Do you travel outside Mississippi?"
  ];

  const sendQuickMessage = async (msg) => {
    const res = await fetch("/api/quick-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    });

    toast({
      title: res.ok ? "Sent!" : "Failed to send",
      description: res.ok ? "We’ll be in touch." : "Try again later.",
      status: res.ok ? "success" : "error"
    });
  };
</script>

<style>
  .snap-container {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }
  .snap-section {
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  .hero-bg {
    background-image: url('/hero-bg.webp');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    filter: brightness(0.6) contrast(1.1);
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #4a5568;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #1a202c;
  }
  .nav-dot {
    margin: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #4a5568;
  }
  .nav-dot.active {
    background: #fff;
  }
</style>

<!-- SCROLL CONTAINER -->
<div class="snap-container" on:scroll={handleScroll}>

  <!-- HERO -->
  <section class="snap-section" id="hero" use:observeHero>
    {#if $visibleHero}
      <Flex class="hero-bg" direction="column" align="center" justify="center" transition:fade transition:slide={{ y: 50 }}>
        <Box textAlign="center" px="6" color="white">
          <Heading fontSize="4xl">Narrative Wedding Films</Heading>
          <Text fontSize="lg" mt="4">
            Encouraging couples to relive moments, expressions, and feelings through beautiful storytelling.
          </Text>
        </Box>
      </Flex>
    {/if}
  </section>

  <!-- FEATURED FILMS -->
  <section class="snap-section" id="films" use:observeFilms>
    {#if $visibleFilms}
      <Box textAlign="center" transition:fade transition:slide={{ y: 50 }}>
        <Heading fontSize="2xl">Featured Films</Heading>
        <Text mt="2">Short blurb about sample works</Text>
      </Box>
    {/if}
  </section>

  <!-- CONTACT FORM -->
  <section class="snap-section" id="contact" use:observeContact>
    {#if $visibleContact}
      <VStack spacing="6" maxW="2xl" mx="auto" px="6" transition:fade transition:slide={{ y: 40 }}>
        <Heading fontSize="2xl">Let’s Get In Touch</Heading>
        <Input placeholder="Your Name" bind:value={name} />
        <Input type="email" placeholder="Your Email" bind:value={email} />
        <Textarea placeholder="Your Message..." rows="6" bind:value={message} />
        <Button colorScheme="teal" on:click={handleContactSubmit}>Send Message</Button>
      </VStack>
    {/if}
  </section>

  <!-- QUICK INQUIRIES -->
  <section class="snap-section" id="quick" use:observeQuick>
    {#if $visibleQuick}
      <VStack spacing="4" px="6" maxW="2xl" mx="auto" textAlign="center" transition:fade transition:slide={{ y: 40 }}>
        <Heading fontSize="2xl">Quick Inquiries</Heading>
        {#each inquiries as q}
          <Button variant="outline" w="100%" on:click={() => sendQuickMessage(q)}>{q}</Button>
        {/each}
      </VStack>
    {/if}
  </section>

  <!-- CTA / FOOTER -->
  <section class="snap-section" id="cta" use:observeCTA>
    {#if $visibleCTA}
      <VStack spacing="4" px="6" textAlign="center" transition:fade transition:slide={{ y: 30 }}>
        <Heading fontSize="xl">Want to know more?</Heading>
        <Button variant="solid">Find Out More</Button>
        <Text fontSize="sm" mt="8" color="gray.400">
          hello@weareabundant.co<br />901.833.9039
        </Text>
      </VStack>
    {/if}
  </section>
</div>

<!-- NAV DOTS -->
<div style="position: fixed; top: 50%; right: 1rem; transform: translateY(-50%); z-index: 20;">
  {#each sections as id}
    <div class="nav-dot" class:active={$currentSection === id}></div>
  {/each}
</div>