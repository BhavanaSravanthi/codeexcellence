function showTab(event, tabId) {
  const tabButtons = document.querySelectorAll(".tab-button, .contact-button");
  const tabPanes = document.querySelectorAll(".tab-pane");

  // Remove active class
  tabButtons.forEach(btn => btn.classList.remove("active"));
  tabPanes.forEach(pane => pane.classList.remove("active"));

  // Add active class to clicked elements
  event.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active");

  // Dynamic logo change
  const dynamicLogo = document.getElementById("dynamic-logo");
  if (dynamicLogo) {
    switch (tabId) {
      case 'home':
        dynamicLogo.src = 'logo2.png';
        break;
      case 'hana':
        dynamicLogo.src = 'logo3.png';
        break;
      case 'quality':
        dynamicLogo.src = 'logo4.png';
        break;
      case 'impact':
        dynamicLogo.src = 'logo5.png';
        break;
         case 'contact':
        dynamicLogo.src = '';
        break;
    }
  }
}
