// Define checkAuth globally
window.checkAuth = function() {
    return fetch('check_session.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.status !== 'success') {
                window.location.href = 'signin.html';
                return false;
            }
            const welcomeMessage = document.getElementById('welcomeMessage');
            if (welcomeMessage && data.firstName) {
                welcomeMessage.textContent = `Hi, ${data.firstName}!`;
                console.log('Updated welcome message with:', data.firstName);
            }
            return true;
        })
        .catch(error => {
            console.error('Auth check failed:', error);
            window.location.href = 'signin.html';
            return false;
        });
};

// Initial auth check
document.addEventListener('DOMContentLoaded', function() {
    window.checkAuth();
}); 