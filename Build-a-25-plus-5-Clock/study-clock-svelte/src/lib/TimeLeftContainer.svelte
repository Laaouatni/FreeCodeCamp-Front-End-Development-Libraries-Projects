<script>
  import TimeNumber from "./TimeNumber.svelte";

  export let minute;
  let second = 5;
</script>

<div id="time-left" class="text-7xl">
  <TimeNumber time={minute} /> 
  : 
  <TimeNumber time={second} />
</div>
