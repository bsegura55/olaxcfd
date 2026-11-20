# MAVS JEWELRY – rediseño visual completo

Esta versión implementa en HTML, CSS y JavaScript el lenguaje visual de los bocetos creados para MAVS JEWELRY. No reutiliza la distribución antigua de las páginas: cada pestaña tiene una composición propia, con un encabezado común.

## Páginas
- `index.html`: inicio con portada, categorías, favoritos de la tienda, esencia de MAVS y testimonios en video.
- `galeria.html`: catálogo con filtros por colección, tipo de pieza y favoritos.
- `nosotros.html`: historia de María Angélica, identidad, misión y visión.
- `tienda.html`: presentación visual del puesto/espacio y fotografías compartidas por la clienta.
- `plata-piedras.html`, `miyuki.html`, `alambrismo.html`: páginas independientes para cada colección.
- `contacto.html`: WhatsApp, correo, Instagram, TikTok, Facebook y formulario que prepara un correo mediante `mailto:`.

## Para ejecutar
1. Descomprime el ZIP.
2. Abre esta carpeta en Visual Studio Code.
3. Ejecuta `index.html` con Live Server.

## Detalles técnicos
- Encabezado común y fijo en todas las páginas, con barra superior, logo con margen y navegación uniforme.
- Diseño adaptable a escritorio, tablet y móvil.
- Los favoritos se guardan en `localStorage` del navegador.
- Los filtros del catálogo funcionan sin backend.
- Los precios se muestran como “Consultar precio” porque el material original no especificaba valores confirmados.
- No se implementa pago ni carrito de compra real; los botones de consulta conectan con WhatsApp.
- El formulario no envía a un servidor: prepara un mensaje para la aplicación de correo predeterminada.

## Fotografías y referencias
Se mantienen los recursos gráficos originales del proyecto y se incorporan las fotografías reales de productos y del puesto que se compartieron durante el trabajo. La carpeta `referencias/` incluye los bocetos visuales usados como guía.
