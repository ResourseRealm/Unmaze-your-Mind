function performSearch() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const features = document.querySelectorAll('.feature-box');
  
    features.forEach(feature => {
      const featureText = feature.textContent.toLowerCase();
      if (featureText.includes(searchQuery)) {
        feature.style.display = 'block';
      } else {
        feature.style.display = 'none';
      }
    });
  }
  