<script>
  import ControlsLabel from "./ControlsLabel.svelte";
  import AddDecreaseContainer from "./AddDecreaseContainer.svelte";

  export let name;
  export let valueObj;
</script>

<div class="grid gap-4 p-4 rounded-lg hover:shadow-md transition">
  <ControlsLabel {name} />
  <AddDecreaseContainer {name} bind:valueObj/>
</div>
