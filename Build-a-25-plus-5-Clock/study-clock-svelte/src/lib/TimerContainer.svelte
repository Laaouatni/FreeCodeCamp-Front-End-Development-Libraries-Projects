<script>
  import TimerLabel from "./TimerLabel.svelte";
  import TimeLeftContainer from "./TimeLeftContainer.svelte";
  import TimerControlsContainer from "./TimerControlsContainer.svelte";

  export let valueObj;

  $: timeLeftObj = {
    minute: valueObj.session,
    second: 0,
  };
  
  let interval = null;
</script>

<div class="grid gap-4">
  <div class="border p-4 grid place-items-center gap-4">
    <TimerLabel />
    <TimeLeftContainer
      minute={timeLeftObj.minute}
      second={timeLeftObj.second}
    />
  </div>
  <TimerControlsContainer bind:timeLeftObj bind:interval {valueObj}  />
</div>
