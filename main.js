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

document.querySelectorAll(".copy-button").forEach(button=>{

    button.addEventListener("click",()=>{

        const id=button.dataset.copy;
        const target=document.getElementById(id);

        // Copy
        navigator.clipboard.writeText(target.innerText);

        // Scroll to that section
        target.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

        // Change button text
        const original=button.innerHTML;

        button.innerHTML="✅ Copied!";
        button.classList.add("copied");

        setTimeout(()=>{
            button.innerHTML=original;
            button.classList.remove("copied");
        },2000);

    });

});
