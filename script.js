function highlightActiveMenu() {
    let currentPage = window.location.pathname.split("/").pop(); 
    let menuLinks = document.querySelectorAll(".nav-links a");

    menuLinks.forEach(link => {
        link.classList.remove("active");
        let linkPage = link.getAttribute("href");

        if (currentPage === linkPage) {
            link.classList.add("active");
        }

        // special case for home page
        if (currentPage === "" || currentPage === "index.html") {
            if (linkPage === "index.html") {
                link.classList.add("active");
            }
        }
    });
}

highlightActiveMenu();


function goToDonation(){
    window.location.href = "donation_form.html";  
}
