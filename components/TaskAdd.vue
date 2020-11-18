<template>
  <!-- Ajout de taches -->
  <div id="addTask" class="d-flex w-100 justify-content-center mb-4">
    <form class="d-flex flex-row justify-content-center w-50">
      <div class="row">
        <div class="col">
          <label for="inputTitle">Title</label>
          <input type="text" v-model="task_title" name="title" id="inputTitle" class="form-control" placeholder="Title..."/>
        </div>
        <div class="col">
          <label for="inputDescription">Description</label>
          <input type="text" v-model="task_description" name="description" id="inputDescription" class="form-control" placeholder="Desription..."/>
        </div>
        <div class="col">
          <label for="inputPriority">Priority</label>
          <select v-model="task_priority" name="priority" id="inputPriority" class="form-control">
            <option value="0" selected>Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
        </div>
        <div class="col">
          <label for="inputDate">Date end</label>
          <input type="date" v-model="task_date_end" name="description" id="inputDate" class="form-control" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-auto ml-0 ml-4" @click.prevent="addTask">Add</button>
    </form>
  </div>
</template>


<script>

export default {
  name: 'TaskAdd',
  data() {
    return {
      task_title: '',
      task_description: '',
      task_priority: '',
      task_date_end: '',
    }
  },
  computed: {
    priority : {
      get: function() { // getter for a priority
        if (this.task.priority === 1) return 'text-warning'
        else if (this.task.priority === 2) return 'text-danger'
        
        return 'text-info'
      }
    },
    date: {
      get: function() { // // getter for the date end
        let formattedDate = new Date(this.task.end)
        return formattedDate.toLocaleString('en-GB')
      }
    }
  },
  methods: {
    addTask() {
      // check that we've got all the informations needed
      if (this.task_title && this.task_description && this.task_priority && this.task_date_end) {
        // call the task/add mutation with a new task
        this.$store.commit('tasks/add', {
          id: this.$store.state.counter + 1,
          title: this.task_title,
          description: this.task_description,
          priority: parseInt(this.task_priority),
          end: this.task_date_end
        })
        // increment the number of tasks
        this.$store.commit('increment')

        // reset the form
        this.task_title = ''
        this.task_description = ''
        this.task_priority = ''
        this.task_date_end = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">

.task {
  width: 100%;
}

</style>