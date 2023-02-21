<script>
  import ButtonsContainer from "./ButtonsContainer.svelte";
  import ControlsLength from "./ControlsLength.svelte";

  export let name;
  export let valueObj;
  
  let value = valueObj[name];

  $: valueObj = {
    ...valueObj,
    [name]: value,
  };

  $: console.log("Add Decrease", valueObj);
</script>

<div
  class="flex items-center text-5xl font-extrabold gap-4"
>
  <ButtonsContainer {name} bind:value />
  <ControlsLength {value} />
</div>
