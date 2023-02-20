<script>
  export let text;
  export let mathString;

  const POINT = ".";

  function addOptional() {
    const lastCharString = mathString[mathString.length - 1];
    const isPoint = lastCharString === POINT;
    const isOperator = ["+", "-", "*", "/"].includes(lastCharString);

    if (!isPoint) {
      // if the last character is a operator add a "0."
      if (isOperator) mathString += "0" + POINT; 
      else mathString += POINT;
    }
  }
</script>

<button
  on:click={() => {
    if (text != "=") addOptional();
    else alert("svelte.js framework is reactive, there isn't any need for this button")
  }}
  class="flex-1 text-4xl w-16 h-16 border-4 border-blue-400 text-blue-400 active:scale-90 active:bg-blue-50 transition"
>
  {text}
</button>
