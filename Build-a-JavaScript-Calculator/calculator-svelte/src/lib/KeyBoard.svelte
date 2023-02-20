<script>
  import NumberKeyBoard from "./NumberKeyBoard.svelte";
  import OperationKeyBoard from "./OperationKeyBoard.svelte";

  export let mathString;
</script>

<div class="flex p-4 gap-6 border bg-white rounded-b-3xl shadow-lg">
  <NumberKeyBoard bind:mathString />
  <OperationKeyBoard bind:mathString />
</div>
