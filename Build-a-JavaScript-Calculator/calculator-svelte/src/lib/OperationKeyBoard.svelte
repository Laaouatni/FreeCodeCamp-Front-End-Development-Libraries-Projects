<script>
  import OperationButton from "./OperationButton.svelte";

  export let mathString;

  const operationKeys = [
    { text: "add", operation: "+" },
    { text: "subtract", operation: "-" },
    { text: "multiply", operation: "*" },
    { text: "divide", operation: "/" },
  ];
</script>

<div class="grid gap-2">
  {#each operationKeys as { text, operation }}
    <OperationButton {text} {operation} bind:mathString />
  {/each}
</div>
