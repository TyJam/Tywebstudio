/* FAQs section +++++++++++++++++++++*/
document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll('.right li');
  
    listItems.forEach(item => {
      item.addEventListener('click', () => {
        const additionalInfoDiv = item.querySelector('.additional-info');
  
        document.querySelectorAll('.additional-info').forEach(div => {
          if (div !== additionalInfoDiv) {
            div.classList.remove('visible');
          }
        });
  
        additionalInfoDiv.classList.toggle('visible');
      });
    });
});
  