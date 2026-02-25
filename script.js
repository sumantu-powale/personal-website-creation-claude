/* ============================================ */
/* HASH-BASED NAVIGATION SYSTEM */
/* ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize navigation
    initNavigation();
    
    // Handle browser back/forward buttons
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial page load
    handleHashChange();
});

/* ============================================ */
/* NAVIGATION INITIALIZATION */
/* ============================================ */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Let the browser handle the hash change naturally
            // The hashchange event will trigger our page switching logic
        });
    });
}

/* ============================================ */
/* HASH CHANGE HANDLER */
/* ============================================ */
function handleHashChange() {
    // Get current hash from URL (e.g., #about, #education)
    let hash = window.location.hash.slice(1); // Remove the # symbol
    
    // Default to 'home' if no hash or empty hash
    if (!hash) {
        hash = 'home';
    }
    
    // Show the correct page
    showPage(hash);
    
    // Update active nav link
    updateActiveNavLink(hash);
    
    // Scroll to top of page
    window.scrollTo(0, 0);
}

/* ============================================ */
/* SHOW PAGE FUNCTION */
/* ============================================ */
function showPage(pageName) {
    // Hide all page sections
    const allSections = document.querySelectorAll('.page-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the requested page section
    const targetSection = document.getElementById(pageName);
    if (targetSection) {
        targetSection.classList.add('active');
    } else {
        // If page doesn't exist, default to home
        document.getElementById('home').classList.add('active');
    }
}

/* ============================================ */
/* UPDATE ACTIVE NAV LINK */
/* ============================================ */
function updateActiveNavLink(pageName) {
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page's nav link
    const activeLink = document.querySelector(`[data-page="${pageName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

/* ============================================ */
/* SMOOTH SCROLL TO TOP */
/* ============================================ */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* ============================================ */
/* NAVIGATION HELPER - Use this to programmatically navigate */
/* ============================================ */
function navigateTo(pageName) {
    window.location.hash = pageName;
}

// Example usage in console:
// navigateTo('about');
// navigateTo('case-studies');

/* ============================================ */
/* CERTIFICATION ACCORDION TOGGLE */
/* ============================================ */
function toggleCertification(headerElement) {
    const certificationItem = headerElement.parentElement;
    certificationItem.classList.toggle('expanded');
}

/* ============================================ */
/* MODAL FUNCTIONS */
/* ============================================ */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close modal when clicking outside the modal content
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeModals = document.querySelectorAll('.modal.active');
        activeModals.forEach(modal => {
            closeModal(modal.id);
        });
    }
});
