// Sayfaları Gösterme Fonksiyonu
function showPage(page) {
    let contentHTML = '';

    // Sayfa içeriklerini yerleştiriyoruz
    if (page === 'anasayfa') {
        contentHTML = `
            <h4>Kalite, estetikte gizlidir!</h4>
            <div class="carousel">
                <button class="prev" onclick="prevSlide()">&#10094;</button>
                <img src="image/hps.png" class="active" alt="Firma Resmi 1">
                <img src="image/fuar1.png" alt="Firma Resmi 2">
                <img src="image/fuar2.png" alt="Firma Resmi 3">
                <img src="image/enerji1.png" alt="Firma Resmi 4">
                <img src="image/enerji2.png" alt="Firma Resmi 5">
                <img src="image/enerji3.png" alt="Firma Resmi 6">
                <button class="next" onclick="nextSlide()">&#10095;</button>
            </div>
        `;
    } else if (page === 'urunlerimiz') {
        contentHTML = `
            <h2>Ürünlerimiz</h2>

            <!-- Kategoriler Resimler -->
            <div id="product-categories">
                <div class="category">
                    <img src="image/sert_profil1.png" alt="Sert Profil" class="category-image" onclick="showProductCategory('sertProfil')">
                    <p class="category-title">Sert Profil</p>
                </div>
                <div class="category">
                    <img src="image/yumusak_fitil1.png" alt="PVC Yumuşak Fitil" class="category-image" onclick="showProductCategory('yumusakFitil')">
                    <p class="category-title">PVC Yumuşak Fitil</p>
                </div>
                <div class="category">
                    <img src="image/polimer_cita.png" alt="Polimer Çıta" class="category-image" onclick="showProductCategory('polimerCita')">
                    <p class="category-title">Polimer Çıta</p>
                </div>
                <div class="category">
                    <img src="image/seritler.png" alt="Şeritler" class="category-image" onclick="showProductCategory('seritler')">
                    <p class="category-title">Şeritler</p>
                </div>
                <div class="category">
                    <img src="image/teelevha.png" alt="Tee Levha" class="category-image" onclick="showProductCategory('teelevha')">
                    <p class="category-title">Tee Levha</p>
                </div>
                 <div class="category">
                    <img src="image/silte.png" alt="Polietilen Levha-Şilte" class="category-image" onclick="showProductCategory('silte')">
                    <p class="category-title">Polietilen Levha-Şilte</p>
                </div>
            </div>

            <div id="product-details"></div>
        `;
    } else if (page === 'referanslar') {
        contentHTML = `
            <h2>Referanslar</h2><br><br>
    
             <div style="display: flex; align-items: center;">
                        <img src="image/boydak.jpg"width="200" style="margin-right: 60px;">
                        <table border="1" cellpadding="5" style="border-collapse: collapse;">
             <div style="display: flex; align-items: center;">
                        <img src="image/boytas.jpg"  width="200" style="margin-right: 10px;">
                        <table border="1" cellpadding="5" style="border-collapse: collapse;">
            <div style="display: flex; align-items: center;">
                        <img src="image/istikbal.jpg"  width="200" style="margin-right: 10px;">
                        <table border="1" cellpadding="5" style="border-collapse: collapse;">
            <div style="display: flex; align-items: center;">
                        <img src="image/kilim.jpg"  width="200" style="margin-right: 10px;">
                        <table border="1" cellpadding="5" style="border-collapse: collapse;">
            <div style="display: flex; align-items: center;">
                        <img src="image/ipek.jpg"  width="200" style="margin-right: 10px;">
                        <table border="1" cellpadding="5" style="border-collapse: collapse;">
            <div style="display: flex; align-items: center;">
                        <img src="image/merkez.jpg"  width="200" style="margin-right: 10px;">
                        <table border="1" cellpadding="5" style="border-collapse: collapse;">
            <div style="display: flex; align-items: center;">
                        <img src="image/mondi.jpg"  width="200" style="margin-right: 20px;">
                        <table border="2" cellpadding="5" style="border-collapse: collapse;">
            
        `;
    } else if (page === 'iletisim') {
        contentHTML = `
            <h2>İletişim</h2>
                <div class="info">
                    <p><strong>Adres:</strong> 1. Organize Sanayi Bölgesi 41. Cad. No:6 Melikgazi / KAYSERİ</p>
                    <p><strong>Email:</strong> info@hacilarplastik.com.tr</p>
                    <p><strong>Telefon:</strong>+90 352 322 08 68-69 | +90 552 188 5889</p>
                </div>
                <form action="kaydet.php" method="POST">
                    <label for="name">Adınız:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="message">Mesajınız:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Gönder</button>
                </form>
        `;
    } else if (page === 'kurumsal') {
        contentHTML = `
            <h2>Kurumsal</h2>
            
            <h5> HUKUKA, EKONOMİK VE AHLAKİ İLKELERE BAĞLI; SAĞLIK, EMNİYET VE İŞ </h5>
            <h5> GÜVENLİĞİNE DUYARLI BİR ŞEKİLDE ÖNCÜSÜ OLDUĞUMUZ PLASTİK MALZEME </h5>
            <h5> SEKTÖRÜNDE KALİTE HEDEFLİ OLARAK ARGE FAALİYETLERİ ÇERÇEVESİNDE  </h5>
            <h5> TEDARİKÇİSİ OLDUĞUMUZ SEKTÖRÜN İHTİYAÇLARINI KARŞILAMAKLA BERABER </h5>
            <h5> GEÇMİŞTEN GELEN BİR SORUMLULUK ANLAYIŞI İÇİNDE ÇALIŞMALARIMIZI SÜRDÜRMEK.</h5>
                   
            <h5>  SEKTÖRÜMÜZDE TÜRKİYE’NİN ÖNDE GELEN FİRMALARI ARASINDA YER ALARAK</h5>
            <h5>  HİZMET VE ÜRÜN KALİTESİYLE ÜRETİCİ VE TEDARİKÇİLERİN İLK TERCİHİ OLMAK</h5>
            <h5>  KONUSUNDA SÜREKLİLİK SAĞLAYARAK KALİTELİ ÜRÜN PİYASASINA KATKIDA BULUNMAK.</h5>
                                    <h5> •SAYGI</h5>
                                    <h5> •DAYANIŞMA</h5>
                                    <h5> •İNSAN ODAKLILIK</h5>
                                    <h5> •AZİM</h5>
                                    <h5> •UZMANLIK</h5>
                                    <h5> •CESARET</h5>
                                    <h5> •MEMNUNİYET</h5>
                                    <h5> •BAŞARI</h5>
            
        `;
    }

    // Dinamik içeriği sayfaya ekle
    document.getElementById('content').innerHTML = contentHTML;
}
// Kategoriye ait ürünleri gösterme
function showProductCategory(category) {
    let productHTML = '';

    if (category === 'sertProfil') {
        productHTML = `
            <h3>Sert Profil A</h3>
            <div style="display: flex; align-items: center;">
                <img src="image/sert_profil1.png" alt="Sert Profil A" width="400" style="margin-right: 20px;">
                <table border="1" cellpadding="5" style="border-collapse: collapse;">
                   <tr>
                            <td>PRODUCT DESCRİPTİON</td>
                            <td>SİZE</td>
                            <td>PACKAGE mt</td>
                            
                        </tr>
                        <tr>
                            <td>PLASTİC CUFF</td>
                            <td>3,1</td>
                            <td>100 pcs.</td>
                            
                        </tr>
                        <tr>
                            <td>4 MM H PROFİLE</td>
                            <td>3</td>
                            <td>100 pcs.</td>
                            
                        </tr>
                        <tr>
                            <td>4 MM FINISHED H PROFİLE</td>
                            <td>3</td>
                            <td>100 pcs.</td>
                            
                        </tr>
                        <tr>
                            <td>6 MM H PROFİLE</td>
                            <td>3</td>
                            <td>100 pcs.</td>
                            
                        </tr>
                        <tr>
                            <td>8 MM H PROFİLE</td>
                            <td>3</td>
                            <td>100 pcs.</td>
                            
                        </tr>
                        <tr>
                            <td>8 MM FINISHED H PROFİLE</td>
                            <td>3</td>
                            <td>100 pcs.</td>
                            
                        </tr>
                        <tr>
                            <td>18 MM PROFİLE</td>
                            <td>3</td>
                            <td>50 pcs.</td>
                            
                        </tr>
                        <tr>
                            <td>5*25 CHIPBOARD JOINING</td>
                            <td>2,1</td>
                            <td>SIZED</td>
                            
                        </tr>
                        <tr>
                            <td>8*25 CHIPBOARD JOINING</td>
                            <td>2,1</td>
                            <td>SIZED</td>
                            
                        </tr>
                        <tr>
                            <td>PARQUET PASSAGE PROFILE</td>
                            <td>2,1</td>
                            <td>SIZED</td>
                            
                        </tr>
                </table>
            </div>
        `;
    } else if (category === 'yumusakFitil') {
        productHTML = `
            <h3>PVC Yumuşak Fitil B</h3>
            <div style="display: flex; align-items: center;">
                <img src="image/yumusak_fitil1.png" alt="PVC Yumuşak Fitil B" width="400" style="margin-right: 20px;">
                <table border="1" cellpadding="5" style="border-collapse: collapse;">
                    <tr>
                            <td>PRODUCT DESCRİPTİON</td>
                            <td>DIAMETER</td>
                            <td>PACKAGE mt</td>
                        
                        </tr>
                        <tr>
                            <td>T1 WICK</td>
                            <td></td>
                            <td>100</td>
                            
                        </tr>
                        <tr>
                            <td>T2 UPHOLSTERY WICK</td>
                            <td></td>
                            <td>200</td>
                            
                        </tr>
                        <tr>
                            <td>3 MM UPHOLSTERY WICK</td>
                            <td>3</td>
                            <td>500</td>
                            
                        </tr>
                        <tr>
                            <td>4 MM UPHOLSTERY WICK</td>
                            <td>4</td>
                            <td>500</td>
                            
                        </tr>
                        <tr>
                            <td>6 MM UPHOLSTERY WICK</td>
                            <td>6</td>
                            <td>300</td>
                            
                        </tr>
                        <tr>
                            <td>8 MM UPHOLSTERY WICK</td>
                            <td>8</td>
                            <td>200</td>
                            
                        </tr>
                        <tr>
                            <td>9 MM UPHOLSTERY WICK</td>
                            <td>9</td>
                            <td>100</td>
                            
                        </tr>
                        <tr>
                            <td>12 MM UPHOLSTERY WICK</td>
                            <td>12</td>
                            <td>50</td>
                            
                        </tr>
                        <tr>
                            <td>14 MM UPHOLSTERY WICK</td>
                            <td>14</td>
                            <td>50</td>
                            
                        </tr>
                        <tr>
                            <td>17 MM UPHOLSTERY WICK</td>
                            <td>17</td>
                            <td>50</td>
                            
                        </tr>
                        <tr>
                            <td>20 MM UPHOLSTERY WICK</td>
                            <td>20</td>
                            <td>25</td>
                            
                        </tr>
                </table>
            </div>
        `;
    } 
    else if (category === 'seritler') {
        productHTML = `
            <h3>Şeritler </h3>
            <div style="display: flex; align-items: center;">
                <img src="image/seritler.png" alt="Şeritler " width="400" style="margin-right: 20px;">
                <table border="1" cellpadding="5" style="border-collapse: collapse;">
                     <tr>
                           <td>PRODUCT DESCRIPTION</td>
                            <td>MOST</td>
                            <td>PACKAGE mt</td>
                            
                            
                        </tr>
                        <tr>
                            <td>5 MM SILVER STRIP</td>
                            <td>5</td>
                            <td>200</td>
                            
                        </tr>
                        <tr>
                            <td>6 MM SILVER STRIP</td>
                            <td>6</td>
                            <td>200</td>
                            
                        </tr>
                        <tr>
                            <td>6 MM GOLD STRIP</td>
                            <td>6</td>
                            <td>200</td>
                            
                        </tr>
                        <tr>
                            <td>7 MM SILVER STRIP</td>
                            <td>7</td>
                            <td>200</td>
                            
                        </tr>
                        <tr>
                            <td>9 MM SILVER STRIP</td>
                            <td>9</td>
                            <td>200</td>
                            
                        </tr>
                        <tr>
                            <td>9 MM GOLD STRIP</td>
                            <td>9</td>
                            <td>100</td>
                            
                        </tr>
                        <tr>
                            <td>10 MM SILVER STRIP</td>
                            <td>10</td>
                            <td>100</td>
                            
                        </tr>
                        <tr>
                            <td>10 MM GOLD STRIP</td>
                            <td>10</td>
                            <td>100</td>
                            
                        </tr>
                        <tr>
                            <td>18 MM GOLD STRIP</td>
                            <td>18</td>
                            <td>100</td>
                            
                        </tr>
                        <tr>
                            <td>30 MM GOLD STRIP</td>
                            <td>30</td>
                            <td>100</td>
                            
                        </tr>
                </table>
            </div>
    `;
    }
    
    
    else if (category === 'polimerCita') {
        productHTML = `
            <h3>Polimer Çıta C</h3>
            <div style="display: flex; align-items: center;">
                <img src="image/polimer_cita.png" alt="Polimer Çıta C" style="margin-right: 20px; width=400px; height: 300px;">
                <table border="1" cellpadding="5" style="border-collapse: collapse;">
                    <tr>
                           <td>PRODUCT DESCRIPTION</td>
                            <td>DIAMMETER</td>
                            <td>PACKAGE mt</td>
                            
                            
                        </tr>
                        <tr>
                            <td>POLYMER LATH</td>
                            <td>10*10</td>
                            <td>49</td>
                            
                        </tr>
                        <tr>
                            <td>POLYMER LATH </td>
                            <td>10*15</td>
                            <td>25</td>
                            
                        </tr>
                        <tr>
                            <td>POLYMER LATH</td>
                            <td>10*20</td>
                            <td>25</td>
                            
                        </tr>
                        <tr>
                            <td>POLYMER LATH</td>
                            <td>15*15</td>
                            <td>25</td>
                            
                        </tr>
                        <tr>
                            <td>POLYMER LATH</td>
                            <td>15*20</td>
                            <td>25</td>
                            
                        </tr>
                        <tr>
                            <td>POLYMER LATH</td>
                            <td>15*25</td>
                            <td>25</td>
                            
                        </tr>
                        <tr>
                            <td>POLYMER LATH</td>
                            <td>18*25</td>
                            <td>25</td>
                            
                        </tr>
                        <tr>
                            <td>POLYMER LATH</td>
                            <td>20*20</td>
                            <td>25</td>
                            
                        </tr>
                        <tr>
                            <td>POLYMER LATH</td>
                            <td>25*35</td>
                            <td>25</td>
                            
                        </tr>
                        <tr>
                            <td>POLYMER LATH</td>
                            <td>30*18</td>
                            <td>10</td>
                            
                        </tr>
                </table>
            </div>
        `;
    }
    else if (category === 'teelevha') {
        productHTML = `
            <h3>Tee Levha</h3>
            <div style="display: flex; align-items: center;">
                <img src="image/teelevha.png" alt="Tee Levha"  width="400" style="margin-right: 20px;">
                <table border="1" cellpadding="5" style="border-collapse: collapse;">
                    <tr>
                           <td>PRODUCT DESCRIPTION</td>
                            <td>PACKAGE kg</td>
                            <td>PACKAGE kg</td>
                            
                            
                        </tr>
                        <tr>
                            <td>15 MM TEE STRIP</td>
                            <td>15</td>
                            <td>50 MT</td>
                            
                        </tr>
                        <tr>
                            <td>18 MM TEE STRIP </td>
                            <td>15</td>
                            <td>50 MT</td>
                            
                        </tr>
                         <tr>
                            <td>TEE PLATE SIZED</td>
                            <td>SIZED</td>
                            <td>20 KG</td>
                            
                        </tr>
                       
                </table>
            </div>
        `;
    }
    else if (category === 'silte') {
        productHTML = `
            <h3>Polietilen Levha-Şilte</h3>
            <div style="display: flex; align-items: center;">
                <img src="image/silte.png" alt="Polietilen Levha-Şilte"  width="400" style="margin-right: 20px;">
                <table border="1" cellpadding="5" style="border-collapse: collapse;">
                    <tr>
                           <td>PRODUCT DESCRIPTION</td>
                            <td>THICKNESS</td>
                           
                            
                            
                        </tr>
                        <tr>
                            <td>MATTRESS 1 MM</td>
                            <td>1 MM</td>

                            
                        </tr>
                        <tr>
                            <td>MATTRESS 1,5 MM </td>
                            <td>1,5 MM</td>
                         
                        </tr>
                         <tr>
                            <td>MATTRESS 2 MM</td>
                            <td>2 MM </td>
                       
                        </tr>
                           <tr>
                            <td>MATTRESS 2,5 MM</td>
                            <td>2,5 MM </td>
                       
                        </tr>
                           <tr>
                            <td>MATTRESS 4 MM</td>
                            <td>4 MM </td>
                       
                        </tr>
                           <tr>
                            <td>MATTRESS 5 MM</td>
                            <td>5 MM </td>
                       
                        </tr>
                           <tr>
                            <td>MATTRESS 7 MM</td>
                            <td>7 MM </td>
                       
                        </tr>
                           <tr>
                            <td>MATTRESS 8 MM</td>
                            <td>8 MM </td>
                       
                        </tr>
                           <tr>
                            <td>MATTRESS 10 MM</td>
                            <td>10 MM </td>
    
                </table>
            </div>
        `;
    }


    // Ürünleri ekle
    document.getElementById('product-details').innerHTML = productHTML;
}

// Carousel slider fonksiyonları
let currentSlide = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.carousel img');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel img');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

window.onload = function() {
    showPage('anasayfa');
};
