<script>
  import Display from "./Display.svelte";
  import KeyBoard from "./KeyBoard.svelte";

  let mathString = "0";
</script>

<div>
  <Display bind:mathString />
  <KeyBoard bind:mathString />
</div>
