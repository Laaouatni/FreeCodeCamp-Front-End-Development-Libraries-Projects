<script>
  export let mathString;

  function resultFromString(mathString) {
    return getCorrectEval(mathString) % 1 === 0
      ? getCorrectEval(mathString)
      : getCorrectEval(mathString).toFixed(2);

    function getCorrectEval(mathString) {
      try {
        return eval(mathString);
      } catch (e) {
        return eval(mathString.slice(0, -1));
      }
    }
  }
</script>

<div class="text-3xl font-semibold">
  {resultFromString(mathString)}
</div>