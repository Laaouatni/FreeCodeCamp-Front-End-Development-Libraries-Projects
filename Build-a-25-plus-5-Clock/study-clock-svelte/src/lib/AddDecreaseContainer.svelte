<script>
  import ButtonsContainer from "./ButtonsContainer.svelte";
  import ControlsLength from "./ControlsLength.svelte";

  export let name;

  export let valueObj;

  // $: console.log("Add Decrease", valueObj);
</script>

<div
  class="flex items-center text-5xl font-extrabold gap-4"
>
  <ButtonsContainer {name} bind:value={valueObj[name]} />
  <ControlsLength value={valueObj[name]} />
</div>
