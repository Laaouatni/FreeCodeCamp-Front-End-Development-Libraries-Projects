<script>
  import ControlsContainer from "./ControlsContainer.svelte";
  import TimerContainer from "./TimerContainer.svelte";

  let valueObj = {
    break: 5,
    session: 25,
  };

  $: console.log("App Container:", valueObj);
</script>

<div class="grid border p-4 gap-8">
  <ControlsContainer bind:valueObj />
  <TimerContainer {valueObj} />
</div>
