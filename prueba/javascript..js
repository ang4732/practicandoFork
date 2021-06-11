// const $main = document.querySelector('.main');
// console.log($main.parentElement) //Vemos el padre del elemento.
// console.log($main.children)//Verifica los elementos Hijo.
// console.log($main.nextElementSibling);// Verificamos el hermano del elemento.
// console.log($main.childNodes)


const $figure = document.createElement('figure'),
  $img = document.createElement('img'),
  $figcaption = document.createElement('figcaption'),
  $figcaptionText = document.createTextNode('Animal'),
  $card = document.createElement('div'),
  $cards = document.querySelector('.cards');

// $img.src = "https://placeimg.com/200/200/animals"
$img.setAttribute('src', 'https://placeimg.com/200/200/animals');
$figcaption.appendChild($figcaptionText);
$card.classList.add('card')
$figure.classList.add('card__figure')
$figure.appendChild($img)
$figure.appendChild($figcaption)
$card.appendChild($figure)

$cards.appendChild($card)



const paises = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
  "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic",
  "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
  "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
  "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
  "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome",
  "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
  "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
  "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];


const $ul = document.createElement('ul');
$ul.classList.add('correr')
const $fragmento = document.createDocumentFragment();

paises.forEach((el) => {
  const $li = document.createElement('li');
  // $li.classList.add("lista") 
  $li.textContent = el;
  $fragmento.appendChild($li);
})

document.write('Paise de todo el mundo')
$ul.appendChild($fragmento)
document.body.appendChild($ul)


const angel = [
  {
    img: "https://placeimg.com/200/200/nature",
    title: 'Natural'
  },
  {
    img: "https://placeimg.com/200/200/people",
    title: 'Gente'
  },
  {
    img: "https://placeimg.com/200/200/animals",
    title: 'Animal'
  },
  {
    img: "https://placeimg.com/200/200/tech",
    title: 'Arquitectura'
  },
  {
    img: "https://placeimg.com/200/200/people",
    title: 'Gente'
  },
]

const $template = document.getElementById("card_template").content;
const $fragmento2 = document.createDocumentFragment();
angel.forEach((el) => {
  $template.querySelector('img').setAttribute('src', el.img)
  $template.querySelector('img').setAttribute('alt', el.title)
  $template.querySelector('figcaption').textContent = el.title;

  let clone = document.importNode($template, true)
  $fragmento2.appendChild(clone);

})

$cards.appendChild($fragmento2);