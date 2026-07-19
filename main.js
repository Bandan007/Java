document.querySelectorAll(".copy-btn").forEach(button => {

    button.addEventListener("click", () => {

        const text = button.previousElementSibling.innerText;

        navigator.clipboard.writeText(text).then(() => {

            button.textContent = "✅ Copied!";
            button.classList.add("copied");

            setTimeout(() => {
                button.textContent = "📋 Copy";
                button.classList.remove("copied");
            }, 2000);

        });

    });

});

