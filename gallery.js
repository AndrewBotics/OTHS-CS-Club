// Event data
const events = [
    {
        id: "1",
        title: "First Meeting",
        description: "CS Club 2025-2026 first meeting! We introduced the club to new members and had pizza.",
        date: "August 28, 2025",
        location: "Mr. Johnson's Room",
        folderName: "FirstMeeting", // Your event folder name
        coverImage: "FM7.jpg", // Cover image filename
        images: [
            "FM1.avif",
            "FM2.avif",
            "FM3.avif",
            "FM4.avif",
            "FM5.avif",
            "FM6.avif",
            "FM7.avif",
        ]
    },
    {
        id: "2",
        title: "Intro to Java",
        description: "We teach members beginner Java programming!",
        date: "Every Monday",
        location: "Mrs. Bauguss's Room",
        folderName: "IntroJava", // Your event folder name
        coverImage: "ITJ2.avif", // Cover image filename
        images: [
            "ITJ.avif",
            "ITJ1.avif",
            "ITJ2.avif",
        ]
    },
    {
        id: "3",
        title: "Advanced Java",
        description: "We teach members advanced competitive programming!",
        date: "Every Monday",
        location: "Mr. Johnson's Room",
        folderName: "AdvancedJava", // Your event folder name
        coverImage: "AJ3.avif", // Cover image filename
        images: [
            "AJ1.avif",
            "AJ2.avif",
            "AJ3.avif",
            "AJ4.avif",
            "AJ5.avif",
            "AJ6.avif",
            "AJ7.avif",
            "AJ8.avif",
            "AJ9.avif",
            "AJ10.avif",
        ]
    },
    {
        id: "4",
        title: "Seven Lakes Competition",
        description: "Went to Seven Lakes High School for this year's kickoff programming competition! Congrats to everyone who competed and placed!",
        date: "October 18, 2025",
        location: "Seven Lakes High School",
        folderName: "SevenLakes", // Your event folder name
        coverImage: "SL1.avif", // Cover image filename
        images: [
            "SL1.avif",
            "SL2.avif",
            "SL3.avif",
            "SL4.avif",
            "SL5.avif",
            "SL6.avif",
            "SL7.avif",
            "SL8.avif",
            "SL9.avif",
            "SL10.avif",
            "SL11.avif",
            "SL12.avif",
            "SL13.avif",
            "SL14.avif",
            "SL15.avif",
            "SL16.avif",
            "NathanMedal.avif",
            "GuhanMedal.avif",
        ]
    },
    {
        id: "5",
        title: "Taylor Competition",
        description: "Went to Taylor High School for our team's second competition of the year! Congrats to our winning members!",
        date: "November 1, 2025",
        location: "Taylor High School",
        folderName: "Taylor", // Your event folder name
        coverImage: "Taylor1.avif", // Cover image filename
        images: [
            "Taylor1.avif",
            "Taylor2.avif",
            "Taylor3.avif",
            "Taylor4.avif",
            "Taylor5.avif",
            "Taylor6.avif",
            "Taylor7.avif",
            "Taylor8.avif",
            "Taylor9.avif",
            "Taylor10.avif",
            "Taylor11.avif",
            "Taylor12.avif",
            "Taylor13.avif",
            "Taylor14.avif",
        ]
    },
    {
        id: "6",
        title: "Clements Competition",
        description: "Went to Clements High School for our team's third competition of the year! Might be our best turnout so far!",
        date: "November 22, 2025",
        location: "Clements High School",
        folderName: "Clements", // Your event folder name
        coverImage: "Clements1.avif", // Cover image filename
        images: [
            "Clements1.avif",
            "Clements2.avif",
            "Clements3.avif",
            "Clements4.avif",
            "Clements5.avif",
            "Clements6.avif",
            "Clements7.avif",
            "Clements8.avif",
            "Clements9.avif",
            "Clements10.avif",
            "Clements11.avif",
            "Clements12.avif",
            "Clements13.avif",
            "Clements14.avif",
            "Clements15.avif",
            "Clements16.avif",
            "Clements17.avif",
            "Clements18.avif",
            "Clements19.avif",
            "Clements20.avif",
            "Clements21.avif",
            "Clements22.avif",
            "Clements23.avif",
            "Clements24.avif",
        ]
    },
];

let selectedEvents = new Set();
let currentModal = null;

