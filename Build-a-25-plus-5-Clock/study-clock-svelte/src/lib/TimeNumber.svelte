<script>
  export let time;

  function padTime(time) {
    return time.toString().padStart(2, "0");
  }
</script>

<span>
  {padTime(time)}
</span>
