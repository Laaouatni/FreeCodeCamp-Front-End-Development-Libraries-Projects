<script>
  import Editor from "../lib/Editor.svelte";
  import Preview from "../lib/Preview.svelte";

  let data;
</script>

<div
  class="lg:flex sm:grid grid-rows-3 h-screen gap-8 p-4 border"
>
  <Editor bind:data />
  <Preview bind:data />
</div>
