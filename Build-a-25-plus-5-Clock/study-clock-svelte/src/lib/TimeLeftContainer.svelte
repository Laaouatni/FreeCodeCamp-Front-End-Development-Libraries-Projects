<script context="module">
  export let minute;
  export let second = 0;

  const ONE_SECOND = 1000;

  let interval;

  function decreaseSecondTimer() {
    if (second === 0) {
      second = 60;
      minute -= 1;
    }
    if (second > 0) {
      second -= 1;
    }
    if (minute <= 0) {
      clearInterval(interval);
    }

    console.log(minute, second);
  }

  function startTimer() {
    interval = setInterval(decreaseSecondTimer, ONE_SECOND);
  }

  function stopTimer() {
    clearInterval(interval);
  }
</script>

<script>
  import TimeNumber from "./TimeNumber.svelte";

  export let minute;
  export let second = 0;

  startTimer();
</script>

<div id="time-left" class="text-7xl">
  <TimeNumber time={minute} />:<TimeNumber time={second} />
</div>
