import React from "react";

function Navigation ({ currentPage, handlePageChange}) {
    return (
        <nav class="navbar navbar-expand-lg navbar-custom">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#home"  onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about"  onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#works"  onClick={() => handlePageChange('Works')} className={currentPage === 'Works' ? 'nav-link active' : 'nav-link'}>Works</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact"  onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#resume"  onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;