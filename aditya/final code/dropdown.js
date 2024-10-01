document.getElementById('homeButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This ensures smooth scrolling
    });
});

document.getElementById("nearestHospital").addEventListener("click", function() {
    window.location.href = "map.html"; // Navigate to map.html in the same tab
});


document.getElementById("searchButton").addEventListener("click", function() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    
    // Redirect based on search query
    if (searchQuery === "flood") {
        window.location.href = "index2.html";  // Assuming you have a flood.html page
    } else if (searchQuery === "earthquake") {
        window.location.href = "index3.html";
    } else if (searchQuery === "lightning") {
        window.location.href = "index5.html";
    } else if (searchQuery === "cyclone") {
        window.location.href = "index4.html";}
        else if (searchQuery === "landslide") {
            window.location.href = "index6.html";}
        else if (searchQuery === "drought") {
                window.location.href = "index7.html";
    } else {
        alert("No matching disaster found.");
    }
});


const disastersSection = document.querySelector('.text.disasters');
const menu = document.getElementById('disasterMenu');

// Open dropdown when hovering over the Disasters section
disastersSection.addEventListener('mouseenter', function() {
    menu.style.display = 'block';
});

// Close dropdown when leaving both Disasters section and the menu
disastersSection.addEventListener('mouseleave', function() {
    // Add a small delay to prevent flickering when moving the mouse to the menu
    setTimeout(function() {
        if (!menu.matches(':hover')) {
            menu.style.display = 'none';
        }
    }, 100);
});

// Keep the dropdown visible when hovering over the menu
menu.addEventListener('mouseenter', function() {
    menu.style.display = 'block';
});

// Close dropdown when leaving the menu
menu.addEventListener('mouseleave', function() {
    menu.style.display = 'none';
});


// Scroll to flood section and simulate hover effect
document.getElementById('rainfallItem').addEventListener('click', function() {
    const icon1 = document.getElementById('icon1');

    // Scroll to the element and center it in the viewport
    icon1.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
    });

    // Simulate hover by adding the class
    icon1.classList.add('icon-hover');

    // Optional: Remove the hover class after a delay to mimic real hover behavior
    setTimeout(function() {
        icon1.classList.remove('icon-hover');
    }, 5000); // Hover effect will last for 5 seconds
});

// Scroll to Earthquake section and simulate hover effect
document.getElementById('earthquakeItem').addEventListener('click', function() {
    const icon2 = document.getElementById('icon2');

    // Scroll to the element and center it in the viewport
    icon2.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
    });

    // Simulate hover by adding the class
    icon2.classList.add('icon-hover');

    // Optional: Remove the hover class after a delay to mimic real hover behavior
    setTimeout(function() {
        icon2.classList.remove('icon-hover');
    }, 5000); // Hover effect will last for 5 seconds
});

// Scroll to cyclone section and simulate hover effect
document.getElementById('cycloneItem').addEventListener('click', function() {
    const icon3 = document.getElementById('icon3');

    // Scroll to the element and center it in the viewport
    icon3.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
    });

    // Simulate hover by adding the class
    icon3.classList.add('icon-hover');

    // Optional: Remove the hover class after a delay to mimic real hover behavior
    setTimeout(function() {
        icon3.classList.remove('icon-hover');
    }, 5000); // Hover effect will last for 5 seconds
});

// Scroll to lightning section and simulate hover effect
document.getElementById('lightningItem').addEventListener('click', function() {
    const icon4 = document.getElementById('icon4');

    // Scroll to the element and center it in the viewport
    icon4.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
    });

    // Simulate hover by adding the class
    icon4.classList.add('icon-hover');

    // Optional: Remove the hover class after a delay to mimic real hover behavior
    setTimeout(function() {
        icon4.classList.remove('icon-hover');
    }, 5000); // Hover effect will last for 5 seconds
});

// Scroll to landslide section and simulate hover effect
document.getElementById('landslideItem').addEventListener('click', function() {
    const icon5 = document.getElementById('icon5');

    // Scroll to the element and center it in the viewport
    icon5.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
    });

    // Simulate hover by adding the class
    icon5.classList.add('icon-hover');

    // Optional: Remove the hover class after a delay to mimic real hover behavior
    setTimeout(function() {
        icon5.classList.remove('icon-hover');
    }, 5000); // Hover effect will last for 5 seconds
});

// Scroll to drought section and simulate hover effect
document.getElementById('droughtItem').addEventListener('click', function() {
    const icon6 = document.getElementById('icon6');

    // Scroll to the element and center it in the viewport
    icon6.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
    });

    // Simulate hover by adding the class
    icon6.classList.add('icon-hover');

    // Optional: Remove the hover class after a delay to mimic real hover behavior
    setTimeout(function() {
        icon6.classList.remove('icon-hover');
    }, 5000); // Hover effect will last for 5 seconds
});


function calculateResources() {
    let disasterType = document.getElementById('disasterType').value;
    let familyMembers = document.getElementById('familyMembers').value;
    let resultsDiv = document.getElementById('results');
    if (!disasterType || !familyMembers) {
        resultsDiv.innerHTML = "Please select a disaster type and enter the number of family members.";
        return;
    }

    familyMembers = parseInt(familyMembers);
    let water = familyMembers * 3 * 7; // 3 liters per person per day for 7 days
    let food = familyMembers * 2 * 7;  // 2 kg food per person for 7 days
    let medicalKit = familyMembers > 4 ? "Advanced First Aid Kit" : "Basic First Aid Kit";
    let shelterSupplies = familyMembers * 1; // 1 blanket or sleeping bag per person
    let sanitation = familyMembers * 1; // 1 hygiene pack per person

    resultsDiv.innerHTML = `
        <ul>
            <li><strong>Water Supply:</strong> ${water} liters</li>
            <li><strong>Food Supply:</strong> ${food} kg of  food</li>
            <li><strong>Medical Kit:</strong> ${medicalKit}</li>
            <li><strong>Shelter Supplies:</strong> ${shelterSupplies} blankets/tents</li>
            <li><strong>Sanitation:</strong> ${sanitation} hygiene kits</li>
        </ul>
    `;
}



