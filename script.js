
// animation d apparition
const cartes = document.querySelectorAll('.card');
 
const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach(entree => {
        if (entree.isIntersecting) {
            entree.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});
 
cartes.forEach(carte => {
    observateur.observe(carte);
});
 
// MODE SOMBRE / CLAIR
// ================================
 
const boutonTheme = document.getElementById('toggle-theme');
const html = document.documentElement;
 
// Charge le thème sauvegardé
const themeSauvegarde = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', themeSauvegarde);
boutonTheme.textContent = themeSauvegarde === 'dark' ? '☀️ Mode clair' : '🌙 Mode sombre';
 
// Bascule au clic
boutonTheme.addEventListener('click', () => {
    const actuel = html.getAttribute('data-theme');
    const nouveau = actuel === 'light' ? 'dark' : 'light';
 
    html.setAttribute('data-theme', nouveau);
    localStorage.setItem('theme', nouveau);
    boutonTheme.textContent = nouveau === 'dark' ? '☀️ Mode clair' : '🌙 Mode sombre';
});
 
// Vérification des champs
const form = document.getElementById('contact-form');
const confirmation = document.getElementById('confirmation');

if (form && confirmation) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!nom || !email || !message) {
            confirmation.textContent = '⚠️ Merci de remplir tous les champs.';
            confirmation.style.color = 'red';
            return;
        }

        // Vérification format email
        const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailValide) {
            confirmation.textContent = '⚠️ Adresse email invalide.';
            confirmation.style.color = 'red';
            return;
        }

        // Succès
        confirmation.textContent = `✅ Merci ${nom}, votre message a bien été envoyé !`;
        confirmation.style.color = 'green';

        // Vide les champs
        document.getElementById('nom').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    });
}
