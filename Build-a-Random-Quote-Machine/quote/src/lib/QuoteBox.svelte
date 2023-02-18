<script>
  import Author from "./Author.svelte";
  import BtnNewQuote from "./BtnNewQuote.svelte";
  import BtnTweetQuote from "./BtnTweetQuote.svelte";
  import Text from "./Text.svelte";

  export let index;
  export let data;
  export let max;

  function addOne() {
    if (index === max - 1) {
      index = 0;
    } else {
      index += 1;
    }
  }
</script>

<div class="border shadow-lg p-8 rounded-xl grid gap-4 max-w-[60vw] hover:-translate-y-1 hover:border-b-8 hover:border-b-blue-400 transition">
  <div>
    <Text data={data.quote} />
    <Author data={data.author} />
  </div>
  <div class="flex justify-between">
    <BtnTweetQuote />
    <BtnNewQuote on:click={addOne} />
  </div>
</div>
