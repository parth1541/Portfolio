function runLogic() {
    let num = prompt("Enter a number:");

    // Check if user cancelled
    if (num === null) return;

    num = Number(num);

    if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
    }

    if (num % 5 === 0) {
        alert("Divisible by 5");
        console.log("Divisible by 5");
    } else if (num % 3 === 0) {
        alert("Divisible by 3");
        console.log("Divisible by 3");
    } else {
        alert("Not divisible by 5 or 3");
        console.log("Not divisible by 5 or 3");
    }
}

// Attach event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('testLogicBtn');
    if (btn) {
        btn.addEventListener('click', runLogic);
    }
});
