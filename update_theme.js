const fs = require('fs');
const path = require('path');

const directories = [
  'c:/Users/Priyanshu/my portfoliio/My-portfolio/components',
  'c:/Users/Priyanshu/my portfoliio/My-portfolio/app'
];

const replacements = {
  // Backgrounds
  'bg-\\[#0D0D0D\\]': 'bg-[#FCF9F5]',
  'bg-\\[#111111\\]': 'bg-white',
  'bg-\\[#181818\\]': 'bg-white',
  'bg-\\[#0A0A0A\\]': 'bg-[#F0EDEA]',
  'bg-\\[#0F0F0F\\]': 'bg-[#F5F2EE]',
  
  // Opacity backgrounds
  'bg-white/\\[0.015\\]': 'bg-white',
  'bg-white/\\[0.02\\]': 'bg-white',
  'bg-white/\\[0.03\\]': 'bg-white',
  'bg-white/\\[0.04\\]': 'bg-black/[0.03]',
  'bg-white/\\[0.06\\]': 'bg-black/[0.05]',
  'bg-white/10': 'bg-black/10',
  'bg-white/25': 'bg-black/20',
  
  // Borders
  'border-white/\\[0.04\\]': 'border-black/[0.06]',
  'border-white/\\[0.06\\]': 'border-black/[0.08]',
  'border-white/\\[0.08\\]': 'border-black/[0.1]',
  'border-white/\\[0.1\\]': 'border-black/[0.12]',
  'border-white/\\[0.15\\]': 'border-black/[0.15]',
  
  // Text
  'text-white': 'text-[#000000]',
  'text-\\[#F5F5F5\\]': 'text-[#000000]',
  'text-\\[#A1A1AA\\]': 'text-black/60',
  
  // Specific Opacity Texts
  'text-[#000000]/80': 'text-[#000000]/80', // Avoid double replace if run multiple times
  'text-white/80': 'text-[#000000]/80',
  'text-white/90': 'text-[#000000]/90',
  'text-black/60/20': 'text-black/20', // Fix cascading replacements
  'text-black/60/30': 'text-black/30',
  'text-black/60/40': 'text-black/40',
  'text-black/60/50': 'text-black/50',
  'text-black/60/60': 'text-black/60',
  'text-black/60/70': 'text-black/70',
  'text-\\[#A1A1AA\\]/20': 'text-black/20',
  'text-\\[#A1A1AA\\]/30': 'text-black/30',
  'text-\\[#A1A1AA\\]/40': 'text-black/40',
  'text-\\[#A1A1AA\\]/50': 'text-black/50',
  'text-\\[#A1A1AA\\]/60': 'text-black/60',
  'text-\\[#A1A1AA\\]/70': 'text-black/70',

  // Accent Colors & specific classes
  'bg-emerald-500': 'bg-[#C5FF52]',
  'bg-emerald-400': 'bg-[#C5FF52]',
  'text-emerald-500/80': 'text-[#121212]', // Terminal text
  'shadow-premium': 'shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)]'
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
      if (file === 'update_theme.js') continue;
      
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Order of operations is important so we don't break stuff like text-white/80 vs text-white
      // For text-white/80 to not become text-[#000000]/80 and then text-[#000000] again? No that won't happen.
      
      for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(key, 'g');
        content = content.replace(regex, value);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

directories.forEach(processDirectory);
