<script>
  import resume from "../../stores/resume";
  export let property;
</script>

<div class="output">
  {#if $resume[property]}
    {$resume[property]}
  {/if}
</div>
