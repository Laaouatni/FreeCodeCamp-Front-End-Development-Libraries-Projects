<script>
  import Control from "./Control.svelte";

  const labelsArray = ["break", "session"];

  export let valueObj;

  $: console.log("Controls Container:", valueObj);
</script>

<div class="flex gap-8">
  {#each labelsArray as name}
    <Control {name} {valueObj} />
  {/each}
</div>
