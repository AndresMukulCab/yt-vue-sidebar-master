<template>
  <div class="formulario-view">
    <h1>Formulario de Caracterización de Asignatura</h1>
    <div class="content-box">
      <form id="forms" method="POST" enctype="multipart/form-data">
        <div id="formulario" class="avancePro">
          <ul class="listID">
            <!-- Apartado 1 -->
            <li class="list_itemID list_item--clickID">
              <div class="list_buttonID list_buttonID--click">
                <h2>1. Caracterización de la asignatura</h2>
                <img src="img/flechaInd.png" class="list_arrowID" />
              </div>
              <ul class="listaShowID">
                <li class="listInternaID">
                  <div class="tablas">
                    <table class="tablaAutomatica">
                      <tr>
                        <th>Caracterización de la asignatura:</th>
                        <td>
                          <textarea v-model="caracterizacion" rows="3" placeholder="Ingrese la caracterización aquí..."></textarea>
                        </td>
                      </tr>
                    </table>
                  </div>
                </li>
              </ul>
            </li>

            <!-- Apartado 2 -->
            <li class="list_itemID list_item--clickID">
              <div class="list_buttonID list_buttonID--click">
                <h2>2. Intención didáctica</h2>
                <img src="img/flechaInd.png" class="list_arrowID" />
              </div>
              <ul class="listaShowID">
                <li class="listInternaID">
                  <div class="tablas">
                    <table class="tablaAutomatica">
                      <tr>
                        <th>Intención didáctica:</th>
                        <td>
                          <textarea v-model="intencionDidactica" rows="3" placeholder="Ingrese la intención didáctica aquí..."></textarea>
                        </td>
                      </tr>
                    </table>
                  </div>
                </li>
              </ul>
            </li>

            <!-- Apartado 3 -->
            <li class="list_itemID list_item--clickID">
              <div class="list_buttonID list_buttonID--click">
                <h2>3. Competencia de la asignatura</h2>
                <img src="img/flechaInd.png" class="list_arrowID" />
              </div>
              <ul class="listaShowID">
                <li class="listInternaID">
                  <div class="tablas">
                    <table class="tablaAutomatica">
                      <tr>
                        <th>Competencia de la asignatura:</th>
                        <td>
                          <textarea v-model="competenciaAsignatura" rows="3" placeholder="Ingrese la competencia aquí..."></textarea>
                        </td>
                      </tr>
                    </table>
                  </div>
                </li>
              </ul>
            </li>

            <!-- Apartado 4 -->
            <li class="list_itemID list_item--clickID">
              <div class="list_buttonID list_buttonID--click" id="pruebaCon">
                <h2>4. Análisis por competencias específicas</h2>
                <img src="img/flechaInd.png" class="list_arrowID" />
              </div>
              <ul class="listaShowID" id="prueba1">
                <li class="listInternaID">
                  <div class="datos">
                    <select v-model="competenciaSeleccionada" id="seleccionCompetencia">
                      <option v-for="(competencia, index) in competencias" :key="index" :value="competencia">
                        {{ competencia }}
                      </option>
                    </select>
                    <h4>Competencia No. <span id="Competencia">{{ competenciaSeleccionada }}</span></h4>
                    <div class="camDes">
                      <h4>Descripción:</h4>
                      <input type="text" v-model="descripcionCompetencia" id="descripcion" />
                    </div>
                  </div>
                  <div class="tablas">
                    <table class="tablaCompetencia">
                      <tr>
                        <th>Temas y subtemas</th>
                        <th>Actividades de aprendizaje</th>
                        <th>Actividades de enseñanza</th>
                      </tr>
                      <tr>
                        <td>
                          <textarea v-model="temasSubtemas" rows="5" placeholder="Ingrese temas y subtemas aquí..."></textarea>
                        </td>
                        <td>
                          <textarea v-model="actividadesAprendizaje" rows="5" placeholder="Ingrese actividades de aprendizaje aquí..."></textarea>
                        </td>
                        <td>
                          <textarea v-model="actividadesEnsenanza" rows="5" placeholder="Ingrese actividades de enseñanza aquí..."></textarea>
                        </td>
                      </tr>
                      <tr>
                        <th colspan="2">Desarrollo de competencias genéricas</th>
                        <th>Horas-Practicas-Teoricas</th>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <textarea v-model="desarrolloCompetencias" rows="5" placeholder="Ingrese desarrollo de competencias aquí..."></textarea>
                        </td>
                        <td>
                          <textarea v-model="horasPracticasTeoricas" rows="5" placeholder="Ingrese horas prácticas y teóricas aquí..."></textarea>
                        </td>
                      </tr>
                    </table>
                  </div>
                </li>
              </ul>
            </li>

            <!-- Apartado 5 -->
            <li class="list_itemID list_item--clickID">
              <div class="list_buttonID list_buttonID--click">
                <h2>5. Fuentes de información y apoyos didácticos</h2>
                <img src="img/flechaInd.png" class="list_arrowID" />
              </div>
              <ul class="listaShowID">
                <li class="listInternaID">
                  <div class="tablas">
                    <table class="tablaManual">
                      <tr>
                        <th>Fuentes de información</th>
                        <th>Apoyos didácticos</th>
                      </tr>
                      <tr>
                        <td>
                          <textarea v-model="fuentesInformacion" rows="5" placeholder="Ingrese fuentes de información aquí..."></textarea>
                        </td>
                        <td>
                          <textarea v-model="apoyosDidacticos" rows="5" placeholder="Ingrese apoyos didácticos aquí..."></textarea>
                        </td>
                      </tr>
                    </table>
                  </div>
                </li>
              </ul>
            </li>

            <!-- Apartado 6 -->
            <li class="list_itemID list_item--clickID">
              <div class="list_buttonID list_buttonID--click">
                <h2>6. Calendarización de evaluación en semanas</h2>
                <img src="img/flechaInd.png" class="list_arrowID" />
              </div>
              <ul class="listaShowID">
                <li class="listInternaID">
                  <div class="tablas">
                    <table class="tablaManual">
                      <tr class="semanas">
                        <th>Semanas</th>
                        <td v-for="semana in semanas" :key="semana">{{ semana }}</td>
                      </tr>
                      <tr class="semanas">
                        <th>TP</th>
                        <td v-for="(semana, index) in semanas" :key="`TP-${index}`">
                          <input type="text" v-model="tpSemana[index]" class="semanasTP" :placeholder="`TP${semana}`" />
                        </td>
                      </tr>
                      <tr class="semanas">
                        <th>TR</th>
                        <td v-for="(semana, index) in semanas" :key="`TR-${index}`">
                          <input type="text" v-model="trSemana[index]" class="semanasTP" :placeholder="`TR${semana}`" />
                        </td>
                      </tr>
                    </table>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <div class="botonesID">
            <Button id="guarda" class="btnB" @click="guardarFormulario">Guardar</Button>
            <Button id="enviar" class="btn" @click="enviarFormulario">Enviar</Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Datos del formulario
