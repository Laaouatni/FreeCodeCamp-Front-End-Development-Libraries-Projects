<script>
  import TimerControlsButton from "./TimerControlsButton.svelte";

  export let valueObj;

  const buttonsArray = [
    { id: "start_stop", nameFunctionality: "Play/pause toggle", icon: "⏯" },
    { id: "reset", nameFunctionality: "reset", icon: "🔄" },
  ];
</script>

<div class="flex justify-around gap-4">
  {#each buttonsArray as buttonData}
    <TimerControlsButton {buttonData} bind:valueObj />
  {/each}
</div>
