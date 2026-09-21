---
name: DataUMSA
description: Plataforma oficial de recolección, análisis y soberanía de datos de la Universidad Mayor de San Andrés
colors:
  primary: "#29b9f2"
  primary-dark: "#0688ba"
  primary-light: "#e0f6ff"
  bg-dark: "#090f1e"
  bg-dark-surface: "#131b2e"
  bg-main: "#f8fafc"
  text-main: "#0f172a"
  text-muted: "#475569"
  text-dark-muted: "#94a3b8"
  text-inverse: "#ffffff"
  accent: "#8b5cf6"
  success: "#10b981"
  warning: "#f59e0b"
  danger: "#ef4444"
typography:
  display:
    fontFamily: "Montserrat, 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Montserrat, 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat, 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Plus Jakarta Sans', 'Google Sans', system-ui, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "'Plus Jakarta Sans', 'Google Sans', system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  bento: "40px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.md}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
  button-secondary:
    backgroundColor: "rgba(15, 23, 42, 0.05)"
    textColor: "{colors.text-main}"
    rounded: "{rounded.md}"
    padding: "12px 28px"
  button-bento-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-dark}"
    rounded: "16px"
    padding: "16px 32px"
  button-bento-secondary:
    backgroundColor: "{colors.bg-dark-surface}"
    textColor: "{colors.text-inverse}"
    rounded: "16px"
    padding: "16px 32px"
---

# Design System: DataUMSA

## Overview

**Creative North Star: "The Andean Data Observatory"**

DataUMSA fusiona la rigurosidad científica de la Universidad Mayor de San Andrés con la precisión táctica de una estación de telemetría de alta montaña. El sistema visual equilibra la solvencia institucional académica con el dinamismo contemporáneo de la ingeniería de datos: interfaces sobrias y legibles para investigación profunda, acompañadas de monolitos oscuros Bento inspirados en laboratorios e instrumentos de campo.

La atmósfera visual se articula en una doble experiencia: fondos diurnos limpios (`#f8fafc`) enriquecidos con paneles de vidrio esmerilado (`glass-panel`) para documentación técnica y lectura reposada, combinados con bloques oscuros abisales (`#090f1e` y `#131b2e`) que albergan el Hero, métricas destacadas y llamados a la acción de alta energía. Los acentos en cian celestial (`#29b9f2`) emulan la nitidez de la luz en la altura andina, guiando la atención del usuario hacia la acción interactiva sin saturar la composición.

**Key Characteristics:**
- **Precisión científica andina:** Jerarquías tipográficas claras (Montserrat para títulos prominentes, Plus Jakarta Sans para cuerpo accesible a 17px).
- **Arquitectura Bento táctil:** Contenedores amplios (`40px` de radio) con retroalimentación física y micro-interacciones de relieve 3D.
- **Soberanía y confianza institucional:** Fondos estructurados, micro-grillas radiales de datos y bordes milimétricos translúcidos en lugar de saturación ornamental.

## Colors

Paleta inspirada en la claridad atmosférica andina, combinando negros profundos de instrumental científico con celestes eléctricos de alta visibilidad.

