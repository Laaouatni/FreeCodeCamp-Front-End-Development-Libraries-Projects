<script>
  import Editor from "../lib/Editor.svelte";
  import Preview from "../lib/Preview.svelte";

  let data;
</script>

<div
  class="lg:flex grid grid-rows-2 h-screen gap-8 p-4"
>
  <Editor bind:data />
  <Preview bind:data />
</div>
