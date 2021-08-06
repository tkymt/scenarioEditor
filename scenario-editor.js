'use strict';



// 追加ボタンを押したときに文を一行追加する
const add = document.querySelector("#add");
add.onclick = function () {
	const line = document.querySelector("#line");
	add_line(line.value);
	line.value = '';
	line.focus();
}

// 保存ボタンを押したときにシナリオオブジェクトをjsonにシリアライズしてファイルとして保存する
const save = document.querySelector("#save");
save.onclick = function () {
	const downloadLink = document.createElement('a');
	downloadLink.download = "scenario";
	downloadLink.href = window.URL.createObjectURL(
		new File([JSON.stringify(scenarioActorScene)], { type: "text.plain" })
	);
	downloadLink.click();
}

// シナリオファイルを選択したときに、ファイルを読み取りJSONにパースする
const path = document.querySelector("#scenario");
path.addEventListener('change', (event) => {
	const reader = new FileReader();
	reader.onload = function (event) {
		scenarioActorScene = JSON.parse(reader.result);
	}
	reader.readAsText(event.target.value);
});

/**
 * テンプレートからリストを作成して画面に追加する関数
 * @param {String} text リストに追加する文字列
 */
const list = document.querySelector('ol');
function add_line(text) {
	const template = document.querySelector("#listItem");
	const clone = template.content.cloneNode(true);

	const listText = clone.querySelector('#text');
	const listBtn = clone.querySelector('#remove');

	listText.textContent = text;
	listBtn.textContent = 'remove';

	const listItem = clone.querySelector('li');
	listBtn.onclick = function () {
		list.removeChild(listItem);
	}
	add_dragAndDrop_handler(listItem);
	list.appendChild(clone);
}

let dragd;
function add_dragAndDrop_handler(element) {

	element.addEventListener('dragstart', event => {
		dragd = event.target;
		event.target.style.opacity = .5;
	}, false);

	element.addEventListener('dragend', event => {
		event.target.style.opacity = ''
	}, false);

	element.addEventListener('dragover', event => {
		event.preventDefault();
	}, false);

	element.addEventListener('dragenter', event => {
		//	if (event.target.className == 'dropzone')
		event.target.style.background = 'purple';
	}, false);

	element.addEventListener('dragleave', event => {
		event.target.style.background = '';
	}, false);

	element.addEventListener('drop', event => {
		event.target.style.background = '';
		event.target.insertAdjacentElement('beforebegin', dragd);
	}, false);
}
