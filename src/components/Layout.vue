<template>
    <div class="layout">
      <Sidebar />
      <div class="content">
        <Header />
        <main>
          <slot></slot>
        </main>
      </div>
    </div>
  </template>
  
  <style scoped>
  .layout {
    display: flex;
    height: 100vh;
  }
  
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  
  main {
    flex-grow: 1;
    padding: 2rem;
    max-width: 1200px; /* Define un ancho máximo estándar */
    margin: 0 auto;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  