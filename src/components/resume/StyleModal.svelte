<script lang="ts">
  import { onMount } from "svelte";

  import resume, { styles } from "../../stores/resume";

  export let property;
  export let id = null;

  let styleEntries = [];

  onMount(() => {
    styleEntries = $styles[property];
    console.log(styleEntries);
  });

  const saveStyles = () => {
    $styles[property] = styleEntries;
    $styles = $styles;
    localStorage.setItem("styles", JSON.stringify($styles));
  };
</script>

<div class="styleModal" {id}>
  <div class="property">
    Property: <span>{property}</span>
  </div>
  <div class="property">Value: <span>{$resume[property]}</span></div>
  <div class="property styles">
    Styles:
    <button
      on:click={() => {
        styleEntries.push({ key: "", value: "" });
        styleEntries = styleEntries;
        $styles[property] = styleEntries;
        saveStyles();
      }}
    >
      Add Key/Value
    </button>
    <button
      on:click={() => {
        styleEntries = [];
        $styles[property] = [];
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
          $styles[property] = styleEntries;
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
          $styles[property] = styleEntries;
          saveStyles();
        }}
      />
      <button
        class="remove"
        on:click={() => {
          styleEntries.splice(styleEntries.indexOf(style), 1);
          styleEntries = styleEntries;
          $styles[property] = styleEntries;
          saveStyles();
        }}
      >
        Remove
      </button>
    </div>
  {/each}
</div>

<style>
  .styleModal {
    max-width: 400px;
    height: fit-content;
    z-index: 100;
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

  .property {
    margin-top: 16px;
    font-size: 16px;
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
    margin-bottom: 4px;
    padding: 4px;
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
