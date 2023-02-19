<script>
  import InputDisplay from "./InputDisplay.svelte";
  import OutputDisplay from "./OutputDisplay.svelte";

  export let mathString;
</script>

<div
  class="border p-4 text-right font-mono bg-blue-700 rounded-t-2xl text-white"
>
  <InputDisplay bind:mathString />
  <OutputDisplay />
</div>
