var  teacherObjects = [];
var studentObjects = [];
var sectionObjects = [];




function createHTMLstuff(){
    add = document.getElementById("add");
    remove = document.getElementById("remove");
    list = document.getElementById("list");
    objectAdder = document.getElementById("addSomething");
    newObjectInfo = document.getElementById("addSomethingInfo");
    studentAdd = document.getElementById("studentAdd");
    teacherAdd = document.getElementById("teacherAdd");
    sectionAdd = document.getElementById("sectionAdd");
    fillerAdd = document.getElementById("fillerAdd");
    newStudentFirstName = document.getElementById("newStudentFirstName");
    newStudentLastName = document.getElementById("newStudentLastName");
    newStudentGrade = document.getElementById("newStudentGrade");
    newTeacherFirstName = document.getElementById("newTeacherFirstName");
    newTeacherLastName = document.getElementById("newTeacherLastName");
    newTeacherSubject = document.getElementById("newTeacherSubject");
    newSectionName = document.getElementById("newSectionName");
    newSectionMaxSize = document.getElementById("newSectionMaxSize");
    newSectionTeacher = document.getElementById("newSectionTeacher");
    message = document.getElementById("message");
    removeSomething = document.getElementById("removeSomething");
    removeStudent = document.getElementById("removeStudent");
    removeTeacher = document.getElementById("removeTeacher");
    removeSection = document.getElementById("removeSection");
    studentRemove = document.getElementById("studentRemove");
    teacherRemove = document.getElementById("teacherRemove");
    sectionRemove = document.getElementById("sectionRemove");
    removeButton = document.getElementById("removeButton");
    removeButton1 = document.getElementById("removeButton1");
    removeButton2 = document.getElementById("removeButton2");
    listOption = document.getElementById("listOption");
    editSection = document.getElementById("editSomething");
    editAddStudents = document.getElementById("editAddStud");
    addOrRemoveSelectedStud = document.getElementById("addOrRemoveSelectedStud");
    edit = document.getElementById("edit");
    editSubmit = document.getElementById("editSubmit");
    teacherObjects = [];
}

function changeToAdd(){
    add.style.display = "block";
    objectAdder.value = "filler";
    remove.style.display = "none";
    list.style.display = "none";
    message.innerHTML = "";
    removeButton1.style.display = "none";
    removeButton2.style.display = "none";
    removeButton.style.display = "none";
    studentRemove.style.display = "none";
    teacherRemove.style.display = "none";
    sectionRemove.style.display = "none";
    edit.style.display = "none";
}

function changeToRemove(){
    add.style.display = "none";
    removeSomething.value = "filler";
    studentAdd.style.display = "none";
    teacherAdd.style.display = "none";
    sectionAdd.style.display = "none";
    message.innerHTML = "";
    remove.style.display = "block";
    edit.style.display = "none";
    list.style.display = "none";
}

function changeToList(){
    listOption.value = "filler";
    add.style.display = "none";
    remove.style.display = "none";
    message.style.display = "none";
    studentAdd.style.display = "none";
    teacherAdd.style.display = "none";
    sectionAdd.style.display = "none";
    studentRemove.style.display = "none";
    teacherRemove.style.display = "none";
    sectionRemove.style.display = "none";
    list.style.display = "block";
    edit.style.display = "none";
}

function changeToEdit(){
    add.style.display = "none";
    remove.style.display = "none";
    message.style.display = "none";
    studentAdd.style.display = "none";
    teacherAdd.style.display = "none";
    sectionAdd.style.display = "none";
    studentRemove.style.display = "none";
    teacherRemove.style.display = "none";
    sectionRemove.style.display = "none";
    list.style.display = "none";
    edit.style.display = "block";
}

