// Detail page script
document.addEventListener('DOMContentLoaded', function() {
    // Get the selected field from sessionStorage
    const selectedField = sessionStorage.getItem('selectedField') || 'healthcare';
    
    // Update the page title and content
    updatePageContent(selectedField);
    
    // Load videos based on the field
    loadVideos(selectedField);
    
    // Add fade-in animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Add scroll animations
    observeVideoSections();
});

function updatePageContent(field) {
    const fieldNames = {
        healthcare: 'Healthcare',
        business: 'Business',
        education: 'Education',
        sport: 'Sports',
        finance: 'Finance',
        transportation: 'Transportation',
        entertainment: 'Entertainment'
    };
    
    const fieldTitle = document.getElementById('fieldTitle');
    if (fieldTitle) {
        fieldTitle.textContent = fieldNames[field] || 'AI Use Case';
    }
}

function loadVideos(field) {
    // Video URLs - These should be replaced with actual video URLs
    // For now, using placeholder structure that can be replaced with YouTube embeds or direct video URLs
    
    const videoData = {
        healthcare: {
            past: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            now: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            future: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE'
        },
        business: {
            past: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            now: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            future: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE'
        },
        education: {
            past: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            now: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            future: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE'
        },
        sport: {
            past: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            now: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            future: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE'
        },
        finance: {
            past: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            now: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            future: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE'
        },
        transportation: {
            past: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            now: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            future: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE'
        },
        entertainment: {
            past: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            now: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
            future: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE'
        }
    };
    
    const videos = videoData[field] || videoData.healthcare;
    
    // Function to replace placeholder with video
    function replacePlaceholder(videoId, placeholderId) {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) return;
        
        const videoUrl = videos[videoId];
        
        // If video URL contains placeholder, show placeholder div
        if (videoUrl && !videoUrl.includes('YOUR_VIDEO_ID_HERE')) {
            const wrapper = placeholder.parentElement;
            wrapper.innerHTML = `<iframe src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        } else {
            // Add click handler to placeholder to load video
            placeholder.addEventListener('click', function() {
                const videoUrl = prompt('Enter video URL (YouTube embed URL or direct video URL):');
                if (videoUrl) {
                    const wrapper = placeholder.parentElement;
                    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
                        // Convert YouTube URL to embed format
                        const embedUrl = convertToEmbedUrl(videoUrl);
                        wrapper.innerHTML = `<iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                    } else {
                        wrapper.innerHTML = `<video controls style="width: 100%; height: 100%;"><source src="${videoUrl}" type="video/mp4"></video>`;
                    }
                }
            });
        }
    }
    
    replacePlaceholder('past', 'pastVideo');
    replacePlaceholder('now', 'nowVideo');
    replacePlaceholder('future', 'futureVideo');
}

function convertToEmbedUrl(url) {
    // Convert YouTube URL to embed format
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }
    
    return url;
}

function observeVideoSections() {
    const sections = document.querySelectorAll('.video-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s, transform 0.8s';
        observer.observe(section);
    });
}

function goBack() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

