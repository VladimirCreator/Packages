export enum TaskState {
    done = "Выполнено",
    paused = "На паузе",
    wip = "В работе"
}

// Medium-Cringe.
export default class Task {
    [key: string]: any

    constructor(date: Date, task_code: string, project_code: string, task: string, state: TaskState, responsible: string, reassign: string, priority: string, comment: string, planned_time: Date, actual_time: Date, started: Date, finished: Date) {
        this.date = new Intl.DateTimeFormat(`ru`).format(date)
        this.task_code = task_code
        this.project_code = project_code
        this.task = task
        this.state = state
        this.responsible = responsible
        this.reassign = reassign
        this.priority = priority
        this.comment = comment
        this.planned_time = new Intl.DateTimeFormat(`ru`, { hour: `numeric`, minute: `numeric`, second: `numeric` }).format(planned_time)
        this.actual_time = new Intl.DateTimeFormat(`ru`, { hour: `numeric`, minute: `numeric`, second: `numeric` }).format(actual_time)
        this.started = new Intl.DateTimeFormat(`ru`, { day: `numeric`, month: `numeric`, year: `numeric`, hour: `numeric`, minute: `numeric`, second: `numeric` }).format(started)
        this.finished = new Intl.DateTimeFormat(`ru`, { day: `numeric`, month: `numeric`, year: `numeric`, hour: `numeric`, minute: `numeric`, second: `numeric` }).format(finished)
    }
}
