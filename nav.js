window.onload = function () {

    const user = sessionStorage.getItem("loggedInUser");
    const profileLink = document.getElementById("profileLink");

    if (!profileLink) return;

    if (!user) {
        // User NOT logged in
        profileLink.textContent = "LOGIN";
        profileLink.href = "profile.html";
    } else {
        // User IS logged in
        const userData = JSON.parse(user);

        if (userData.role === "ADMIN") {
            profileLink.textContent = "DASHBOARD";
            profileLink.href = "admin_dashboard.html";
        } else if (userData.role === "DONOR") {
            profileLink.textContent = "PROFILE";
            profileLink.href = "donor_profile.html";
        } else if (userData.role === "NGO") {
            profileLink.textContent = "PROFILE";
            profileLink.href = "ngo_profile.html";
        }
    }
};
