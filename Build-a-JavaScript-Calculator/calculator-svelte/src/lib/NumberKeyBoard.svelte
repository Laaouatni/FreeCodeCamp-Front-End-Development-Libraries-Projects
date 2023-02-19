<script>
  import NumberButton from "./NumberButton.svelte";
  export let mathString;

  const numberKeys = [
    { text: "one", number: 1 },
    { text: "two", number: 2 },
    { text: "three", number: 3 },
    { text: "four", number: 4 },
    { text: "five", number: 5 },
    { text: "six", number: 6 },
    { text: "seven", number: 7 },
    { text: "eight", number: 8 },
    { text: "nine", number: 9 },
    { text: "zero", number: 0 },
  ];
</script>

<div class="grid grid-cols-3 gap-2">
  {#each numberKeys as { text, number }}
    <NumberButton {text} {number} bind:mathString />
  {/each}
</div>
