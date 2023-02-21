<script>
  export let buttonData;
  export let valueObj;

  const DEFAULT_OBJ = {
    session: 25,
    break: 5,
  };

  function handleClick() {
    if (buttonData.id === "start_stop") {
      console.log("start_stop");
    } else if (buttonData.id === "reset") {
      console.log("reset");
      valueObj = {
        ...valueObj,
        ...DEFAULT_OBJ,
      };
    }
  }
</script>

<button
  on:click={handleClick}
  id={buttonData.id}
  class="grayscale overflow-hidden text-4xl border-8 bg-slate-100 hover:border-slate-300 active:border-slate-500 active:shadow-2xl rounded-lg active:rounded-2xl active:scale-110 flex-1 p-4 transition"
  >{buttonData.icon}</button
>
