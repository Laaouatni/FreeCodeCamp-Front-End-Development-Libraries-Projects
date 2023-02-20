<script>
  import ButtonsContainer from "./ButtonsContainer.svelte";
  import ControlsLength from "./ControlsLength.svelte";

  export let name;
  export let value = name === "break" ? 5 : 25;
</script>

<div class="flex items-center text-5xl font-bold gap-4">
  <ButtonsContainer {name} bind:value/>
  <ControlsLength {value}/>
</div>