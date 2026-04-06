// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Footer Accordion logic for Mobile
  const accordionTitles = document.querySelectorAll('.footer-col.accordion .footer-title');
  
  accordionTitles.forEach((title) => {
    title.addEventListener('click', () => {
      if (window.innerWidth > 768) return;
      const parentCol = title.parentElement;
      if (!parentCol) return;
      parentCol.classList.toggle('active');
    });
  });

  // Handle Window Resize for accordion state
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      document.querySelectorAll('.footer-col.accordion').forEach(col => {
        col.classList.remove('active');
      });
    }
  });
});
