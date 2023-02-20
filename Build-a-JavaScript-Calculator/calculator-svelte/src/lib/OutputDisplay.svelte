<script>
  export let mathString;

  function resultFromString(mathString) {
    try {
      return eval(mathString);
    } catch (e) {
      return eval(mathString.slice(0, -1));
    }
  }
</script>

<div class="text-3xl font-semibold">
  {resultFromString(mathString)}
</div>