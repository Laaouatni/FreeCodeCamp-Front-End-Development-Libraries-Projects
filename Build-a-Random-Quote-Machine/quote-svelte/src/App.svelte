<script>
  import "./app.css";
  import QuoteBox from "./lib/QuoteBox.svelte";

  let index = 0;

  async function fetchData() {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    );
    return await response.json();
  }
</script>

<div class="min-h-screen max-w-screen grid place-items-center p-4 gap-4">
  {#await fetchData()}
    loading...
  {:then value}
    <QuoteBox data={value.quotes[index]} bind:index max={value.quotes.length}/>
  {:catch error}
    error...
  {/await}
</div>
