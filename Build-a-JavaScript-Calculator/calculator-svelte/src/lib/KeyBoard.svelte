<script>
  import NumberKeyBoard from "./NumberKeyBoard.svelte";
  import OperationKeyBoard from "./OperationKeyBoard.svelte";
  import OptionalKeyboard from "./OptionalKeyboard.svelte";

  export let mathString;
</script>

<div class="grid p-4 gap-6 border bg-white rounded-b-3xl shadow-lg">
  <div class="flex gap-6">
    <NumberKeyBoard bind:mathString />
    <OperationKeyBoard bind:mathString />
  </div>
  <div>
    <OptionalKeyboard bind:mathString />
  </div>
</div>
