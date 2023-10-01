export interface TaskItemInterface {
    createDate: string;
    endDate: string;
    id: string;
    taskDescr: string;
    taskName: string;
}

export interface  AddTaskForm {
    name: string;
    description: string;
    date: string;
}