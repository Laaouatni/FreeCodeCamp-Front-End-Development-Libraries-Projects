<script>
  export let data;
</script>

<button
  on:click={data.codeFunctionality}
  id={`${data.name}-${data.nameFunctionality}`}
  class="border-2 h-12 w-12 text-4xl text-blue-600 border-blue-500 shadow-md rounded-md bg-blue-50 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-95 active:scale-125 active:border-4 transition"
  >{data.icon}</button
>
