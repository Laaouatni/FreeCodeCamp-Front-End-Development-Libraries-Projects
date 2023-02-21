<script>
  import TimerLabel from "./TimerLabel.svelte";
  import TimeLeftContainer from "./TimeLeftContainer.svelte";
  import TimerControlsContainer from "./TimerControlsContainer.svelte";

  export let valueObj;

  let timeLeftObj = {
    minute: valueObj.session,
    second: 0,
  };

  let interval = null;
  let isTimerRunning;

  $: if(!isTimerRunning) {
    timeLeftObj.minute = valueObj.session;
  }
</script>

<div class="grid gap-4">
  <div class="border p-4 grid place-items-center gap-4">
    <TimerLabel />
    <TimeLeftContainer
      minute={timeLeftObj.minute}
      second={timeLeftObj.second}
    />
  </div>
  <TimerControlsContainer
    bind:timeLeftObj
    bind:interval
    bind:valueObj
    bind:isTimerRunning
  />
</div>
