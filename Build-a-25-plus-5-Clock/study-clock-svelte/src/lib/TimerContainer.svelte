<script>
  import TimerLabel from "./TimerLabel.svelte";
  import TimeLeftContainer from "./TimeLeftContainer.svelte";
  import TimerControlsContainer from "./TimerControlsContainer.svelte";

  export let valueObj;
</script>

<div class="grid gap-4">
  <div class="border p-4 grid place-items-center gap-4">
    <TimerLabel />
    <TimeLeftContainer minute={valueObj.session} />
  </div>
  <TimerControlsContainer bind:valueObj />
</div>
