let btn = document.querySelector('.btn button');

btn.addEventListener('click',()=>{
    let img = "https://cdn.esahubble.org/archives/images/large/heic2018b.jpg";

    let link = new Image();
    link.src = img;
    
    let size;

    let start = new Date().getTime();
    let end;

    btn.innerHTML = "Calculating...";
    
    link.onload = async function () {
        end = new Date().getTime();
        await fetch(img).then((response) => {
          size = response.headers.get("content-length");
          speed();
        });
      };
    
    function speed(){
        let time = (end - start)/1000;
        let bit = size * 8;
        let bps = (bit / time).toFixed(2);
        let kbps = (bps / 1024).toFixed(2);
        let mbps = (kbps / 1024).toFixed(2);

        let bits = document.querySelector('.bit');
        let kb = document.querySelector('.kb');
        let mb = document.querySelector('.mb');

        bits.innerHTML = `${bps}`;
        kb.innerHTML = `${kbps}`;
        mb.innerHTML = `${mbps}`;
        
        btn.innerHTML = "Fetch Speed";
    }
});