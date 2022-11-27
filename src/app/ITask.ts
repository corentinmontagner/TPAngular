import { Component, OnInit } from '@angular/core';

export interface ITask {
  id : number
  name : string
  isDone : boolean
}

export class Task {
    static idCounter = 0
    id
    name
    isDone

    constructor(name : string) {
        this.id = Task.idCounter
        this.name = name
        this.isDone = false

        Task.idCounter++
    }

    toOblect(): ITask {
        return{
            id: this.id,
            name: this.name,
            isDone: this.isDone
        }
    }
}