export const state = () => ({
  list: []
})

export const mutations = {
  add(state, { id, title, description, priority, end}) {
    state.list.push({
      id,
      title,
      description,
      priority,
      end,
      done: false
    })
  },
  remove(state, { task }) {
    state.list.splice(state.list.indexOf(task), 1)
  },
  toggle(state, task) {
    let i = state.list.indexOf(task)
    state.list[i].done = !task.done
  }
}