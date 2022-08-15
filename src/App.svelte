<script lang="ts">
  let background = "var(--blue-sapphire)";

  let name = ["F", "L", "O", "Y", "D", " ", "J", "O", "N", "E", "S"];
  let finishedName = [];
  let finishedText = [];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getColor = (n, vertical) => {
    const random = vertical ? getRandomInt(4, 5) : getRandomInt(1, 3);

    if (n === "O") {
      return "white";
    }

    switch (random) {
      case 1:
        return "hsla(126, 81%, 88%, 1)";
      case 2:
        return "hsla(154, 53%, 57%, 1)";
      case 3:
        return "hsla(181, 49%, 43%, 1)";
      case 4:
        return "var(--blue-sapphire)";
      case 5:
        return "white";
      default:
        break;
    }
  };

  setInterval(() => {
    finishedName = [];
    name.forEach((n) => {
      const className = n === "D" ? "mb15" : "";
      finishedName.push({
        name: n,
        random: getColor(n, false),
        className,
      });
    });
  }, 100);
</script>

<main style="background: {background}">
  <div class="verticalNames">
    <div class="verticalName">
      {#each finishedName as letter}
        <span
          class="verticalSpan {letter.className}"
          style="color: {getColor(letter, true)}">{letter.name}</span
        >
      {/each}
    </div>
    <div class="verticalName">
      {#each finishedName as letter}
        <span
          class="verticalSpan {letter.className}"
          style="color: {getColor(letter, true)}">{letter.name}</span
        >
      {/each}
    </div>
    <div class="verticalName">
      {#each finishedName as letter}
        <span
          class="verticalSpan {letter.className}"
          style="color: {getColor(letter, true)}">{letter.name}</span
        >
      {/each}
    </div>
    <div class="verticalName">
      {#each finishedName as letter}
        <span
          class="verticalSpan {letter.className}"
          style="color: {getColor(letter, true)}">{letter.name}</span
        >
      {/each}
    </div>
    <div class="verticalName">
      {#each finishedName as letter}
        <span
          class="verticalSpan {letter.className}"
          style="color: {getColor(letter, true)}">{letter.name}</span
        >
      {/each}
    </div>
    <div class="verticalName">
      {#each finishedName as letter}
        <span
          class="verticalSpan {letter.className}"
          style="color: {getColor(letter, true)}">{letter.name}</span
        >
      {/each}
    </div>
    <div class="verticalName">
      {#each finishedName as letter}
        <span
          class="verticalSpan {letter.className}"
          style="color: {getColor(letter, true)}">{letter.name}</span
        >
      {/each}
    </div>
    <div class="verticalName">
      {#each finishedName as letter}
        <span
          class="verticalSpan {letter.className}"
          style="color: {getColor(letter, true)}">{letter.name}</span
        >
      {/each}
    </div>
    <div class="verticalName">
      {#each finishedName as letter}
        <span
          class="verticalSpan {letter.className}"
          style="color: {getColor(letter, true)}">{letter.name}</span
        >
      {/each}
    </div>
    <div class="verticalName">
      {#each finishedName as letter}
        <span
          class="verticalSpan {letter.className}"
          style="color: {getColor(letter, true)}">{letter.name}</span
        >
      {/each}
    </div>
  </div>
  <div class="name nameSpan">
    {#each finishedName as letter}
      <span style="color: {letter.random}">{letter.name}</span>
    {/each}
  </div>
  <div class="header">full stack developer</div>
  <div class="about">
    I am looking for a role in front end development primarily (with React, Vue,
    or Svelte). I prefer Node or .NET for back end
  </div>
  <div class="links">
    <a href="https://github.com/flooyd">
      <img
        class="link"
        src="images/iconmonstr-github-1-32.png"
        alt="github"
      /></a
    >
    <div class="rightBorder" />
    <a href="https://www.linkedin.com/in/floyd-jones-2a51099a/"
      ><img
        class="link"
        src="images/iconmonstr-linkedin-1-32.png"
        alt="linkedin"
      /></a
    >
  </div>
</main>

<style>
  main {
    width: 100%;
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0px;
  }

  .verticalNames {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    opacity: 0.5;
  }

  .verticalName {
    display: flex;
    flex-direction: column;
  }

  span {
    margin: 0px;
    padding: 0px;
    text-align: center;
  }

  .nameSpan {
    font-size: 13px;
  }

  .mb15 {
    margin-bottom: 15px;
  }

  .about {
    margin: 0px 20px;
    color: white;
  }

  .name {
    padding-bottom: 15px;
    width: fit-content;
    font-size: 119px;
    color: var(--light-green);
    border-bottom: 6px solid white;
    font-family: "Montserrat", sans-serif;
  }

  .header {
    font-size: 35px;
    color: var(--light-green);

    width: fit-content;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .link {
    font-family: "Montserrat", sans-serif;
    color: var(--light-green);
  }

  .links {
    margin-top: 30px;
    display: flex;
  }

  .rightBorder {
    border-right: 3px solid var(--light-green);
    padding-right: 10px;
    margin-right: 10px;
  }

  p {
    color: white;
    font-size: 20px;
    padding: 0px 20px;
  }

  @media only screen and (max-width: 600px) {
    * {
      font-size: 20px !important;
    }

    span {
      margin: 0px !important;
      font-size: 35px !important;
    }

    .nameSpan,
    .verticalSpan {
      font-size: 13px !important;
    }
  }
</style>
