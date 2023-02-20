<script>
  import AddDecreaseContainer from "./AddDecreaseContainer.svelte";
import ButtonsContainer from "./ButtonsContainer.svelte";
  import ControlsLabel from "./ControlsLabel.svelte";
  import ControlsLength from "./ControlsLength.svelte";

  export let name;
</script>

<div class="grid gap-4 border p-4">
  <ControlsLabel {name} />
  <AddDecreaseContainer {name} />
</div>
