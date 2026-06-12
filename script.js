const target=new Date('2026-09-06T00:00:00').getTime();
function update(){
 const now=Date.now();
 const diff=target-now;
 document.getElementById('days').innerText=Math.floor(diff/(1000*60*60*24));
 document.getElementById('hours').innerText=Math.floor(diff/(1000*60*60));
 document.getElementById('minutes').innerText=Math.floor(diff/(1000*60));
 document.getElementById('seconds').innerText=Math.floor(diff/1000);
}
setInterval(update,1000); update();

const verses=[
'Isaiah 41:10 — Fear not, for I am with you.',
'Joshua 1:9 — Be strong and courageous.',
'Philippians 4:6-7 — Do not be anxious about anything.',
'2 Timothy 1:7 — God has not given us a spirit of fear.'
];
document.getElementById('verse').innerText=verses[Math.floor(Math.random()*verses.length)];
