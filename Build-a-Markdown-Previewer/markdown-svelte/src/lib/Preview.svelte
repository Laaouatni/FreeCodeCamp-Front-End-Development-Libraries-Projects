<script>
  import Label from "./Label.svelte";
  import Prose from "./Prose.svelte";

  export let data;
</script>

<div class="flex flex-col gap-4">
  <Label forId="preview" />
  <div
    id="preview"
    class="border-4 shadow-lg rounded p-4 flex justify-center overflow-auto sm:row-span-2 h-full"
  >
    <Prose bind:data />
  </div>
</div>
