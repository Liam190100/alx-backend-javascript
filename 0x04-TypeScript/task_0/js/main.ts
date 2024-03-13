interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
const firstStudent: Student = {
	firstName: "John",
	lastName: "Ngugi",
	age: 20,
	location: "Nairobi"
}

const secondStudent: Student = {
	firstName: "Mike",
	lastName: "Kamau",
	age: 30,
	location: "Nairobi"
}

// An array  of students
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// New row for every student and append the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
