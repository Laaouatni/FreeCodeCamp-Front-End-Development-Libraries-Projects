<script>
  export let time;
  import { fly } from "svelte/transition";
</script>

{#key time}
  <div in:fly={{y:-30, duration: 1000}}>
    {time.toString().padStart(2, "0")}
  </div>
{/key}
