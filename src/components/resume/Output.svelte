<script>
  import resume, { styles } from "../../stores/resume";
  export let property;

  let styleArr = $styles[property];
  console.log(styleArr);
  let styleString = "";

  styleArr.forEach((style) => {
    //make string from style.key + ":" + style.value + ";"
    styleString += style.key + ":" + style.value + ";";
    console.log(styleString);
  });
</script>

<div class="output" style={styleString}>
  {#if $resume[property]}
    {$resume[property]}
  {/if}
</div>

<style>
</style>
