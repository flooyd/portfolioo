<script lang="ts">
  import { onMount } from "svelte";

  import resume, {
    viewing,
    ready,
    showModal,
    styles,
    selectedProperty,
  } from "../../stores/resume";

  import Modal from "./Modal.svelte";

  let styleEntries = [];

  onMount(() => {
    $styles = localStorage.getItem("styles")
      ? JSON.parse(localStorage.getItem("styles"))
      : $styles;
    styleEntries = $styles[$selectedProperty];
  });

  const saveStyles = () => {
    $styles[$selectedProperty] = styleEntries;
    $styles = $styles;
    localStorage.setItem("styles", JSON.stringify($styles));
  };

  $: console.log($styles);
</script>

<Modal>
  <div class="styleModal">
    <header>
      <div class="styleModal-title">
        <span class="name">Style Editor</span>
      </div>
      <button on:click={() => ($showModal = !$showModal)}> close </button>
    </header>
    <div class="property">
      Property: <span>{$selectedProperty}</span>
    </div>
    <div class="property">Value: <span>{$resume[$selectedProperty]}</span></div>
    <div class="property styles">
      Styles:
      <button
        on:click={() => {
          styleEntries.push({ key: "", value: "" });
          styleEntries = styleEntries;
          $styles[$selectedProperty] = styleEntries;
          saveStyles();
        }}
      >
        Add Key/Value
      </button>
      <button
        on:click={() => {
          styleEntries = [];
          $styles[$selectedProperty] = [];
          saveStyles();
        }}
      >
        Clear Styles
      </button>
    </div>
    {#each styleEntries as style}
      <div class="style">
        <label for="key">Key</label>
        <input
          name="key"
          type="text"
          value={style.key ? style.key : ""}
          on:input={(e) => {
            style.key = e.currentTarget.value;
            $styles[$selectedProperty] = styleEntries;
            saveStyles();
          }}
        />
        <label for="value">Value</label>
        <input
          name="value"
          type="text"
          value={style.value}
          on:input={(e) => {
            style.value = e.currentTarget.value;
            $styles[$selectedProperty] = styleEntries;
            saveStyles();
          }}
        />
        <button
          class="remove"
          on:click={() => {
            styleEntries.splice(styleEntries.indexOf(style), 1);
            styleEntries = styleEntries;
            $styles[$selectedProperty] = styleEntries;
            saveStyles();
          }}
        >
          Remove
        </button>
      </div>
    {/each}
  </div></Modal
>

<style>
  header {
    color: black;
    display: flex;
    align-items: center;
    width: fit-content;
    justify-content: space-between;
    border-bottom: 3px solid var(--light-green);
    padding-bottom: 8px;
    width: calc(100% - 20px);
  }

  .styleModal-title {
    font-size: 25px;
  }

  button {
    margin-left: 8px;
    background: var(--cultured);
    color: black;
    border-radius: 8px;
    padding: 8px;
  }

  button:hover {
    background: var(--light-green);
    cursor: pointer;
  }

  .property {
    font-size: 20px;
    margin-top: 20px;
    color: var(--blue-sapphire);
    font-weight: bold;
  }

  .property.styles {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .property span {
    color: black;
    font-weight: 400;
  }

  .style {
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    font-size: 13px;
  }

  .style input {
    margin-bottom: 8px;
    padding: 2px;
  }

  .remove {
    margin: 0px;
    margin-top: 8px;
    width: fit-content;
  }

  .remove:hover {
    background: #333;
    color: white;
  }
</style>
