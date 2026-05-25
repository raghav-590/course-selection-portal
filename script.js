function selectCourse(courseId, courseName, instructor) {
    const selectionContainer = document.querySelector('.selection-display-box');
    const displayStatusDiv = document.getElementById('selection-status');
    const allCourseCards = document.querySelectorAll('.course-card');
    const targetCard = document.getElementById(`card-${courseId}`);

    allCourseCards.forEach(card => {
        card.classList.remove('highlighted');
        const btn = card.querySelector('.select-btn');
        if (btn) btn.textContent = 'Select Course';
    });

    if (targetCard) {
        targetCard.classList.add('highlighted');
        const activeBtn = targetCard.querySelector('.select-btn');
        if (activeBtn) activeBtn.textContent = 'Selected';
    }

    selectionContainer.classList.add('active');

    displayStatusDiv.innerHTML = `
        <div class="selected-info-card">
            <h3>🎉 Enrolled successfully in ${courseName}</h3>
            <p><strong>Course Code:</strong> ${courseId} &nbsp;|&nbsp; <strong>Instructor:</strong> ${instructor}</p>
        </div>
    `;

    selectionContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}