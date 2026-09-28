

document.addEventListener('DOMContentLoaded', () => {

  const translations = {
    tr: {
      page_title: "Başarı Hastanesi | Sağlığınız İçin Daha Fazlası",
      nav_home: "Ana Sayfa",
      nav_hospital: "Hastanemiz",
      nav_departments: "Bölümler",
      nav_doctors: "Doktorlar",
      nav_guide: "Sağlık Rehberi",
      nav_contact: "İletişim",
      btn_appointment: "Randevu Al",
      btn_discover: "Hastanemizi Keşfedin",
      scroll_down: "Aşağı Kaydır",
      dock_appointment: "Randevu Al",
      dock_find_doctor: "Doktor Bul",
      dock_departments: "Bölümler",
      dock_online: "Online Görüşme",
      search_placeholder: "Bölüm, hekim veya test arayın...",
      hero_badge_1: "BAŞARI HASTANESİ · İSTANBUL",
      hero_title_1_line1: "Sağlığınız için",
      hero_title_1_line2: "daha fazlası.",
      hero_desc_1: "Modern tıbbın gücü, deneyimli kadromuz ve hasta odaklı yaklaşımımızla her zaman yanınızdayız.",
      hero_badge_2: "İLERİ TIP TEKNOLOJİSİ · İSTANBUL",
      hero_title_2_line1: "Gelişmiş tanı ve",
      hero_title_2_line2: "robotik cerrahi.",
      hero_desc_2: "Yapay zeka destekli görüntüleme altyapımızla erken teşhis ve güvenli cerrahi çözümleri.",
      hero_badge_3: "UZMAN HEKİM KADROSU · İSTANBUL",
      hero_title_3_line1: "Sağlığınız için",
      hero_title_3_line2: "en doğru adres.",
      hero_desc_3: "45 farklı branşta uluslararası akreditasyon standartlarına sahip hekim kadromuz 7/24 yanınızda.",
      hero_badge_4: "7/24 KESİNTİSİZ HİZMET · İSTANBUL",
      hero_title_4_line1: "Her anınızda",
      hero_title_4_line2: "güvenle yanınızda.",
      hero_desc_4: "Tam donanımlı acil servisimiz ve ileri yoğun bakım ünitelerimizle kesintisiz sağlık güvencesi.",
      dept_badge: "BÖLÜMLERİMİZ",
      dept_title_line1: "Sağlığınız için",
      dept_title_line2: "doğru uzmanlık.",
      dept_desc: "Farklı branşlarda uzman hekim kadromuz ve ileri teknoloji donanımımızla, size en doğru tedaviyi sunmak için buradayız.",
      btn_all_departments: "Tüm Bölümleri Gör",
      dept_brain: "Beyin ve Sinir Cerrahisi",
      dept_cardio: "Kardiyoloji",
      dept_ortho: "Ortopedi ve Travmatoloji",
      dept_surgery: "Genel Cerrahi",
      dept_eye: "Göz Hastalıkları",
      dept_obgyn: "Kadın Hastalıkları ve Doğum",
      dept_pediatric: "Çocuk Sağlığı ve Hastalıkları",
      dept_internal: "Dahiliye",
      appt_badge: "HIZLI İŞLEMLER",
      appt_title_line1: "Bugün kendiniz için",
      appt_title_line2: "bir adım atın.",
      appt_desc: "Online sağlık hizmetlerimizle randevunuzu kolayca planlayın, tahlil sonuçlarınıza anında ulaşın veya hekimlerimizi inceleyin.",
      srv_appointment: "Online Randevu",
      srv_results: "E-Sonuç / Tahlil",
      srv_doctors: "Doktorlarımız",
      appt_info_badge: "Online işlemler ile hızlı ve kolay ulaşım.",
      val_badge: "NEDEN BAŞARI HASTANESİ?",
      val_title_line1: "Sağlıkta güven,",
      val_title_line2: "teknolojide öncü.",
      val_stat_1: "Yıllık Deneyim",
      val_stat_2: "Uzman Hekim",
      val_stat_3: "Acil Servis",
      val_link_about: "Hastanemizi Tanıyın",
      doc_badge: "DOKTORLARIMIZ",
      doc_title_line1: "Alanında uzman",
      doc_title_line2: "hekim kadromuzla",
      doc_title_line3: "yanınızdayız.",
      doc_all_link: "Tüm Doktorları Gör",
      guide_badge: "SAĞLIK REHBERİ",
      guide_title: "Sizi Bilgilendiriyoruz",
      guide_desc: "Sağlığınızla ilgili merak ettiğiniz tüm konularda uzmanlarımızın hazırladığı içeriklere göz atın.",
      guide_link_1: "Hastalıklar ve Tedaviler",
      guide_link_2: "Sıkça Sorulan Sorular",
      guide_link_3: "Sağlıklı Yaşam Önerileri",
      guide_link_4: "Tıbbi Makaleler",
      news_main_title: "Güncel Haberler",
      news_view_all: "Tüm Haberler",
      news_title_1: "ROBOTİK REHABİLİTASYON NEDİR?",
      news_title_2: "HİPEREMİ NEDİR VE BELİRTİLERİ NELERDİR?",
      news_title_3: "PREEKLAMPSİ NEDİR?",
      news_read_more: "Devamını Oku",
      cta_badge: "7/24 KESİNTİSİZ HİZMET & ACİL ÇAĞRI",
      cta_title_1: "Sağlığınız ertelenemez,",
      cta_title_2: "uzmanlarımız her an yanınızda.",
      cta_desc: "Vakit kaybetmeden hemen online randevunuzu oluşturabilir veya acil çağrı merkezimizle iletişime geçebilirsiniz.",
      cta_call_us: "Hemen Arayın",
      partners_badge: "ANLAŞMALI KURUMLAR",
      partners_sub: "Özel Sağlık Sigortaları & Bankalar",
      footer_follow: "Bizi Takip Edin",
      footer_copy: "© 2026 Başarı Hastanesi. Tüm hakları saklıdır.",
      footer_privacy: "Gizlilik Politikası",
      footer_terms: "Kullanım Koşulları"
    },
    en: {
      page_title: "Başarı Hospital | More for Your Health",
      nav_home: "Home",
      nav_hospital: "Our Hospital",
      nav_departments: "Departments",
      nav_doctors: "Doctors",
      nav_guide: "Health Guide",
      nav_contact: "Contact",
      btn_appointment: "Book Appointment",
      btn_discover: "Discover Our Hospital",
      scroll_down: "Scroll Down",
      dock_appointment: "Book Appointment",
      dock_find_doctor: "Find a Doctor",
      dock_departments: "Departments",
      dock_online: "Online Consultation",
      search_placeholder: "Search department, doctor or test...",
      hero_badge_1: "BAŞARI HOSPITAL · ISTANBUL",
      hero_title_1_line1: "More for your",
      hero_title_1_line2: "health & wellness.",
      hero_desc_1: "Always by your side with the power of modern medicine, experienced staff, and patient-centered care.",
      hero_badge_2: "ADVANCED MEDICAL TECH · ISTANBUL",
      hero_title_2_line1: "Advanced diagnostics &",
      hero_title_2_line2: "robotic surgery.",
      hero_desc_2: "Early diagnosis and precision surgical treatments with state-of-the-art AI medical equipment.",
      hero_badge_3: "EXPERT PHYSICIANS · ISTANBUL",
      hero_title_3_line1: "The right choice",
      hero_title_3_line2: "for your health.",
      hero_desc_3: "World-class healthcare across 45 medical branches with dedicated specialists 24/7.",
      hero_badge_4: "24/7 EMERGENCY SERVICES · ISTANBUL",
      hero_title_4_line1: "By your side,",
      hero_title_4_line2: "every single moment.",
      hero_desc_4: "Comprehensive emergency care and advanced intensive care units for your absolute peace of mind.",
      dept_badge: "DEPARTMENTS",
      dept_title_line1: "The right expertise",
      dept_title_line2: "for your health.",
      dept_desc: "With our specialized physicians and advanced medical technology, we provide you with the most accurate diagnosis and treatment.",
      btn_all_departments: "View All Departments",
      dept_brain: "Neurosurgery",
      dept_cardio: "Cardiology",
      dept_ortho: "Orthopedics & Traumatology",
      dept_surgery: "General Surgery",
      dept_eye: "Ophthalmology",
      dept_obgyn: "Obstetrics & Gynecology",
      dept_pediatric: "Pediatrics",
      dept_internal: "Internal Medicine",
      appt_badge: "QUICK SERVICES",
      appt_title_line1: "Take a step",
      appt_title_line2: "for yourself today.",
      appt_desc: "Easily book appointments online, access lab results instantly, or explore our specialized physicians.",
      srv_appointment: "Online Booking",
      srv_results: "E-Results / Lab",
      srv_doctors: "Our Physicians",
      appt_info_badge: "Fast and easy access via online services.",
      val_badge: "WHY BAŞARI HOSPITAL?",
      val_title_line1: "Trust in healthcare,",
      val_title_line2: "pioneering technology.",
      val_stat_1: "Years of Experience",
      val_stat_2: "Expert Physicians",
      val_stat_3: "Emergency Service",
      val_link_about: "Discover Our Hospital",
      doc_badge: "OUR PHYSICIANS",
      doc_title_line1: "By your side with",
      doc_title_line2: "our expert medical",
      doc_title_line3: "specialist team.",
      doc_all_link: "View All Physicians",
      guide_badge: "HEALTH GUIDE",
      guide_title: "We Keep You Informed",
      guide_desc: "Explore healthcare insights and medical guidance prepared exclusively by our specialist physicians.",
      guide_link_1: "Diseases & Treatments",
      guide_link_2: "Frequently Asked Questions",
      guide_link_3: "Healthy Living Tips",
      guide_link_4: "Medical Articles",
      news_main_title: "Latest News",
      news_view_all: "View All News",
      news_title_1: "WHAT IS ROBOTIC REHABILITATION?",
      news_title_2: "WHAT IS HYPEREMIA AND WHAT ARE ITS SYMPTOMS?",
      news_title_3: "WHAT IS PREECLAMPSIA?",
      news_read_more: "Read More",
      cta_badge: "24/7 CONTINUOUS CARE & EMERGENCY CALL",
      cta_title_1: "Your health cannot wait,",
      cta_title_2: "our specialists are always here for you.",
      cta_desc: "Schedule your online consultation in moments or get in touch with our 24/7 emergency dispatch.",
      cta_call_us: "Call Us Now",
      partners_badge: "CONTRACTED INSTITUTIONS",
      partners_sub: "Private Health Insurances & Banks",
      footer_follow: "Follow Us",
      footer_copy: "© 2026 Başarı Hospital. All rights reserved.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Use"
    },
    ar: {
      page_title: "مستشفى بشري | رعاية متكاملة لصحتكم",
      nav_home: "الرئيسية",
      nav_hospital: "مستشفانا",
      nav_departments: "الأقسام الطبية",
      nav_doctors: "أطباؤنا",
      nav_guide: "الدليل الصحي",
      nav_contact: "اتصل بنا",
      btn_appointment: "حجز موعد",
      btn_discover: "اكتشف مستشفانا",
      scroll_down: "مرر للأسفل",
      dock_appointment: "حجز موعد",
      dock_find_doctor: "ابحث عن طبيب",
      dock_departments: "الأقسام الطبية",
      dock_online: "استشارة عبر الإنترنت",
      search_placeholder: "ابحث عن قسم، طبيب أو فحص...",
      hero_badge_1: "مستشفى بشري · إسطنبول",
      hero_title_1_line1: "من أجل صحتكم",
      hero_title_1_line2: "نقدم أكثر دائماً.",
      hero_desc_1: "معكم في كل لحظة بقوة الطب الحديث وكادرنا الطبي المتميز ورعايتنا المرتكزة على الإنسان.",
      hero_badge_2: "تكنولوجيا طبية متقدمة · إسطنبول",
      hero_title_2_line1: "تشخيص دقيق و",
      hero_title_2_line2: "جراحة روبوتية.",
      hero_desc_2: "تشخيص مبكر وحلول جراحية آمنة بفضل بنيتنا التحتية المتطورة المدعومة بالذكاء الاصطناعي.",
      hero_badge_3: "نخبة من كبار الأطباء · إسطنبول",
      hero_title_3_line1: "العنوان الأمثل",
      hero_title_3_line2: "لرعاية صحتكم.",
      hero_desc_3: "أكثر من 45 تخصصاً طبياً معتمد دولياً لتقديم أفضل رعاية صحية على مدار الساعة.",
      hero_badge_4: "خدمات طوارئ على مدار الساعة · إسطنبول",
      hero_title_4_line1: "في كل خطوة",
      hero_title_4_line2: "أمان ورعاية مستمرة.",
      dept_badge: "أقسامنا الطبية",
      dept_title_line1: "الخبرة المثلى",
      dept_title_line2: "لرعاية صحتكم.",
      dept_desc: "مع نخبة من كبار الأطباء والتقنيات الطبية المتقدمة، نضمن لكم أفضل رعاية وتشخيص دقيق.",
      btn_all_departments: "عرض جميع الأقسام",
      dept_brain: "جراحة المخ والأعصاب",
      dept_cardio: "أمراض القلب",
      dept_ortho: "جراحة العظام والمفاصل",
      dept_surgery: "الجراحة العامة",
      dept_eye: "طب وجراحة العيون",
      dept_obgyn: "النساء والتوليد",
      dept_pediatric: "طب الأطفال",
      dept_internal: "الأمراض الباطنية",
      appt_badge: "خدمات سريعة",
      appt_title_line1: "اتخذ خطوة اليوم",
      appt_title_line2: "من أجل صحتك.",
      appt_desc: "احجز موعدك بسهولة عبر الإنترنت، أو اطلع على نتائج التحاليل فوراً، أو تعرف على كادرنا الطبي.",
      srv_appointment: "حجز موعد إلكتروني",
      srv_results: "النتائج والتحاليل",
      srv_doctors: "أطباؤنا",
      appt_info_badge: "وصول سريع وسهل عبر الخدمات الإلكترونية.",
      val_badge: "لماذا مستشفى بشري؟",
      val_title_line1: "ثقة في الرعاية،",
      val_title_line2: "وريادة في التكنولوجيا.",
      val_stat_1: "عاماً من الخبرة",
      val_stat_2: "طبيباً متخصصاً",
      val_stat_3: "طوارئ متواصلة",
      val_link_about: "تعرف على مستشفانا",
      doc_badge: "أطباؤنا",
      doc_title_line1: "بجانبكم دائماً",
      doc_title_line2: "مع نخبة من كبار",
      doc_title_line3: "الأطباء والاستشاريين.",
      doc_all_link: "عرض جميع الأطباء",
      guide_badge: "الدليل الصحي",
      guide_title: "نقدم لكم المعرفة",
      guide_desc: "اطلعوا على مقالات ونصائح طبية شاملة وموثوقة أعدها كبار أطبائنا المتخصصين.",
      guide_link_1: "الأمراض وطرق العلاج",
      guide_link_2: "الأسئلة الشائعة",
      guide_link_3: "إرشادات لحياة صحية",
      guide_link_4: "مقالات طبية متخصصة",
      news_main_title: "آخر الأخبار",
      news_view_all: "جميع الأخبار",
      news_title_1: "ما هي إعادة التأهيل الروبوتية؟",
      news_title_2: "ما هو احتقان الدم وما هي أعراضه؟",
      news_title_3: "ما هو تسمم الحمل؟",
      news_read_more: "اقرأ المزيد",
      cta_badge: "خدمة طوارئ ورعاية على مدار الساعة",
      cta_title_1: "صحتكم لا تحتمل التأجيل،",
      cta_title_2: "نحن بجانبكم في كل وقت.",
      cta_desc: "احجز موعدك فوراً إلكترونياً أو اتصل بمركز الطوارئ المتكامل لدينا.",
      cta_call_us: "اتصل بنا الآن",
      partners_badge: "المؤسسات المتعاقدة",
      partners_sub: "شركات التأمين الصحي والبنوك",
      footer_follow: "تابعونا على",
      footer_copy: "© 2026 مستشفى بشري. جميع الحقوق محفوظة.",
      footer_privacy: "سياسة الخصوصية",
      footer_terms: "شروط الاستخدام"
    },
    fa: {
      page_title: "بیمارستان باشاری | سلامتی شما اولویت ماست",
      nav_home: "صفحه اصلی",
      nav_hospital: "درباره بیمارستان",
      nav_departments: "بخش‌های تخصصی",
      nav_doctors: "پزشکان ما",
      nav_guide: "راهنمای سلامت",
      nav_contact: "تماس با ما",
      btn_appointment: "دریافت نوبت",
      btn_discover: "آشنایی با بیمارستان",
      scroll_down: "به پایین بکشید",
      dock_appointment: "دریافت نوبت",
      dock_find_doctor: "جستجوی پزشک",
      dock_departments: "بخش‌ها",
      dock_online: "مشاوره آنلاین",
      search_placeholder: "جستجوی تخصص، پزشک یا آزمایش...",
      hero_badge_1: "بیمارستان باشاری · استانبول",
      hero_title_1_line1: "برای سلامتی شما",
      hero_title_1_line2: "فراتر از استانداردها.",
      hero_desc_1: "با بهره‌گیری از دانش روز پزشکی، تیمی باتجربه و نگاهی بیمارمحور، همواره همراه شما هستیم.",
      hero_badge_2: "تجهیزات مدرن پزشکی · استانبول",
      hero_title_2_line1: "تشخیص دقیق و",
      hero_title_2_line2: "جراحی رباتیک.",
      hero_desc_2: "تشخیص زودهنگام و درمان‌های ایمن جراحی با تکیه بر فناوری‌های مجهز به هوش مصنوعی.",
      hero_badge_3: "کادر متخصص پزشکی · استانبول",
      hero_title_3_line1: "بهترین انتخاب",
      hero_title_3_line2: "برای سلامت خانواده.",
      hero_desc_3: "ارائه خدمات ۲۴ ساعته در ۴۵ تخصص پزشکی با استانداردهای بین‌المللی سلامت.",
      hero_badge_4: "خدمات اورژانس ۲۴ ساعته · استانبول",
      hero_title_4_line1: "در هر لحظه،",
      hero_title_4_line2: "با اطمینان در کنار شما.",
      dept_badge: "بخش‌های تخصصی ما",
      dept_title_line1: "تخصص دقیق،",
      dept_title_line2: "برای سلامت شما.",
      dept_desc: "همراه با پزشکان برجسته و تجهیزات پیشرفته تشخیصی، بهترین کیفیت درمان را به شما ارائه می‌دهیم.",
      btn_all_departments: "مشاهده تمام بخش‌ها",
      dept_brain: "جراحی مغز و اعصاب",
      dept_cardio: "قلب و عروق",
      dept_ortho: "ارتوپدی و تروما",
      dept_surgery: "جراحی عمومی",
      dept_eye: "چشم‌پزشکی",
      dept_obgyn: "زنان و زایمان",
      dept_pediatric: "کودکان و نوزادان",
      dept_internal: "بیماری‌های داخلی",
      appt_badge: "خدمات الکترونیک",
      appt_title_line1: "امروز برای سلامتی خود",
      appt_title_line2: "یک قدم بردارید.",
      appt_desc: "به راحتی نوبت آنلاین دریافت کنید، به نتایج آزمایش‌ها دسترسی داشته باشید یا پزشکان ما را بررسی کنید.",
      srv_appointment: "نوبت‌دهی آنلاین",
      srv_results: "جواب‌دهی آنلاین",
      srv_doctors: "پزشکان ما",
      appt_info_badge: "دسترسی سریع و آسان از طریق خدمات آنلاین.",
      val_badge: "چرا بیمارستان باشاری؟",
      val_title_line1: "اطمینان در درمان،",
      val_title_line2: "پیشگام در فناوری.",
      val_stat_1: "سال تجربه درمانی",
      val_stat_2: "پزشک متخصص",
      val_stat_3: "اورژانس شبانه‌روزی",
      val_link_about: "آشنایی با بیمارستان",
      doc_badge: "پزشکان ما",
      doc_title_line1: "همراه شما هستیم",
      doc_title_line2: "با برترین کادر",
      doc_title_line3: "پزشکان متخصص.",
      doc_all_link: "مشاهده تمام پزشکان",
      guide_badge: "راهنمای سلامت",
      guide_title: "آگاهی‌بخشی به شما",
      guide_desc: "از مقالات و مشاوره‌های تخصصی تنظیم شده توسط پزشکان برجسته ما بهره‌مند شوید.",
      guide_link_1: "بیماری‌ها و درمان‌ها",
      guide_link_2: "پرسش‌های متداول",
      guide_link_3: "راهکارهای زندگی سالم",
      guide_link_4: "مقالات علمی و پزشکی",
      news_main_title: "اخبار روز",
      news_view_all: "مشاهده تمام اخبار",
      news_title_1: "توانبخشی رباتیک چیست؟",
      news_title_2: "هیپرمی چیست و چه علائمی دارد؟",
      news_title_3: "پره اکلامپسی چیست؟",
      news_read_more: "ادامه مطلب",
      cta_badge: "خدمات ۲۴ ساعته و اورژانس شبانه‌روزی",
      cta_title_1: "سلامت شما به تعویق نمی‌افتد،",
      cta_title_2: "پزشکان ما همواره در دسترس شما هستند.",
      cta_desc: "در کمترین زمان ممکن نوبت آنلاین خود را ثبت کرده یا با مرکز اورژانس تماس حاصل نمایید.",
      cta_call_us: "تماس فوری",
      partners_badge: "طرف قرارداد با",
      partners_sub: "بیمه‌های تکمیلی درمان و بانک‌ها",
      footer_follow: "ما را دنبال کنید",
      footer_copy: "© 2026 بیمارستان باشاری. تمام حقوق محفوظ است.",
      footer_privacy: "سیاست حفظ حریم خصوصی",
      footer_terms: "شرایط استفاده"
    }
  };

  function setLanguage(lang) {
    if (!translations[lang]) return;
    
    document.documentElement.setAttribute('lang', lang);
    // Ayna efektini engellemek için yönü daima LTR'de sabit tutuyoruz:
    document.documentElement.setAttribute('dir', 'ltr');

    // Arapça / Farsça font geçişi için özel sınıf yönetimi
    if (lang === 'ar' || lang === 'fa') {
      document.body.classList.add('rtl-lang-font');
    } else {
      document.body.classList.remove('rtl-lang-font');
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    if (translations[lang].page_title) {
      document.title = translations[lang].page_title;
    }

    document.querySelectorAll('#cornerLangMenu li').forEach(li => {
      li.classList.toggle('active', li.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('basari_lang', lang);
  }

  // Sol Alt Köşe Dil Menüsü Açılır/Kapanır
  const cornerLangBtn = document.getElementById('cornerLangBtn');
  const cornerLangMenu = document.getElementById('cornerLangMenu');

  if (cornerLangBtn && cornerLangMenu) {
    cornerLangBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cornerLangMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      cornerLangMenu.classList.remove('show');
    });

    cornerLangMenu.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => {
        const selectedLang = li.getAttribute('data-lang');
        setLanguage(selectedLang);
      });
    });
  }

  const savedLang = localStorage.getItem('basari_lang') || 'tr';
  setLanguage(savedLang);

  const doctorsList = [
    { name: "Prof. Dr. Aydın BORA", specialty: "Radyoloji", image: "img/doktorlar/aydin-bora.jpg", link: "doktor-detay.html?id=aydin-bora" },
    { name: "Uzm. Dr. Ayşe Feyza MERTKAN", specialty: "Anestezi ve Reanimasyon", image: "img/doktorlar/ayse-feyza-mertkan.jpg", link: "doktor-detay.html?id=ayse-feyza-mertkan" },
    { name: "Uzm. Dr. Cengiz ÇALIŞIR", specialty: "Dahiliye (İç Hastalıkları)", image: "img/doktorlar/cengiz-calisir.jpg", link: "doktor-detay.html?id=cengiz-calisir" },
    { name: "Dyt. Ceren GAZİ", specialty: "Beslenme ve Diyet", image: "img/doktorlar/ceren-gazi.jpg", link: "doktor-detay.html?id=ceren-gazi" },
    { name: "Uzm. Dr. Cevat YILDIRIM", specialty: "Çocuk Sağlığı ve Hastalıkları", image: "img/doktorlar/cevat-yildirim.jpg", link: "doktor-detay.html?id=cevat-yildirim" },
    { name: "Dr. Emine KIRŞAN İLERİ", specialty: "Kadın Hastalıkları ve Doğum", image: "img/doktorlar/emine-kirsan-ileri.png", link: "doktor-detay.html?id=emine-kirsan-ileri" },
    { name: "Doç. Dr. Fatih Hikmet CANDAŞ", specialty: "Göğüs Cerrahisi", image: "img/doktorlar/fatih-hikmet-candas.jpg", link: "doktor-detay.html?id=fatih-hikmet-candas" },
    { name: "Uzm. Dr. Fazlı MUTLU", specialty: "Dahiliye (İç Hastalıkları)", image: "img/doktorlar/fazli-mutlu.jpg", link: "doktor-detay.html?id=fazli-mutlu" },
    { name: "Uzm. Dr. Hasan Hüseyin YILDIZ", specialty: "Fizik Tedavi ve Rehabilitasyon", image: "img/doktorlar/hasan-huseyin-yildiz.jpg", link: "doktor-detay.html?id=hasan-huseyin-yildiz" },
    { name: "Op. Dr. Hicabi GÖKDERELİ", specialty: "Genel Cerrahi", image: "img/doktorlar/hicabi-gokdereli.jpg", link: "doktor-detay.html?id=hicabi-gokdereli" },
    { name: "Dt. Hikmet Buse KULOĞLU", specialty: "Ağız ve Diş Sağlığı", image: "img/doktorlar/hikmet-buse-kuloglu.jpg", link: "doktor-detay.html?id=hikmet-buse-kuloglu" },
    { name: "Dt. Hikmet TAYFUR", specialty: "Ağız ve Diş Sağlığı", image: "img/doktorlar/hikmet-tayfur.jpg", link: "doktor-detay.html?id=hikmet-tayfur" },
    { name: "Uzm. Dr. Hülya KÜLTÜR", specialty: "Anestezi ve Reanimasyon", image: "img/doktorlar/hulya-kultur.jpg", link: "doktor-detay.html?id=hulya-kultur" },
    { name: "Yrd. Doç. Dr. Hülya SARIKAHYA", specialty: "Klinik Laboratuvar", image: "img/doktorlar/hulya-sarikahya.jpg", link: "doktor-detay.html?id=hulya-sarikahya" },
    { name: "Op. Dr. İsmail DALDAL", specialty: "Ortopedi ve Travmatoloji", image: "img/doktorlar/ismail-daldal.jpg", link: "doktor-detay.html?id=ismail-daldal" },
    { name: "Op. Dr. Kenan ÇALIŞKAN", specialty: "Kadın Hastalıkları ve Doğum", image: "img/doktorlar/kenan-caliskan.jpg", link: "doktor-detay.html?id=kenan-caliskan" },
    { name: "Op. Dr. Mehmet Akif AMBARCIOĞLU", specialty: "Beyin ve Sinir Cerrahisi", image: "img/doktorlar/mehmet-akif-ambarcioglu.jpg", link: "doktor-detay.html?id=mehmet-akif-ambarcioglu" },
    { name: "Uzm. Dr. Melahat TALİ", specialty: "Psikiyatri", image: "img/doktorlar/melahat-tali.jpg", link: "doktor-detay.html?id=melahat-tali" },
    { name: "Klinik Psk. Melis AVCI", specialty: "Klinik Psikoloji", image: "img/doktorlar/melis-avci.jpg", link: "doktor-detay.html?id=melis-avci" },
    { name: "Op. Dr. Mert DABAK", specialty: "Plastik, Rekonstrüktif ve Estetik Cerrahi", image: "img/doktorlar/mert-dabak.png", link: "doktor-detay.html?id=mert-dabak" },
    { name: "Uzm. Dr. Mesih YEL", specialty: "Kardiyoloji", image: "img/doktorlar/mesih-yel.jpg", link: "doktor-detay.html?id=mesih-yel" },
    { name: "Uzm. Dr. Nahide GÜLTEKİN ÇEM", specialty: "Dermatoloji (Cildiye)", image: "img/doktorlar/nahide-gultekin-cem.jpg", link: "doktor-detay.html?id=nahide-gultekin-cem" },
    { name: "Uzm. Dr. Parvana HUSEYNLİ", specialty: "Çocuk Sağlığı ve Hastalıkları", image: "img/doktorlar/parvana-huseynli.jpg", link: "doktor-detay.html?id=parvana-huseynli" },
    { name: "Op. Dr. Qayom Khan DOLATZAY", specialty: "Genel Cerrahi", image: "img/doktorlar/qayom-khan-dolatzay.png", link: "doktor-detay.html?id=qayom-khan-dolatzay" },
    { name: "Op. Dr. Selime DEMİRBAŞ", specialty: "Kadın Hastalıkları ve Doğum", image: "img/doktorlar/selime-demirbas.jpg", link: "doktor-detay.html?id=selime-demirbas" },
    { name: "Uzm. Dr. Serap Ruken TEKER", specialty: "Nöroloji", image: "img/doktorlar/serap-ruken-teker.png", link: "doktor-detay.html?id=serap-ruken-teker" },
    { name: "Uzm. Dr. Sezai ÖZDEMİR", specialty: "Acil Servis", image: "img/doktorlar/sezai-ozdemir.jpg", link: "doktor-detay.html?id=sezai-ozdemir" },
    { name: "Dt. Sezgin KOÇ", specialty: "Ağız ve Diş Sağlığı", image: "img/doktorlar/sezgin-koc.jpg", link: "doktor-detay.html?id=sezgin-koc" },
    { name: "Op. Dr. Tural MIRIYEV", specialty: "Üroloji", image: "img/doktorlar/tural-miriyev.png", link: "doktor-detay.html?id=tural-miriyev" },
    { name: "Op. Dr. Ümit KANAY", specialty: "Kulak Burun Boğaz (KBB)", image: "img/doktorlar/umit-kanay.png", link: "doktor-detay.html?id=umit-kanay" }
  ];

  const doctorCardsTrack = document.getElementById('doctorCardsTrack');
  const doctorNextBtn = document.getElementById('doctorNextBtn');
  const doctorPrevBtn = document.getElementById('doctorPrevBtn');

  function renderDoctors() {
    if (!doctorCardsTrack) return;

    doctorCardsTrack.innerHTML = doctorsList.map(doc => `
      <div class="doctor-card" onclick="window.location.href='${doc.link}'">
        <div class="doctor-img-wrap">
          <img src="${doc.image}" alt="${doc.name}" class="doctor-photo" loading="lazy" onerror="this.onerror=null;this.src='img/ceren-gazi.jpg';">
          <div class="doctor-overlay-grad"></div>
          <div class="doctor-info-box">
            <h4 class="doctor-name">${doc.name}</h4>
            <p class="doctor-spec">${doc.specialty}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderDoctors();

  if (doctorCardsTrack) {
    let currentSlide = 0;

    function getSlideMetrics() {
      const cards = doctorCardsTrack.querySelectorAll('.doctor-card');
      if (cards.length === 0) return { maxSlideIndex: 0, moveDistance: 0 };
      const cardWidth = cards[0].offsetWidth;
      const gap = 20;
      const moveDistance = cardWidth + gap;
      const maxSlideIndex = Math.max(0, cards.length - 2);
      return { maxSlideIndex, moveDistance };
    }

    function updateSlide() {
      const { moveDistance } = getSlideMetrics();
      doctorCardsTrack.style.transform = `translateX(-${currentSlide * moveDistance}px)`;
    }

    if (doctorNextBtn) {
      doctorNextBtn.addEventListener('click', () => {
        const { maxSlideIndex } = getSlideMetrics();
        if (currentSlide < maxSlideIndex) {
          currentSlide++;
        } else {
          currentSlide = 0;
        }
        updateSlide();
      });
    }

    if (doctorPrevBtn) {
      doctorPrevBtn.addEventListener('click', () => {
        const { maxSlideIndex } = getSlideMetrics();
        if (currentSlide > 0) {
          currentSlide--;
        } else {
          currentSlide = maxSlideIndex;
        }
        updateSlide();
      });
    }
  }

  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  let currentTheme = localStorage.getItem('basari_theme') || 'light';
  htmlRoot.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = htmlRoot.getAttribute('data-theme');
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', nextTheme);
      localStorage.setItem('basari_theme', nextTheme);
    });
  }

  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  const heroWrapper = document.getElementById('heroWrapper');
  const bgSlides = document.querySelectorAll('.hero-slide-bg');
  const textSlides = document.querySelectorAll('.text-slide');
  const microDots = document.querySelectorAll('.micro-dot');
  
  const totalSlides = bgSlides.length;
  let currentActiveIndex = 0;
  let isNavigating = false;

  function goToSlide(index) {
    if (index === currentActiveIndex || index < 0 || index >= totalSlides) return;
    currentActiveIndex = index;

    bgSlides.forEach((bg, idx) => {
      bg.classList.toggle('active', idx === index);
    });

    textSlides.forEach((txt, idx) => {
      txt.classList.toggle('active', idx === index);
    });

    microDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  window.addEventListener('scroll', () => {
    if (isNavigating || !heroWrapper) return;

    const scrollY = window.scrollY;
    const heroTop = heroWrapper.offsetTop;
    const heroHeight = heroWrapper.offsetHeight;
    const scrollableDistance = heroHeight - window.innerHeight;

    if (scrollableDistance > 0 && scrollY >= heroTop && scrollY <= (heroTop + scrollableDistance)) {
      const progress = (scrollY - heroTop) / scrollableDistance;
      let calculatedIndex = Math.floor(progress * totalSlides);
      if (calculatedIndex >= totalSlides) calculatedIndex = totalSlides - 1;

      goToSlide(calculatedIndex);
    } else if (scrollY < heroTop) {
      goToSlide(0);
    }
  }, { passive: true });

  function scrollToSlide(targetIndex) {
    isNavigating = true;
    goToSlide(targetIndex);

    const trackOffset = heroWrapper.offsetTop;
    const scrollableDistance = heroWrapper.offsetHeight - window.innerHeight;
    const targetScroll = trackOffset + (targetIndex / (totalSlides - 1)) * scrollableDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      isNavigating = false;
    }, 600);
  }

  microDots.forEach(dot => {
    dot.addEventListener('click', function() {
      const targetIndex = parseInt(this.getAttribute('data-slide'));
      scrollToSlide(targetIndex);
    });
  });

  const scrollDownBtn = document.getElementById('scrollDownBtn');
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
      if (currentActiveIndex < totalSlides - 1) {
        scrollToSlide(currentActiveIndex + 1);
      } else {
        const deptSection = document.getElementById('bolumler');
        if (deptSection) {
          deptSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  const searchBtn = document.getElementById('searchBtn');
  const searchModal = document.getElementById('searchModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCloseBackdrop = document.getElementById('modalCloseBackdrop');
  const searchInput = document.getElementById('searchInput');

  function openSearch() {
    searchModal.classList.add('active');
    setTimeout(() => searchInput.focus(), 150);
  }

  function closeSearch() {
    searchModal.classList.remove('active');
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeSearch);
  if (modalCloseBackdrop) modalCloseBackdrop.addEventListener('click', closeSearch);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mainNav.style.display === 'flex') {
        mainNav.style.display = 'none';
      } else {
        mainNav.style.display = 'flex';
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.top = '80px';
        mainNav.style.left = '0';
        mainNav.style.width = '100%';
        mainNav.style.backgroundColor = 'var(--bg-color)';
        mainNav.style.padding = '24px';
      }
    });
  }

  const deptCards = document.querySelectorAll('.dept-card');
  const bodyHotspots = document.querySelectorAll('.body-hotspot');

  function activateDepartment(deptKey) {
    deptCards.forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-target') === deptKey);
    });

    bodyHotspots.forEach(spot => {
      spot.classList.toggle('active', spot.getAttribute('data-dept') === deptKey);
    });
  }

  deptCards.forEach(card => {
    const targetKey = card.getAttribute('data-target');
    card.addEventListener('mouseenter', () => activateDepartment(targetKey));
    card.addEventListener('click', () => activateDepartment(targetKey));
  });

  bodyHotspots.forEach(spot => {
    const deptKey = spot.getAttribute('data-dept');
    spot.addEventListener('mouseenter', () => activateDepartment(deptKey));
    spot.addEventListener('click', () => activateDepartment(deptKey));
  });

  activateDepartment('heart');

  const statsSection = document.getElementById('hastanemiz');
  const counters = document.querySelectorAll('.counter');
  let hasAnimatedCounters = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const duration = 1500;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.floor(easeOut * target);

        counter.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  if (statsSection && counters.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedCounters) {
          hasAnimatedCounters = true;
          runCounters();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(statsSection);
  }

});

// Preloader Pürüzsüz Kapanış
    window.addEventListener('load', () => {
      const preloader = document.getElementById('sitePreloader');
      if (preloader) {
        setTimeout(() => {
          preloader.classList.add('fade-out');
          setTimeout(() => preloader.remove(), 400);
        }, 200);
      }
    });

    // Başa Dön Butonu (Yalnızca #bolumler / #bolumlerimiz bölümünden sonra görünür)
    document.addEventListener('DOMContentLoaded', () => {
      const backToTopBtn = document.getElementById('backToTopBtn');
      const targetSection = document.getElementById('bolumler') || document.getElementById('bolumlerimiz');

      if (backToTopBtn) {
        window.addEventListener('scroll', () => {
          // Eğer bölümler section'ı sayfada varsa onun konumuna göre, yoksa 500px sonra göster
          const triggerHeight = targetSection ? targetSection.offsetTop - 150 : 500;

          if (window.scrollY > triggerHeight) {
            backToTopBtn.classList.add('show');
          } else {
            backToTopBtn.classList.remove('show');
          }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
    });


    window.addEventListener('load', () => {
      hidePreloader();
    });

    // Sayfa yüklenmesinde en ufak bir takılma olursa diye 1.2 saniye güvenlik zaman aşımı (Özellikle Mobil İçin)
    setTimeout(() => {
      hidePreloader();
    }, 1200);

    function hidePreloader() {
      const preloader = document.getElementById('sitePreloader') || document.querySelector('.site-preloader');
      if (preloader && !preloader.classList.contains('fade-out')) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 400); // CSS transition süresiyle uyumlu
      }
    }
    