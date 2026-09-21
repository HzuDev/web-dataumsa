# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Docentes, investigadores, tesistas, auxiliares y estudiantes de la Universidad Mayor de San Andrés (UMSA), así como brigadistas y encuestadores involucrados en levantamiento de datos en campo (urbano y rural).

## Product Purpose

DataUMSA es la plataforma oficial de la Universidad Mayor de San Andrés para el diseño de formularios de recolección de datos avanzados (estándar XLSForm/ODK), recolección de datos 100% offline en campo (vía aplicación móvil DataUMSA Collect), y gestión, análisis y publicación de información académica con plena soberanía sobre los datos institucionales.

Este repositorio (`web-dataumsa/data-umsa`) provee el portal web oficial, la documentación técnica y las guías de inicio rápido y referencia para la comunidad universitaria, centralizando el acceso y recursos de todo el ecosistema.

## Positioning

Frente a soluciones comerciales de terceros o plataformas privativas que retienen datos fuera del país, DataUMSA garantiza soberanía institucional total al operar sobre servidores e infraestructura de la UMSA, adaptado a las condiciones bolivianas (soporte 100% offline para trabajo en campo), compatibilidad con estándares abiertos (XLSForm, ODK Collect, exportación a SPSS/Excel/KML) y acceso libre para la comunidad académica.

## Operating Context

- Levantamiento de censos universitarios, diagnósticos comunitarios, proyectos de investigación científica multidisciplinaria y tesis de grado.
- Entornos de campo remotos con conectividad nula o intermitente donde se utiliza la app móvil Android (DataUMSA Collect) para capturar datos georreferenciados (GPS), multimedia y formularios condicionales.
- Laboratorios de cómputo y estaciones de trabajo de docentes e investigadores donde se configuran formularios en XLSForm, se gestionan proyectos y se exportan conjuntos de datos a herramientas estadísticas (SPSS, R, Python, Excel).
- Consulta de documentación técnica y guías oficiales en `data.umsa.bo`.

## Capabilities and Constraints

- **Stack Web:** Construido sobre Astro, Starlight (documentación técnica y guías), React, Tailwind CSS v4, Motion y Vite.
- **Ecosistema Integrado:**
  - Portal y documentación: `https://data.umsa.bo` (este repositorio).
  - Plataforma de gestión y backend: `https://app.data.umsa.bo`.
  - Aplicación móvil de campo: `DataUMSA Collect` (Android APK distribuida desde `/descargas`).
- **Restricciones Institucionales:**
  - Alojamiento en servidores institucionales UMSA con cumplimiento de políticas universitarias de privacidad y gobernanza de datos.
  - Generación estática y soporte de internacionalización/idiomas para documentación.
- **Decisiones Abiertas:** Integración futura de herramientas interactivas o visores de datos públicos directamente en el portal web.

## Brand Commitments

- **Identidad:** Universidad Mayor de San Andrés (UMSA) - vocación pública, rigurosidad académica, transparencia y soberanía científica.
- **Estilo:** Acentos institucionales en tonos azul/cian primario (`#29b9f2`, `#0688ba`), componentes tipo bento grid combinados con fondos limpios y de alto contraste, tipografía legible y diseño estructurado orientado a datos e ingeniería.
- **Tono de voz:** Riguroso, institucional pero moderno, accesible para estudiantes y formalmente confiable para autoridades y decanatos.

## Evidence on Hand

- Código fuente, componentes y páginas existentes en `src/pages/` (secciones bento grid, historia, casos de uso, comparativas, equipo institucional, términos y privacidad).
- Documentación existente en `src/content/docs/docs/` (guía de inicio rápido, configuración de idiomas, referencia XLSForm).
- Rutas de descarga para la aplicación móvil (`/app-movil/descargas` y `/app-movil/dataumsa-collect`).

## Product Principles

1. **Soberanía y Seguridad de Datos:** Toda la información recolectada reside en infraestructura de la universidad; la arquitectura respeta la privacidad y trazabilidad institucional.
2. **Resiliencia Operativa Offline-First:** El flujo de trabajo no depende de conectividad constante; los procesos de campo deben ser robustos ante cortes y entornos aislados.
3. **Estándares Abiertos e Interoperabilidad:** Priorizar formatos estándar de investigación (XLSForm, ODK, SPSS, GeoJSON/KML) evitando el vendor lock-in.
4. **Claridad y Accesibilidad Académica:** La documentación y las interfaces deben simplificar la adopción tanto para encuestadores novatos como para investigadores cuantitativos experimentados.

## Accessibility & Inclusion

- Compatibilidad con dispositivos móviles de diversa gama en campo.
- Soporte para múltiples idiomas (incluyendo lenguas originarias según guías de configuración).
- Estándares web de accesibilidad (contraste accesible, semántica HTML y navegación clara).
