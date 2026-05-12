document.addEventListener("DOMContentLoaded", () => {
    let pages = document.querySelectorAll(".page");
    let buttons = document.querySelectorAll(".nav-btn");
    let restartBtn = document.querySelector(".restart-btn");
    let exitBtn = document.querySelector(".exit-btn");

    function navigateToPage(event) {
        let targetPage = event.target.getAttribute("data-target");

        // Hide all pages
        pages.forEach(page => {
            page.style.display = "none";
        });

        // Show the target page
        document.getElementById(targetPage).style.display = "flex";
    }

    function restartBook() {
        pages.forEach(page => {
            page.style.display = "none";
        });
        document.querySelector(".page1").style.display = "flex";
    }

    function exitWebsite() {
        window.close();
    }

    buttons.forEach(button => {
        button.addEventListener("click", navigateToPage);
    });

    restartBtn.addEventListener("click", restartBook);
    exitBtn.addEventListener("click", exitWebsite);

    // Typing Effect Function
    function typeEffect(elementId, text, speed = 100, delay = 2000) {
        let element = document.getElementById(elementId);
        let i = 0;
        let typingInterval;

        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                typingInterval = setTimeout(typing, speed);
            } else {
                setTimeout(erase, delay); // Wait, then erase
            }
        }

        function erase() {
            if (i > 0) {
                element.textContent = text.substring(0, i - 1);
                i--;
                setTimeout(erase, speed / 2); // Erase speed is faster
            } else {
                setTimeout(typing, speed); // Restart typing
            }
        }

        typing();
    }

    // Apply the typing effect to the elements
    typeEffect("menu-title", "MENU");
    typeEffect("fragments-title", "Fragments of being");
    typeEffect("summon-title", "Summon me");
    typeEffect("books-title", "Book recommendations");
});