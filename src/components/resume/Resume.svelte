<script lang="ts">
  import resume, { viewing } from "../../stores/resume";
  import Editor from "./Editor.svelte";
  import Nav from "./Nav.svelte";
  import Output from "./Output.svelte";

  console.log($resume);
</script>

<section id="resume">
  <Nav />
  <div />
  {#if !$viewing}
    <div class="editors">
      <Editor property="Name" label="Name" />
      <Editor property="Subname" label="Subname" />
      <Editor property="Website" label="Website" />
      <Editor property="Location" label="Location" />
      <Editor property="Email" label="Email" />
      <Editor property="Phone" label="Phone" />
      <Editor property="Github" label="Github" />
      <Editor property="LinkedIn" label="LinkedIn" />
    </div>
  {/if}
  <div class="outputs">
    <Output property="Name" />
    <Output property="Subname" />
    <Output property="Website" />
    <Output property="Location" />
    <Output property="Email" />
    <Output property="Phone" />
    <Output property="Github" />
    <Output property="LinkedIn" />
  </div>
</section>

<style>
  :global(html) {
    background: var(--cultured) !important;
  }

  section {
    background: var(--cultured);
    font-family: "Roboto", sans-serif;
    padding-top: 0px;
    font-size: 16px;
    overflow-y: auto;
  }

  div {
    height: 20px;
    width: 100vw;
  }

  .editors {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
  }

  .outputs {
    height: calc(100vh - 75px);
    margin: 0px 20px;
  }
</style>
