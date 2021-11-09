export const state = () => ({
  tasks: [],
})

export const mutations = {
  init(state) {
    state.tasks = JSON.parse(localStorage.getItem('_tasks_')) || []
  },
  save(state) {
    localStorage.setItem('_tasks_', JSON.stringify(state.tasks))
  },
  createTask(state, task) {
    state.tasks.push(task);
  },
  removeTask(state, task) {
    state.tasks = state.tasks.filter(t => t.id !== task.id)
  }
}

export const actions = {
  init(context) {
    context.commit('init')
  },
  add(context, task) {
    context.commit('createTask', task)
    context.commit('save')
  },
  remove(context, task) {
    context.commit('removeTask', task)
    context.commit('save')
  },
}

export const getters = {
  tasks: (state) => {
    return state.tasks
  }
}
