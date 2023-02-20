<script>
  export let time;
</script>

<span>
  {#if time < 10}
    0{time}
  {:else}
    {time}
  {/if}
</span>
