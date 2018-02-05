var id = 0;


function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    id++;
}

Student.prototype = new Person();

function Student(firstName, lastName, grade){
    this.grade = grade;
    Person.call(this, firstName, lastName);
}

Teacher.prototype = new Person();

function Teacher(firstName, lastName, subject){
    this.subject = subject;
    Person.call(this, firstName, lastName);
}

function Section(name, maxSize, teacher){
    this.name = name;
    this.currentSize = 0;
    this.maxSize = maxSize;
    this.teacher = teacher;
    this.students = [];
    this.addStudent = function(student){
        if(this.currentSize < this.maxSize) {
            if(this.students.indexOf(student) === -1) {
                this.students.push(student);
                this.currentSize += 1;
            }
        }else{
            return "Class is full";
        }
    };
    this.removeStudentFromSection = function(id) {
        for (var i = 0; i < this.students; i++) {
            if (this.students[i]["id"] === id) {
                this.students.splice(i, 1);
            }
        }
    };
    this.sectionSeatsRemaining = function(){
        return this.maxSize - this.currentSize;
    };
}