function populateAddInfo(){
    switch(objectAdder.value){
        case "filler":
            message.innerHTML = "";
            fillerAdd.style.display = "inline";
            studentAdd.style.display = "none";
            sectionAdd.style.display = "none";
            teacherAdd.style.display = "none";
            break;
        case "student":
            message.innerHTML = "";
            studentAdd.style.display = "inline";
            teacherAdd.style.display = "none";
            fillerAdd.style.display = "none";
            sectionAdd.style.display = "none";
            break;
        case "teacher":
            message.innerHTML = "";
            teacherAdd.style.display = "inline";
            studentAdd.style.display = "none";
            fillerAdd.style.display = "none";
            sectionAdd.style.display = "none";
            break;
        case "section":
            message.innerHTML = "";
            sectionAdd.style.display = "inline";
            studentAdd.style.display = "none";
            teacherAdd.style.display = "none";
            fillerAdd.style.display = "none";
            if(teacherObjects.length == 0){
                message.innerHTML = "You cannot add a section until you add a teacher";
                message.style.fontStyle = "italic" ;
                sectionAdd.style.display = "none";
            }
            var newTeacherSelectBox = document.getElementById("newSectionTeacher");
            newTeacherSelectBox.innerHTML = "";
            for(var i = 0; i < teacherObjects.length; i++){
                newTeacherSelectBox.innerHTML += "<option value='" + i + "'>" + teacherObjects[i].firstName + " " + teacherObjects[i].lastName+"</option>";
            }
            break;
    }
}


function addObject(){
    var newObject;
    switch(objectAdder.value){
        case "student":
            newObject = new Student(newStudentFirstName.value, newStudentLastName.value, newStudentGrade.value);
            studentObjects.push(newObject);
            message.style.display = "block";
            message.innerHTML = "Your student has been added";
            console.log(message.innerHTML);
            clearInputs(newStudentFirstName,newStudentLastName, newStudentLastName);
            break;
        case "teacher":
            newObject = new Teacher(newTeacherFirstName.value, newTeacherLastName.value, newTeacherSubject.value);
            teacherObjects.push(newObject);
            message.style.display = "block";
            message.innerHTML = "Your teacher has been added";
            console.log(teacherObjects[0].firstName);
            clearInputs(newTeacherFirstName, newTeacherLastName, newTeacherSubject);
            break;
        case "section":
            var teacherObjectInAdder = teacherObjects[parseInt(newSectionTeacher.value)];
            newObject = new Section(newSectionName.value, newSectionMaxSize.value, teacherObjectInAdder);
            sectionObjects.push(newObject);
            message.style.display = "block";
            message.innerHTML = "Your section has been added";
            clearInputs(newSectionName,newSectionMaxSize, newTeacherSubject);
            break;
    }
}

function populateRemoveInfo(){
    switch (removeSomething.value){
        case "remStud":
            teacherRemove.style.display = "none";
            sectionRemove.style.display = "none";
            removeStudent.innerHTML = "";
            if(studentObjects.length >= 1) {
                for (var i = 0; i < studentObjects.length; i++) {
                    removeStudent.innerHTML += "<option value='" + i + "'>" + studentObjects[i].firstName + " " + studentObjects[i].lastName + "</option>";
                }
                message.innerHTML = "";
                studentRemove.style.display = "block";
                removeButton.style.display = "inline";
            } else{
                message.innerHTML = "You cannot remove something if nothing has been added to this category";
                studentRemove.style.display = "none";
            }
            break;
        case "remTeach":
            removeTeacher.innerHTML = "";
            studentRemove.style.display = "none";
            sectionRemove.style.display = "none";
            if(teacherObjects.length >= 1) {
                for (var i = 0; i < teacherObjects.length; i++) {
                    removeTeacher.innerHTML += "<option value='" + i + "'>" + teacherObjects[i].firstName + " " + teacherObjects[i].lastName + "</option>";
                }
                message.innerHTML = "";
                studentRemove.style.display = "none";
                teacherRemove.style.display = "block";
                removeButton1.style.display = "inline";
            }else{
                message.innerHTML = "You cannot remove something if nothing has been added to this category";
            }
            break;
        case "remSect":
            removeSection.innerHTML = "";
            teacherRemove.style.display = "none";
            studentRemove.style.display = "none";
            if(sectionObjects.length >= 1) {
                for (var i = 0; i < teacherObjects.length; i++) {
                    sectionRemove.innerHTML += "<option value='" + i + "'>" + sectionObjects[i].name + " " + sectionObjects[i].name + "</option>";
                }
                message.innerHTML = "";
                studentRemove.style.display = "none";
                sectionRemove.style.display = "block";
                removeButton2.style.display = "block";
            }else{
                message.innerHTML = "You cannot remove something if nothing has been added to this category";
                message.style.display = "block";
            }
            break;

    }

}

