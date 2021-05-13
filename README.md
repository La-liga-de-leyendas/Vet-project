# Vet-project
# this project is about a site web

1. Se asume que la persona que ejecute el proyecto Vet-Patitas dispone de:
  - Una computadora con sistema operativo Windows y conexión a internet.
  - Un editor de código instalado (Preferentemente Visual Studio Code).
  - Ejecución de Scripts en Windows activada.
  - Git y Node.js instalados en el sistema.

2. Para ejecutar el código localmente, se debe:
  - Clonar localmente el Repositorio: https://github.com/La-liga-de-leyendas/Vet-project.git
  - Abrir una terminal en la carpeta del proyecto.
  - Ejecutar por consola 'git checkout development' para cambiar de rama.
  - Ejecutar 'git pull' para actualizar los cambios.
  - Ejecutar 'cd .\vet-patitas\' por consola para acceder al código.
  - Ejecutar 'npm install' y esperar a que el proceso termine exitosamente.
  - Abrir la consola de Windows y ejecutar 'npm install -g @angular/cli@latest' para instalar Angular 11.
  - Ejecutar 'ng serve' para subir la página al localhost.
  - Ingresar al link que brinda la consola.

3. Si no se lograran instalar las dependencias o los procesos quedaran interrumpidos, la página web se encuentra deployada en el url:
    https://vet-website-caa3e.web.app

4. Recomendaciones para utilizar el sitio web:
  - Crear una cuenta con un correo electrónico al que se tenga acceso.
  - Verificar la cuenta por correo, abrir el enlace de redirección y **refrescar** la página para que el usuario sea validado. 
  - Por motivos de seguridad, si no se verifica la cuenta no se podrá acceder al sitio web.
  - El primer Sprint cubre la mayoría de las funciones de usuario, por lo que no implementa acciones de proveedores o veterinarias. 
  - Al tratarse del MVP, la mayorías de los procesos de compra enlazados con la base de datos de Firebase se ejecutan desde la consola administrativa.

5. PAra ejecutar el pipeline automáticamente, hay que hacer un cambio para que se añada en un commit que será pusheado a la rama de su preferencia. Una vez esta edición sea subida, Github Actions empezará a ejecutar el script por sí mismo. Los comandos a utilizar son:
  - 'git add .' para añadir los cambios realizados.
  - 'git commit -m "mensaje"' para realizar el commit.
  - 'git push origin branch' para pushear a la rama elegida.
  - El proceso puede observarse en la sección de Actions dentro del repositorio.

Vet-Patitas, siempre al servicio de sus usuarios<3.

