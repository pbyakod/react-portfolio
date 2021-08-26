import React from "react";
import "../styling/styles.css";

function Navigation ({ currentPage, handlePageChange}) {
    return (
        <nav class="navbar navbar-expand-lg navbar-custom">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#home"  onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about"  onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}><i class="fas fa-id-card"></i> About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#works"  onClick={() => handlePageChange('Works')} className={currentPage === 'Works' ? 'nav-link active' : 'nav-link'}><i class="fas fa-folder-open"></i> Works</a>
                        </li>
                    </ul>
                    <li class="d-flex nav-item">
                        <a class="nav-link" href="#contact"  onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}><i class="fas fa-address-book"></i> Contact</a>
                    </li>
                    <li class="d-flex nav-item">
                        <a class="nav-link" href="#resume"  onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}><i class="fas fa-file-contract"></i> Resume</a>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;