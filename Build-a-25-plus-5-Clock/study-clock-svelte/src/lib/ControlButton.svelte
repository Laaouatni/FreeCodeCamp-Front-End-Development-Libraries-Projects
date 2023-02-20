<script>
  export let data;

  function handleMouseDown() {
    const TIME_TO_WAIT = 500;
    const INTERVAL_TIME = 200;
    setTimeout(() => {
      const interval = setInterval(
        data.codeFunctionality,
        INTERVAL_TIME,
      );
      const mouseup = () => {
        clearInterval(interval);
        document.removeEventListener("mouseup", mouseup);
      };
      document.addEventListener("mouseup", mouseup);
    }, TIME_TO_WAIT);
  }
</script>

<button
  on:click={data.codeFunctionality}
  on:mousedown={handleMouseDown}
  id={`${data.name}-${data.nameFunctionality}`}
  class="border-2 h-12 w-12 text-4xl text-blue-600 border-blue-500 shadow-md rounded-md bg-blue-50 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-95 active:scale-125 active:border-4 transition"
  >{data.icon}</button
>
