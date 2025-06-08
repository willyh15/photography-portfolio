<script>
  export let videoUrl = "";
  export let isOpen = false;
  export let onClose = () => {};
</script>

{#if isOpen}
  <div class="backdrop" on:click={onClose}>
    <div class="modal" on:click|stopPropagation>
      <iframe
        src={videoUrl}
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 90%;
    max-width: 800px;
    aspect-ratio: 16 / 9;
    background: black;
    border-radius: 8px;
    overflow: hidden;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>