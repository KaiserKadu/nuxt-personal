<template>
  <div>
    <header>
      <h2>My Portfolio Layout</h2>
      <nav>
        <Button class="" @click="navigateTo('/')">Home</Button> |
        <Button class="" @click="navigateTo('/about')">About</Button>
      </nav>
    </header>

    <main>
      <slot />
      <!-- this is where your page content goes -->
    </main>
  </div>
</template>
