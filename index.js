document.getElementById('input-button').addEventListener('click', function() {
    var question = document.getElementById('input-q').value;
    var answer = document.getElementById('input-a').value;

    if (question && answer) {
        var faqContainer = document.querySelector('.faq-container');
        var newFaqDiv = document.createElement('div');
        newFaqDiv.classList.add('faq');
        var faqTitle = document.createElement('h3');
        faqTitle.classList.add('faq-title');
        faqTitle.textContent = question;
        var faqText = document.createElement('p');
        faqText.classList.add('faq-text');
        faqText.textContent = answer;
        var faqToggleBtn = document.createElement('button');
        faqToggleBtn.classList.add('faq-toggle');
        faqToggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i><i class="fas fa-times"></i>';
        newFaqDiv.appendChild(faqTitle);
        newFaqDiv.appendChild(faqText);
        newFaqDiv.appendChild(faqToggleBtn);
        faqToggleBtn.addEventListener('click', function() {
            newFaqDiv.classList.toggle('active');
        });

        var crossIcon = faqToggleBtn.querySelector('.fa-times');
        crossIcon.addEventListener('click', function() {
            newFaqDiv.remove();
        });
        faqContainer.insertBefore(newFaqDiv, faqContainer.firstChild);
        document.getElementById('input-q').value = '';
        document.getElementById('input-a').value = '';
    }
});
const faqBtn = document.querySelectorAll('.faq-toggle');
faqBtn.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        toggle.parentNode.classList.toggle('active');
    });
});

