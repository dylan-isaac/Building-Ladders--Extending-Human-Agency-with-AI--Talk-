function extractPageContext() {
    // Helper function to trim text and normalize whitespace
    const trimText = (text) => {
      if (!text) return '';
      // Replaces multiple whitespace characters (including newlines) with a single space
      return text.trim().replace(/\s+/g, ' '); 
    };
  
    // Get page title
    const pageTitle = document.title;
    
    // --- HEADING EXTRACTION WITH DE-DUPLICATION ---
    const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const uniqueHeadings = [];
    const seenHeadings = new Set();
  
    allHeadings.forEach(heading => {
      // 1. Check if the element is visible on the page
      // (offsetParent is null for hidden elements)
      if (heading.offsetParent === null) {
        return;
      }
      
      const text = trimText(heading.textContent);
      
      // 2. Skip if the heading is blank
      if (text.length === 0) {
        return;
      }
      
      const level = parseInt(heading.tagName.charAt(1));
      const key = `${level}-${text}`; // Create a unique key from level and text content
      
      // 3. Add the heading only if it hasn't been seen before
      if (!seenHeadings.has(key)) {
        uniqueHeadings.push({ level, text });
        seenHeadings.add(key);
      }
    });
    // --- END HEADING EXTRACTION ---
  
    // Use the clean, unique list of headings
    const headings = uniqueHeadings;
  
    // Get meta description
    const metaDescription = trimText(document.querySelector('meta[name="description"]')?.content);
    
    // Function to get content from semantic elements or ARIA role equivalents
    const getSemanticContent = (selector, role) => {
      let element = document.querySelector(selector) || document.querySelector(`[role="${role}"]`);
      if (!element || element.offsetParent === null) { // Also check for visibility here
          // If the primary element is hidden, try the role-based one
          element = document.querySelector(`[role="${role}"]`);
          if (!element || element.offsetParent === null) return '';
      }
      
      const links = Array.from(element.querySelectorAll('a'))
        .map(a => trimText(a.textContent))
        .filter(text => text.length > 0 && text.length < 50)
        .filter((text, i, arr) => arr.indexOf(text) === i) // Deduplicate links within the landmark
        .slice(0, 5);
        
      if (links.length > 0) {
        return links.join(' • ');
      }
      
      return trimText(element.textContent).substring(0, 200) + (element.textContent.length > 200 ? '...' : '');
    };
    
    // Get current URL
    const currentUrl = window.location.href;
    
    // Get keywords
    const keywords = document.querySelector('meta[name="keywords"]')?.content || '';
    
    // Get Open Graph data
    const ogTitle = document.querySelector('meta[property="og:title"]')?.content || '';
    const ogDescription = trimText(document.querySelector('meta[property="og:description"]')?.content);
    const ogType = document.querySelector('meta[property="og:type"]')?.content || '';
    
    // Try to detect page type
    const detectPageType = () => {
      if (document.querySelector('article, [role="article"]')) return 'Article';
      if (ogType.includes('article')) return 'Article';
      if (ogType.includes('video')) return 'Video';
      return 'General';
    };
    
    // Get landmark regions
    const landmarks = {
      header: getSemanticContent('header', 'banner'),
      nav: getSemanticContent('nav', 'navigation'),
      main: getSemanticContent('main', 'main'),
      aside: getSemanticContent('aside', 'complementary'),
      footer: getSemanticContent('footer', 'contentinfo')
    };
    
    // --- MARKDOWN OUTPUT GENERATION ---
    let markdownOutput = `# ${pageTitle}\n\n`;
    markdownOutput += `**URL:** ${currentUrl}\n`;
    markdownOutput += `**Page Type:** ${detectPageType()}\n\n`;
    
    if (metaDescription) {
      markdownOutput += `**Description:** ${metaDescription}\n\n`;
    }
    
    if (keywords) {
      markdownOutput += `**Keywords:** ${keywords}\n\n`;
    }
    
    if (ogTitle || ogDescription || ogType) {
      markdownOutput += `## Open Graph Data\n\n`;
      if (ogTitle && ogTitle !== pageTitle) markdownOutput += `**OG Title:** ${ogTitle}\n`;
      if (ogDescription && ogDescription !== metaDescription) markdownOutput += `**OG Description:** ${ogDescription}\n`;
      if (ogType) markdownOutput += `**OG Type:** ${ogType}\n`;
      markdownOutput += `\n`;
    }
    
    if (headings.length > 0) {
      markdownOutput += `## Page Structure\n\n`;
      headings.forEach((heading) => {
        const indent = '  '.repeat(heading.level - 1);
        markdownOutput += `${indent}- ${heading.text}\n`;
      });
    }
    
    const hasLandmarks = Object.values(landmarks).some(content => content && content.length > 0);
    if (hasLandmarks) {
      markdownOutput += `\n## Page Landmarks\n\n`;
      for (const [name, content] of Object.entries(landmarks)) {
        if (content) {
          markdownOutput += `**${name.charAt(0).toUpperCase() + name.slice(1)}:** ${content}\n\n`;
        }
      }
    }
    
    console.log(markdownOutput);
    return markdownOutput;
  }
  