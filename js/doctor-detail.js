

const detailTranslations = {
  tr: {
    nav_home: "Ana Sayfa",
    nav_hospital: "Hastanemiz",
    nav_departments: "Bölümler",
    nav_doctors: "Doktorlar",
    nav_guide: "Sağlık Rehberi",
    nav_contact: "İletişim",
    btn_appointment: "Randevu Al",
    srv_appointment: "Online Randevu",
    footer_follow: "Bizi Takip Edin",
    footer_copy: "© 2026 Başarı Hastanesi. Tüm hakları saklıdır.",
    footer_privacy: "Gizlilik Politikası",
    footer_terms: "Kullanım Koşulları"
  },
  en: {
    nav_home: "Home",
    nav_hospital: "Our Hospital",
    nav_departments: "Departments",
    nav_doctors: "Doctors",
    nav_guide: "Health Guide",
    nav_contact: "Contact",
    btn_appointment: "Book Appointment",
    srv_appointment: "Online Booking",
    footer_follow: "Follow Us",
    footer_copy: "© 2026 Başarı Hospital. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_hospital: "مستشفانا",
    nav_departments: "الأقسام",
    nav_doctors: "الأطباء",
    nav_guide: "الدليل الصحي",
    nav_contact: "اتصل بنا",
    btn_appointment: "حجز موعد",
    srv_appointment: "حجز موعد إلكتروني",
    footer_follow: "تابعنا",
    footer_copy: "© 2026 مستشفى باشاري. جميع الحقوق محفوظة.",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الاستخدام"
  },
  fa: {
    nav_home: "صفحه اصلی",
    nav_hospital: "بیمارستان ما",
    nav_departments: "بخش‌ها",
    nav_doctors: "پزشکان",
    nav_guide: "راهنمای سلامت",
    nav_contact: "تماس با ما",
    btn_appointment: "رزرو نوبت",
    srv_appointment: "نوبت‌دهی آنلاین",
    footer_follow: "ما را دنبال کنید",
    footer_copy: "© 2026 بیمارستان باشاری. تمامی حقوق محفوظ است.",
    footer_privacy: "سیاست حفظ حریم خصوصی",
    footer_terms: "شرایط استفاده"
  }
};

