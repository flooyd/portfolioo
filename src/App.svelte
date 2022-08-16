<script>
  import FloydJones from "./components/FloydJones.svelte";
  import Resume from "./components/resume/Resume.svelte";
  import { page } from "./stores/router";
</script>

{#if $page === "resume"}
  <Resume />
{/if}
{#if $page === "floyd"}
  <FloydJones />
{/if}