const caracterizacion = ref('');
const intencionDidactica = ref('');
const competenciaAsignatura = ref('');
const competencias = ref(['Competencia 1', 'Competencia 2', 'Competencia 3']);
const competenciaSeleccionada = ref(competencias.value[0]);
const descripcionCompetencia = ref('');
const temasSubtemas = ref('');
const actividadesAprendizaje = ref('');
const actividadesEnsenanza = ref('');
const desarrolloCompetencias = ref('');
const horasPracticasTeoricas = ref('');
const fuentesInformacion = ref('');
const apoyosDidacticos = ref('');
const semanas = ref(Array.from({ length: 17 }, (_, i) => i + 1));
const tpSemana = ref(Array(17).fill(''));
const trSemana = ref(Array(17).fill(''));

// Funciones para guardar y enviar el formulario
const guardarFormulario = () => {
  console.log('Formulario guardado:', {
    caracterizacion: caracterizacion.value,
    intencionDidactica: intencionDidactica.value,
    competenciaAsignatura: competenciaAsignatura.value,
    competenciaSeleccionada: competenciaSeleccionada.value,
    descripcionCompetencia: descripcionCompetencia.value,
    temasSubtemas: temasSubtemas.value,
    actividadesAprendizaje: actividadesAprendizaje.value,
    actividadesEnsenanza: actividadesEnsenanza.value,
    desarrolloCompetencias: desarrolloCompetencias.value,
    horasPracticasTeoricas: horasPracticasTeoricas.value,
    fuentesInformacion: fuentesInformacion.value,
    apoyosDidacticos: apoyosDidacticos.value,
    tpSemana: tpSemana.value,
    trSemana: trSemana.value,
  });
};

const enviarFormulario = () => {
  console.log('Formulario enviado:', {
    caracterizacion: caracterizacion.value,
    intencionDidactica: intencionDidactica.value,
    competenciaAsignatura: competenciaAsignatura.value,
    competenciaSeleccionada: competenciaSeleccionada.value,
    descripcionCompetencia: descripcionCompetencia.value,
    temasSubtemas: temasSubtemas.value,
    actividadesAprendizaje: actividadesAprendizaje.value,
    actividadesEnsenanza: actividadesEnsenanza.value,
    desarrolloCompetencias: desarrolloCompetencias.value,
    horasPracticasTeoricas: horasPracticasTeoricas.value,
    fuentesInformacion: fuentesInformacion.value,
    apoyosDidacticos: apoyosDidacticos.value,
    tpSemana: tpSemana.value,
    trSemana: trSemana.value,
  });
};
</script>

<style lang="scss" scoped>
.formulario-view {
  flex-grow: 1;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--dark);
  }

  .content-box {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }

  .listID {
    list-style: none;
    padding: 0;
    margin: 0;

    .list_itemID {
      margin-bottom: 0.5rem;

      .list_buttonID {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        background-color: var(--primary);
        color: white;
        border-radius: 0.25rem;
        cursor: pointer;

        h2 {
          margin: 0;
          font-size: 1rem;
        }

        .list_arrowID {
          width: 1rem;
          height: 1rem;
        }
      }

      .listaShowID {
        padding: 0.5rem;
        background-color: #f9f9f9;
        border-radius: 0.25rem;
        margin-top: 0.5rem;

        .listInternaID {
          .tablas {
            table {
              width: 100%;
              border-collapse: collapse;

              th, td {
                padding: 0.5rem;
                border: 1px solid #ddd;
              }

              textarea {
                width: 100%;
                resize: vertical;
                min-height: 100px;
                padding: 0.5rem;
                border: 1px solid #ddd;
                border-radius: 0.25rem;
              }
            }
          }
        }
      }
    }
  }

  .botonesID {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;

    .btnB, .btn {
      padding: 0.5rem 1rem;
      background-color: var(--primary);
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;

      &:hover {
        background-color: var(--primary-alt);
      }
    }
  }
}
</style>