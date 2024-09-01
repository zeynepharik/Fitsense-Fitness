![Demo](https://github.com/user-attachments/assets/2df295ce-d82f-44a1-b206-1f45bcedc59a)


Fitsense
  Bu proje, kullanıcıların farklı spor türlerine göre fitness seansları için rezervasyon yapmalarını sağlayan bir Haftalık Fitness Rezervasyon Sitesidir. Kullanıcılar, rezervasyon yapmak için spor türünü, günü ve saati seçebilirler. Proje, durum yönetimi için React ve Redux kullanılarak inşa edilmiştir ve veri kaynağı olarak yerel db.json dosyası kullanılmıştır.

Özellikler
Spor Türü Seçimi: Kullanıcılar, rezervasyon yapmak için çeşitli spor türleri arasından seçim yapabilir.
Haftalık Rezervasyon: Kullanıcıların belirli bir gün ve saat için fitness seansı seçmesine olanak tanır.
Durum Yönetimi: Uygulama, farklı bileşenler arasında durumu verimli bir şekilde yönetmek için Redux kullanır.
Veri İşleme: Spor türleri, günler ve saatler için verileri depolamak ve almak amacıyla db.json dosyası kullanılır.
Proje Detayları
1. Rezervasyon Sistemi
Amaç: Kullanıcıların farklı fitness aktiviteleri için haftalık rezervasyonlar yapmalarını sağlar.
Bileşenler:
Rezervasyon Formu: Spor türü, gün ve saat seçimi için alanlar içerir.
Veri Alma: db.json dosyasından mevcut günler, saatler ve spor kategorilerini alır.
Gönderim: Rezervasyon verilerini yerel bir sunucuya gönderir ve Redux kullanarak durum güncellemelerini yönetir.
2. Spor Türü Kategorileri
Amaç: Kullanıcıların rezervasyon yaparken seçebilecekleri mevcut spor kategorilerinin bir listesini gösterir.
Bileşenler:
Kategori Seçimi: Belirli bir spor türünü seçmek için açılır  liste.
Stil: Kullanıcı dostu ve sporların açıkça kategorize edildiği şekilde tasarlanmıştır.
3. Haftalık Program
Amaç: Kullanıcıların haftalık olarak mevcut saat dilimlerini görüntülemelerini ve seçmelerini sağlar.
Bileşenler:
Gün ve Saat Seçimi: İstenilen gün ve saati seçmek için açılır menüler.
Rezervasyon Onayı: Rezervasyon detaylarını onaylar ve kaydeder.
 
