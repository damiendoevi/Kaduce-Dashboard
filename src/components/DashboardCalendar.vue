<template>
  <Calendar :attributes='attributes'>
    <template #header>
        <h2 class="bg-black">Mon Titre d'En-Tête</h2>
    </template>
  </Calendar>
</template>

<script>
import { Calendar } from 'v-calendar';
import 'v-calendar/style.css';


export default {
 name: 'DashboardCalendar',
  components: {
    Calendar,
  },
  data() {
    return {
      date: new Date(),
      attributes: [
        {
            dot: {
                style: {
                    backgroundColor: 'red',
                    height: '10px',
                    width: '10px',
                    margin: '-3px',
                }
            },
            dates:
                new Date(),
        }
      ]
    };
  },
}
</script>
