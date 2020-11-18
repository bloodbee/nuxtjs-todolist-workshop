<template>
  <div class="main-container flex-column">
    <!-- Title -->
    <h1 class="title">
      My Todo List
    </h1>

    <TaskAdd></TaskAdd>

    <!-- Tasks -->
    <div id="tasks" class="d-flex flex-column w-100 justify-content-around align-items-center">
      <TaskList :done="false" key="todo"></TaskList>
      <TaskList :done="true" key="done"></TaskList>
    </div>

  </div>
</template>

<script>
import TaskList from '@/components/TaskList'
import TaskAdd from '@/components/TaskAdd'

export default {
  components: {TaskList, TaskAdd},
  name: "IndexPage"
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
