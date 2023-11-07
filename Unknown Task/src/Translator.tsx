// Hyper-Cringe!
export default class Translator {
    static translate(word: string): string {
        return new Map([
            ["date", "Дата"],
            ["task_code", "Шифр задачи"],
            ["project_code", "Шифр проекта"],
            ["task", "Задача"],
            ["state", "Статус"],
            ["responsible", "Ответственный"],
            ["reassign", "Переназначить"],
            ["priority", "Приоритет"],
            ["comment", "Комментарий"],
            ["planned_time", "План время"],
            ["actual_time", "Факт время"],
            ["started", "Начал"],
            ["finished", "Закончил"],
        ]).get(word)!
    }
}
