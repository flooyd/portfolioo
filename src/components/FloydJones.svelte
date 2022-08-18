<script lang="ts">
  import { onMount } from "svelte";
  import * as animateScroll from "svelte-scrollto";
  import { fade } from "svelte/transition";

  let name = ["F", "L", "O", "Y", "D", " ", "J", "O", "N", "E", "S"];
  let finishedName = [];
  let finishedResume = [];
  let resumeHovered = false;

  onMount(() => {
    animateScroll.scrollToTop();
  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getColor = (n, vertical, resume = null) => {
    let random = vertical ? getRandomInt(4, 5) : getRandomInt(1, 3);

    if (resume && !resumeHovered) {
      return "white";
    }

    if (resume) {
      random = getRandomInt(1, 13);
    }

    if (resume && random === 4) return;

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
      case 6:
        return "yellow";
      case 7:
        return "red";
      case 8:
        return "green";
      case 9:
        return "blue";
      case 10:
        return "purple";
      case 11:
        return "pink";
      case 12:
        return "black";
      case 13:
        return "orange";
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

  setInterval(() => {
    finishedResume = [];
    "resume".split("").forEach((n) => {
      finishedResume.push({
        name: n,
        random: getColor(n, false, true),
      });
    });
  }, 100);
</script>

<main transition:fade={{ duration: 100 }}>
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
    <div
      class="resume"
      on:mouseleave={() => (resumeHovered = false)}
      on:mouseenter={() => (resumeHovered = true)}
      on:click={() => {
        $page = "resume";
      }}
    >
      {#each finishedResume as letter}
        <span class="resume" style="color: {getColor(letter, false, true)}"
          >{letter.name}</span
        >
      {/each}
    </div>
    <div class="rightBorder" />
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
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0px;
    color: black;
    background: var(--blue-sapphire);
    min-height: fit-content;
  }

  .verticalNames {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    opacity: 0.5;
    margin-bottom: 20px;
  }

  .verticalName {
    display: flex;
    flex-direction: column;
  }

  span {
    margin: 0px;
    padding: 0px;
    text-align: center;
    user-select: none;
  }

  .nameSpan {
    font-size: 13px;
  }

  .resume {
    color: white;
    font-size: 32px;
    cursor: pointer;
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
    border-bottom: 6px solid var(--blue-sapphire);
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
    margin-top: 20px;
    display: flex;
    background: var(--blue-sapphire);
    padding: 16px 0px;
    border-radius: 8px;
    width: 100vw;
    justify-content: center;
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
      font-size: 32px !important;
    }

    .nameSpan,
    .verticalSpan {
      font-size: 13px !important;
    }
  }
</style>
