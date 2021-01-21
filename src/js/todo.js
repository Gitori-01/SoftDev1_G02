'use strict';

// 追加ボタン を取得
var addBotton = document.getElementsByClassName('add-btn')[0];

addBotton.addEventListener('click', event => {
    // Todo Task Text を取得
    var addTask = document.getElementsByClassName('add-task')[0];
    var task = addTask.value;
    // Taskの期限 を取得
    var addLimit = document.getElementsByClassName('add-limit')[0];
    var limit = addLimit.value;
    // listを作成
    var listItem = document.createElement('li');
    var TodoArea = document.getElementsByClassName('todo')[0];
    var DoneArea = document.getElementsByClassName('done')[0];
    // listに要素を追加
    if (limit) { listItem.innerText = "期限日 [" + limit + "]： " + task; }
    else { listItem.innerText = task; }
    TodoArea.appendChild(listItem);
    // Text の内容をリセット
    addTask.value = '';
    addLimit.value = '';

    // 削除ボタンをlistの要素に追加
    var trash = document.createElement('button');
    trash.classList.add('trash');
    trash.innerText = '削除';
    // 要素を削除する
    trash.addEventListener('click', event => {
        var TodoTask = trash.closest('li');
        TodoTask.remove();
    });
    listItem.append(trash);
    
    // 完了ボタンをlistの要素に追加
    var check = document.createElement('button');
    check.classList.add('check');
    check.innerText = '完了';
    // 要素を移動する
    check.addEventListener('click', event => {
        var DoneTask = check.closest('li');
        DoneTask.style.textDecoration = 'line-through';
        DoneArea.appendChild(DoneTask);
        check.remove();
    });
    listItem.append(check);
});