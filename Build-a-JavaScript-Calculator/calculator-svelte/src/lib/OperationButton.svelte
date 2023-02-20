<script>
  export let text;
  export let operation;

  export let mathString;

  function addOperator() {
    const lastCharString = mathString[mathString.length - 1];
    const isOperator = ["+", "-", "*", "/"].includes(lastCharString);

    if (!isOperator) {
      mathString += operation;
    } else {
      if (lastCharString !== operation) {
        mathString = mathString.slice(0, -1) + operation;
      }
    }
  }
</script>

<button
  on:click={addOperator}
  id={text}
  class="text-4xl w-16 h-16 border-4 border-blue-400 text-blue-400 active:scale-90 active:bg-blue-50 transition"
>
  {operation}
</button>
