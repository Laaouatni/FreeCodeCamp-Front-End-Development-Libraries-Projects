<script>
  import ControlsLabel from "./ControlsLabel.svelte";
  import AddDecreaseContainer from "./AddDecreaseContainer.svelte";

  export let name;
  export let valueObj;

  $: console.log("Control", valueObj);
</script>

<div class="grid gap-4 border p-4">
  <ControlsLabel {name} />
  <AddDecreaseContainer {name} {valueObj}/>
</div>
