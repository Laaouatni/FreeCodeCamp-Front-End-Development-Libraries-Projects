<script>
  export let buttonData;
</script>

<button
  on:click={buttonData.codeFunctionality}
  id={buttonData.id}
  class="grayscale overflow-hidden text-4xl border-8 bg-slate-100 hover:border-slate-300 active:border-slate-500 active:shadow-2xl rounded-lg active:rounded-2xl active:scale-110 flex-1 p-4 transition"
  >{buttonData.icon}</button
>
