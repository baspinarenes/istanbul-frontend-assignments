// HTML'de müdahale edeceğim konteynır.
const appDOM = document.getElementById('App');

// Bilgilerin ve linklerin olduğu konteynır.
const infoDivDOM = document.createElement('div');
infoDivDOM.className = "info";
appDOM.appendChild(infoDivDOM);

// İsim ve soyismin yazdığı başlık.
const infoTextDOM = document.createElement('h3');
infoTextDOM.className = "info-text";
infoDivDOM.appendChild(infoTextDOM);

// Profil fotoğrafı.
const imgDOM = document.createElement('img');
imgDOM.src = 'assets/profile.jpg'
imgDOM.className = "info-img";
infoDivDOM.appendChild(imgDOM);

// Döngü ile elementleri oluşturmak için sosyal medya URL'si ve ikonu için Font Awesome kodu.
const socialAccounts = [
    ["https://github.com/baspinarenes", "fa-github"], 
    ["https://www.linkedin.com/in/enesbaspinar/", "fa-linkedin-in"]
];

socialAccounts.forEach(([url, icon]) =>  {
    let accountDOM = document.createElement('a');
    accountDOM.setAttribute("href", url);
    accountDOM.className = "social-media";
    accountDOM.innerHTML = `<i class="fab ${icon}"></i>`;
    infoDivDOM.appendChild(accountDOM);
});

// Başlangıçta sadece kendisi gözüken ve bilgilerin getirilmesini sağlayacak element.
const infoBtnDOM = document.createElement('button');
infoBtnDOM.className = "info-btn";
infoBtnDOM.innerText = "Bilgileri Getir";
infoBtnDOM.addEventListener('click', (e) => {
    // Resim görünür hale getiriliyor.
    imgDOM.classList.add('display-on');
    // querySelector ile dönen NodeList Array tipine dönüştürülüyor.
    [...document.querySelectorAll('a')].map(item => item.classList.add('display-on'))
    // Butonun işlevi bittiği için görünmez hale getiriliyor.
    infoBtnDOM.classList.add('display-off');
    // Bilgi kısmına isim ekleniyor ve görünür hale getiriliyor.

    const firstName = "Enes";
    const lastName = "Başpınar";
    const age = 22;
    infoTextDOM.innerHTML = `${firstName} ${lastName} (${age})`
    infoTextDOM.classList.add('display-on');
})
infoDivDOM.appendChild(infoBtnDOM);
