// =========================================================
// TRANSLATIONS — shared by index.html and exhibition.html
// Load this file BEFORE javaS.js.
//
// Sara: the "en" side is copied verbatim from the current live
// text, so switching to English always restores exactly what's
// on the site now. The "mk" side is a first-pass translation —
// please review it for spelling/wording, especially the artwork
// reflections and honors text. Artwork titles (Искра меѓу нас,
// Капка бисер, etc.) are left identical in both languages since
// they're proper titles of the pieces, not translated on purpose.
// =========================================================
const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.exhibition": "Exhibition",
        "nav.honors": "Honors",
        "nav.contact": "Contact",
        "nav.menu": "Menu",

        "hero.eyebrow": "Visual artist — Skopje, North Macedonia",
        "hero.intro": "Painting became the language I found before I learned how to explain my emotions. <br><br> I work with acrylic, charcoal and mixed media to translate memories, emotions and human connection into visual form. Every piece is an invitation to pause, observe and feel.",
        "hero.meta.medium.label": "Medium",
        "hero.meta.medium.value": "Acrylic, charcoal, mixed media",
        "hero.meta.debut.label": "Debut",
        "hero.meta.debut.value": "Solo exhibition, 2026 - ,,Impuls''",
        "hero.meta.currently.label": "Currently",
        "hero.meta.currently.value": "Open for collaborations and orders",

        "hero.mobile.eyebrow": "Visual artist — Skopje",
        "hero.mobile.title": "Virtual<br><em>Gallery</em>",
        "hero.mobile.note": "Painting became the language I found before I learned how to explain my emotions.",

        "about.title": "About Me",
        "about.caption": "The artist behind the canvas, 2026",
        "about.quote": "\"Every brushstroke carries a piece of emotion that words could never express, speaking the language my <em>heart</em> cannot. \"",
        "about.p1": "I'm <span style=\"color: #584BBF; font-weight: bold\">Sara</span> - an artist at heart and a Computer Science and Engineering student at FINKI. While technology teaches me how things work, painting teaches me how they feel.",
        "about.p2": "Alongside my studies, I have followed my passion as a self-taught painter working mostly in acrylic and charcoal, drawn to experiment with mixed media and giving meanings to blank canvases. Since childhood, art has been my way of expressing emotions that words cannot fully describe.",
        "about.p3": "My journey through visual arts, UX/UI design, and web development has shown me that the most powerful ideas are born where logic meets emotion, creating pieces that invites people to pause, feel, and remember.",
        "about.facts.basedin.label": "Based in",
        "about.facts.basedin.value": "Skopje",
        "about.facts.practice.label": "Practice",
        "about.facts.practice.value": "Acrylic · Charcoal · Mixed media",
        "about.facts.started.label": "Started",
        "about.facts.started.value": "as soon as I could hold a pencil",

        "exhibition.title": "Exhibition",
        "exhibition.intro": "<strong>\"Impuls\"</strong> — my first solo exhibition, held 3rd-9th March 2026 in Skopje.",
        "exhibition.body": "Collection of 10 works created from moments when emotion overcomes routine and inner truth begins to surface. The exhibition explores the quiet yet powerful instant when feelings become impossible to ignore, transforming into color, texture, and form.",
        "exhibition.atmosphere.room": "The room",
        "exhibition.atmosphere.art": "The art",
        "exhibition.atmosphere.details": "Details",
        "exhibition.atmosphere.opening": "Opening night",
        "exhibition.cta": "View the full exhibition",

        "honors.title": "Honors &amp; Awards",
        "honors.year.young": "young age",
        "honors.item1.title": "National &amp; European Art Recognition",
        "honors.item1.text": "Recipient of multiple awards in children's and youth art competitions organized by the City of Skopje and the European Union, reflecting a long-standing dedication to visual arts from an early age.",
        "honors.item2.title": "British Embassy Art Competition Winner",
        "honors.item2.text": "Won first place in an art competition organized by the British Embassy, with the winning painting featured on a public billboard in the center of Skopje.",
        "honors.item3.title": "First Place – Skala Group Exhibition",
        "honors.item3.text": "Awarded first place in both the Junior and Senior categories at the Skala School Group Exhibition (2023), recognizing artistic excellence across two age divisions.",
        "honors.item4.title": "UX/UI+ Academy ",
        "honors.item4.text": "Received a scholarship to the UX/UI+ Academy (2023–2024) after earning first place at the Skala Group Exhibition, expanding my creative practice into digital design.",
        "honors.item5.title": "Young Art Group Exhibition",
        "honors.item5.text": "Selected to participate in the <em>Young Art</em> group exhibition organized by the Agency of Youth and Sports (December 2023), showcasing emerging young artists.",

        "contact.eyebrow": "Get in touch",
        "contact.title": "Let's make<br><em>the walls feel alive.</em>",
        "contact.sub": "Commissions, exhibitions, collaborations — open to all of it.",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.submit": "Send message",

        "exhibit.back": "Back to portfolio",
        "exhibit.eyebrow": "Solo exhibition - 2026",
        "exhibit.hero.title": "All Ten <em>Works</em>,<br>In Full",
        "exhibit.hero.lede1": "a collection born from years of inner growth, emotion, and self-discovery. Each artwork captures the moment when feelings become form, transforming silence into color, texture, and movement.",
        "exhibit.hero.lede2": "For me, art is not about providing answers but creating space for reflection - a dialogue between the self and the world. Impuls represents that quiet yet powerful instant when something deeply felt demands to be seen, inviting viewers to connect with their own emotions and interpretations.",
        "exhibit.hero.meta.title.label": "Title",
        "exhibit.hero.meta.title.value": "Impuls",
        "exhibit.hero.meta.works.label": "Works",
        "exhibit.hero.meta.works.value": "10 pieces, 2023–2026",
        "exhibit.hero.meta.medium.label": "Medium",
        "exhibit.hero.meta.medium.value": "Acrylic, choarcoal, mixed media",

        "gallery.title": "The Gallery",
        "gallery.intro": "Tap or click a piece to flip it - the back holds a short note on what it means.",
        "gallery.hint": "Tap to read",
        "gallery.backLabel": "What it means",

        "card1.medium": "Mixed media, 2026",
        "card1.back": "From the smoke, a love is born that settles within her mind. The smoke becomes a bridge between thought and heart, where dreams and reality dissolve into one another. Their silhouettes remain fragile and fleeting, like a feeling that exists only between a breath and its disappearance.",

        "card2.medium": "Mixed media, 2026",
        "card2.back": "Rather than a sign of weakness, tears become an ornament - a symbol of resilience and endurance. From our most fragile moments, something precious and lasting is born. Hidden emotions transform the soul into a reflection of timeless beauty and love.",

        "card3.medium": "Mixed media, 2026",
        "card3.back": "Sometimes the most important truths are not seen but heard from within. Attention, tenderness, and quiet reflection can create a place of peace and light in the most intimate corners of ourselves.",

        "card4.medium": "Acrylic on canvas, 2026",
        "card4.back": "An eternal inner dialogue between reason and the heart. Their intertwining reveals that it is the tension between opposites that shapes who we are. One gaze is turned toward the world, the other inward - a portrait of the human condition.",

        "card5.medium": "Acrylic on canvas, 2025",
        "card5.back": "In the moment when two fingertips almost meet, a light is born, reminding us that true connection does not require perfection - it only asks for the courage to come closer. Touch is more than contact; it is a passage from darkness into a shared light.",

        "card6.medium": "Mixed media, 2024",
        "card6.back": "Strength and power already exist within me, and only I can set myself free. I must undergo a spiritual transformation, reconnect with myself, and awaken from within. Carrying the torch of awakening is not easy. It begins with learning to love myself, to feel alive again, and to see my own reflection through new eyes.",

        "card7.medium": "Mixed media, 2026",
        "card7.back": "The mirror reveals what words cannot. The face whispers while the reflection speaks, exposing both what the world longs to see and what exists beneath the surface. It is where the inner and outer selves finally meet.",

        "card8.medium": "Mixed media, 2024",
        "card8.back": "In our constant pursuit of something better, we often forget our health. It is only when we face serious illness that we begin to see technology as hope. The progress of modern medicine offers us a second chance at life. Through innovation, we are given the opportunity to breathe once more - the breath of a new morning.",

        "card9.medium": "Mixed media, 2023",
        "card9.back": "A silence that erupts from within—a scream that cannot be heard, yet can be deeply felt. The face struggles to contain the cry burning beneath the skin, capturing the moment when the heart is screaming but the voice remains silent. It reflects the frustration and sorrow we carry inside, unseen and unheard by the world.",

        "card10.medium": "Mixed media, 2026",
        "card10.back": "A moment when the universe aligns with the longing for two souls destined to meet. A delicate red thread illuminates the darkness, connecting two silhouettes - an invisible force guiding them toward one another. It is the point where time and destiny briefly touch.",

        "foot.mixedmedia2026": "Mixed media, 2026",
        "foot.mixedmedia2024": "Mixed media, 2024",
        "foot.mixedmedia2023": "Mixed media, 2023",
        "foot.acrylic2026": "Acrylic, 2026",
        "foot.acrylic2025": "Acrylic, 2025",

        "card1.title": "A Spark Between Us",
        "card2.title": "Pearl Drop",
        "card3.title": "Whisper",
        "card4.title": "Double Pulse",
        "card5.title": "Touch",
        "card6.title": "Tell Me...",
        "card7.title": "YOU",
        "card8.title": "Breath In",
        "card9.title": "Scream",
        "card10.title": "11:11",

        "press.title": "In Conversation",
        "press.intro": "Interviews, features, and write-ups on the exhibition and the work behind it.",
        "press.kind.interview": "link to the Interview",
        "press.kind.event": "link to the event",
        "press1.title": "Every Artwork Is a Window Into My Inner World",
        "press2.title": "Impulse - Solo Exhibition at Cultural & Social Space Centar Jadro",
        "press3.title": "Student & Artist Sara Andonovska Presents Her First Solo Exhibition",
        "press4.title": "Impuls - Solo Exhibition Opening at Centar Jadro",
        "press5.title": "From UX/UI Design to Fine Art - My Creative Journey",

        "contactlite.eyebrow": "Want to know more?",
        "contactlite.title": "Back to the<br><em>rest of the site.</em>",

        "hero.name": "Sara<br><em>Andonovska</em><br>",
        "hero.mobile.name": "Sara <br> Andonovska",
    },

    mk: {
        "nav.home": "Дома",
        "nav.about": "Биографија",
        "nav.exhibition": "Изложба",
        "nav.honors": "Признанија",
        "nav.contact": "Контакт",
        "nav.menu": "Мени",

        "hero.eyebrow": "Визуелна уметница — Скопје, Северна Македонија",
        "hero.intro": "Уметноста стана јазикот што го најдов пред да научам како да ги објаснам своите емоции. <br><br> Работам со акрил, јаглен и мешани медиуми за да преточам спомени, емоции и човечка поврзаност во визуелна форма. Секое дело е покана да застанеш, да набљудуваш и да почувствуваш.",
        "hero.meta.medium.label": "Медиум",
        "hero.meta.medium.value": "Акрил, графит, комбиниран медиум",
        "hero.meta.debut.label": "Дебитантска изложба",
        "hero.meta.debut.value": " 2026 - „Импулс“",
        "hero.meta.currently.label": "Моментално",
        "hero.meta.currently.value": "Отворена за соработки и нарачки",

        "hero.mobile.eyebrow": "Визуелна уметница — Скопје",
        "hero.mobile.title": "Виртуелна<br><em>Галерија</em>",
        "hero.mobile.note": "Сликарството стана јазикот што го најдов пред да научам како да ги објаснам своите емоции.",

        "about.title": "За мене",
        "about.caption": "Зад платното, 2026",
        "about.quote": "„Секој потег на четката носи парче емоција што зборовите никогаш не би можеле да ја изразат, зборувајќи го јазикот што моето <em>срце</em> не може.“",
        "about.p1": "Јас сум <span style=\"color: #584BBF; font-weight: bold\">Сара</span> - уметник по душа и студент на Факултетот за информатички науки и компјутерско инженерство - ФИНКИ. Додека технологијата ме учи како функционираат работите, уметноста ме учи како се чувствуваат.",
        "about.p2": "Покрај студиите, ја негувам својата страст како самоука сликарка, користејќи ги медиумите акрил и јаглен, привлечена од експериментирање со комбинирани медиуми и давање значење на празни платна. Од детството, уметноста беше мојот начин на изразување на емоции што зборовите не можат целосно да ги опишат.",
        "about.p3": "Моето патување низ визуелните уметности, UX/UI дизајнот и веб развојот ми покажа дека најмоќните идеи се раѓаат таму каде логиката се среќава со емоцијата, создавајќи дела кои ги покануваат луѓето да застанат, почувствуваат и запомнат.",
        "about.facts.basedin.label": "Живее во",
        "about.facts.basedin.value": "Скопје",
        "about.facts.practice.label": "Медиуми",
        "about.facts.practice.value": "Акрил · Јаглен · Комбиниран медиум",
        "about.facts.started.label": "Започна",
        "about.facts.started.value": "од моментот кога земав молив во рака",

        "exhibition.title": "Изложба",
        "exhibition.intro": "<strong>„Импулс“</strong> - мојата прва самостојна изложба, одржана од 3-ти до 9-ти март 2026 година во Скопје.",
        "exhibition.body": "Колекција од 10 дела создадени од моменти кога емоцијата ја надминува рутината и внатрешната вистина почнува да излегува на површина. Изложбата го истражува тивкиот, но моќен момент кога чувствата стануваат невозможни за игнорирање, трансформирајќи се во боја, текстура и форма.",
        "exhibition.atmosphere.room": "Просторот",
        "exhibition.atmosphere.art": "Делата",
        "exhibition.atmosphere.details": "Детали",
        "exhibition.atmosphere.opening": "Отворање",
        "exhibition.cta": "Погледнете ја целата изложба",

        "honors.title": "Признанија & награди",
        "honors.year.young": "рана возраст",
        "honors.item1.title": "Национално и европско уметничко признание",
        "honors.item1.text": "Добитник на повеќе награди на детски и младински уметнички конкурси организирани од Град Скопје и Европската Унија, одраз на долгогодишна посветеност на визуелните уметности од рана возраст.",
        "honors.item2.title": "Победничка на конкурсот за уметност на Британската амбасада",
        "honors.item2.text": "Го освои првото место на конкурс за уметност организиран од Британската амбасада, при што победничката слика беше поставена на билборд во центарот на Скопје.",
        "honors.item3.title": "Прво место – Групна изложба на Скала",
        "honors.item3.text": "Доделено прво место во категориите Јуниори и Сениори на Групната изложба на училиштето Скала (2023), признание за уметничка извонредност во две возрасни групи.",
        "honors.item4.title": "UX/UI+ Академија",
        "honors.item4.text": "Стипендија за UX/UI+ Академијата (2023-2024) по освоеното прво место на групната изложба на Скала, проширувајќи ја креативната пракса кон дигиталниот дизајн.",
        "honors.item5.title": "Групна изложба „Млада уметност“",
        "honors.item5.text": "Избрана да учествувам на групната изложба <em>„Млада уметност“</em> организирана од Агенцијата за млади и спорт (декември 2023), претставувајќи млади уметници во подем.",

        "contact.eyebrow": "Стапи во контакт",
        "contact.title": "Да ги направиме<br><em>ѕидовите живи.</em>",
        "contact.sub": "Нарачки, изложби, соработки - расположена сум за сѐ.",
        "contact.form.name": "Име",
        "contact.form.email": "Е-пошта",
        "contact.form.message": "Порака",
        "contact.form.submit": "Испрати порака",

        "exhibit.back": "Назад кон портфолиото",
        "exhibit.eyebrow": "Самостојна изложба - 2026",
        "exhibit.hero.title": "Сите десет <em>дела</em>,<br>во целост",
        "exhibit.hero.lede1": "колекција родена од години внатрешен раст, емоции и самооткривање. Секое уметничко дело го зафаќа моментот кога чувствата стануваат форма, претворајќи ја тишината во боја, текстура и движење.",
        "exhibit.hero.lede2": "За мене, уметноста е прашање, а не одговор – дијалог со себе и светот, кој се слуша со срцето и се доживува со тишина, „Импулс“ го претставува тој тивок, но моќен момент кога нешто длабоко почувствувано бара да биде видено, поканувајќи ги гледачите да се поврзат со сопствените емоции и толкувања.",
        "exhibit.hero.meta.title.label": "Наслов",
        "exhibit.hero.meta.title.value": "Импулс",
        "exhibit.hero.meta.works.label": "Дела",
        "exhibit.hero.meta.works.value": "10 дела, 2023–2026",
        "exhibit.hero.meta.medium.label": "Медиум",
        "exhibit.hero.meta.medium.value": "Акрил, јаглен, комбиниран медиум",

        "gallery.title": "Галеријата",
        "gallery.intro": "Допри или кликни на дело за да се сврти - на задната страна има кратка белешка за неговото значење.",
        "gallery.hint": "Допри за да прочиташ",
        "gallery.backLabel": "Што значи",

        "card1.medium": "Комбиниран медиум, 2026",
        "card1.back": "Од чадот се раѓа љубовта што го населува нејзиниот ум, чадот е мост помеѓу мислите и срцето каде сонот и реалноста се мешаат. Нивните контури се кревки и минливи, како чувство што постои помеѓу здив и исчезнувањето.",

        "card2.medium": "Комбиниран медиум, 2026",
        "card2.back": "Наместо слабост солзите стануваат украс, симбол на сила и издржливост, од најкревките моменти се раѓа нешто вредно и трајно, тајните ја трансформираат душата да е симбол на вечна убавина и љубов.",

        "card3.medium": "Комбиниран медиум, 2026",
        "card3.back": "Понекогаш најважните вистини не ги гледаме туку ги слушаме одвнатре, вниманието и нежноста можат да создадат место на мир и светлина во најинтимните делови во нас.",

        "card4.medium": "Акрил на платно, 2026",
        "card4.back": "Вечната внатрешна борба меѓу разумот и срцето, преплетување кое покажува дека спротивност не создава како личност. Поглед кон светот и поглед кон себе - равенка на човекот.",

        "card5.medium": "Акрил на платно, 2025",
        "card5.back": "Во мигот кога прстите речиси се среќаваат, се создава светлина која сведочи дека вистинската поврзаност не бара совршенство, туку храброст да се приближиш. Допирот не е само контакт, тој е премин од темнина кон заедничката светлина.",

        "card6.medium": "Комбиниран медиум, 2024",
        "card6.back": "Моќта и силата лежи во мене и само јас можам да си се ослободам. Треба да доживеам духовна промена, да се поврзам со самата себеси, да има будење во мене. Не е лесно да го носам факелот на будењето. Затоа почнувам да се сакам самата себеси, да се почувствувам жива и да се видам со други очи во одразот од огледалото.",

        "card7.medium": "Комбиниран медиум, 2026",
        "card7.back": "Огледалото открива она што зборовите не можат. Лицето шепоти додека одразот зборува, откривајќи и она што светот сака да го види и она што постои под површината. Тоа е местото каде внатрешното и надворешното јас конечно се среќаваат.",

        "card8.medium": "Комбиниран медиум, 2024",
        "card8.back": "Во постојаната трка за подобро сѐ, секогаш забораваме на здравјето. Кога ќе се соочиме со сериозен здравствен проблем, единствениот спас го гледаме во технологијата. Нејзиниот напредокот во медицината ни дава втора шанса за живот. Со прогресивните технолошки апарати ни се дава можност повторно да вдишеме воздух, воздухот на новото утро..",

        "card9.medium": "Комбиниран медиум, 2023",
        "card9.back": "Тишина што експлодира одвнатре- вресок кој не се слуша но се чувствува, лицето се обидува да го задржи крикот што гори под кожата, момент кога срцето вреска а гласот не се испушта. Фрустрацијата и тагата што ги носиме во себе но никој не ги слуша",

        "card10.medium": "Комбиниран медиум, 2026",
        "card10.back": "Момент кога универзумот се порамнува со желбата за судбински споени души. Тенок црвен конец, што ја осветлува темнината, поврзува две силуети, невидлива сила која ги води еден кон друг, точка на пресек- миг кога времето и судбината се допираат.",

        "foot.mixedmedia2026": "Комбиниран медиум, 2026",
        "foot.mixedmedia2024": "Комбиниран медиум, 2024",
        "foot.mixedmedia2023": "Комбиниран медиум, 2023",
        "foot.acrylic2026": "Акрил, 2026",
        "foot.acrylic2025": "Акрил, 2025",

        "card1.title": "Искра меѓу нас",
        "card2.title": "Капка бисер",
        "card3.title": "Шепот",
        "card4.title": "Двоен пулс",
        "card5.title": "Допир",
        "card6.title": "Кажи ми",
        "card7.title": "ТИ",
        "card8.title": "Вдахнување",
        "card9.title": "Вресок",
        "card10.title": "11:11",

        "press.title": "Во разговор",
        "press.intro": "Интервјуа, објави и написи за изложбата и делото зад неа.",
        "press.kind.interview": "линк до интервјуто",
        "press.kind.event": "линк до настанот",
        "press1.title": "Секое уметничко дело е прозорец кон мојот внатрешен свет",
        "press2.title": "Импулс - Самостојна изложба во Културно-социјалниот простор Центар Јадро",
        "press3.title": "Студентка и уметница Сара Андоновска ја претстави својата прва самостојна изложба",
        "press4.title": "Импулс - Отворање на самостојна изложба во Центар Јадро",
        "press5.title": "Од UX/UI дизајн до ликовна уметност - моето креативно патување",

        "contactlite.eyebrow": "Сакаш да дознаеш повеќе?",
        "contactlite.title": "Назад кон<br><em>остатокот од сајтот.</em>",

        "hero.name": "Сара<br><em>Андоновска</em><br>",
        "hero.mobile.name": "Сара <br> Андоновска",
    }
};