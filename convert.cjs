const fs = require('fs');

const files = ['admin.html', 'feedback.html', 'feedback_simple.html', 'instrucciones.html', 'lobby.html', 'pantalla_juego.html', 'podio.html', 'resumen.html'];

fs.mkdirSync('src/pages', { recursive: true });

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  if (bodyMatch) {
    let body = bodyMatch[1];
    
    body = body.replace(/class=/g, 'className=')
               .replace(/for=/g, 'htmlFor=')
               .replace(/<!--[\s\S]*?-->/g, '')
               // ensure tags are closed properly for JSX
               .replace(/<img(.*?)>/g, (match, attrs) => {
                 if (attrs.endsWith('/')) return match;
                 return `<img${attrs}/>`;
               })
               .replace(/<input(.*?)>/g, (match, attrs) => {
                 if (attrs.endsWith('/')) return match;
                 return `<input${attrs}/>`;
               })
               .replace(/<source(.*?)>/g, (match, attrs) => {
                 if (attrs.endsWith('/')) return match;
                 return `<source${attrs}/>`;
               })
               .replace(/<br>/g, '<br />')
               .replace(/<hr>/g, '<hr />')
               // Convert style string to style object
               .replace(/style="([^"]*)"/g, (match, p1) => {
                 if (p1.includes('font-variation-settings')) {
                   const fillVal = p1.includes("FILL' 1") ? 1 : 0;
                   return `style={{ fontVariationSettings: "'FILL' ${fillVal}" }}`;
                 }
                 if (p1.includes('width:')) {
                   const widthMatch = p1.match(/width:\s*([^;]+)/);
                   if (widthMatch) return `style={{ width: "${widthMatch[1].trim()}" }}`;
                 }
                 return `style={{}}`;
               })
               // Handle any stray attributes
               .replace(/stroke-width/g, 'strokeWidth')
               .replace(/stroke-linecap/g, 'strokeLinecap')
               .replace(/stroke-linejoin/g, 'strokeLinejoin')
               .replace(/fill-rule/g, 'fillRule')
               .replace(/clip-rule/g, 'clipRule')
               .replace(/onclick=/g, 'onClick=')
               .replace(/onsubmit=/g, 'onSubmit=')
               .replace(/onchange=/g, 'onChange=')
               .replace(/tabindex/g, 'tabIndex')
               .replace(/readonly/g, 'readOnly')
               .replace(/maxlength/g, 'maxLength')
               .replace(/autofocus/g, 'autoFocus')
               .replace(/autoplay/g, 'autoPlay');
               
    const componentName = file.replace('.html', '').split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    
    const jsxContent = `import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ${componentName}() {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-secondary selection:text-on-secondary">
      ${body}
    </div>
  );
}
`;
    // Clean up specific edge cases if present in Stitch
    const cleanJsx = jsxContent
        .replace(/<clipPath/g, "<clipPath") // JSX cases
        .replace(/<use /g, "<use ")
        .replace(/<defs>/g, "<defs>")
        // quick fix for standard HTML unclosed tags inside SVG
        .replace(/<path([^>]+[^\/])>/g, '<path$1 />')
        .replace(/<circle([^>]+[^\/])>/g, '<circle$1 />')
        .replace(/<ellipse([^>]+[^\/])>/g, '<ellipse$1 />')
        .replace(/<line([^>]+[^\/])>/g, '<line$1 />')
        .replace(/<polygon([^>]+[^\/])>/g, '<polygon$1 />')
        .replace(/<polyline([^>]+[^\/])>/g, '<polyline$1 />')
        .replace(/<rect([^>]+[^\/])>/g, '<rect$1 />');
        
    fs.writeFileSync(`src/pages/${componentName}.jsx`, cleanJsx);
  }
});
