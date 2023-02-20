<script>
  export let text;
  export let number;

  export let mathString;

  function addNumber() {
    const numbers = mathString.split(/[\+\-\*\/]/);
    const lastNumber = numbers[numbers.length - 1];
    const firstChar = lastNumber[0];
    
    if (firstChar !== "0") {
      mathString += number;
    } else {
      mathString = mathString.slice(0, -lastNumber.length) + number;
    }
  }
</script>

<button
  on:click={addNumber}
  id={text}
  class="text-2xl h-16 border-4 {number === 0
    ? 'col-span-3'
    : 'w-16'} active:scale-90 active:bg-gray-50 transition"
>
  {number}
</button>
