<script>
  import resume from "../../stores/resume";

  export let property = "";
  export let label = "";

  const handleInput = (e) => {
    $resume[property] = e.target.value;
    $resume = $resume;
  };
</script>

<div class="editor">
  <label for={property}>{label}</label>
  <input
    value={$resume[property] ? $resume[property] : ""}
    name={property}
    type="text"
    on:input={(e) => handleInput(e)}
  />
</div>

<style>
  .editor {
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: var(--cultured);
    margin-bottom: 31px;
  }

  .editor label {
    width: fit-content;
    font-size: 20px;
    color: var(--blue-sapphire);
    font-weight: bold;
    padding-bottom: 2px;
    margin-bottom: 8px;
    border-bottom: 4px solid lightgreen;
  }

  .editor input {
    width: calc(100% - 20px);
    outline: 3px solid #333;
    border: none;
    padding: 4px;
    margin-bottom: 8px;
    margin-left: 2px;
  }

  .editor button {
    width: 100px;
    height: 35px;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: var(--blue-sapphire);
    border: 2px solid black;
    margin: 0px;
  }

  .editor button:hover {
    background: #fff;
    color: #000;
  }
</style>
