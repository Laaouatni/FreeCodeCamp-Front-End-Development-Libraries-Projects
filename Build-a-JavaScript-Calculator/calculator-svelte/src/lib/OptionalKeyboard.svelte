<script>
  import OptionalButton from "./OptionalButton.svelte";

  export let mathString;

  const buttonsText = [".", "="];
</script>

<div class="flex gap-2">
  {#each buttonsText as text}
    <OptionalButton {text} bind:mathString />
  {/each}
</div>
