<script>
  export let key;
  export let audioName;
  export let audioLink;
  export let lastBtnName;

  let thisButton;
  let thisAudio;
</script>

<svelte:body
  on:keydown={(event) => {
    if (event.key.toUpperCase() === key) {
      thisButton.focus();
      thisAudio.play();
      lastBtnName = audioName;
      setTimeout(() => {
        thisButton.blur();
      }, 151);
    }
  }}
/>

<button
  on:click={() => thisAudio.play()}
  on:click={() => (lastBtnName = audioName)}
  on:click={() => setTimeout(() => thisButton.blur(), 151)}
  bind:this={thisButton}
  class="border h-20 w-20 text-3xl rounded-xl bg-white hover:font-bold hover:scale-90 hover:shadow-inner transition focus:scale-150 active:scale-150 focus:rotate-6 active:rotate-6 focus:border-4 active:border-4 focus:border-blue-400 active:border-blue-400 focus:outline-none active:outline-none"
>
  {key}
  <audio class="clip" id={key} src={audioLink} bind:this={thisAudio} />
</button>
