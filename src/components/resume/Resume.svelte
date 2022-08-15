<script lang="ts">
  import resume, { viewing } from "../../stores/resume";
  import Editor from "./Editor.svelte";
  import Nav from "./Nav.svelte";
  import Output from "./Output.svelte";
</script>

<main>
  <Nav />
  <div />
  {#if !$viewing}
    <Editor property="Name" label="Name" />
    <Editor property="Subname" label="Subname" />
    <Editor property="Website" label="Website" />
    <Editor property="Location" label="Location" />
    <Editor property="Email" label="Email" />
    <Editor property="Phone" label="Phone" />
    <Editor property="Github" label="Github" />
    <Editor property="LinkedIn" label="LinkedIn" />
  {/if}
  {#if $viewing}
    <Output property="Name" />
    <Output property="Subname" />
    <Output property="Website" />
    <Output property="Location" />
    <Output property="Email" />
    <Output property="Phone" />
    <Output property="Github" />
    <Output property="LinkedIn" />
  {/if}
</main>

<style>
  :global(html) {
    background: var(--cultured) !important;
  }

  main {
    background: var(--cultured);
    font-family: "Roboto", sans-serif;
    padding-top: 0px;
    font-size: 16px;
    overflow-y: auto;
  }

  div {
    height: 75px;
    width: 100vw;
  }
</style>
