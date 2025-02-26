<template>
    <div class="calificaciones-parciales-view">
      <h1>Calificaciones Parciales</h1>
  
      <div class="content-box">
        <div class="items-grid">
          <div class="item folder" v-for="group in groups" :key="group.id" @click="toggleGroup(group)">
            <span class="item-icon">📁</span>
            <span class="item-name">{{ group.name }}</span>
          </div>
        </div>
  
        <div v-if="selectedGroup" class="subjects-list">
          <h2>{{ selectedGroup.name }}</h2>
          <div class="items-grid">
            <div class="item folder" v-for="subject in selectedGroup.subjects" :key="subject.id" @click="goToSubject(selectedGroup, subject)">
              <span class="item-icon">📚</span>
              <span class="item-name">{{ subject.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const groups = ref([
    { id: 1, name: 'I8U', subjects: [
      { id: 1, name: 'Desarrollo Web II' },
      { id: 2, name: 'Framework Frontend' }
    ]},
    { id: 2, name: 'I4A', subjects: [
      { id: 3, name: 'Administracion Base de datos' },
      { id: 4, name: 'Topicos de Programacion Avanzados' }
    ]},
    { id: 3, name: 'I6A', subjects: [
      { id: 1, name: 'Desarrollo Web II' },
      { id: 3, name: 'Administracion Base de datos' }
    ]}
  ]);
  
  const selectedGroup = ref(null);
  
  const toggleGroup = (group) => {
    selectedGroup.value = selectedGroup.value === group ? null : group;
  };
  
  const goToSubject = (group, subject) => {
    router.push({ name: 'calificacionesMateria', params: { groupId: group.id, subjectId: subject.id } });
  };
  </script>
  
  <style lang="scss" scoped>
  .calificaciones-parciales-view {
    flex-grow: 1;
    padding: 2rem;
    margin-left: var(--sidebar-width);
    max-width: 1200px;
    margin: 0 auto;
  
    h1 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: var(--dark);
    }
  
    .content-box {
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
    }
  
    .items-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1.5rem;
  
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: var(--light);
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
  
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
  
        .item-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
  
        .item-name {
          font-size: 0.9rem;
          color: var(--dark);
          text-align: center;
        }
      }
    }
  }
  </style>
  