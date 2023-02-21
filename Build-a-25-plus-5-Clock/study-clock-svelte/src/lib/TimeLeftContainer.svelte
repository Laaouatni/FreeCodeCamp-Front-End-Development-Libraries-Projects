<script>
  import TimeNumber from "./TimeNumber.svelte";

  export let minute;
  export let second;
</script>

<div id="time-left" class="text-7xl flex">
  <TimeNumber time={minute} />:<TimeNumber time={second} />
</div>
