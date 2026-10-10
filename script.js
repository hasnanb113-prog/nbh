/**
 * ==============================================================================
 * HASNA N B — PORTFOLIO CLIENT-SIDE SCRIPT
 * Profession: Aspiring Data Analyst | Softronics Intern
 * Description: Interactive features, mobile navigation, scrolling, and form validation
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. DYNAMIC FOOTER YEAR
       Keeps copyright year automatically up-to-date
    -------------------------------------------------------------------------- */
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    /* --------------------------------------------------------------------------
       2. STICKY NAVBAR SCROLL ELEVATION
       Adds shadow and high-contrast border on page scroll
    -------------------------------------------------------------------------- */
    const navbar = document.getElementById('mainNavbar');
    const onScrollNavbar = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScrollNavbar, { passive: true });
    onScrollNavbar(); // Initial run

    /* --------------------------------------------------------------------------
       3. MOBILE NAVIGATION AUTO-COLLAPSE
       Closes the hamburger menu when any navigation link is tapped on mobile
    -------------------------------------------------------------------------- */
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');
    const navbarCollapse = document.getElementById('navbarContent');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) 
                    || new bootstrap.Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            }
        });
    });

    /* --------------------------------------------------------------------------
       4. BACK TO TOP BUTTON
       Reveals floating button after scrolling down 350px
    -------------------------------------------------------------------------- */
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* --------------------------------------------------------------------------
       5. CONTACT FORM VALIDATION & INTERACTIVE HANDLING
       Provides real-time feedback and clear user response
    -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('portfolioContactForm');
    const successAlert = document.getElementById('contactSuccessAlert');
    const submitBtn = document.getElementById('contactSubmitBtn');

    if (contactForm) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const validateInput = (field) => {
            const val = field.value.trim();
            let valid = true;

            if (field.id === 'formFullName') {
                valid = val.length >= 2;
            } else if (field.id === 'formEmail') {
                valid = emailRegex.test(val);
            } else if (field.id === 'formSubject') {
                valid = val.length >= 3;
            } else if (field.id === 'formMessage') {
                valid = val.length >= 10;
            }

            if (!valid) {
                field.classList.add('is-invalid');
                field.classList.remove('is-valid');
            } else {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
            }

            return valid;
        };

        const formFields = contactForm.querySelectorAll('input, textarea');
        formFields.forEach(field => {
            field.addEventListener('input', () => validateInput(field));
            field.addEventListener('blur', () => validateInput(field));
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let allValid = true;
            formFields.forEach(field => {
                if (!validateInput(field)) {
                    allValid = false;
                }
            });

            if (!allValid) {
                const firstInvalid = contactForm.querySelector('.is-invalid');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            // Simulate sending feedback state
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Preparing Message...';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;

                if (successAlert) {
                    successAlert.classList.remove('d-none');
                    successAlert.classList.add('d-flex');
                    successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }

                // Reset form
                contactForm.reset();
                formFields.forEach(field => field.classList.remove('is-valid', 'is-invalid'));

                // Hide alert after 7 seconds
                setTimeout(() => {
                    if (successAlert) {
                        successAlert.classList.add('d-none');
                        successAlert.classList.remove('d-flex');
                    }
                }, 7000);

            }, 1000);
        });
    }

    console.log("%c Hasna N B — Data Analyst Portfolio Loaded ", "background: #0B1633; color: #D4AF6A; font-weight: bold; padding: 4px 8px; border: 1px solid #D4AF6A;");
});
