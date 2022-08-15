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
  <label for={property}><span>{label}</span><button>+ style</button></label>
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
    width: 380px;
  }

  .editor label {
    display: flex;
    gap: 10px;
    font-size: 20px;
    color: var(--blue-sapphire);
    font-weight: bold;
    padding-bottom: 2px;
    margin-bottom: 8px;
  }

  .editor span {
    border-bottom: 4px solid lightgreen;
    width: 100px;
  }

  .editor input {
    width: calc(100% - 20px);
    outline: 3px solid #333;
    border: none;
    padding: 4px;
    margin-bottom: 8px;
    margin-left: 2px;
  }

  button {
    color: red;
    margin-left: 8px;
    background: var(--cultured);
    color: black;
    border-radius: 8px;
  }

  button:hover {
    background: var(--light-green);
    cursor: pointer;
  }
</style>
