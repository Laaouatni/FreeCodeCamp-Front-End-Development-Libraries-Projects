<script>
  import { marked } from "marked";

  export let data;

  $: html = marked.parse(data || "");
</script>

<div
  class="prose sm:max-w-none lg:max-w-lg"
>
  {@html html}
</div>
