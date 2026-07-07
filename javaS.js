// ---------- Mobile nav: side drawer ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navBackdrop = document.getElementById('navBackdrop');

if(navToggle && navLinks && navBackdrop){
    function openDrawer(){
        navLinks.classList.add('open');
        navBackdrop.classList.add('open');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function closeDrawer(){
        navLinks.classList.remove('open');
        navBackdrop.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.contains("open");
        isOpen ? closeDrawer() : openDrawer();
    });
    navBackdrop.addEventListener('click', closeDrawer);

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });
}

// ---------- Thread: draws in as you scroll the page ----------
const threadPath = document.getElementById('threadPath');
const pathLength = threadPath.getTotalLength();
threadPath.style.strokeDasharray = pathLength;
threadPath.style.strokeDashoffset = pathLength;

function updateThread(){
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = (doc.scrollHeight - doc.clientHeight) || 1;
    const progress = Math.min(scrollTop / scrollHeight, 1);
    const offset = pathLength * (1 - progress);
    threadPath.style.strokeDashoffset = offset;
}
document.addEventListener('scroll', updateThread, { passive: true });
window.addEventListener('resize', updateThread);
updateThread();

// ---------- Scroll reveal ----------
// Base set of elements that always fade/slide up, plus anything opting in
// via a data-reveal="left|right|up" attribute (used for the atmosphere
// strip, CTA buttons, and the gallery grid on exhibition.html).
const revealTargets = document.querySelectorAll(
    '.about__grid, .flip-card, .exhibit-card, .honors-list li, .section-head, .contact__inner, [data-reveal]'
);
revealTargets.forEach(el => el.classList.add('reveal'));

// Elements inside a .reveal-stagger container (or the gallery/atmosphere
// grids themselves) get a small incremental delay so they cascade in
// one after another instead of appearing all at once. Each masonry
// column (.exhibit-col) staggers its own cards independently, so the
// three columns settle in a slightly offset, less mechanical rhythm.
document.querySelectorAll('.atmosphere, .exhibit-col, .press-list, .reveal-stagger')
    .forEach(group => {
        Array.from(group.children).forEach((child, i) => {
            child.style.transitionDelay = `${i * 110}ms`;
        });
    });

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// ---------- Flip cards (exhibition.html gallery) ----------
// Click, or focus + Enter/Space, flips a card to reveal the reflection
// on the back. No-op harmlessly on pages with no .flip-card elements.
document.querySelectorAll('.flip-card').forEach(card => {
    const toggle = () => {
        const flipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            toggle();
        }
    });
});

// ---------- Exhibition gallery: scroll parallax + cursor tilt ----------
// Each .exhibit-col drifts vertically at its own speed (data-speed) as
// the gallery scrolls through view, giving the three columns a gentle
// depth/offset instead of moving in lockstep — the effect from the
// reference clip. Runs only on exhibition.html (no-op elsewhere since
// the selectors simply match nothing).
const exhibitMasonry = document.getElementById('exhibitMasonry');
if (exhibitMasonry) {
    const cols = Array.from(exhibitMasonry.querySelectorAll('.exhibit-col'));
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let ticking = false;
    function updateParallax(){
        ticking = false;
        if (prefersReduced) return;
        const rect = exhibitMasonry.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // -1 when the section's top has just entered the bottom of the
        // viewport, 0 when it's centered, +1 once it's scrolled past —
        // gives a smooth -1..1 progress value to drive the drift.
        const progress = (vh - rect.top) / (vh + rect.height) * 2 - 1;
        cols.forEach(col => {
            const speed = parseFloat(col.dataset.speed || '0');
            const shift = progress * speed * rect.height;
            col.style.transform = `translateY(${shift}px)`;
        });
    }
    function onScroll(){
        if (!ticking){
            ticking = true;
            requestAnimationFrame(updateParallax);
        }
    }
    document.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateParallax();

    // Cursor tilt: while hovering a settled, unflipped card, rotate it
    // slightly toward the pointer — like it's tipping off the wall to
    // meet you. Reset smoothly on leave. Skipped for touch/reduced-motion.
    if (!prefersReduced && window.matchMedia('(hover: hover)').matches) {
        exhibitMasonry.querySelectorAll('.flip-card').forEach(card => {
            card.addEventListener('pointermove', (e) => {
                if (card.classList.contains('is-flipped')) return;
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5;   // -0.5..0.5
                const py = (e.clientY - r.top) / r.height - 0.5;
                card.style.setProperty('--ry', `${px * 14}deg`);
                card.style.setProperty('--rx', `${py * -14}deg`);
            });
            card.addEventListener('pointerleave', () => {
                card.style.setProperty('--rx', '0deg');
                card.style.setProperty('--ry', '0deg');
            });
        });
    }
}


// ---------- Emails to andonovskaart ----------
emailjs.init({
    publicKey: "kHxMFVXGS8TS0Kj9o"
});

const contactForm = document.getElementById("contactForm");
const status = document.querySelector(".form-status");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_fm0qq7b",
            "template_7rmwo1l",
            this
        )
            .then(() => {git

                status.textContent = "Message sent successfully ✓";
                status.style.color = "#4CAF50";

                this.reset();

            })
            .catch((error) => {

                console.error(error);

                status.textContent = "Something went wrong.";
                status.style.color = "#d44";

            });

    });

}