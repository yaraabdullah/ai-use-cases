// Main page script
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all use case boxes
    const useCaseBoxes = document.querySelectorAll('.use-case-box');
    
    useCaseBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const field = this.getAttribute('data-field');
            navigateToDetail(field);
        });
        
        // Add hover sound effect simulation (visual feedback)
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add floating animation to boxes
    animateBoxes();
    
    // Add cursor trail effect
    createCursorTrail();
});

function navigateToDetail(field) {
    // Store the selected field in sessionStorage
    sessionStorage.setItem('selectedField', field);
    
    // Add transition effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        window.location.href = 'detail.html';
    }, 500);
}

function animateBoxes() {
    const boxes = document.querySelectorAll('.use-case-box');
    
    boxes.forEach((box, index) => {
        // Add continuous floating animation
        box.style.animation = `floatBox ${3 + index * 0.5}s ease-in-out infinite`;
        box.style.animationDelay = `${index * 0.2}s`;
    });
}

// Add floating animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatBox {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

function createCursorTrail() {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        const dx = mouseX - trailX;
        const dy = mouseY - trailY;
        
        trailX += dx * 0.1;
        trailY += dy * 0.1;
        
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// Add cursor trail styles
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .cursor-trail {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, var(--primary-color), transparent);
        pointer-events: none;
        z-index: 9999;
        opacity: 0.6;
        box-shadow: 0 0 20px var(--primary-color);
        transform: translate(-50%, -50%);
    }
`;
document.head.appendChild(cursorStyle);

