<script>
  export let data;

  function handleMouseDown() {
    const INTERVAL_TIME = 200;

    const interval = setInterval(
      data.codeFunctionality,
      INTERVAL_TIME,
    );
    const mouseup = () => {
      clearInterval(interval);
      document.removeEventListener("mouseup", mouseup);
    };
    document.addEventListener("mouseup", mouseup);
  }
</script>

<button
  on:click={data.codeFunctionality}
  on:mousedown={handleMouseDown}
  id={`${data.name}-${data.nameFunctionality}`}
  class="border-2 h-12 w-12 text-4xl text-blue-600 border-blue-500 shadow-md rounded-md bg-blue-50 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-95 active:scale-125 active:border-4 transition"
  >{data.icon}</button
>
