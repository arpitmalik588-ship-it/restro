// ==================== DOM Elements ====================
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const reservationForm = document.getElementById('reservationForm');
const contactForm = document.getElementById('contactForm');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');
const aiModal = document.getElementById('aiModal');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const navLinks = document.querySelectorAll('.nav-link');

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initAOS();
    addEventListeners();
    setMinDate();
});

// ==================== Theme Toggle ====================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateThemeIcon('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        updateThemeIcon('light-mode');
    }
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark-mode') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ==================== AOS Initialization ====================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
}

// ==================== Navigation ====================
function addEventListeners() {
    menuIcon.addEventListener('click', toggleMenu);
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Menu Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Form Submissions
    if (reservationForm) {
        reservationForm.addEventListener('submit', handleReservationSubmit);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // AI Chat
    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function toggleMenu() {
    menuIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    menuIcon.classList.remove('active');
    navMenu.classList.remove('active');
}

// ==================== Menu Filtering ====================
function handleFilter(e) {
    const filterValue = e.target.getAttribute('data-filter');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter menu items
    menuItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
            }, 10);
        } else {
            item.style.display = 'none';
            item.style.opacity = '0';
        }
    });
}

// ==================== Scroll Functions ====================
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToReservation() {
    const reservationSection = document.getElementById('reservation');
    reservationSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToOrder() {
    const orderSection = document.getElementById('order');
    orderSection.scrollIntoView({ behavior: 'smooth' });
}

// ==================== Form Submissions ====================
function handleReservationSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        guests: document.getElementById('guests').value,
        requests: document.getElementById('requests').value
    };
    
    // Validate form
    if (!formData.name || !formData.mobile || !formData.date || !formData.time || !formData.guests) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // WhatsApp message
    const message = `Hello! I would like to reserve a table:\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nSpecial Requests: ${formData.requests || 'None'}`;
    
    const whatsappURL = `https://wa.me/917417879191?text=${encodeURIComponent(message)}`;
    
    // Show confirmation and redirect
    showNotification('Redirecting to WhatsApp...', 'success');
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
        reservationForm.reset();
    }, 1500);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        phone: document.getElementById('contact-phone').value,
        message: document.getElementById('contact-message').value
    };
    
    if (!formData.name || !formData.email || !formData.message) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // WhatsApp message
    const message = `Hello Grand Rama Bistro!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    
    const whatsappURL = `https://wa.me/917417879191?text=${encodeURIComponent(message)}`;
    
    showNotification('Sending via WhatsApp...', 'success');
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
        contactForm.reset();
    }, 1500);
}

// ==================== Date Picker ====================
function setMinDate() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
}

// ==================== AI Assistant ====================
function openAIAssistant(type) {
    aiModal.style.display = 'block';
    chatMessages.innerHTML = '';
    
    let greeting = '';
    switch(type) {
        case 'recommendation':
            greeting = 'Welcome to Food Recommendation Assistant! Tell me about your food preferences, and I\'ll suggest the perfect dishes for you. What type of cuisine do you prefer?';
            break;
        case 'chatbot':
            greeting = 'Hello! I\'m Grand Rama Bistro\'s AI Assistant. How can I help you today? You can ask about our menu, reservations, delivery, or anything else!';
            break;
        case 'reservation':
            greeting = 'Welcome to Smart Reservation Assistant! I can help you book the perfect table. How many guests will be dining with us?';
            break;
        default:
            greeting = 'Hello! How can I assist you?';
    }
    
    addMessageToChat(greeting, 'ai');
    userInput.focus();
}

function closeAIAssistant() {
    aiModal.style.display = 'none';
}

function sendMessage() {
    const message = userInput.value.trim();
    
    if (!message) return;
    
    addMessageToChat(message, 'user');
    userInput.value = '';
    
    // AI Response (simulated)
    setTimeout(() => {
        const response = generateAIResponse(message);
        addMessageToChat(response, 'ai');
    }, 500);
    
    userInput.focus();
}

