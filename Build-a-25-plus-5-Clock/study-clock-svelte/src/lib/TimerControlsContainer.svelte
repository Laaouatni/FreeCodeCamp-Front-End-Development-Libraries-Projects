<script>
  import TimerControlsButton from "./TimerControlsButton.svelte";

  export let valueObj;
  export let timeLeftObj;
  export let interval;

  const buttonsArray = [
    {
      id: "start",
      nameFunctionality: "Play",
      icon: "▶️",
      codeFunctionality: startTimer
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
    const ONE_SECOND = 1000;
    const DEFAULT_OBJ = {
      session: 25,
      break: 5,
    };

    interval = setInterval(decreaseSecondTimer, ONE_SECOND);

    console.log("start timer")

    function decreaseSecondTimer() {
      if (timeLeftObj.second === 0) {
        timeLeftObj.second = 60;
        timeLeftObj.minute -= 1;
      }
      if (timeLeftObj.second > 0) {
        timeLeftObj.second -= 1;
      }
      if (timeLeftObj.minute <= 0) {
        clearInterval(interval);
        valueObj = {
          ...valueObj,
          ...DEFAULT_OBJ,
        };
      }

      console.log("decreaseSecondTimer")
    }
  }

  function stopTimer() {
    clearInterval(interval);
    console.log("stop timer")
  }

  function resetTimer() {
    clearInterval(interval);
    timeLeftObj.minute = valueObj.session;
    timeLeftObj.second = 0;
    console.log("reset timer")
  }
</script>

<div class="flex justify-around gap-4">
  {#each buttonsArray as buttonData}
    <TimerControlsButton {buttonData} />
  {/each}
</div>
