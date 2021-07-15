# odev-hafta-1

Github ve Linkedin profillerinizine ulaşabileceğimiz bir web sayfası geliştirmeniz bekleniyor.

## Örnek sayfa yapısı
Butona tıklamadan önce
![alt text](/ss1.png)
Butona tıklandıkdan sonra
![alt text](/ss2.png)


## Kurallar
1- "a"elementinin href attr'si javascript içerisinde oluşturulmalıdır.

2- href attr'lerinin value'ları yine javascript içerisinde set edilmelidir.

3- Getir butonu bir onclick fonksiyonu tetiklemeli ve bu fonksiyon "h1" tag'inin içerisine isminizi, "h2" tag'inin içerisine de yaşınızı yazmalı. Yani butona tıklandığında DOM'da isminiz ve görülebilir olmalı.

4- Style konusunda tamamen özgürsünüz, görünüm size kalmış :)

5- Dosya isimleri aşağıda belirtildiği gibi olabilir.

    index.html
    index.js

## Örnek HTML kodu (Şablon olarak kullanılabilir)
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Odev Hafta 1 - Kağan Buzcu</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
        </style>
    </head>
    <body>
        <div>
            <h1 id="nameSurname"></h1>
            <h2 id="age"></h2>
            <button>İsim ve Yaşımı Getir</button>
            <div>
                <a id="linkedinUrl" target="_blank">Linkedin Profili</a>
                <a id="githubUrl" target="_blank">Github Profili</a>
            </div>
        </div>
        <script src="index.js"></script>
    </body>
</html>
```