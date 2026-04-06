// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Footer Accordion logic for Mobile
  const accordionTitles = document.querySelectorAll('.footer-col.accordion .footer-title');
  
  if (window.innerWidth <= 768) {
    accordionTitles.forEach(title => {
      title.addEventListener('click', () => {
        const parentCol = title.parentElement;
        
        // Toggle current
        parentCol.classList.toggle('active');
        
        // Optional: Close others (uncomment if need accordion behavior)
        /*
        document.querySelectorAll('.footer-col.accordion').forEach(col => {
          if (col !== parentCol) {
            col.classList.remove('active');
          }
        });
        */
      });
    });
  }

  // Handle Window Resize for accordion state
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      document.querySelectorAll('.footer-col.accordion').forEach(col => {
        col.classList.remove('active');
        col.querySelector('.footer-links').style.display = '';
      });
    }
  });
});
