<template>
  <div class="d-flex flex-column col-12 mb-5">
    <h2>Tasks {{ this.title }}</h2>
    <b-list-group>
      <b-list-group-item v-for="task in this.getTasks" :key="task.id">
        <Task :task="task" :key="task.id"></Task>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>


<script>

import Task from '@/components/Task'

export default {
  name: 'TaskList',
  components: {Task},
  props: {
    done: Boolean, // false => TODO, true => DONE
  },
  computed: {
    title () { // task done or todo ?
      if (this.done) return 'DONE'
      else return 'TODO'
    },
    getTasksTodo () { // return a list of tasks todo
      return this.tasks.filter(task => !task.done)
    },
    getTasksDone () { // return a list of tasks done
      return this.tasks.filter(task => task.done)
    },
    getTasks () { // return all the tasks depending on the done prop
      if (this.done) return this.getTasksDone
      else return this.getTasksTodo
    },
    tasks () { // return all the tasks from the store
      return this.$store.state.tasks.list
    }
  },

}
</script>

<style>

</style>