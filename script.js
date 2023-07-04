const sorular = [
    {
        soru: "En büyük gezegenin ismi nedir?",
        cevap: [
            { text: "Mars", dogruluk: false},
            { text: "Dünya", dogruluk: false},
            { text: "Neptün", dogruluk: false},
            { text: "Jüpiter", dogruluk: true},
        ]
    },
    {
        soru: "Kuyucaklı Yusuf adlı eser kime aittir?",
        cevap: [
            { text: "Sabahattin Ali", dogruluk: true},
            { text: "Yusuf Atılgan", dogruluk: false},
            { text: "Ahmet Davutoğlu", dogruluk: false},
            { text: "İsmail Köybaşı", dogruluk: false},
        ]
    },
    {
        soru: "Sinekli Bakkal Romanının Yazarı Aşağıdakilerden Hangisidir?",
        cevap: [
            { text: "Reşat Nuri Güntekin", dogruluk: false},
            { text: "Halide Edip Adıvar", dogruluk: true},
            { text: "Ziya Gökalp", dogruluk: false},
            { text: "Ömer Recep Erdoğan", dogruluk: false},
        ]
    },
    {
        soru: "Aşağıda Verilen İlk Çağ Uygarlıklarından Hangisi Yazıyı İcat Etmiştir?",
        cevap: [
            { text: "Hititler", dogruluk: false},
            { text: "Elamlar", dogruluk: false},
            { text: "Sümerler", dogruluk: true},
            { text: "Urartular", dogruluk: false},
        ]
    },
    {
        soru: "Tsunami Felaketinde En Fazla Zarar Gören Güney Asya Ülkesi Aşağıdakilerden Hangisidir?",
        cevap: [
            { text: "Endonezya", dogruluk: true},
            { text: "Srilanka", dogruluk: false},
            { text: "Tayland", dogruluk: false},
            { text: "Hindistan", dogruluk: false},
        ]
    },
    {
        soru: "2003 Yılında Euro Vizyon Şarkı Yarışmasında Ülkemizi Temsil Eden ve Yarışmada Birinci Gelen Sanatçımız Kimdir?",
        cevap: [
            { text: "Grup Athena", dogruluk: false},
            { text: "Sertap Erener", dogruluk: true},
            { text: "İmam Hatipoğlu", dogruluk: false},
            { text: "Ajda Pekkan", dogruluk: false},
        ]
    },
    {
        soru: "Mustafa Kemal Atatürk’ün Nüfusa Kayıtlı Olduğu İl Hangisidir?",
        cevap: [
            { text: "Bursa", dogruluk: false},
            { text: "Ankara", dogruluk: true},
            { text: "İstanbul", dogruluk: false},
            { text: "Gaziantep", dogruluk: false},
        ]
    },
    {
        soru: "Aşağıdakilerden Hangisi Dünya Sağlık Örgütünün Kısaltılmış İsmidir?",
        cevap: [
            { text: "Uhw", dogruluk: false},
            { text: "Unıcef", dogruluk: false},
            { text: "Who", dogruluk: true},
            { text: "RTE", dogruluk: false},
        ]
    },
    {
        soru: "Romen Rakamında Hangi Sayı Yoktur?",
        cevap: [
            { text: "0", dogruluk: true},
            { text: "31", dogruluk: false},
            { text: "100", dogruluk: false},
            { text: "1000", dogruluk: false},
        ]
    },
    {
        soru: "Bir Gün Kaç Saniyedir?",
        cevap: [
            { text: "86000", dogruluk: false},
            { text: "88600", dogruluk: false},
            { text: "86400", dogruluk: true},
            { text: "84800", dogruluk: false},
        ]
    },
    {
        soru: "Üç Büyük Dince Kutsal Sayılan Şehir Hangisidir?",
        cevap: [
            { text: "Mekke", dogruluk: false},
            { text: "Kudüs", dogruluk: true},
            { text: "Suriye", dogruluk: false},
            { text: "İstanbul", dogruluk: false},
        ]
    },
    {
        soru: "Hangi İlimizde Demiryolu Yoktur?",
        cevap: [
            { text: "Batman", dogruluk: false},
            { text: "Kütahya", dogruluk: false},
            { text: "Aydın", dogruluk: false},
            { text: "Muğla", dogruluk: true},
        ]
    },
    {
        soru: "Hangi Ülkenin İki Tane Başkenti Vardır?",
        cevap: [
            { text: "Güney Afrika", dogruluk: true},
            { text: "Senegal", dogruluk: false},
            { text: "El Salvador", dogruluk: false},
            { text: "Venezuela", dogruluk: false},
            { text: "Suriye-Türkiye", dogruluk: false},
        ]
    },
    {
        soru: "Cevdet Bey ve Oğulları Eseri Kime Aittir?",
        cevap: [
            { text: "Orhan Pamuk", dogruluk: true},
            { text: "Yahya Kemal Bayatlı", dogruluk: false},
            { text: "Atilla İlhan", dogruluk: false},
            { text: "Samipaşazade Sezai", dogruluk: false},
            { text: "Ahmet Haşim", dogruluk: false},
        ]
    },
    {
        soru: "Bir Sebepten Dolayı Tek Kulağına Küpe Takan Osmanlı Padişahı Kimdir?",
        cevap: [
            { text: "Kanuni Sultan Süleyman", dogruluk: false},
            { text: "Gay Yavuz Sultan Selim", dogruluk: true},
            { text: "Orhan Bey", dogruluk: false},
            { text: "Fatih Sultan Selim", dogruluk: false},
            { text: "II. Abdülhamit", dogruluk: false},
        ]
    },
    {
        soru: "Aşağıdaki Ülkelerden Hangisinin Nüfusu Daha Fazladır?",
        cevap: [
            { text: "İspanya", dogruluk: false},
            { text: "Fransa", dogruluk: false},
            { text: "İngiltere", dogruluk: false},
            { text: "Almanya", dogruluk: true},
            { text: "Türkiye||Suriye", dogruluk: false},
        ]
    },
    {
        soru: "Aspirinin Hammaddesi Nedir?",
        cevap: [
            { text: "Söğüt", dogruluk: true},
            { text: "Kokain", dogruluk: false},
            { text: "Morfin", dogruluk: false},
            { text: "Metamfetamin", dogruluk: false},
            { text: "Esrar", dogruluk: false},
        ]
    },
    {
        soru: "\"Labirentin Gölgesinde\" ve \"Sembollerin Gölgesinde\" adlı fantastik romanların yazarı kimdir?",
        cevap: [
            { text: "Haldun Taner", dogruluk: false},
            { text: "Mehmet Rauf", dogruluk: false},
            { text: "Yaşar Kemal", dogruluk: false},
            { text: "Yahya Karakurt", dogruluk: true},
        ]
    }
    
];
const soruBasligi = document.getElementById("question");
const cevapButon = document.getElementById("answer-buttons");
const sonrakiButon = document.getElementById("next-btn");


