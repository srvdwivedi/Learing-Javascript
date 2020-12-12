function text_change() {
    document.getElementById('text-change').innerHTML = "Good to see you here !";
}

var subjects = {language : 'JS', year : '2020', text : 'So lets get started.'};

document.getElementById('subject').innerHTML =  "We will be learnig " + subjects.language + " ," + subjects.text;