// Modal state
let currentEventId = null;
let currentImageIndex = 0;

// Helper function to build image paths
function getImagePath(event, filename) {
    return `assets/Gallery/${event.folderName}/${filename}`;
}

// Initialize the page
function init() {
    renderEvents();
    createImageModal();
}

// Render events
function renderEvents() {
    const grid = document.getElementById('eventsGrid');
    
    grid.innerHTML = events.map(event => `
        <div class="event-card">
            <div class="event-header">
                <img 
                    src="${getImagePath(event, event.coverImage)}" 
                    alt="${event.title}"
                    class="event-cover"
                >
            </div>
            
            <div class="event-info">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                
                 <div class="event-details">
                    <div class="event-detail">
                        <i class="fa-solid fa-calendar-days"></i> ${event.date}
                    </div>
                    <div class="event-detail">
                        <i class="fa-solid fa-location-dot"></i> ${event.location}
                    </div>
                    
                </div>
                
                <button class="toggle-btn" onclick="toggleGallery('${event.id}')">
                    <span class="toggle-text">View Gallery</span>
                    <span class="toggle-icon">↓</span>
                </button>
            </div>
            
            <div class="gallery" id="gallery-${event.id}">
                <h4>Event Gallery</h4>
                <div class="gallery-content">
                    <div class="image-grid">
                        ${event.images.map((image, index) => `
                            <div class="image-card" onclick="openImageModal('${event.id}', ${index})">
                                <img 
                                    src="${getImagePath(event, image)}" 
                                    alt="Event gallery"
                                >
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Toggle gallery visibility
function toggleGallery(eventId) {
    const gallery = document.getElementById(`gallery-${eventId}`);
    const toggleBtn = gallery.previousElementSibling.querySelector('.toggle-btn');
    const toggleText = toggleBtn.querySelector('.toggle-text');
    const toggleIcon = toggleBtn.querySelector('.toggle-icon');
    
    if (selectedEvents.has(eventId)) {
        selectedEvents.delete(eventId);
        gallery.classList.remove('show');
        toggleText.textContent = 'View Gallery';
        toggleIcon.textContent = '↓';
    } else {
        selectedEvents.add(eventId);
        gallery.classList.add('show');
        toggleText.textContent = 'Hide Gallery';
        toggleIcon.textContent = '↑';
    }
}

// Create image modal
function createImageModal() {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.id = 'imageModal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeImageModal()">&times;</button>
            <button class="modal-nav modal-prev" onclick="previousImage()">‹</button>
            <img class="modal-image" id="modalImage" src="" alt="Gallery Image">
            <button class="modal-nav modal-next" onclick="nextImage()">›</button>
            <div class="image-counter" id="imageCounter">1 / 1</div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeImageModal();
        }
        if (modal.classList.contains('show')) {
            if (e.key === 'ArrowLeft') {
                previousImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        }
    });
}

// Open image in modal
function openImageModal(eventId, imageIndex) {
    currentEventId = eventId;
    currentImageIndex = imageIndex;
    
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const imageCounter = document.getElementById('imageCounter');
    const event = events.find(e => e.id === eventId);
    
    // Set image and counter
    modalImage.src = getImagePath(event, event.images[imageIndex]);
    imageCounter.textContent = `${imageIndex + 1} / ${event.images.length}`;
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close image modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore background scrolling
    currentEventId = null;
    currentImageIndex = 0;
}

// Navigate to previous image
function previousImage() {
    if (currentEventId === null) return;
    
    const event = events.find(e => e.id === currentEventId);
    currentImageIndex = (currentImageIndex - 1 + event.images.length) % event.images.length;
    
    const modalImage = document.getElementById('modalImage');
    const imageCounter = document.getElementById('imageCounter');
    
    modalImage.src = getImagePath(event, event.images[currentImageIndex]);
    imageCounter.textContent = `${currentImageIndex + 1} / ${event.images.length}`;
}

// Navigate to next image
function nextImage() {
    if (currentEventId === null) return;
    
    const event = events.find(e => e.id === currentEventId);
    currentImageIndex = (currentImageIndex + 1) % event.images.length;
    
    const modalImage = document.getElementById('modalImage');
    const imageCounter = document.getElementById('imageCounter');
    
    modalImage.src = getImagePath(event, event.images[currentImageIndex]);
    imageCounter.textContent = `${currentImageIndex + 1} / ${event.images.length}`;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);