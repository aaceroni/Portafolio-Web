function toggleMenu() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.sidebar a');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      //Elimina la clase 'active' de todos los enlaces
      sidebarLinks.forEach(link => link.classList.remove('active'));
      
      //Añade la clase 'active' al enlace clicado
      this.classList.add('active');
    });
  });

  //Función para comprobar la posición del scroll y activar el enlace correspondiente
  function onScroll() {
    const sections = document.querySelectorAll('.section');
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section, index) => {
      if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        sidebarLinks.forEach(link => link.classList.remove('active'));
        sidebarLinks[index + 1].classList.add('active');//+1 porque el primer enlace es "Inicio"
      }
    });
  }

  //Escuchar evento de scroll
  window.addEventListener('scroll', onScroll);
});
