<script>
  import TimerLabel from "./TimerLabel.svelte";
  import TimeLeftContainer from "./TimeLeftContainer.svelte";
  
  export let valueObj;

  $: minute = valueObj.session;
</script>

<div class="border p-4 grid place-items-center gap-4">
  <TimerLabel />
  <TimeLeftContainer {minute} />
</div>
