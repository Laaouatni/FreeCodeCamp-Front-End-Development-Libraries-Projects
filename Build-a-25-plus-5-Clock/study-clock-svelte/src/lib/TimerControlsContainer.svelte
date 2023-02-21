<script>
  import TimerControlsButton from "./TimerControlsButton.svelte";

  export let valueObj;
  export let timeLeftObj;
  export let interval;

  export let isTimerRunning = false;

  const buttonsArray = [
    {
      id: "start",
      nameFunctionality: "Play",
      icon: "▶️",
      codeFunctionality: startTimer,
    },
    {
      id: "stop",
      nameFunctionality: "Stop",
      icon: "⏹",
      codeFunctionality: stopTimer,
    },
    {
      id: "reset",
      nameFunctionality: "reset",
      icon: "🔄",
      codeFunctionality: resetTimer,
    },
  ];

  function startTimer() {
    isTimerRunning = true;

    const ONE_SECOND = 1000;
    const DEFAULT_OBJ = {
      session: 25,
      break: 5,
    };

    interval = setInterval(decreaseSecondTimer, ONE_SECOND);

    console.log("start timer");

    function decreaseSecondTimer() {
      if (timeLeftObj.second === 0) {
        timeLeftObj.second = 60;
        timeLeftObj.minute -= 1;
      }
      if (timeLeftObj.second > 0) {
        timeLeftObj.second -= 1;
      }
      if (timeLeftObj.minute <= 0 && timeLeftObj.second <= 0) {
        clearInterval(interval);
        valueObj = {
          ...valueObj,
          ...DEFAULT_OBJ,
        };
      }

      console.log("decreaseSecondTimer", {
        minute: timeLeftObj.minute,
        second: timeLeftObj.second,
      });
    }
  }

  function stopTimer() {
    isTimerRunning = false;
    clearInterval(interval);

    console.log("stop timer");
  }

  function resetTimer() {
    const DEFAULT_OBJ = {
      session: 25,
      break: 5,
    };

    clearInterval(interval);
    isTimerRunning = false;

    valueObj.session = 25;
    valueObj.break = 5;

    timeLeftObj.minute = valueObj.session;
    timeLeftObj.second = 0;

    console.log("reset timer");
  }
</script>

<div class="flex justify-around gap-4">
  {#each buttonsArray as buttonData}
    <TimerControlsButton {buttonData} />
  {/each}
</div>
