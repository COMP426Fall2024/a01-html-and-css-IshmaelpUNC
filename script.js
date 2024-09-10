const familySelect = document.getElementById('family-select');
const preambleTitle = document.getElementById('preamble-title');
const preambleText = document.getElementById('preamble-text');
const preambleImage = document.getElementById('preamble-image');

const odinDefault = {
  title: "Odin",
  text: "Odin, the All-Father, is the chief god in Norse mythology and the ruler of Asgard. He is known for his wisdom, sacrifice, and complex character.",
  image: "pictures/odin-pic-1.jpg"
};

const familyInfo = {
  Frigg: {
    text: "Frigg is the wife of Odin and queen of Asgard. She is associated with foresight and wisdom.",
    image: "pictures/frigg.jpg"
  },
  Jord: {
    text: "Jord is the personification of the Earth and the mother of Thor.",
    image: "pictures/jord.jpg"
  },
  Baldr: {
    text: "Baldr is the god of light and purity, beloved by all and associated with the end of the world.",
    image: "pictures/baldr.jpg"
  },
  Hodr: {
    text: "Hodr is the god associated with darkness and winter. He is known for his role in Baldr's death.",
    image: "pictures/hodr.jpg"
  },
  Thor: {
    text: "Thor is the god of thunder, known for his immense strength and protector of Asgard.",
    image: "pictures/thor.jpg"
  },
  Bragi: {
    text: "Bragi is the god of poetry and music, known for his wisdom and eloquence.",
    image: "pictures/bragi.jpg"
  }
};

function showDefault() {
  preambleTitle.textContent = odinDefault.title;
  preambleText.textContent = odinDefault.text;
  preambleImage.src = odinDefault.image;
  preambleImage.alt = `Image of ${odinDefault.title}`;
}

showDefault();

familySelect.addEventListener('change', function () {
  const selectedValue = this.value;
  if (selectedValue === "Odin" || !familyInfo[selectedValue]) {
    showDefault();
  } else {
    const selectedInfo = familyInfo[selectedValue];
    preambleTitle.textContent = selectedValue;
    preambleText.textContent = selectedInfo.text;
    preambleImage.src = selectedInfo.image;
    preambleImage.alt = `Image of ${selectedValue}`;
  }
});

document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        // Toggle the active class on the button
        button.classList.toggle('active');

        // Check if the button is active
        if (button.classList.contains('active')) {
            // Set maxHeight to content's scrollHeight (auto-expanding content size)
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            // Collapse the content
            accordionContent.style.maxHeight = 0;
        }
    });
});