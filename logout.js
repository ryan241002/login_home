function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'frontpage.html';
} 