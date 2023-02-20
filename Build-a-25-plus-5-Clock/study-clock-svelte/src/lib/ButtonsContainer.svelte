<script>
  import ControlButton from "./ControlButton.svelte";

  export let name;
  export let value;

  const buttonsArray = [
    {
      name,
      nameFunctionality: "decrement",
      icon: "🠗",
      codeFunctionality: () => {
        const isNotValid = value <= 1;
        if (!isNotValid) {
          value -= 1;
        }
      },
    },
    {
      name,
      nameFunctionality: "increment",
      icon: "🠕",
      codeFunctionality: () => {
        const isNotValid = value >= 60;
        if (!isNotValid) {
          value += 1;
        }
      },
    },
  ];
</script>

<div class="flex gap-4">
  {#each buttonsArray as data}
    <ControlButton {data} />
  {/each}
</div>
