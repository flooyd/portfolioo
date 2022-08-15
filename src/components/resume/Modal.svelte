<div class="modal">
  <slot />
</div>

<style>
  .modal {
    position: fixed;
    top: 30px;
    left: 30px;
    padding: 20px;
    height: calc(100% - 100px);
    width: calc(100% - 100px);
    background: var(--cultured);
    border: 4px solid var(--light-green);
    overflow-y: auto;
  }
</style>
