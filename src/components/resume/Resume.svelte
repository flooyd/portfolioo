<script lang="ts">
  import resume, { viewing, ready, showModal } from "../../stores/resume";
  import Editor from "./Editor.svelte";
  import Nav from "./Nav.svelte";
  import Output from "./Output.svelte";
  import * as animateScroll from "svelte-scrollto";
  import Modal from "./Modal.svelte";
  import StyleModal from "./StyleModal.svelte";
  import { onMount } from "svelte";
  let y;
  onMount(() => {
    $resume = localStorage.getItem("resume")
      ? JSON.parse(localStorage.getItem("resume"))
      : $resume;
  });
</script>

{#if $ready}
  <section id="resume">
    {#if $showModal}
      <StyleModal />
    {/if}
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
    {#if y > 0 && $showModal === false}
      <div
        class="top"
        on:click={() => {
          animateScroll.scrollToTop({ duration: 100 });
        }}
      >
        top
      </div>
    {/if}
  </section>
{/if}
<svelte:window bind:scrollY={y} />

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
    position: relative;
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

  .top {
    position: fixed;
    bottom: 40px;
    left: calc(50% - 35px);
    width: 70px;
    text-align: center;
    background: var(--blue-sapphire);
    color: white;
    border-radius: 8px;
    border: 2px solid black;
    user-select: none;
  }

  .top:hover {
    background: var(--cultured);
    color: black;
    cursor: pointer;
    border: 2px solid black;
  }
</style>
