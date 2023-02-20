<script>
  import ControlsContainer from "./ControlsContainer.svelte";
  import TimerContainer from "./TimerContainer.svelte";

  export let valueObj = {
    break: 5,
    session: 25,
  };
</script>

<div class="grid border p-4 gap-8">
  <ControlsContainer {valueObj} />
  <TimerContainer />
</div>
