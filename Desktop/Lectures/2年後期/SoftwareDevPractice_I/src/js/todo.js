'use strict';

const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];
const addTaskDate = document.getElementsByClassName('js-addTask-limit')[0];

const removeTask = removeButton => {
    const targetTask = removeButton.closest('li');
    addTaskTarget.removeChild(targetTask);
};

const addTask = (task,limit) => {
    const listItem = document.createElement('li');
    const removeButton = document.createElement('button');

    removeButton.innerText = '削除';
    removeButton.addEventListener('click', () => removeTask(removeButton));

    if (limit) {
        listItem.innerText = "期限[" + limit + "]:"+task;
    } else {
        listItem.innerText = task;
    }

    listItem.append(removeButton);
    addTaskTarget.appendChild(listItem);
};

addTaskTrigger.addEventListener('click', event => {
    const task = addTaskValue.value;
    const limit = addTaskDate.value;

    addTask(task,limit);

    addTaskValue.value = '';
    addTaskDate.value = '';
});