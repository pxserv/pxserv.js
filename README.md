# PxServ

`PxServ`, verilerinizi basit ve etkili bir şekilde sunucunuza kaydetmenizi ve yönetmenizi sağlayan bir Node.js kütüphanesidir. Bu kütüphane ile verilerinizi API üzerinden kolayca saklayabilir, çekebilir, listeleyebilir ve silebilirsiniz.

## Kurulum

Kütüphaneyi NPM veya Yarn ile projenize ekleyebilirsiniz:

```bash
npm install pxserv
```

veya

```
yarn add pxserv
```

# Kullanım

`PxServ` kütüphanesini kullanmak oldukça basittir. İlk olarak bir yapılandırma nesnesi ile bir örnek oluşturmanız gerekir:

```ts
import PxServ from "pxserv";

// Yapılandırma ayarları
const config = {
  apiKey: "YOUR_API_KEY",
  baseURL: "https://api.pxserv.net", // İsteğe bağlı, varsayılan olarak bu URL kullanılır
};

// PxServ örneği oluşturma
const pxServ = new PxServ(config);

// IoT cihazından sıcaklık ve nem verilerini alıp sunucuya kaydetme
const temperature = "22.5°C";
const humidity = "45%";

await pxServ.setData("temperature", temperature);
await pxServ.setData("humidity", humidity);

// Sıcaklık ve nem verilerini sunucudan çekme
const currentTemperature = await pxServ.getData("temperature");
const currentHumidity = await pxServ.getData("humidity");

console.log(`Current Temperature: ${currentTemperature}`); // 'Current Temperature: 22.5°C'
console.log(`Current Humidity: ${currentHumidity}`); // 'Current Humidity: 45%'

// Tüm verileri listeleme
const allData = await pxServ.getAll();
console.log(allData); // {'temperature': '22.5°C', 'humidity': '45%'}

// Eski sıcaklık verisini silme
await pxServ.removeData("temperature");
```

## Katkıda Bulunma

Katkıda bulunmak isterseniz, projeyi forklayarak kendi branch'inizde geliştirme yapabilirsiniz. Değişikliklerinizi incelemekten memnuniyet duyarız!

# Lisans

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
