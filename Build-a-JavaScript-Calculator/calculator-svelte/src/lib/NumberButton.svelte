<script>
  export let text;
  export let number;
  export let mathString;
</script>

<button
  on:click={() => (mathString += number)}
  id={text}
  class="text-2xl h-16 border-4 {number === 0
    ? 'col-span-3'
    : 'w-16'} active:scale-90 active:bg-gray-50 transition"
>
  {number}
</button>
