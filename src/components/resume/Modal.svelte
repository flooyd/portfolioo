<script>
  export let flex = false;

  import resume, { editAll, selectedProperty } from "../../stores/resume";
</script>

<div class="modal">
  <header>
    <div class="styleModal-title">
      <span class="name">Style Editor</span>
    </div>
    <button
      on:click={() => {
        $selectedProperty = null;
        $editAll = false;
      }}
    >
      close
    </button>
  </header>
  <div class={flex ? "flex" : ""}>
    <slot />
  </div>
</div>

<style>
  .modal {
    position: fixed;
    top: 30px;
    left: 30px;
    padding: 10px 20px;
    height: calc(100% - 100px);
    width: calc(100% - 100px);
    background: var(--cultured);
    border: 4px solid var(--light-green);
    overflow-y: auto;
    z-index: 100;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
  }

  header {
    color: black;
    display: flex;
    align-items: center;
    height: 32px;
    justify-content: space-between;
    border-bottom: 3px solid var(--light-green);
    padding-bottom: 8px;
    width: calc(100% - 20px);
    flex-basis: 100%;
  }

  .styleModal-title {
    font-size: 25px;
  }

  button {
    margin-left: 8px;
    background: var(--cultured);
    color: black;
    border-radius: 8px;
    padding: 2px 8px;
  }

  button:hover {
    background: var(--light-green);
    cursor: pointer;
  }
</style>
