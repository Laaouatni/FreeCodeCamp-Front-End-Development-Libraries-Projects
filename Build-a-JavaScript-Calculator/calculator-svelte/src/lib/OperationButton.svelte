<script>
  export let text;
  export let operation;

  export let mathString;
</script>

<button
  on:click={() => (mathString += operation)}
  id={text}
  class="text-4xl w-16 h-16 border-4 border-blue-400 text-blue-400 active:scale-90 active:bg-blue-50 transition"
>
  {operation}
</button>