let gecerliSoruIndeksi = 0;
let score = 0;



function startQuiz(){
    gecerliSoruIndeksi = 0;
    score = 0;
    sonrakiButon.innerHTML = "Sonraki";
    resetState();
    showQuestion();
    
}
function showQuestion(){
    resetState();
    let gecerliSoru = sorular[gecerliSoruIndeksi];
    let questionNo = gecerliSoruIndeksi + 1;
    soruBasligi.innerHTML = questionNo + ". " + gecerliSoru.soru;
    

    gecerliSoru.cevap.forEach(cevap => {
        const button = document.createElement("button");
        button.innerHTML = cevap.text;
        button.classList.add("btn");
        cevapButon.appendChild(button);
        if(cevap.dogruluk){
            button.dataset.dogruluk = cevap.dogruluk;
            
        }
        button.addEventListener("click", selectAnswer);
        
        
        
    });
}

function resetState() {
    sonrakiButon.style.display = "none";
    
    
    while(cevapButon.firstChild){
        cevapButon.removeChild(cevapButon.firstChild);
       
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.dogruluk === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
        
        
    }
    Array.from(cevapButon.children).forEach(button => {
        if(button.dataset.dogruluk === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    sonrakiButon.style.display = "block";
    sonrakiButon.style.textTransform = "uppercase";
    
    
    
    
    

}

function showScore(){
    resetState();
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    soruBasligi.innerHTML = `${sorular.length} sorudan ${score} soruyu ${minutes}:${seconds.toString().padStart(2, "0")} sürede doğru cevapladın!  `;
    sonrakiButon.innerHTML = "Tekrar çöz";
    sonrakiButon.style.display = "block";
    stopTimer();
    
    
    
}

function handleNextButton(){
    gecerliSoruIndeksi++;
    if(gecerliSoruIndeksi < sorular.length){
        showQuestion();
    }else{
        showScore();
        totalTime = -1; 
    }
    
}

sonrakiButon.addEventListener("click", () =>{
    if(gecerliSoruIndeksi < sorular.length){
        handleNextButton();
    }else{
        startQuiz();
        startTimer(); 
    }
})

startQuiz();

var cursorImage = new Image();
cursorImage.src = 'https://cur.cursors-4u.net/cursors/cur-2/cur116.cur';
cursorImage.onload = function() {
  var cursorWidth = 32; 
  var cursorHeight = 32; 
  document.body.style.cursor = 'url("' + cursorImage.src + '") ' + (cursorWidth / 2) + ' ' + (cursorHeight / 2) + ', auto';
};

window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = "";
  });
  
  
  window.addEventListener('keydown', function(event) {
   
    if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
      event.preventDefault();
      return null;
    }
  });

const timerElement = document.getElementById("timer");
let totalTime = 0;
let timerInterval;

function startTimer() {
    totalTime = -1;
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  totalTime++;
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function stopTimer() {
  clearInterval(timerInterval);
}



document.addEventListener("DOMContentLoaded", startTimer);



  
  
  







// window.addEventListener('beforeunload', function(event) {
//     event.preventDefault();
//     event.returnValue = ''; 
//   });
  
  
