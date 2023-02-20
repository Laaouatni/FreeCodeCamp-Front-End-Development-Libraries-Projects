<script>
  export let value;
  import { scale } from "svelte/transition";
</script>

{#key value}
  <div in:scale={{ duration: 150 }} class="text-blue-500">{value}</div>
{/key}
