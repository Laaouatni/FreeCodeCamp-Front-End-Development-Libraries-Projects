<script>
  import NumberKeyBoard from "./NumberKeyBoard.svelte";
  import OperationKeyBoard from "./OperationKeyBoard.svelte";

  export let mathString;
</script>

<div class="flex p-4 gap-6 border">
  <NumberKeyBoard bind:mathString />
  <OperationKeyBoard bind:mathString />
</div>