function addMessageToChat(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'ai-message';
    messageDiv.innerHTML = `<p>${escapeHtml(message)}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Sample AI responses
    const responses = {
        menu: [
            'We have a diverse menu including Indian Cuisine, Chinese Cuisine, Fast Food, Cafe Specials, and more. Would you like recommendations?',
            'Our menu features fresh ingredients prepared by expert chefs. Are you interested in any specific cuisine?',
            'What type of food are you in the mood for? I can suggest something special!'
        ],
        reservation: [
            'I\'d be happy to help with your reservation! How many guests will be joining us?',
            'Let me help you book a table. What date and time work best for you?',
            'I can assist with your booking. When would you like to dine with us?'
        ],
        delivery: [
            'Yes, we offer delivery! Order through WhatsApp at +91 7417879191 or call 07417879191. Delivery typically takes 30 minutes.',
            'We deliver within the city. You can place your order via WhatsApp or phone call.',
            'Delivery is available! Would you like to place an order now?'
        ],
        hours: [
            'Our opening hours are:\nMon-Thu: 11:00 AM - 10:00 PM\nFri-Sat: 11:00 AM - 11:00 PM\nSun: 10:00 AM - 10:00 PM',
            'We\'re open daily! Check our hours above. Are you planning a visit soon?',
            'Feel free to visit us during our operating hours!'
        ],
        contact: [
            'You can reach us at 07417879191 or WhatsApp: +91 7417879191',
            'Contact us at 07417879191. We\'re happy to assist!',
            'Call us at 07417879191 or message on WhatsApp for quick responses.'
        ],
        price: [
            'Our dishes range from ₹50 to ₹350. We have options for every budget!',
            'Prices vary based on the dish. We offer options for all budget ranges.',
            'Our menu has affordable to premium options. What interests you?'
        ]
    };
    
    // Determine category and respond
    for (const [key, responseList] of Object.entries(responses)) {
        if (message.includes(key)) {
            return responseList[Math.floor(Math.random() * responseList.length)];
        }
    }
    
    // Default responses
    const defaults = [
        'That\'s a great question! Is there anything specific I can help you with regarding our restaurant?',
        'I\'m here to help! Feel free to ask about our menu, reservations, or delivery.',
        'Thank you for your interest! What would you like to know more about?',
        'I\'d love to help! Ask me about our food, reservations, or visit us soon!'
    ];
    
    return defaults[Math.floor(Math.random() * defaults.length)];
}

// ==================== Notifications ====================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        border-radius: 5px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== Utility Functions ====================
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ==================== Modal Close ====================
window.addEventListener('click', (e) => {
    if (e.target === aiModal) {
        closeAIAssistant();
    }
});

// ==================== Smooth Scroll to Sections ====================
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ==================== Add to Cart Functionality ====================
document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const menuItem = btn.closest('.menu-item');
        const itemName = menuItem.querySelector('h3').textContent;
        const itemPrice = menuItem.querySelector('.price').textContent;
        
        const message = `Hello! I'd like to order:\n\nItem: ${itemName}\nPrice: ${itemPrice}`;
        const whatsappURL = `https://wa.me/917417879191?text=${encodeURIComponent(message)}`;
        
        showNotification(`${itemName} added to order!`, 'success');
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
        }, 500);
    });
});

// ==================== Animation Styles ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== Google Maps Placeholder ====================
function initMap() {
    // For production, replace with actual Google Maps API key
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
        mapDiv.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, #d4af37, #3d2817); color: white; font-size: 1.1rem; text-align: center;">
                <div>
                    <h3>📍 Grand Rama Bistro Location</h3>
                    <p>Address will be displayed here</p>
                    <p>For directions, contact us at 07417879191</p>
                </div>
            </div>
        `;
    }
}

// Initialize map on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}

// ==================== Phone Link Handler ====================
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            e.preventDefault();
            showNotification('Mobile number: 07417879191', 'info');
        }
    });
});