function removeObject(){
    switch(removeSomething.value){
        case "remStud":
            var student = studentObjects[removeStudent.value];
            studentObjects.splice(parseInt(studentRemove.value), 1);
            for(var i = 0; i <sectionObjects.length; i++){
                if(sectionObjects[i].students.indexOf(student) != -1){
                    sectionObjects[i].removeStudentFromSection(student.id);
                }
            }
            console.log(studentObjects);
            console.log(sectionObjects);
            message.innerHTML = "Your student has been removed";
            populateRemoveInfo();
            break;
        case "remTeach":
            var location = studentObjects.indexOf(teacherRemove.value);
            teacherObjects.splice(location, 1, teacherObjects[teacherRemove.value]);
            message.innerHTML = "Your teacher has been removed";
            populateRemoveInfo();
            break;
        case "remSect":
            var location = sectionObjects.indexOf(sectionRemove.value);
            sectionObjects.splice(location, 1, sectionObjects[sectionRemove.value]);
            message.innerHTML = "Your section has been removed";
            populateRemoveInfo();
            break;
    }
}

function listEm(){
    switch(listOption.value){
        case "stud":
            message.innerHTML= "";
            for(var i = 0; i < studentObjects.length; i ++){
                message.innerHTML += (i + 1) + ". " + studentObjects[i].firstName + "  " + studentObjects[i].lastName + "  " +
                    studentObjects[i].grade + "<br>";
            }
            message.style.display = "block";
            break;
        case "teach":
            message.innerHTML= "";
            for(var i = 0; i < teacherObjects.length; i ++){
                message.innerHTML += (i + 1) + ". " + teacherObjects[i].firstName + "  " + teacherObjects[i].lastName + "  " +
                    teacherObjects[i].subject + "<br>";
            }
            message.style.display = "block";
            break;
        case "sect":
            message.innerHTML= "";
            for(var i = 0; i < sectionObjects.length; i ++){
                message.innerHTML += (i + 1) + ". " + sectionObjects[i].name + "  " + sectionObjects[i].teacher.firstName + "  : ";
                for(var x = 0; x < sectionObjects[i].students.length; x++) {
                        message.innerHTML += sectionObjects[i].students[x].firstName + "  " +  sectionObjects[i].students[x].lastName + ", ";
                }
                message.innerHTML += "<br>";
            }
            message.style.display = "block";
            break;
    }
}

function populateEditInfo() {
    for (var i = 0; i < sectionObjects.length; i++) {
        editSection.innerHTML += "<option value='" + i + "'>" + sectionObjects[i].name + " " + sectionObjects[i].teacher.firstName + "</option>";
    }
}

function addStudentEdit(){
    editAddStudents.innerHTML = "";
    editAddStudents.innerHTML += "<option value='" + "filler" + "'> Student to edit </option>";
    for(var i = 0; i <studentObjects.length; i++) {
        editAddStudents.innerHTML += "<option value='" + i + "'>" + studentObjects[i].firstName + " " + studentObjects[i].lastName + "</option>";
    }
}

function editAddRemove() {
    addOrRemoveSelectedStud.innerHTML = "";
    addOrRemoveSelectedStud.innerHTML += "<option value='" + "filler" + "'> Add or remove </option>";
    addOrRemoveSelectedStud.innerHTML += "<option value='" + "Add" + "'> Add </option>";
    addOrRemoveSelectedStud.innerHTML += "<option value='" + "Remove" + "'> Remove </option>";
    editSubmit.style.display = "block";
}

function editInfoSubmit(){
    message.innerHTML = "";
    var section = sectionObjects[editSection.value];
    var student = studentObjects[editAddStudents.value];
    if(editSection.value != "filler" && editAddStudents.value != "filler" && addOrRemoveSelectedStud != "filler") {
        if (addOrRemoveSelectedStud.value = "Add") {
            section.addStudent(student);
            message.innerHTML = "Your student has been added";
            message.style.display = "block";
            return;
        } else {
            section.removeStudentFromSection(student.id);
            message.innerHTML = "Your student has been removed";
            message.style.display = "block";
            return;
        }
    }else{
        message.innerHTML = "Some information is missing";
        message.style.display = "block";
    }
}

function clearInputs(x,y,z){
x.value = "";
y.value = "";
z.value = "";
}