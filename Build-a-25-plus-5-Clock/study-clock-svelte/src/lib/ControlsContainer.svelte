<script>
  import Control from "./Control.svelte";

  const labelsArray = ["break", "session"];
</script>

<div class="border flex gap-8 p-4">
  {#each labelsArray as name}
    <Control {name} />
  {/each}
</div>
