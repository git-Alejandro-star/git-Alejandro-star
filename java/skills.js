document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".list-group-item");
    
    listItems.forEach(item => {
        item.addEventListener("click", function (event) {
            createFlyingNumbers(event);
        });
    });

    function createFlyingNumbers(event) {
        for (let i = 0; i < 10; i++) { // Generate 15 flying numbers
            const num = document.createElement("span");
            num.textContent = Math.floor(Math.random() * 100); // Random number 0-99
            num.classList.add("flying-number");
            document.body.appendChild(num);
            
            const x = event.clientX + (Math.random() * 50 - 25);
            const y = event.clientY + (Math.random() * 50 - 25);
            num.style.left = `${x}px`;
            num.style.top = `${y}px`;
            
            setTimeout(() => {
                num.style.transform = `translateY(-100px) scale(1.5)`;
                num.style.opacity = "0";
            }, 50);
            
            setTimeout(() => {
                num.remove();
            }, 1000);
        }
    }
});

// CSS styles (you need to add this in your CSS file)
const style = document.createElement("style");
style.textContent = `
    .flying-number {
        position: absolute;
        font-size: 16px;
        font-weight: bold;
        color: red;
        transition: transform 1s ease-out, opacity 1s ease-out;
        pointer-events: none;
    }
`;
document.head.appendChild(style);
