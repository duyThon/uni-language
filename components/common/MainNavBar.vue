<template>
    <nav>
        <div class="main-navbar">
            <div class="logo">
                <img class="homepage-logo-img" src="@/assets/logo/logo-uni-ngang.png" alt="UNI Language House">
            </div>
            <div class="main-navbar-list">
                <ul style="margin: 0">
                    <li class="main-navbar-list-item">About</li>
                    <li class="main-navbar-list-item">Course</li>
                    <li class="main-navbar-list-item">Event</li>
                    <li class="main-navbar-list-item">News</li>
                    <li class="main-navbar-list-item">Excellent students</li>
                    <li class="main-navbar-list-item">Test&Exams</li>
                </ul>
                <div class="switch-language">
                    <ul class="nation-logo">
                        <li class="nation-logo-item">
                            <img src="@/assets/icons/nation-logo/vietnam-flag-rounded-icon.webp" alt="Vietnamese">
                        </li>
                        <li class="nation-logo-item">
                            <img src="@/assets/icons/nation-logo/uk-flag-rounded-icon.webp" alt="English">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            <div class="main-navbar-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-navbar {
    font-weight: 600;
    padding: 1.25em;
    display: flex;
    justify-content: space-between;
}

.homepage-logo-img {
    height: 5em;
}

.main-navbar-list {
    display: flex;
}
    
.main-navbar-list ul {
    display: flex;
    list-style: none;
}

.main-navbar-list-item {
    padding: 0.625em 2.25em 0.5em;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.main-navbar-list-item:hover {
    border-bottom: 0.375em solid var(--primary-color);
}

.nation-logo-item img{
    width: 1.875em;
    height: 1.875em;
    cursor: pointer;
    margin: 0.625em;
}

.nation-logo-item img:hover {

}

/* mobile nav */
.main-navbar-btn {
    display: none;
}

/* tablet & mobile */
@media (max-width: 63.9375em) {
nav {
    display: flex;
}

.main-navbar {
    width: 100%;
    justify-content: center;
}

.main-navbar-btn {
    display: flex;
    padding: 40px 40px 40px 0
}

.main-navbar-btn svg{
    width: 1.75em;
}

.main-navbar-list ul {
    display: none;
}
    
}

/* tablet */
@media (min-width: 46.25em) and (max-width: 63.9375em){
    
}

</style>