const ClassesLight_to_Dark = { // convert light to dark
    'bg-light': 'bg-dark',
    'text-dark': 'text-light',
    'navbar-light': 'navbar-dark',
    'addHover-Navbar-light': 'addHover-Navbar-dark',
    'addHover-light':'addHover-dark',
    'text-primary':'text-white',
    'divider-dark':'divider-light',
    'border-dark':'border-lgiht',
};

const ClassesDark_to_Light = { // convert dark to light
    'bg-dark': 'bg-light',
    'text-light': 'text-dark',
    'navbar-dark': 'navbar-light',
    'addHover-Navbar-dark': 'addHover-Navbar-light',
    'addHover-dark':'addHover-light',
    'text-white':'text-primary',
    'divider-light':'divider-dark',
    'border-light':'border-dark',
};

function toggleClasses(mode) {
    const classes = mode === 'dark' ? ClassesDark_to_Light : ClassesLight_to_Dark;
    Object.entries(classes).forEach(([index, value]) => {
        const objects = document.querySelectorAll(`.${index}`);
        objects.forEach((element) => {
            element.classList.remove(index);
            element.classList.add(value);
        });
    });
}

function handleDarkMode() {
    const darkMode = DarkMode; // Replace with your logic to determine dark mode
    toggleClasses(darkMode ? 'light' : 'dark');
}

handleDarkMode()