### Primary
- **Illimani Sky Cyan** (#29b9f2): Color insignia de la plataforma. Se utiliza en botones primarios, badges de estado, bordes interactivos en foco y acentos destacados de texto.
- **Deep Andean Cobalt** (#0688ba): Variante de alto contraste utilizada para enlaces de navegación, estados hover de botones, bordes de acento y biseles táctiles inferiores.
- **Sky Ice Tint** (#e0f6ff): Tonalidad pastel desaturada para fondos de badges activos, selecciones y superficies de acento suave en modo claro.

### Tertiary
- **Electric Data Violet** (#8b5cf6): Tono auxiliar para flujos de arquitectura de datos complejos, tags de características y categorías analíticas secundarias.

### Neutral
- **Abyssal Space Navy** (#090f1e): Fondo basal para secciones oscuras de alto impacto visual (Hero bento, comparativas y pie de página).
- **Night Observatory Slate** (#131b2e): Superficie de las tarjetas Bento principales; provee contraste profundo con bordes blancos translúcidos.
- **Slate Canvas Light** (#f8fafc): Fondo general de la página web con sutil degradado descendente hacia `#f1f5f9`.
- **Midnight Slate Text** (#0f172a): Tono de tinta principal para encabezados y textos de alta prioridad en superficies claras.
- **Muted Mountain Slate** (#475569): Tono para subtítulos, metadatos y descripciones en modo claro.
- **Starlight Slate Muted** (#94a3b8): Tono de texto secundario sobre superficies oscuras `#131b2e`.
- **Pure White Inverse** (#ffffff): Texto de máximo contraste sobre fondos oscuros y superficies de botones principales.

### Named Rules
**The 10% Illimani Rule.** El cian primario vibrante (#29b9f2) está estrictamente restringido al 10% del área visual de cualquier pantalla. Su valor reside en su rareza: se reserva para llamadas a la acción, métricas heroicas y acentos de revelado, nunca para fondos de página completos.

**The Dual Atmosphere Rule.** Las superficies de navegación y hero utilizan contenedores oscuros envolventes para crear foco visual, mientras que los flujos de lectura técnica y guías residen en lienzos claros con paneles de vidrio esmerilado para máxima velocidad de comprensión y ergonomía de lectura.

## Typography

**Display Font:** Montserrat (con fallback: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif)  
**Body Font:** Plus Jakarta Sans (con fallback: 'Google Sans', system-ui, -apple-system, sans-serif)  
**Label/Mono Font:** JetBrains Mono (con fallback: 'Fira Code', ui-monospace, monospace)  

**Character:** Emparejamiento que contrapone la contundencia geométrica y solemne de Montserrat en encabezados con la calidez hiperlegible y moderna de Plus Jakarta Sans en el cuerpo y controles de interfaz.

### Hierarchy
- **Display** (Bold 700 / Black 900, `clamp(2.5rem, 5vw, 3.5rem)`, line-height 1.15): Títulos principales de páginas y tarjetas estelares del Hero Bento.
- **Headline** (Bold 700, `2.75rem` [44px], line-height 1.2): Encabezados de secciones mayores (`<h2>`) y títulos de hitos históricos.
- **Title** (Bold 700, `1.75rem` [28px] a `2.125rem` [34px], line-height 1.25): Títulos de módulos, tarjetas comparativas y nombres de componentes.
- **Body** (Regular 400 / Medium 500, `1.0625rem` [17px], line-height 1.7): Texto de párrafos explicativos, artículos de documentación y casos de uso.
- **Label** (SemiBold 600 / Bold 700, `0.875rem` [14px] a `0.9375rem` [15px], tracking 0.05em, uppercase en badges): Botones, badges, indicadores de estado y migas de pan.

### Named Rules
**The High-Legibility Floor Rule.** El cuerpo de lectura nunca debe descender de los 17px (1.0625rem) con un interlineado mínimo de 1.7. En un entorno académico de investigación y recolección de campo, la fatiga visual debe prevenirse por diseño.

## Layout

El sistema adopta un modelo espacial con rejilla base de 8px y dos anchos máximos maestros:
- **Contenedor General:** `max-w-7xl` (1280px) con padding horizontal fluido (`px-6` a `px-12`).
- **Contenedor de Contenido Técnico / Lectura:** `max-w-[1200px]` (`main-content`) centrado vertical y horizontalmente.

**Bento Grid:** En superficies de presentación se implementa una rejilla de 4 columnas en desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4` con `gap-4` a `gap-6`). Las tarjetas principales ocupan matrices de `2x2` o `2x1` permitiendo jerarquías asimétricas con gran riqueza visual.

## Elevation & Depth

El sistema rechaza sombras difusas indiscriminadas y opta por una técnica híbrida estratificada: superficies diurnas translúcidas con desenfoque de fondo (`backdrop-filter: blur(16px)`), contenedores Bento oscuros con borde estructural tenue (`rgba(255,255,255,0.08)`), y botones táctiles con relieve físico tridimensional.

### Shadow Vocabulary
- **Glass Ambient** (`box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08)`): Sombras difusas y suaves debajo de paneles translúcidos diurnos.
- **Primary Glow** (`box-shadow: 0 4px 14px 0 rgba(41, 185, 242, 0.3)`): Resplandor interactivo de botones primarios diurnos que se intensifica a `0 6px 20px 0 rgba(41, 185, 242, 0.4)` al pasar el cursor.
- **Bento Depth** (`box-shadow: 0 25px 50px -12px rgba(41, 185, 242, 0.25)`): Proyección atmosférica que surge en las tarjetas oscuras al entrar en hover.
- **Tactile 3D Offset** (`box-shadow: 0 8px 0 0 #0688ba`): Bisel inferior físico en botones Bento Primarios que desciende a `0 4px 0 0` en hover y `0 0 0 0` (aplanamiento total) en estado activo.

### Named Rules
**The Tactile Feedback Rule.** Los botones de acción estelar del Hero Bento utilizan un relieve físico de 8px que se comprime físicamente al pulsar (traslación en Y y reducción de bisel), ofreciendo una sensación mecánica táctil y confiable.

## Shapes

El lenguaje de formas es generoso y geométricamente definido:
- **Controles estándar:** `8px` (`radius-sm`) para etiquetas compactas y `12px` (`radius-md`) para botones estándar.
- **Botones Bento:** `16px` (`rounded-2xl`) con acolchado amplio y tactilidad marcada.
- **Paneles Glassmórficos:** `20px` (`radius-lg`) con bordes ultra-finos de 1px.
- **Monolitos Bento:** `40px` (`rounded-[2.5rem]`) que otorgan a los bloques oscuros una silueta moderna y amigable.
- **Badges y Pastillas:** `9999px` (`rounded-full`) para estados, chips de filtros y metadatos de versión.

## Components

### Buttons
- **Shape:** Curvatura redondeada según contexto: 12px para botones estándar (`btn`), 16px para variantes Bento (`rounded-2xl`).
- **Primary:** Fondo degradado `linear-gradient(135deg, #29b9f2 0%, #0688ba 100%)`, texto blanco, sombra cian envolvente.
- **Bento Primary:** Fondo sólido `#29b9f2`, texto oscuro `#090f1e`, tipografía gruesa (`font-bold`), padding `16px 32px`, y bisel 3D inferior de 8px en `#0688ba`.
- **Bento Secondary:** Fondo `#131b2e`, texto blanco, borde tenue `1px solid rgba(255, 255, 255, 0.08)`, elevación en hover con traslación sutil de `-2px`.
- **Secondary:** Fondo neutro translúcido `rgba(15, 23, 42, 0.05)`, texto oscuro `#0f172a`, borde fino de 1px.

### Badges / Chips
- **Glass Badge:** Fondo `rgba(255, 255, 255, 0.1)`, borde blanco traslúcido, texto blanco, `backdrop-blur-sm`, texto en caja alta (`uppercase`) con tracking espaciado.
- **Primary Badge:** Fondo `rgba(41, 185, 242, 0.1)`, borde cian al 20%, texto `#0688ba`, forma de pastilla (`9999px`).
- **Dark Badge:** Fondo `#131b2e`, borde `rgba(255, 255, 255, 0.08)`, texto `#e0f6ff`, radio `16px`, punto parpadeante opcional.

### Cards / Containers
- **Glass Panel:** Fondo `rgba(255, 255, 255, 0.7)` con desenfoque de 16px, borde `rgba(15, 23, 42, 0.08)`, radio `20px`, sombra suave.
- **Bento Card:** Fondo `#131b2e`, radio `40px` (`rounded-[2.5rem]`), borde sutil `rgba(255, 255, 255, 0.08)`, textura de micro-grilla de ingeniería sutil (`radial-gradient` al 3% de opacidad) y resplandor esférico cian en esquinas.

### Navigation
- **Rounded Drawer Nav:** Navegación flotante superior y menú lateral tipo cajón (`drawer`) con animación fluida vía Motion. Tipografía Montserrat, enlaces jerarquizados en submenús para "La Plataforma", "App Móvil" y "Sobre DataUMSA", con botón de llamada a acción destacado hacia la documentación y la plataforma web.

## Do's and Don'ts

### Do:
- **Do** respetar la regla del 10% para el cian primario (#29b9f2): utilízalo con propósito deliberado para dirigir la mirada.
- **Do** mantener el tamaño mínimo de fuente corporal en 17px (1.0625rem) con line-height 1.7 en páginas de lectura y documentación.
- **Do** emplear esquinas redondeadas generosas (40px en tarjetas Bento, 20px en paneles de vidrio) para preservar la identidad orgánica del sistema.
- **Do** utilizar el bisel tridimensional de 8px (`shadow-[0_8px_0_0_var(--color-primary-dark)]`) exclusivamente en botones de máxima jerarquía.
- **Do** incluir una micro-grilla técnica sutil de puntos de 24px en fondos oscuros de tarjetas hero para reforzar la temática de datos y precisión.

### Don't:
- **Don't** aplicar fondos saturados completos en cian o azul eléctrico en páginas enteras.
- **Don't** reducir el contraste de texto secundario por debajo de un ratio 4.5:1 respecto a su fondo contenedor.
- **Don't** utilizar sombras oscuras genéricas difusas en tarjetas Bento; utiliza bordes translúcidos de 1px con resplandores en cian sutiles (`hover:border-primary/30`).
- **Don't** mezclar más de dos familias tipográficas por vista: Montserrat para títulos y Plus Jakarta Sans para el contenido.
- **Don't** crear botones primarios planos sin transiciones ni retroalimentación táctil de pulsación.