const doctorsDatabase = {
  "aydin-bora": {
    name: "Prof. Dr. Aydın BORA", spec: "Radyoloji Uzmanı", branch: "Radyoloji",
    lead: "İleri görüntüleme teknolojileri ve girişimsel radyoloji alanında uluslararası standartlarda tanı ve tedavi hizmeti sunmaktadır.",
    image: "img/doktorlar/aydin-bora.jpg", graduation: "Hacettepe Üniversitesi Tıp Fakültesi", education: ["Hacettepe Üniversitesi Tıp Fakültesi", "Ankara Numune Hastanesi Radyoloji İhtisası"]
  },
  "ayse-feyza-mertkan": {
    name: "Uzm. Dr. Ayşe Feyza MERTKAN", spec: "Anestezi ve Reanimasyon Uzmanı", branch: "Anestezi ve Reanimasyon",
    lead: "Deneyimli ve hasta odaklı anestezi uzmanımız, uluslararası standartlarda güvenli ve konforlu tedavi süreçleri sunmaktadır.",
    image: "img/doktorlar/ayse-feyza-mertkan.jpg", graduation: "İstanbul Tıp Fakültesi", education: ["İstanbul Ünv. Tıp Fakültesi", "Tekirdağ Devlet Hastanesi"]
  },
  "cengiz-calisir": {
    name: "Uzm. Dr. Cengiz ÇALIŞIR", spec: "Dahiliye Uzmanı", branch: "Dahiliye (İç Hastalıkları)",
    lead: "Erişkin hastalıklarının erken tanı, takip ve kapsamlı tedavisi konusunda uzman kadromuzda hizmet vermektedir.",
    image: "img/doktorlar/cengiz-calisir.jpg", graduation: "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi", education: ["İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi", "Şişli Etfal Hastanesi İç Hastalıkları"]
  },
  "ceren-gazi": {
    name: "Dyt. Ceren GAZİ", spec: "Beslenme ve Diyet Uzmanı", branch: "Beslenme ve Diyet",
    lead: "Kişiye özel sürdürülebilir beslenme planları, metabolik hastalıklar ve obezite yönetiminde rehberlik etmektedir.",
    image: "img/doktorlar/ceren-gazi.jpg", graduation: "Doğu Akdeniz Üniversitesi", education: ["Doğu Akdeniz Üniversitesi Beslenme ve Diyetetik", "Hacettepe Üniversitesi Klinik Beslenme"]
  },
  "cevat-yildirim": {
    name: "Uzm. Dr. Cevat YILDIRIM", spec: "Çocuk Sağlığı Uzmanı", branch: "Çocuk Sağlığı ve Hastalıkları",
    lead: "Çocuk sağlığı ve gelişimi, koruyucu hekimlik ve çocukluk çağı hastalıklarının tedavisi üzerine çalışmalar yürütmektedir.",
    image: "img/doktorlar/cevat-yildirim.jpg", graduation: "Ankara Üniversitesi Tıp Fakültesi", education: ["Ankara Üniversitesi Tıp Fakültesi", "Çocuk Sağlığı ve Hastalıkları Uzmanlığı"]
  },
  "emine-kirsan-ileri": {
    name: "Dr. Emine KIRŞAN İLERİ", spec: "Kadın Hastalıkları Uzmanı", branch: "Kadın Hastalıkları ve Doğum",
    lead: "Gebelik takibi, doğum ve kadın sağlığı alanlarında modern tıp yöntemleriyle hastalarına destek olmaktadır.",
    image: "img/doktorlar/emine-kirsan-ileri.png", graduation: "İstanbul Üniversitesi Tıp Fakültesi", education: ["İstanbul Üniversitesi Tıp Fakültesi"]
  },
  "fatih-hikmet-candas": {
    name: "Doç. Dr. Fatih Hikmet CANDAŞ", spec: "Göğüs Cerrahisi Uzmanı", branch: "Göğüs Cerrahisi",
    lead: "Göğüs cerrahisi alanında ileri düzey operasyonlar ve minimal invaziv cerrahi uygulamalar gerçekleştirmektedir.",
    image: "img/doktorlar/fatih-hikmet-candas.jpg", graduation: "Gazi Üniversitesi Tıp Fakültesi", education: ["Gazi Üniversitesi Tıp Fakültesi", "Göğüs Cerrahisi İhtisası"]
  },
  "fazli-mutlu": {
    name: "Uzm. Dr. Fazlı MUTLU", spec: "Dahiliye Uzmanı", branch: "Dahiliye (İç Hastalıkları)",
    lead: "İç hastalıkları alanında kronik rahatsızlıklar ve genel sağlık taramaları konusunda deneyimlidir.",
    image: "img/doktorlar/fazli-mutlu.jpg", graduation: "İstanbul Üniversitesi Tıp Fakültesi", education: ["İstanbul Üniversitesi Tıp Fakültesi"]
  },
  "hasan-huseyin-yildiz": {
    name: "Uzm. Dr. Hasan Hüseyin YILDIZ", spec: "Fizik Tedavi Uzmanı", branch: "Fizik Tedavi ve Rehabilitasyon",
    lead: "Kas-iskelet sistemi rahatsızlıkları ve ortopedik rehabilitasyon süreçlerinde uzmanlaşmıştır.",
    image: "img/doktorlar/hasan-huseyin-yildiz.jpg", graduation: "Hacettepe Üniversitesi Tıp Fakültesi", education: ["Hacettepe Üniversitesi Tıp Fakültesi"]
  },
  "hicabi-gokdereli": {
    name: "Op. Dr. Hicabi GÖKDERELİ", spec: "Genel Cerrahi Uzmanı", branch: "Genel Cerrahi",
    lead: "Laparoskopik cerrahi ve onkolojik cerrahi alanlarında başarılı operasyonlara imza atmaktadır.",
    image: "img/doktorlar/hicabi-gokdereli.jpg", graduation: "Cerrahpaşa Tıp Fakültesi", education: ["Cerrahpaşa Tıp Fakültesi", "Okmeydanı Eğitim ve Araştırma Hastanesi"]
  },
  "hikmet-buse-kuloglu": {
    name: "Dt. Hikmet Buse KULOĞLU", spec: "Diş Hekimi", branch: "Ağız ve Diş Sağlığı",
    lead: "Estetik diş hekimliği ve gülüş tasarımı üzerine modern tedaviler uygulamaktadır.",
    image: "img/doktorlar/hikmet-buse-kuloglu.jpg", graduation: "Marmara Üniversitesi Diş Hekimliği", education: ["Marmara Üniversitesi Diş Hekimliği Fakültesi"]
  },
  "hikmet-tayfur": {
    name: "Dt. Hikmet TAYFUR", spec: "Diş Hekimi", branch: "Ağız ve Diş Sağlığı",
    lead: "Çocuk ve erişkin Diş sağlığı, implantoloji ve protetik tedaviler alanında hizmet vermektedir.",
    image: "img/doktorlar/hikmet-tayfur.jpg", graduation: "İstanbul Üniversitesi Diş Hekimliği", education: ["İstanbul Üniversitesi Diş Hekimliği Fakültesi"]
  },
  "hulya-kultur": {
    name: "Uzm. Dr. Hülya KÜLTÜR", spec: "Anestezi Uzmanı", branch: "Anestezi ve Reanimasyon",
    lead: "Cerrahi operasyonların güvenli ve ağrısız gerçekleşmesi için anestezi ve yoğun bakım yönetimi sağlamaktadır.",
    image: "img/doktorlar/hulya-kultur.jpg", graduation: "Ankara Üniversitesi Tıp Fakültesi", education: ["Ankara Üniversitesi Tıp Fakültesi"]
  },
  "hulya-sarikahya": {
    name: "Yrd. Doç. Dr. Hülya SARIKAHYA", spec: "Laboratuvar Uzmanı", branch: "Klinik Laboratuvar",
    lead: "Klinik biyokimya ve tıbbi laboratuvar tanı testlerinin güvenilirliği üzerine çalışmalar yapmaktadır.",
    image: "img/doktorlar/hulya-sarikahya.jpg", graduation: "Ege Üniversitesi Tıp Fakültesi", education: ["Ege Üniversitesi Tıp Fakültesi"]
  },
  "ismail-daldal": {
    name: "Op. Dr. İsmail DALDAL", spec: "Ortopedi Uzmanı", branch: "Ortopedi ve Travmatoloji",
    lead: "Eklem cerrahisi, artroskopik ameliyatlar ve travmatoloji alanında uzmanlaşmıştır.",
    image: "img/doktorlar/ismail-daldal.jpg", graduation: "İstanbul Üniversitesi Tıp Fakültesi", education: ["İstanbul Üniversitesi Tıp Fakültesi"]
  },
  "kenan-caliskan": {
    name: "Op. Dr. Kenan ÇALIŞKAN", spec: "Kadın Doğum Uzmanı", branch: "Kadın Hastalıkları ve Doğum",
    lead: "Riskli gebelikler, kadın sağlığı ve laparoskopik jinekolojik cerrahi alanlarında hizmet vermektedir.",
    image: "img/doktorlar/kenan-caliskan.jpg", graduation: "Cerrahpaşa Tıp Fakültesi", education: ["Cerrahpaşa Tıp Fakültesi"]
  },
  "mehmet-akif-ambarcioglu": {
    name: "Op. Dr. Mehmet Akif AMBARCIOĞLU", spec: "Beyin Cerrahı", branch: "Beyin ve Sinir Cerrahisi",
    lead: "Omurga cerrahisi ve beyin tümörü operasyonları başta olmak üzere gelişmiş nöroşirürji ameliyatları yapmaktadır.",
    image: "img/doktorlar/mehmet-akif-ambarcioglu.jpg", graduation: "Hacettepe Üniversitesi Tıp Fakültesi", education: ["Hacettepe Üniversitesi Tıp Fakültesi"]
  },
  "melahat-tali": {
    name: "Uzm. Dr. Melahat TALİ", spec: "Psikiyatri Uzmanı", branch: "Psikiyatri",
    lead: "Ruh sağlığı, anksiyete, depresyon ve ergenlik dönemi psikolojik destek süreçlerinde danışmanlık vermektedir.",
    image: "img/doktorlar/melahat-tali.jpg", graduation: "Ankara Üniversitesi Tıp Fakültesi", education: ["Ankara Üniversitesi Tıp Fakültesi"]
  },
  "melis-avci": {
    name: "Klinik Psk. Melis AVCI", spec: "Klinik Psikolog", branch: "Klinik Psikoloji",
    lead: "Bilişsel davranışçı terapi ekolüyle bireysel psikoterapi seansları ve yetişkin danışmanlığı yürütmektedir.",
    image: "img/doktorlar/melis-avci.jpg", graduation: "Boğaziçi Üniversitesi Psikoloji", education: ["Boğaziçi Üniversitesi Psikoloji", "Klinik Psikoloji Yüksek Lisans"]
  },
  "mert-dabak": {
    name: "Op. Dr. Mert DABAK", spec: "Plastik Cerrah", branch: "Plastik, Rekonstrüktif ve Estetik Cerrahi",
    lead: "Estetik yüz operasyonları, vücut şekillendirme ve rekonstrüktif cerrahi alanında modern uygulamalar sunar.",
    image: "img/doktorlar/mert-dabak.png", graduation: "Gazi Üniversitesi Tıp Fakültesi", education: ["Gazi Üniversitesi Tıp Fakültesi"]
  },
  "mesih-yel": {
    name: "Uzm. Dr. Mesih YEL", spec: "Kardiyoloji Uzmanı", branch: "Kardiyoloji",
    lead: "Koroner arter hastalıkları, hipertansiyon ve ekokardiyografi alanında tanı ve tedavi uygulamaktadır.",
    image: "img/doktorlar/mesih-yel.jpg", graduation: "İstanbul Üniversitesi Tıp Fakültesi", education: ["İstanbul Üniversitesi Tıp Fakültesi"]
  },
  "nahide-gultekin-cem": {
    name: "Uzm. Dr. Nahide GÜLTEKİN ÇEM", spec: "Dermatoloji Uzmanı", branch: "Dermatoloji (Cildiye)",
    lead: "Kozmetik dermatoloji, cilt hastalıkları, lazer tedavileri ve akne tedavisi konularında uzmanlaşmıştır.",
    image: "img/doktorlar/nahide-gultekin-cem.jpg", graduation: "Ankara Üniversitesi Tıp Fakültesi", education: ["Ankara Üniversitesi Tıp Fakültesi"]
  },
  "parvana-huseynli": {
    name: "Uzm. Dr. Parvana HUSEYNLİ", spec: "Çocuk Sağlığı Uzmanı", branch: "Çocuk Sağlığı ve Hastalıkları",
    lead: "Yenidoğan bakımı, çocukluk çağı aşı takibi ve enfeksiyon hastalıkları üzerine hizmet vermektedir.",
    image: "img/doktorlar/parvana-huseynli.jpg", graduation: "Azerbaycan Tıp Üniversitesi", education: ["Azerbaycan Tıp Üniversitesi", "Uzmanlık Eğitimi"]
  },
  "qayom-khan-dolatzay": {
    name: "Op. Dr. Qayom Khan DOLATZAY", spec: "Genel Cerrahi Uzmanı", branch: "Genel Cerrahi",
    lead: "Genel cerrahi operasyonları, travma cerrahisi ve endoskopik girişimler konusunda deneyimlidir.",
    image: "img/doktorlar/qayom-khan-dolatzay.png", graduation: "Tıp Fakültesi Mezunu", education: ["Genel Cerrahi İhtisası"]
  },
  "selime-demirbas": {
    name: "Op. Dr. Selime DEMİRBAŞ", spec: "Kadın Doğum Uzmanı", branch: "Kadın Hastalıkları ve Doğum",
    lead: "Gebelik takibi, normal ve sezaryen doğum ile jinekolojik operasyonlar gerçekleştirmektedir.",
    image: "img/doktorlar/selime-demirbas.jpg", graduation: "İstanbul Üniversitesi Tıp Fakültesi", education: ["İstanbul Üniversitesi Tıp Fakültesi"]
  },
  "serap-ruken-teker": {
    name: "Uzm. Dr. Serap Ruken TEKER", spec: "Nöroloji Uzmanı", branch: "Nöroloji",
    lead: "Bağ ağrıları, epilepsi, inme ve sinir sistemi rahatsızlıklarının tanı ve tedavisini yürütmektedir.",
    image: "img/doktorlar/serap-ruken-teker.png", graduation: "Hacettepe Üniversitesi Tıp Fakültesi", education: ["Hacettepe Üniversitesi Tıp Fakültesi"]
  },
  "sezai-ozdemir": {
    name: "Uzm. Dr. Sezai ÖZDEMİR", spec: "Acil Tıp Uzmanı", branch: "Acil Servis",
    lead: "7/24 kesintisiz acil sağlık hizmetleri ve kritik durum yönetimi alanında görev yapmaktadır.",
    image: "img/doktorlar/sezai-ozdemir.jpg", graduation: "İstanbul Üniversitesi Tıp Fakültesi", education: ["İstanbul Üniversitesi Tıp Fakültesi"]
  },
  "sezgin-koc": {
    name: "Dt. Sezgin KOÇ", spec: "Diş Hekimi", branch: "Ağız ve Diş Sağlığı",
    lead: "Kanal tedavisi, dolgu ve diş eti hastalıkları tedavilerinde uzmanlaşmış diş hekimidir.",
    image: "img/doktorlar/sezgin-koc.jpg", graduation: "Ege Üniversitesi Diş Hekimliği", education: ["Ege Üniversitesi Diş Hekimliği Fakültesi"]
  },
  "tural-miriyev": {
    name: "Op. Dr. Tural MIRIYEV", spec: "Üroloji Uzmanı", branch: "Üroloji",
    lead: "Lazerle böbrek taşı kırma, prostat operasyonları ve ürolojik laparoskopi alanında hizmet vermektedir.",
    image: "img/doktorlar/tural-miriyev.png", graduation: "Tıp Fakültesi", education: ["Üroloji İhtisası"]
  },
  "umit-kanay": {
    name: "Op. Dr. Ümit KANAY", spec: "KBB Uzmanı", branch: "Kulak Burun Boğaz (KBB)",
    lead: "Estetik burun ameliyatı (rinoplasti), işitme kayıpları ve sinüzit cerrahisi uygulamaktadır.",
    image: "img/doktorlar/umit-kanay.png", graduation: "İstanbul Üniversitesi Tıp Fakültesi", education: ["İstanbul Üniversitesi Tıp Fakültesi"]
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // URL'den dinamik olarak hekim ID'sini çekme (Eğer yoksa varsayılan aydin-bora)
  const urlParams = new URLSearchParams(window.location.search);
  const docId = urlParams.get('id') ? urlParams.get('id').trim() : "aydin-bora";
  
  // Veritabanından ilgili hekimi seçme, bulunamazsa güvenli olarak aydin-bora'ya yönlendirme
  const doc = doctorsDatabase[docId] || doctorsDatabase["aydin-bora"];

  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle) pageTitle.textContent = `${doc.name} | Başarı Hastanesi`;

  const bcDoctorName = document.getElementById('bcDoctorName');
  if (bcDoctorName) bcDoctorName.textContent = doc.name;

  const badgeDoctorSummary = document.getElementById('badgeDoctorSummary');
  if (badgeDoctorSummary) badgeDoctorSummary.textContent = `${doc.name} - ${doc.spec}`;

  const docMainName = document.getElementById('docMainName');
  if (docMainName) docMainName.textContent = doc.name;

  const docSubSpec = document.getElementById('docSubSpec');
  if (docSubSpec) docSubSpec.textContent = doc.spec;

  const docBioLead = document.getElementById('docBioLead');
  if (docBioLead) docBioLead.textContent = doc.lead;

  const formHeading = document.getElementById('formDoctorHeading');
  if (formHeading) formHeading.textContent = `${doc.name} ile İletişime Geçin`;

  const photo = document.getElementById('docHeroPhoto');
  if (photo) {
    photo.src = doc.image;
    photo.onerror = () => { photo.src = 'img/doktorlar/ceren-gazi.jpg'; };
  }

  const eduContainer = document.getElementById('docEducationList');
  if (eduContainer) {
    eduContainer.innerHTML = doc.education.map(e => `<li>${e}</li>`).join('');
  }

  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  let savedTheme = localStorage.getItem('basari_theme') || 'light';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const activeTheme = htmlRoot.getAttribute('data-theme');
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', nextTheme);
      localStorage.setItem('basari_theme', nextTheme);
    });
  }

  const cornerLangBtn = document.getElementById('cornerLangBtn');
  const cornerLangMenu = document.getElementById('cornerLangMenu');

  function setLanguage(lang) {
    if (!detailTranslations[lang]) return;

    htmlRoot.setAttribute('lang', lang);
    if (lang === 'ar' || lang === 'fa') {
      htmlRoot.setAttribute('dir', 'rtl');
      document.body.classList.add('rtl-lang-font');
    } else {
      htmlRoot.setAttribute('dir', 'ltr');
      document.body.classList.remove('rtl-lang-font');
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (detailTranslations[lang][key]) {
        el.textContent = detailTranslations[lang][key];
      }
    });

    if (cornerLangMenu) {
      cornerLangMenu.querySelectorAll('li').forEach(li => {
        li.classList.toggle('active', li.getAttribute('data-lang') === lang);
      });
    }

    localStorage.setItem('basari_lang', lang);
  }

  if (cornerLangBtn && cornerLangMenu) {
    cornerLangBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cornerLangMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      cornerLangMenu.classList.remove('show');
    });

    cornerLangMenu.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = li.getAttribute('data-lang');
        setLanguage(selectedLang);
        cornerLangMenu.classList.remove('show');
      });
    });
  }

  const savedLang = localStorage.getItem('basari_lang') || 'tr';
  setLanguage(savedLang);

});