<script lang="ts">
  import resume, {
    viewing,
    ready,
    selectedProperty,
    editAll,
    styles,
  } from "../../stores/resume";
  import Editor from "./Editor.svelte";
  import Nav from "./Nav.svelte";
  import Output from "./Output.svelte";
  import Modal from "./Modal.svelte";
  import StyleModal from "./StyleModal.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let y;

  onMount(() => {
    $resume = localStorage.getItem("resume")
      ? JSON.parse(localStorage.getItem("resume"))
      : $resume;

    $styles = localStorage.getItem("styles")
      ? JSON.parse(localStorage.getItem("styles"))
      : $styles;

    $ready = true;
  });
</script>

{#if $ready}
  <main id="resume" transition:fade={{ duration: 100 }}>
    {#if $selectedProperty}
      <Modal><StyleModal property={$selectedProperty} /></Modal>
    {/if}
    {#if $editAll}
      <Modal flex={true}>
        <StyleModal id="styleModal1" property="Name" />
        <StyleModal id="styleModal2" property="Subname" />
        <StyleModal id="styleModal3" property="Website" />
        <StyleModal id="styleModal4" property="Location" />
        <StyleModal id="styleModal5" property="Email" />
        <StyleModal id="styleModal6" property="Phone" />
        <StyleModal id="styleModal7" property="Github" />
        <StyleModal id="styleModal8" property="Linkedin" />
      </Modal>
    {/if}
    <Nav />
    <div />
    {#if !$viewing}
      <div class="toolbar">
        <button on:click={() => ($editAll = true)}>Edit All Styles</button>
      </div>
      <div class="editors">
        <Editor property="Name" label="Name" />
        <Editor property="Subname" label="Subname" />
        <Editor property="Location" label="Location" />
        <Editor property="Email" label="Email" />
        <Editor property="Phone" label="Phone" />
        <Editor property="Website" label="Website" />
        <Editor property="Github" label="Github" />
        <Editor property="Linkedin" label="LinkedIn" />
      </div>
    {/if}
    <div class="outputs">
      <Output property="Name" />
      <Output property="Subname" />
      <Output property="Location" />
      <Output property="Email" />
      <Output property="Phone" />
      <Output property="Website" />
      <Output property="Github" />
      <Output property="Linkedin" />
    </div>
  </main>
{/if}
<svelte:window bind:scrollY={y} />

<style>
  main {
    background: var(--cultured);
    font-family: "Roboto", sans-serif;
    padding-top: 0px;
    font-size: 16px;
    position: relative;
    height: 100%;
    width: 100%;
  }

  div {
    height: 20px;
    width: fit-content;
  }

  .toolbar {
    padding-left: 20px;
    margin-bottom: 20px;
    width: fit-content;
  }

  button {
    background: var(--cultured);
    color: black;
    border-radius: 8px;
    padding: 2px 8px;
  }

  button:hover {
    background: var(--light-green);
    cursor: pointer;
  }

  .editors {
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
  }

  .outputs {
    margin: 0px 20px;
    position: relative;
    height: fit-content;
    background: var(--light-green);
    width: calc(100% - 80px);
    padding: 20px;
  }
</style>
