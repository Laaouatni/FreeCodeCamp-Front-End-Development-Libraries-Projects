<script>
  import QuoteCharacter from "./QuoteCharacter.svelte";

  export let data;
</script>

<div id="text" class="text-3xl font-semibold">
  <QuoteCharacter>❝</QuoteCharacter>
  <div>
    {data}
  </div>
    <!-- <QuoteCharacter>❞</QuoteCharacter> -->
</div>