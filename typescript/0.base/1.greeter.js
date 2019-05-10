function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "tan",
    lastName: "feng"
};
document.body.innerHTML = greeter(user);
