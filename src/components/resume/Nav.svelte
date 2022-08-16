<script>
  import resume, { viewing } from "../../stores/resume";
  import page from "../../stores/router";
</script>

<div class="navbar">
  <div class="navbar-title">
    <span class="name">Resume Maker</span>
  </div>
  <div>
    <button on:click={() => ($page = "floyd")}>Home</button>
    <button on:click={() => ($viewing = !$viewing)}
      >{$viewing ? "Edit" : "View"}</button
    >
  </div>
</div>

<style>
  .navbar {
    display: flex;
    width: calc(100% - 40px);
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    padding: 8px 20px;
    padding-left: 20px;
    background: var(--cultured);
    border-bottom: 4px solid var(--light-green);
    border-bottom: 4px solid var(--blue-sapphire);
    color: black;
  }
  .navbar-title {
    color: var(--oxford-blue);
    font-size: 20px;
  }

  button {
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
    padding: 2px 8px;
  }

  button:hover {
    background: var(--cultured);
    color: black;
  }
</style>
