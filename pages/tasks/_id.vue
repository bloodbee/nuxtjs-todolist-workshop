<template>
  <div class="main-container flex-column">
    <!-- Title -->
    <h1 class="title">
      My Todo List
    </h1>

    <NuxtLink to="/" class="btn btn-secondary mb-4">Go back to tasks</NuxtLink>

    <div class="card mt-4" style="width: 80vw;">
      <div class="card-body">
        <h2 class="card-title">#{{ this.task.id }} - {{ this.task.title }}</h2>
        <div class="card-head d-flex flex-row justify-content-around">
          <div class="card-text">
            <h4>Date end :</h4>
            <p>{{ this.date }}</p>
          </div>
          <div class="card-text">
            <h4>Priority :</h4>
            <p>
              <svg width="1em" height="1em" viewBox="0 0 16 16" :class="`bi bi-flag-fill `+ this.priority" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
              </svg>
            </p>
          </div>
          <div class="card-text">
            <h4>Done ?</h4>
            <p v-if="this.task.done">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
            </p>
            <p v-else>
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="`bi bi-x-circle-fill text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
              </svg>
            </p>
          </div>
        </div>
        <div class="card-text">
          <h4>Description :</h4>
          <p>{{ this.task.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  name: "TaskDetailPage",
  data() {
    return {
      taskId: 0
    }
  },
  computed: {
    date: {
      get: function() { // getter for the date end
        let formattedDate = new Date(this.task.end)
        return formattedDate.toLocaleString('en-GB')
      }
    },
    priority: {
      get: function() { // getter for a priority
        if (this.task.priority === 1) return 'text-warning'
        else if (this.task.priority === 2) return 'text-danger'
        
        return 'text-info'
      }
    },
    task() { // return th specific task depending on the taskId
      return this.$store.state.tasks.list.filter(task => task.id == this.taskId)[0]
    }
  },
  created() { // at the creation of the page component
    this.taskId = this.$route.params.id;
  }

}
</script>

<style scoped lang="scss">
.main-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#tasks {
  width: 100vw;
}
</style>
