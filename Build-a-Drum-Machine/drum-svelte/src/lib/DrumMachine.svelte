<script>
  import Display from "./Display.svelte";
  import PadContainer from "./PadContainer.svelte";

  let lastBtnName = "no sound...";
</script>

<div id="drum-machine" class="grid">
  <PadContainer bind:lastBtnName />
  <Display bind:lastBtnName />
</div>
