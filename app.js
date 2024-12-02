// Sample link: yourdomain.com/?cat=office


   window.onload = function () {
    let currentUrl = window.location.href;
    const createUrl = new URL(currentUrl);
    const catValue = createUrl.searchParams.get('cat');
    
    if (catValue) {
        const element = document.getElementById(catValue);

        if (element) {
            element.click(); // Simulate a click on the element
            element.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the element
        } else {
            console.error(`Element with ID '${catValue}' not found.`);
        }
        
    }
};
