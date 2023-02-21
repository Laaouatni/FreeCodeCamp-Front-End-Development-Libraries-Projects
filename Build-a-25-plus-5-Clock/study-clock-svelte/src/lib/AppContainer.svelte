<script>
  import ControlsContainer from "./ControlsContainer.svelte";
  import TimerContainer from "./TimerContainer.svelte";

  let valueObj = {
    break: 5,
    session: 25,
  };
</script>

<div class="grid rounded-xl p-4 gap-4 shadow-2xl shadow-white bg-white">
  <ControlsContainer bind:valueObj />
  <TimerContainer bind:valueObj />
</div>
