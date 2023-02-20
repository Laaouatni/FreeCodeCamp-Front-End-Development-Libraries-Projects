<script>
  import ButtonsContainer from "./ButtonsContainer.svelte";
  import ControlsLength from "./ControlsLength.svelte";

  export let name;

  export let valueObj;
  console.log(valueObj)

  export let value = name === "break" ? valueObj.break : valueObj.session;
</script>

<div
  class="flex items-center text-5xl font-extrabold gap-4"
>
  <ButtonsContainer {name} bind:value />
  <ControlsLength {value} />
</div>
