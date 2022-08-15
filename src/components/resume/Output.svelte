<script>
  import resume from "../../stores/resume";
  export let property;
</script>

{#if $resume[property]}
  {$resume[property]}
{/if}
