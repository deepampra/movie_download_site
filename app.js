

function searchMovie() {
    const movieName = document.getElementById('searchBar').value.toLowerCase();
    /*bad newz*/
    if (movieName.includes('bad newz')) {
        const badNewzLink = `
            <a href="badnewzdown.html">
                <img src="bad newz.webp" width="30%">
                <h1>Download Bad Newz (2024) Hindi Movie 480p | 720p | 1080p | 2160p WEB-DL ESub</h1>
            </a>`;
        document.getElementById('result').innerHTML = badNewzLink;
        /*munjya */
    } else if (movieName.includes('munjya')) {
        const munjyaLink = `
            <a href="munjyadownload.html">
                <img src="munjya.webp" width="30%">
                <h1>DOWNLOAD Munjya (2024) Hindi 1080p WEB-DL & 2160p (10bit)</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*kalki*/
    } else if (movieName.includes('kalki 2898 ad')) {
        const kalkiLink = `
            <a href="kalkidown.html">
                <img src="kalki-2898-a-d-offical-poster-v0-qd7gl7vni0xc1.webp" width="30%">
                <h1>DOWNLOAD Kalki 2898 AD (2024) 1080p + 2160p WEB-DL Multi Audio</h1>
            </a>`;
        document.getElementById('result').innerHTML = kalkiLink;

    } else if (movieName.includes('sarfira')) {
        const kalkiLink = `
            <a href="sarfiradown.html">
                <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/07/Sarfira-2024-Hindi-Movie.jpg" width="30%">
                <h1>Download Sarfira (2024) Hindi Movie 480p | 720p | 1080p WEB-DL ESub</h1>
            </a>`;
        document.getElementById('result').innerHTML = kalkiLink;

    } else if (movieName.includes('double i')) {
        const kalkiLink = `
            <a href="DoubleiSmartdown.html">
                <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/09/Double-iSmart-2024-Dual-Audio-Hindi-Telugu-Movie.jpg" width="30%">
                <h1>Download Double iSmart (2024) Dual Audio {Hindi-Telugu} Movie 480p | 720p | 1080p WEB-DL ESub</h1>
            </a>`;
        document.getElementById('result').innerHTML = kalkiLink;

   











    } else if (movieName.includes('ghosted')) {
        const kalkiLink = `
            <a href="ghosteddown.html">
                <img src="https://imgs.search.brave.com/JN42p7j3RuvH-sPm2FDkfgFIOYATd46EKG_bMwLUIO0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5HTXpZV1ps/WW1ZdE5UY3lNQzAw/WkdWakxUaGpOMkl0/TWpZNE1qa3dOMk5s/TWpZd1hrRXlYa0Zx/Y0dkZVFYVnlPVFUw/TmpZMU1ETUAuanBn" width="30%">
                <h1>Download Ghosted (2023) Dual Audio [Hindi-English] Movie 480p | 720p | 1080p | 2160p WEB-DL MSubs</h1>
            </a>`;
        document.getElementById('result').innerHTML = kalkiLink;


    } else if (movieName.includes('the other')) {
        const kalkiLink = `
            <a href="tozdown.html">
                <img src="https://bollyflix-cdn.store/wp-content/uploads/2023/10/The-Other-Zoey-2023-Movie.jpg" width="30%">
                <h1>Download The Other Zoey (2023) Dual Audio {Hindi-English} Movie 480p | 720p | 1080p WEB-DL ESub</h1>
            </a>`;
        document.getElementById('result').innerHTML = kalkiLink;



        /*phir aayi haseen dillruba */
    } else if (movieName.includes('phir aayi')) {
        const pahdLink = `
            <a href="pahd.html">
                <img src="phir-aayi-haseen-dilruba-new-poster-v0-7h-kEL9yaMOCXfJ73R776MyBZhdB96t7TYlo4dJoN20.webp" width="30%">
                <h1>Phir Aayi Hasseen Dillruba (2024) {Hindi +multi audio} 1080p</h1>
            </a>`;
        document.getElementById('result').innerHTML = pahdLink;
        /*kalki*/
    } else if (movieName.includes('kalki')) {
        const kalkiLink = `
            <a href="kalkidown.html">
                <img src="kalki-2898-a-d-offical-poster-v0-qd7gl7vni0xc1.webp" width="30%">
                <h1>DOWNLOAD Kalki 2898 AD (2024) 1080p + 2160p WEB-DL Multi Audio</h1>
            </a>`;
        document.getElementById('result').innerHTML = kalkiLink;
        /*kill */
    } else if (movieName.includes('kil')) {
        const munjyaLink = `
            <a href="killdownload.html">
                <img src="kill_ver2.webp" width="30%">
                <h1>DOWNLOAD kill (2024) Hindi 1080p WEB-DL & 2160p (10bit)</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*chandu champion */
    } else if (movieName.includes('chandu champ')) {
        const munjyaLink = `
            <a href="chanduchampiondown.html">
                <img src="MV5BZDY4ZjU3ODItZjEyYS00ZjI2LTljZWQtNWM0NTIxMGM3ZjI1XkEyXkFqcGc@.webp" width="30%">
                <h1>DOWNLOAD chandu champion(2024) Hindi 1080p WEB-DL & 2160p (10bit)</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*maidaan */
    } else if (movieName.includes('maida')) {
        const munjyaLink = `
            <a href="maidaandown.html">
                <img src="maidaan-indian-movie-poster.jpg" width="30%">
                <h1>Maidaan (2024) Hindi 1080p WEB-DL ESub  [ 2.87GB ]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*pathaan */
    } else if (movieName.includes('patha')) {
        const munjyaLink = `
            <a href="pathaandown.html">
                <img src="pathaan.webp" width="30%">
                <h1>Pathaan (2023) Hindi 1080p+[60FPS]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

        /*vedaaa*/
    } else if (movieName.includes('veda')) {
        const munjyaLink = `
            <a href="vedaadown.html">
                <img src="vedaa-indian-movie-poster-md.webp" width="30%">
                <h1>Download Vedaa (2024) Hindi 480p | 720p | 1080p WEB-DL </h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*stree 2 */
    } else if (movieName.includes('stree 2')) {
        const munjyaLink = `
            <a href="stree2down.html">
                <img src="Screenshot 2024-08-14 181258.png" width="30%">
                <h1>Download Stree 2: Sarkate Ka Aatank (2024) Hindi Movie 480p | 720p | 1080p | 2160p WEB-DL ESub</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*khel khel mein */
    } else if (movieName.includes('khel khel')) {
        const munjyaLink = `
            <a href="khelkheldown.html">
                <img src="khelkhelmein-20240723144940-22776.webp" width="30%">
                <h1>Khel Khel Mein (2024) Hindi 720 | 1080p WEB_DL</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*munjya */

    } else if (movieName.includes('deadpool')) {
        const munjyaLink = `
            <a href="deadpooldown.html">
                <img src="deadpool_and_wolverine_ver6.webp" width="30%">
                <h1>Download Deadpool And Wolverine (2024) {Hindi-English}  Movie 480p | 720p | 1080p | 2160p WEB-DL ESub</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*munjya */
    } else if (movieName.includes('animal')) {
        const munjyaLink = `
            <a href="amimaldown.html">
                <img src="animal.webp" width="30%">
                <h1>download Animal (2023) Hindi 1080p WEB-DL ESub [ 3.88GB ]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*munjya */
    } else if (movieName.includes('fighter')) {
        const munjyaLink = `
            <a href="fighterdown.html">
                <img src="fighter.png" width="30%">
                <h1>Fighter (2024) Hindi 1080p WEB-DL ESub [3.16GB]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*munjya */
    } else if (movieName.includes('shaita')) {
        const munjyaLink = `
            <a href="shaitaandown.html">
                <img src="220px-Shaitaan_2024_film_theatrical_poster.webp" width="30%">
                <h1>Shaitaan (2024) Hindi 1080p WEB-DL [2.5GB] ESub</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*munjya */
    } else if (movieName.includes('jawan')) {
        const munjyaLink = `
            <a href="jawandown.html">
                <img src="jawan.webp" width="30%">
                <h1>Jawan Extended Cut (2023) Hindi 1080p WEB-DL [3.5GB] ESub</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*munjya */
    } else if (movieName.includes('bade miya')) {
        const munjyaLink = `
            <a href="bmcmdown.html">
                <img src="BMCM.webp" width="30%">
                <h1>Bade Miyan Chote Miyan (2024) Hindi 1080p WEB-DL ESub[ 3.21GB</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


        /*munjya */
    } else if (movieName.includes('gangubai')) {
        const munjyaLink = `
            <a href="https://gplinks.co/W4DuAUcb">
                <img src="gangubai.jpg" width="30%">
                <h1>GANGUBAI KATHIAWADI (2022) Hindi 1080p WEB-DL ESub[3GB]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*munjya */


    } else if (movieName.includes('attack')) {
        const munjyaLink = `
            <a href="attackdown.html">
                <img src="attack.png" width="30%">
                <h1>Attack: Part 1 (2022) Hindi 1080p [2.2GB]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

        /*haseen  */
    } else if (movieName.includes('mumbai saga')) {
        const munjyaLink = `
            <a href="MSAGAdown.html">
                <img src="mumbai_saga_ver2_xlg.webp" width="30%">
                <h1>Download Mumbai Saga (2021) Hindi Movie 1080p[3.6GB] | 2160p WEB-DL[9.8GB] ESub</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


        /*haseen  */
    } else if (movieName.includes('Haseen Dillruba')) {
        const munjyaLink = `
            <a href="https://gplinks.co/Mpyf0s">
                <img src="haseen.webp" width="30%">
                <h1>Download Haseen Dillruba (2021) Hindi 1080p [2.6GB]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('satyamev jayate')) {
        const munjyaLink = `
            <a href="satyamevdown.html">
                <img src="220px-Satyameva_Jayate_-_2018_Movie_Poster.webp" width="30%">
                <h1>DOWNLOAD SATYAMEV JAYATE  1080P </h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('super 30')) {
        const munjyaLink = `
            <a href="https://www.udlinks.com/cm4E4vD">
                <img src="super 30.webp" width="30%">
                <h1>DOWNLOAD Super 30 (2019) 1080p Rip x264 DDP 5.1 [4.38GB]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('bang')) {
        const munjyaLink = `
            <a href="https://www.udlinks.com/n69wC">
                <img src="bang bang.webp" width="30%">
                <h1>DOWNLOAD Bang Bang (2014) 1080p BluRay x265 HEVC 10bit Hindi [ 5.23GB ]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('war')) {
        const munjyaLink = `
            <a href="https://gplinks.co/sjBCCN8">
                <img src="war-indian-movie-poster-md.webp" width="30%">
                <h1>DOWNLOAD War (2019) Hindi 1080p BluRay  [4.4GB]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

        /*haseen  */
    } else if (movieName.includes('dishoom')) {
        const munjyaLink = `
            <a href="dishoomdown.html">
                <img src="Dishoom-Poster.webp" width="30%">
                <h1>Download Dishoom (2016) Hindi Movie 1080p WEB-DL ESub</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

        /*haseen  */
    } else if (movieName.includes('stree')) {
        const munjyaLink = `
            <a href="streedown.html">
                <img src="stree.webp" width="30%">
                <h1>DOWNLOAD Stree (2018) Hindi 1080p [4GB]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */

    } else if (movieName.includes('krrish')) {
        const munjyaLink = `
            <a href="krrish3down.html">
                <img src="krrish 3.webp" width="30%">
                <h1>Krrish 3 2013 BluRay 1080p Hindi ESub 1080P 60FPS </h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

        /*haseen  */

    } else if (movieName.includes('kaab')) {
        const munjyaLink = `
            <a href="https://gplinks.co/dapvw2vP">
                <img src="kaabil.webp" width="30%">
                <h1>DOWNLOAD Kaabil (2017) Hindi Movie 1080p [4GB]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

        /*haseen  */

    } else if (movieName.includes('tala')) {
        const munjyaLink = `
            <a href="https://www.udlinks.com/yHOz5jW">
                <img src="The-mystery-continues-with-Aamir-Khan-s-Talaash-News.webp" width="30%">
                <h1>DOWNLOAD Talaash: The Answer Lies Within (2012) Hindi 1080p [4.3GB] </h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*maharaja */
    } else if (movieName.includes('maharaja')) {
        const munjyaLink = `
            <a href="https://gplinks.co/0a7XEDo2">
                <img src="maharaja-indian-movie-poster-md.webp" width="30%">
                <h1>DOWNLOAD Maharaja (2024) {Hindi-Tamil} 1080p (10bit) [3GB]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*guntur kaaram */
    } else if (movieName.includes('guntur')) {
        const munjyaLink = `
            <a href="https://gplinks.co/04Y7rNuA">
                <img src="Guntur_Kaaram_film_poster.webp" width="30%">
                <h1>DOWNLOAD Guntur Kaaram (2024) [Hindi-Telugu] 1080p [3.4GB]</h1> 
            </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*salaar */
    } else if (movieName.includes('salaar')) {
        const munjyaLink = `
        <a href="https://gplinks.co/0WtMHzP">
            <img src="Salaar-322x465.webp" width="30%">
            <h1>DOWNLOAD SALAAR (HINDI-TELUGU) 1080P</h1> 
        </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

        /*mirzapur */
    } else if (movieName.includes('mirzapur season 2')) {
        const munjyaLink = `
        <a href="mirzapur2down.html">
            <img src="s2.webp" width="30%">
            <h1>Mirzapur (Season 2) Hindi 1080p [3GB/E]</h1>  
        </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */

    } else if (movieName.includes('mirzapur 2')) {
        const munjyaLink = `
        <a href="mirzapur2down.html">
            <img src="s2.webp" width="30%">
            <h1>Mirzapur (Season 2) Hindi 1080p [3GB/E]</h1>  
        </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


        /*haseen  */
    } else if (movieName.includes('mirzapur season 3 ')) {
        const munjyaLink = `
    <a href="mirzapurdown.htmln.html">
            <img src="mirzapur.webp" width="30%">
            <h1>Mirzapur (Season 3) Bonus Episode</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('mirzapur')) {
        const munjyaLink = `
    <a href="mirzapurdown.htmln.html">
            <img src="mirzapur.webp" width="30%">
            <h1>Mirzapur (Season 3) Bonus Episode</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */

    } else if (movieName.includes('ek vil')) {
        const munjyaLink = `
    <a href="ekvilldown.html">
            <img src="ekvillainreturns11656313622[1].jpg" width="30%">
            <h1>Ek Villain Returns (2022) Hindi 1080p NF WEB-DL ESub[4.33GB] & 1080P 10bit (60FPS) [ 8.31GB ]</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('tumb')) {
        const munjyaLink = `
    <a href="tumbbaddown.html">
            <img src="tumbbad.webp" width="30%">
            <h1>DOWNLOAD Tumbbad 2018 Hindi 1080p HDRip 1.5GB</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('rocky h')) {
        const munjyaLink = `
    <a href="https://www.udlinks.com/fdJBflJ">
            <img src="rh.webp" width="30%">
            <h1>Rocky Handsome 2016 1080p [5.88GB]</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;



        /*haseen  */
    } else if (movieName.includes('crew')) {
        const munjyaLink = `
    <a href="hridayamdown.html">
            <img src="https://imgs.search.brave.com/YI5PAI95QwaT4po-gH6UdbSEH18dX-DrpNI_vBDojto/rs:fit:500:0:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/L2ludGwvaW5kaWEv/MjAyNC9wb3N0ZXJz/L2NyZXcuanBn" width="30%">
            <h1>Download Crew (2024) Hindi Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('hrida')) {
        const munjyaLink = `
    <a href="crewdown.html">
            <img src="https://imgs.search.brave.com/yce-PpgYbiS1i8qz9TQ-vr5DW0_MzBoWHOLGaR8gY38/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllUUTNZMkpt/TlRJdE5UZGtOQzAw/WVRsaExXSXlNVEl0/T1RSaVltRmlPREpq/Wm1ZeFhrRXlYa0Zx/Y0djQC5qcGc" width="30%">
            <h1>Download Hridayam (2022) Dual Audio {Hindi (HQ)-Malayalam} Movie 480p | 720p | 1080p HDRip</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;



      /*laila majnu  */
    } else if (movieName.includes('laila maj')) {
        const munjyaLink = `
    <a href="lailamajnudown.html">
            <img src="https://imgs.search.brave.com/7ThpQFXeRj4vnFYaFOsAObbM-zJehHG6JfyZMptp4uw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqSmtaamc0/WmpVdFlURmpNUzAw/WlRNM0xXSTJOVGN0/T0RNMU5qVXhNbUUz/WW1SalhrRXlYa0Zx/Y0dkZVFYVnlPRGsy/T0RJM01UVUAuanBn" width="30%">
            <h1>Download Laila Majnu (2018) Hindi Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


        /*haseen  */
    } else if (movieName.includes('raees')) {
        const munjyaLink = `
    <a href="raeesdown.html">
            <img src="raees.webp" width="30%">
            <h1>Download Raees (2017) Hindi Movie 480p | 720p BluRay</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('fan')) {
        const munjyaLink = `
    <a href="">
            <img src="fan.webp" width="30%">
            <h1>not available</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('chen')) {
        const munjyaLink = `
    <a href="cndown.html">
            <img src="chennai express.webp" width="30%">
            <h1>Download Chennai Express (2013) Hindi Movie 480p | 720p | 1080p BluRay ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('jab tak hai')) {
        const munjyaLink = `
    <a href="jthjdown.html">
            <img src="jab tak hai jaan.webp" width="30%">
            <h1>Download Jab Tak Hai Jaan (2012) Hindi Movie 480p | 720p | 1080p BluRay 500MB | 1.3GB ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


        /*haseen  */


    } else if (movieName.includes('don')) {
        const munjyaLink = `
    <a href="don2down.html">
            <img src="don 2.webp" width="30%">
            <h1>Download Don 2 (2011) Hindi Movie 480p | 720p | 1080p BluRay ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('om s')) {
        const munjyaLink = `
    <a href="osodown.html">
            <img src="om shanti om.webp" width="30%">
            <h1>Om Shanti Om (2007)</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('chak de')) {
        const munjyaLink = `
    <a href="chakdedown.html">
            <img src="chak de.webp" width="30%">
            <h1>Chak de! India (2007) Hindi Movie</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('bhaiya ji')) {
        const munjyaLink = `
    <a href="bhaiyajidown.html">
            <img src="BhaiyyaJiPoster.webp" width="30%">
            <h1>Bhaiyya Ji (2024) Hindi 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('bhediya')) {
        const munjyaLink = `
    <a href="bhediyadown.html">
            <img src="bhediya.webp" width="30%">
            <h1>Download Bhediya (2022) Hindi Movie 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('tiger')) {
        const munjyaLink = `
    <a href="tiger3down.html">
            <img src="tiger311693640073.webp" width="30%">
            <h1>Tiger 3 (2023) Hindi 1080p (10bit) [2.5GB]</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('bad boy')) {
        const munjyaLink = `
    <a href="https://gplinks.co/lClK42">
            <img src="bad-boy-1-768x1024.webp" width="30%">
            <h1>Bad Boy (2023) Hindi 1080p WEB-DL ESub [ 3.18GB ]</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */

    } else if (movieName.includes('rab ne')) {
        const munjyaLink = `
    <a href="RNBD.HTML">
            <img src="rab ne bna di.webp" width="30%">
            <h1>Download Rab Ne Bana Di Jodi (2008) Hindi Movie 480p | 720p | 1080p BluRay ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

        /*haseen  */
    } else if (movieName.includes('main h')) {
        const munjyaLink = `
    <a href="">
            <img src="main hoon na.webp" width="30%">
            <h1>Download main hoon na</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('kal ho na')) {
        const munjyaLink = `
    <a href="khnh.html">
            <img src="kal_ho_naa_ho_ver3.webp" width="30%">
            <h1>Download Kal Ho Naa Ho (2003) Hindi Movie 480p | 720p | 1080p BluRay ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('veer za')) {
        const munjyaLink = `
    <a href="veerzaradown.html">
            <img src="veer zara.webp" width="30%">
            <h1>Veer Zaara (2004) Hindi 480p + 720p + 1080p BluRay x265 HEVC 10bit Esub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('baadshah')) {
        const munjyaLink = `
    <a href="https://www.udlinks.com/vsVZ">
            <img src="baadshah.webp" width="30%">
            <h1>WATCH BAADSHAH MOVIE 1080P</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('Dilwale Dul')) {
        const munjyaLink = `
    <a href="DDLJDOWN.HTM">
            <img src="ddlj.webp" width="30%">
            <h1>Dilwale Dulhania Le Jayenge (1995) Hindi 1080p + 2160p 4k BluRay x265 HEVC 10bit Esub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


        /*haseen  */
    } else if (movieName.includes('baazigar')) {
        const munjyaLink = `
    <a href="baazigardown.html">
            <img src="bazigar.webp" width="30%">
            <h1>Baazigar (1993) Hindi 720p + 1080p x265 10Bit HEVC WEB-DL Esub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('apur')) {
        const munjyaLink = `
    <a href="apurvadown.html">
            <img src="apurva.webp" width="30%">
            <h1>Download Apurva (2023) Hindi Movie 480p | 720p | 1080p WEB-DL</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('andha')) {
        const munjyaLink = `
    <a href="andhashundown.html">
            <img src="andha.webp" width="30%">
            <h1>Download Andhadhun (2018) Hindi Movie 480p | 720p | 1080p BluRay</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('brah')) {
        const munjyaLink = `
    <a href="BRAMHASTRADOWN.HTML">
            <img src="brahmastra_part_one_shiva_xlg.webp" width="30%">
            <h1>Download Brahmastra Part One: Shiva (2022) Hindi Movie 480p | 720p | 1080p | 2160p WEB-DL ESub </h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

        /*haseen  */
    } else if (movieName.includes('ra one')) {
        const munjyaLink = `
    <a href="raonedown.html">
            <img src="ra-one-poster01.webp" width="30%">
            <h1>Download Ra.One (2011) Hindi Movie 480p | 720p | 1080p BluRay ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('vikram ve')) {
        const munjyaLink = `
    <a href="vikramvedhadown.html">
            <img src="vikram vedha.webp" width="30%">
            <h1>download vikram vedha 480p 720p 1080p</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('hasee')) {
        const munjyaLink = `
    <a href="https://gplinks.co/Mpyf0s">
            <img src="haseen.webp" width="30%">
            <h1>download haseen dilruba 480p 720p 1080p</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

        /*haseen  */
    } else if (movieName.includes('sanam teri')) {
        const munjyaLink = `
    <a href="stkdown.html">
            <img src="sanam teri kasam.webp" width="30%">
            <h1>Download Sanam Teri Kasam (2016) Hindi Movie 480p | 720p | 1080pp</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        /*haseen  */
    } else if (movieName.includes('life hil')) {
        const munjyaLink = `
    <a href="lifehillgyidown.html">
            <img src="life hill gyi.webp" width="30%">
            <h1>Download Life Hill Gayi (Season 1) Hindi Hotstar WEB Series 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('tadap')) {
        const munjyaLink = `
    <a href="https://gplinks.co/BPeuE">
            <img src="tadap.webp" width="30%">
            <h1>Download Tadap (2021) Hindi 720p [1GB]</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
    } else if (movieName.includes('tu jhoo')) {
        const munjyaLink = `
    <a href="https://gplinks.co/hhcuT">
            <img src="tu jhoothi.webp" width="30%">
            <h1>Tu Jhoothi Main Makkaar (2023) Hindi 1080p [3GB]</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('kabir si')) {
        const munjyaLink = `
    <a href="kabirsdown.html">
            <img src="Kabir-Singh-1.webp" width="30%">
            <h1>Download Kabir Singh (2019) Hindi Movie 480p | 720p | 1080p WEB-DL</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('trap')) {
        const munjyaLink = `
    <a href="trappeddown.html">
            <img src="trapped.png" width="30%">
            <h1>Download Trapped (2016) Hindi Movie 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

        //antim
    } else if (movieName.includes('antim')) {
        const munjyaLink = `
    <a href="antimdown.html">
            <img src="https://imgs.search.brave.com/Tmx7tUO6yWcQb6MKLQSnN4CnVnRLCqAFlEMGwKTcUWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudm94Y2luZW1h/cy5jb20vcG9zdGVy/cy9QX0hPMDAwMDg3/NDAuanBn" width="30%">
            <h1>Download Antim: The Final Truth (2021) Hindi Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
        //visfot
    } else if (movieName.includes('visfot')) {
        const munjyaLink = `
    <a href="visfotdown.html">
            <img src="https://imgs.search.brave.com/gainEDnD9ln2vB8Cp_83jD5Z7wfqNVo4vs3Wc9xswf4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZGlnaXQuaW4v/cHJvZHVjdC92aXNm/b3QtMWIwNjQ2Yzgy/My5qcGVn" width="30%">
            <h1>Download Visfot (2024) Hindi Movie 480p | 720p | 1080p | 2160p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('aveng')) {
        const munjyaLink = `
    <a href="allavengers.html">
            <img src="avengers.webp" width="30%">
            <h1>AVENGERS ALL [2012-2019] (ENG-HIN) 1080p & 2160p</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;



    } else if (movieName.includes('maharaj')) {
        const munjyaLink = `
    <a href="maharaj.html">
            <img src="https://imgs.search.brave.com/DZl5tw5kMVNVvCP38EU12YO-44H5nb_YNifL5nN2YjI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzMw/MF9hbmRfaDQ1MF9i/ZXN0djIvaDlvOEx4/R0w0WUhaS3hQckY5/NFZtMWpHdVBpLmpw/Zw" width="30%">
            <h1>Download Maharaj (2024) Multi Audio [Hindi-English-Tamil-Telugu] Movie 480p | 720p | 1080p WEB-DL MSubs</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;





    } else if (movieName.includes('the family')) {
        const munjyaLink = `
    <a href="familystar.html">
            <img src="https://imgs.search.brave.com/Wr-8iRBGgkXN6bCEGbToXJAbTAqrlUJD5COI9lZxKLE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5HRTRZelpt/TkdVdFlUUTNNUzAw/WmpreExUbG1Oemt0/WVdZNE5XRmlPRFZq/WmpaaFhrRXlYa0Zx/Y0djQC5qcGc" width="30%">
            <h1>Download Family Star (2024) Dual Audio {Hindi-Telugu} Movie 480p | 720p | 1080p | 2160p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;



    } else if (movieName.includes('midnight')) {
        const munjyaLink = `
    <a href="midnightdown.html.html">
            <img src="midnight.webp" width="30%">
            <h1>Download Midnight (2021) Dual Audio {Hindi-Korean} Movie 480p | 720p | 1080p BluRay ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('forgotten')) {
        const munjyaLink = `
    <a href="https://drivefire.co/file/lBLJh2XZWyREl9xRY4Jq">
            <img src="https://imgs.search.brave.com/On9zgbRfN1lHWe0Z5vnjnr3whY6qg2NhtO8eWZ03OaQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ni82ZC9SZWNhbGxf/dGhlX05pZ2h0XyUy/OCVFQSVCOCVCMCVF/QyU5NiVCNSVFQyU5/RCU5OF8lRUIlQjAl/QTQlMjkuanBnLzUx/MnB4LVJlY2FsbF90/aGVfTmlnaHRfJTI4/JUVBJUI4JUIwJUVD/JTk2JUI1JUVDJTlE/JTk4XyVFQiVCMCVB/NCUyOS5qcGc" width="30%">
            <h1>Download Movie Forgotten 2017 BluRay & 720p mkv Hindi English Subtitle</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('the great')) {
        const munjyaLink = `
    <a href="tgoatdown.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/09/The-Greatest-of-All-Time-G.O.A.T.-2024-Hindi-Dubbed-Movie.jpg" width="30%">
            <h1>Download The Greatest of All Time | G.O.A.T. (2024) Hindi Dubbed Movie 480p | 720p | 1080p CAMRip</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('batti g')) {
        const munjyaLink = `
    <a href="battiguldown.html">
            <img src="batti gul.webp" width="30%">
            <h1>Download Batti Gul Meter Chalu (2018) Hindi Movie 480p | 720p | 1080p</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('fast')) {
        const munjyaLink = `
    <a href="allf&f.html">
            <img src="https://imgs.search.brave.com/kMSFM1_Ti7Qpn_HyvWkaxMRk3b_jChmb8QprzkFx7FQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFicExnUmEraEwu/anBn" width="30%">
            <h1>ALL PARTS Fast and the Furious [2001-2023] Dual Audio {Hindi-English} Movie 480p | 720p | 1080p BluRay</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('vicky')) {
        const munjyaLink = `
    <a href="vickydonerdown.html">
            <img src="https://imgs.search.brave.com/BgdiihBx7sOyuWxrQkl5FugiM0xCS0-hfryRCYHncTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UUXdNVGN5/TWpZM09WNUJNbDVC/YW5CblhrRnRaVGN3/TmpVME1qWTJOd0BA/Ll9WMV9RTDc1X1VY/ODIwXy5qcGc" width="30%">
            <h1>Download Vicky Donor
        (2012) Hindi Movie 480p | 720p | 1080p BluRay ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('here')) {
        const munjyaLink = `
    <a href="hereditarydown.html">
            <img src="https://imgs.search.brave.com/N9sm1TVE5VB_wgEvBHqyU2cQPwY7WPTbBRI15s-LCys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFVNnNla2c5eUwu/anBn" width="30%">
            <h1>Hereditary (2018) {Hindi-English} Movie 480p | 720p | 1080p 2160p WEB-DL</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('the conjuring 2')) {
        const munjyaLink = `
    <a href="hereditarydown.html">
            <img src="https://imgs.search.brave.com/r8xQHr2tY1t2_4q5S5IvPn59LuON0c3ZTT2fGXfBveg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYmxvb2R5/LWRpc2d1c3Rpbmcu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzA0L0NKUjJf/MXNodF9NYWluX1Zl/cnRfMjc2NHg0MDk2/X0RPTV9tYXN0ZXIt/NjkxeDEwMjQuanBn/P3Jlc2l6ZT02OTEs/MTAyNA" width="30%">
            <h1>Download The Conjuring 2 (2016) Dual Audio {Hindi-English} Movie 480p | 720p | 1080p BluRay</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('shiddat')) {
        const munjyaLink = `
    <a href="shiddatdown.html">
            <img src="https://imgs.search.brave.com/5l_uzU1KPdn1LlDfRtEP4HS0N2N-7BYAkXYnp37j7jc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlptUXdZVEU0/TVRVdFpEVTNaQzAw/TTJVeUxUbGhaak10/T0dJeU1UWmpaalEz/TW1JNVhrRXlYa0Zx/Y0djQC5qcGc" width="30%">
            <h1>Download Shiddat (2021) Hindi Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('game of th')) {
        const munjyaLink = `
    <a href="allgameoft.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2023/11/Game-of-Thrones.jpg" width="30%">
            <h1>Download Game of Thrones (Season 01 – 08) Dual Audio (Hindi-English) WEB Series 480p | 720p | 1080p BluRay ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('train to busan')) {
        const munjyaLink = `
    <a href="tttdown.html">
            <img src="https://imgs.search.brave.com/IHosKVakFz9j7e6ypsjbQVnIQN2lRRukUMIpuXnivVk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFzUTNQSko4Mkwu/anBn" width="30%">
            <h1>Download Train to Busan 2: Peninsula (2020) Dual Audio {Hindi-English} Movie 480p | 720p | 1080p</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;



    } else if (movieName.includes('sultan')) {
        const munjyaLink = `
    <a href="sultandown.html">
            <img src="https://imgs.search.brave.com/iMg0Ot29qOctl6Oxv1v_DmnUROIBOsYNwV1vF7kMoGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MS8xZi9TdWx0YW5f/ZmlsbV9wb3N0ZXIu/anBnLzUxMnB4LVN1/bHRhbl9maWxtX3Bv/c3Rlci5qcGc" width="30%">
            <h1>DOWNLOAD SULTAN 2016 HINDI MOVIE 480P | 720P | 1080P Blue Ray Esub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
    } else if (movieName.includes('taaza khabar')) {
        const munjyaLink = `
    <a href="alltaazakhabar2down.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2023/01/Taaza-Khabar-Hindi-Hotstar-WEB-Series.jpg" width="30%">
            <h1>Download Taaza Khabar all season Hindi Hotstar WEB Series 480p| 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('tube')) {
        const munjyaLink = `
    <a href="tubelightdown.html">
            <img src="https://imgs.search.brave.com/gv3uE0HvO22_vytFkzq0E7Aj4VqZ5ui0MH0V0QWSuhw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1qVTFOemho/WkRrdE5UWTVZaTAw/T0dKbExUZzFaR0l0/WXpoaVpEQTNZams1/TW1JNVhrRXlYa0Zx/Y0dkZVFYVnlNVEE0/TmpFME5qRXkuX1Yx/X1FMNzVfVVg4MjBf/LmpwZw" width="30%">
            <h1>Download Tubelight (2017) Hindi Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
    } else if (movieName.includes('dream')) {
        const munjyaLink = `
    <a href="dreamgirldown.html">
            <img src="https://imgs.search.brave.com/WEjpw173fNLjha92PwLbJOf1uTimDotmarppLm3bDjg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllXWmpOMlk1/TW1JdFpqWTRPUzAw/WkROaExXSmxaalV0/T0RNeVpUSmxNek0w/TldJMVhrRXlYa0Zx/Y0djQC5qcGc" width="30%">
            <h1>Download Dream Girl (2019) Hindi Movie 480p | 720p | 1080p WEB-DL</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('dream girl 2')) {
        const munjyaLink = `
    <a href="dreamgirl2down.html">
            <img src="https://imgs.search.brave.com/Xryg0r_twBjdpY7XA14y2Sjw0I2qQd8P9S5FlFQF4x4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpHSTNPVEZr/TVRZdE9HUmxOQzAw/TnpSaUxUaGxOV0V0/T0dVMFl6ZGtZV1Jp/T1dVMFhrRXlYa0Zx/Y0dkZVFYVnlPREU1/TnpFM09URUAuanBn" width="30%">
            <h1>Download Dream Girl 2 (2023) Hindi Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
    
    } else if (movieName.includes('rusla')) {
        const munjyaLink = `
    <a href="ruslandown.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/05/Ruslaan-2024-Hindi-Movie.jpg" width="30%">
            <h1>Download Ruslaan (2024) Hindi Movie 480p | 720p | 1080p WEB-DL</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
    
    } else if (movieName.includes('3 Idiots')) {
        const munjyaLink = `
    <a href="3idiotsdown.html">
            <img src="hhttps://bollyflix-cdn.store/wp-content/uploads/2020/06/3-Idiots-2009-Hindi-Movie.jpg" width="30%">
            <h1>Download 3 Idiots (2009) Hindi Movie 480p | 720p | 1080p BluRay</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
    
   
    } else if (movieName.includes('sector 36')) {
        const munjyaLink = `
    <a href="sector36down.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/09/Sector-36-2024-Hindi-English-Tamil-Telugu-Movie.jpg" width="30%">
            <h1>Download Sector 36 (2024) Multi Audio [Hindi-English-Tamil-Telugu] Movie 480p | 720p | 1080p WEB-DL MSubs</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
   
   
   
    } else if (movieName.includes('guardians')) {
        const munjyaLink = `
    <a href="allgotg.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2023/07/Guardians-of-the-Galaxy-Vol.-3-Movie.jpg" width="30%">
            <h1>Download All Parts Guardians of the Galaxy (2017-2023) Dual Audio {Hindi-English} Movie 480p | 720p | 1080p | 2160p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
   
   
   
    } else if (movieName.includes('badnam gali')) {
        const munjyaLink = `
    <a href="badnamgalidown.html">
            <img src="https://imgs.search.brave.com/VS3u-CKjpIEcQ9l2OuWyD0JzOHC_ijUbwNHNIGq53L4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9HTmxaakZo/T1RRdE5EWmhOUzAw/Tmpsa0xUa3pZVFl0/TVRFNVlUYzNOVFEw/TnpReFhrRXlYa0Zx/Y0dkZVFYVnlPREU1/TnpFM09URUAuanBn" width="30%">
            <h1>Download Badnaam Gali (2019) Hindi Movie 480p | 720p | 1080p WEB-DL</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
    } else if (movieName.includes('citadel')) {
        const munjyaLink = `
    <a href="HONEYBUNNYdown.html">
            <img src="https://imgs.search.brave.com/gNKRn1Gm5Nc50D30eEht_estciznT4uNf3bFP5JE4KA/rs:fit:500:0:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/L2ludGwvaW5kaWEv/dHYvcG9zdGVycy9j/aXRhZGVsX2hvbmV5/X2J1bm55LmpwZw" width="30%">
            <h1>DOWNLOAD CITADEL: HONEY BUNNY (2024) SEASON 1 S01 480P| 720P | 1080P | 2160P 4K WEB-DL</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
   
      
    } else if (movieName.includes('manjummel')) {
        const munjyaLink = `
    <a href="mbouysdown.html">
            <img src="https://imgs.search.brave.com/eNGjEe4fSNd7EpOYwprh4crDV607tJcdc7qoogrmz6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1ETmhZalZp/WXpndFpqWmxOUzAw/WmpJMkxXSmtNMlF0/WXpabVpEVXhNV016/Tm1KalhrRXlYa0Zx/Y0djQC5qcGc" width="30%">
            <h1>Download Manjummel Boys (2024) Dual Audio {Hindi-Malayalam} Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
   

    } else if (movieName.includes('panchayat')) {
        const munjyaLink = `
    <a href="panchayat1down.html">
            <img src="https://bollyflix.fi/wp-content/uploads/2024/05/Panchayat-WEB-Series.jpg" width="30%">
            <h1>Download  All Seasons Panchayat (Season 1 – 3) Hindi Amazon Prime WEB Series 480p | 720p | 1080p | 2160p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
   

    } else if (movieName.includes('vetta')) {
        const munjyaLink = `
    <a href="vettadown.html">
            <img src="https://imgs.search.brave.com/xE9t93okQqpxgflCMAEVx50IN7GpquneFh1KUyldlEU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1qRXhaRGMx/TXpVdE5EYzNNaTAw/TkRjeExXRm1ZVEF0/WXpJMk16aGxNbUUz/WXpCaVhrRXlYa0Zx/Y0djQC5qcGc" width="30%">
            <h1>Download Vettaiyan (2024) {Hindi-Tamil}  Movie 480p | 720p | 1080p | 2160p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
    } else if (movieName.includes('devara')) {
        const munjyaLink = `
    <a href="devaradown.html">
            <img src="https://imgs.search.brave.com/UWlNxmXxNMTU_xQo1QWMTAsG1f3hrK5PIa3B0AhTWWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvNjhldGE1/ajNmZXBkMS5qcGVn" width="30%">
            <h1>Download Download Devara Part 1 (2024) Multi Audio [Hindi-English-Tamil-Telugu-Malayalam-Kannada] Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
    } else if (movieName.includes('arm')) {
        const munjyaLink = `
    <a href="armdown.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/09/A.R.M-Ajayante-Randam-Moshanam-2024-Dual-Audio-Hindi-Malayalam-Movie.jpg" width="30%">
            <h1>Download ARM (2024) {Hindi-Malayalam}  Movie 480p | 720p | 1080p | 2160p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   


    } else if (movieName.includes('siddharth roy')) {
        const munjyaLink = `
    <a href="Siddharthdown.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/11/Siddharth-Roy-2024-Dual-Audio-Hindi-HQ-Telugu-Movie.jpg" width="30%">
            <h1>Download Siddharth Roy (2024) Dual Audio {Hindi (HQ)-Telugu} Movie 480p | 720p | 1080p | 2160p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
      
    } else if (movieName.includes('sabar')) {
        const munjyaLink = `
    <a href="https://gplinks.co/Zq0Or7c">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/11/The-Sabarmati-Report-2024-Hindi-Movie.jpg" width="30%">
            <h1>Download The Sabarmati Report (2024) Hindi Movie 1080p HDTS</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('bhool bhu')) {
        const munjyaLink = `
    <a href="bhoolbhulaiyadown.html">
            <img src="https://imgs.search.brave.com/nls5Ed9MBdWO5GT1gpcIb5rHMdPVfML_EKrhdOQXOfo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHNjZG4xLnBheXRt/LmNvbS9pbWFnZXMv/Y2luZW1hL0Job29s/LUJ1bGFpeWEtNjA4/eDgwMC1iMmIwODVh/MC04ZDM5LTExZWYt/OTAyYy0wZjhiODhl/OTgyM2MuanBnP2Zv/cm1hdD13ZWJw" width="30%">
            <h1>download Bhool Bhulaiyaa 3 (2024) Hindi Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('singham again')) {
        const munjyaLink = `
    <a href="singhamagaindown.html">
            <img src="https://imgs.search.brave.com/0BqMOtp96GADaGUOiYs3dV2hYM7sWd0oIT0-j1Y0v_c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y2luZW1hdGVyaWFs/LmNvbS9wLzI5N3gv/ZDZmcnV2c3Evc2lu/Z2hhbS1hZ2Fpbi1p/bmRpYW4tbW92aWUt/cG9zdGVyLW1kLmpw/Zz92PTE3MjkyNDUz/ODM" width="30%">
            <h1>Download Singham Again (2024) Hindi Movie 480p | 720p | 1080p | 2160p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('alien')) {
        const munjyaLink = `
    <a href="Aliendown.html">
            <img src="https://imgs.search.brave.com/MMDSeafUNliCt4B2MPtOi6fPkRcZgXDopkWnh-AJHfU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1EVTBOamN3/T0dRdE5qTmpPUzAw/TnpRM0xXSXdNMll0/WVdWbU9EWmpNelF6/TjJFeFhrRXlYa0Zx/Y0djQC5qcGc" width="30%">
            <h1>Download Alien: Romulus (2024) Dual Audio [Hindi-English] Movie 480p | 720p | 1080p | 2160p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   



    } else if (movieName.includes('from')) {
        const munjyaLink = `
    <a href="Fromdown.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/09/Download-FROM-1.jpg" width="30%">
            <h1>Download From (Season 1-3) Dual Audio {Hindi-English} WEB Series 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;
   
    } else if (movieName.includes('pushpa 2')) {
        const munjyaLink = `
    <a href="pushpa2down.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2025/01/Pushpa-2-Reloaded-Hindi-WEB-DL-Full-Movie-BollyFlix.jpg" width="30%">
            <h1>Download Pushpa: The Rule – Part 2 (2024) Hindi Movie WEB-DL || 480p [700MB] || 720p [1.7GB] || 1080p [3.8GB]</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('the madne')) {
        const munjyaLink = `
    <a href="Madnessdown.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/11/The-Madness-WEB-Series.jpg" width="30%">
            <h1>Download The Madness (Season 1) Dual Audio [Hindi-English] WEB Series 480p | 720p | 1080p WEB-DL MSubs</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('lucky bh')) {
        const munjyaLink = `
    <a href="luckybaskhardown.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/11/Lucky-Baskhar-2024-Hindi-Telugu-Kannada-Malayalam-Tamil-Movie.jpg" width="30%">
            <h1>Download Lucky Baskhar (2024) Dual Audio [Hindi-Telugu] Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('octob')) {
        const munjyaLink = `
    <a href="octoberdown.html">
            <img src="https://imgs.search.brave.com/7kQrNUDcJ4adhkkm5He_WFhGp15_VXlISQNixXaoQXo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW51dGguY29t/LzIwMTcvMTAvMVZh/cnVuLURoYXdhbi1s/b29rcy1hbWF6aW5n/LWluLXRoaXMtbmV3/LXBvc3Rlci1vZi1P/Y3RvYmVyLmpwZw" width="30%">
            <h1>Download October (2018) Hindi Movie 480p | 720p | 1080p BluRay</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('pushpa')) {
        const munjyaLink = `
    <a href="pushpadown.html">
            <img src="https://imgs.search.brave.com/DAaTdc5DENpp_NhtgalBpSfKxSF_W3RxLs9D7YPb0uY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFNeEc4TnZma0wu/anBn" width="30%">
            <h1>Download Pushpa: The Rise (2021) Dual Audio {Hindi-Telugu} Movie 480p | 720p | 1080p | 2160p AMZN WEB-HDRip ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('scam')) {
        const munjyaLink = `
    <a href="scamdown.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2020/10/Scam-1992-The-Harshad-Mehta-Story-S01-Sonyliv-WEB-Series.jpg" width="30%">
            <h1>Download Scam 1992 The Harshad Mehta Story (2020) S01 Sonyliv WEB Series 480p | 720p | 1080p WEB-DL 200MB</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('geostorm')) {
        const munjyaLink = `
    <a href="https://gplinks.co/WtAPWmi">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/09/Geostorm-2017.jpg" width="30%">
            <h1>Download Geostorm (2017) Dual Audio [Hindi-English] Movie 1080p [2.4GB]BluRay ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('mufasa')) {
        const munjyaLink = `
    <a href="mufasadown.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2024/12/Mufasa-The-Lion-King-2024-Dual-Audio-Hindi-English-Movie.jpg" width="30%">
            <h1>Download Mufasa: The Lion King (2024) Dual Audio {Hindi-English} Movie 480p | 720p | 1080p HDTS</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('yo yo')) {
        const munjyaLink = `
    <a href="YOYOdown.html">
            <img src="https://imgs.search.brave.com/L2d0KEA8OayGFNUd6mLVyZr2L_-HGuyxt0zgqtDJWLo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9EZzVNVGhp/WWpJdE56WTNaaTAw/WTJaaUxXRmxOREF0/TXpaaE1XUTRaV0po/T1dJMFhrRXlYa0Zx/Y0djQC5qcGc" width="30%">
            <h1>Download Yo Yo Honey Singh: Famous (2024) Hindi Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('venom')) {
        const munjyaLink = `
    <a href="allvenom.html">
            <img src="https://imgs.search.brave.com/vAnTn2dSwL6sretFLlhUu87DngZiDsjEfQ9qsC1xg3o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNvbGxpZGVy/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDgv/dmVub20tMi1uZXct/cG9zdGVyLmpwZWc" width="30%">
            <h1>ALL PARTS VENOM IN HINDI & ENGLISH</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('baby jo')) {
        const munjyaLink = `
    <a href="babyjohndown.html">
            <img src="https://imgs.search.brave.com/iKQ8JuF-W-hczeG7NRo7lchAczG1dalcFV3a6KBp9D4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1EUmpOVEk1/WkdVdFpUbGhZUzAw/TldVMkxUbGhNbVF0/WkRNMk1UQXhaVFk1/WWpsbVhrRXlYa0Zx/Y0djQC5qcGc" width="30%">
            <h1>Download Baby John (2024) Hindi Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('marco')) {
        const munjyaLink = `
    <a href="marcodown.html">
            <img src="https://imgs.search.brave.com/51LhJlxAn5XVYKMMegJLSh_wlT52gpkT_qT2qr5K3bE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jYWNoZS5jaW5l/bWF0ZXJpYWwuY29t/L3AvNTAweC9pOHRi/empzcC9tYXJjby1p/bmRpYW4tbW92aWUt/cG9zdGVyLmpwZz92/PTE3MjcwNzEyMTI" width="30%">
            <h1>Download Marco (2024) Hindi Dubbed Movie 480p | 720p | 1080p WEB-DL</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('baghe')) {
        const munjyaLink = `
    <a href="bagheeradown.html">
            <img src="https://imgs.search.brave.com/X1OyZCltLVmK1-Wd49Ei5WrO5qZoZzhcSe_gicdcJU4/rs:fit:500:0:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/L2ludGwvaW5kaWEv/MjAyNC9wb3N0ZXJz/L2JhZ2hlZXJhLmpw/Zw" width="30%">
            <h1>Download Bagheera (2024) Dual Audio [Hindi-Kannada] Movie 480p | 720p | 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('squid')) {
        const munjyaLink = `
    <a href="allsquid.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2021/10/Squid-Game-Season-1-2.jpg" width="30%">
            <h1>Download All Squid Game Seasons 1-2 [Hindi-English-Korean]</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('fateh')) {
        const munjyaLink = `
    <a href="fatehdownload.html">
            <img src="https://imgs.search.brave.com/ZomRQcjVNkI3MFln9CP7r2vaSPO3cVZbxpZMJ8yAln8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1EVmlaR014/Wm1ZdFpXWmlOeTAw/TWprd0xUazRaV010/Tm1Vek56VTRZak5t/WWprMVhrRXlYa0Zx/Y0djQC5qcGc" width="30%">
            <h1>Download Fateh (2025) Hindi Movie 480p | 720p | 1080p Pre-HDRip]</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('marjaa')) {
        const munjyaLink = `
    <a href="https://gplinks.co/yZORTdkC">
            <img src="https://imgs.search.brave.com/uIA5414VT_wPq8THYNrG9RpAPaa7Yd1YsdB3wtotVZ4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1EUmpaams1/TkRrdE4yTmxZUzAw/T0RFd0xUaG1NR1F0/WkdRd1l6QTFZVE13/WmpBNFhrRXlYa0Zx/Y0djQC5qcGc" width="30%">
            <h1>Download Marjaavan(2019) Hindi Movie 1080p WEB-DL ESub</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('my fa')) {
        const munjyaLink = `
    <a href="https://gplinks.co/W5owg">
            <img src="https://imgs.search.brave.com/eKTgOKXRjXpBHE98BbE_NIeAvI12Jl7vFYykoSXmbaI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDUvbXktZmF1bHQt/cHJpbWUtdmlkZW8t/cG9zdGVyLmpwZw" width="30%">
            <h1> My Fault (2023) Multi Audio {Hindi-English-Spanish} 1080p WEB-DL MSubs</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else if (movieName.includes('azaad')) {
        const munjyaLink = `
    <a href="azaaddown.html">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2025/01/Azaad-2025.jpg" width="30%">
            <h1> Download Azaad (2025) Hindi Movie 480p | 720p | 1080p HDTS</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;

    } else if (movieName.includes('emergency')) {
        const munjyaLink = `
    <a href="https://gplinks.co/4Fqobvlp">
            <img src="https://bollyflix-cdn.store/wp-content/uploads/2025/01/Emergency-2025.jpg" width="30%">
            <h1>Download Emergency (2024) Hindi Movie| 1080p [2.5GB]Pre-HD</h1>  </a>`;
        document.getElementById('result').innerHTML = munjyaLink;


    } else {
        document.getElementById('result').innerHTML = `
      <p>NOT AVAILABLE PLEASE CONTACT ADMIN.</p>
      <button onclick="window.location.href='mailto:deepamp613@gmail.com'">
        Email 
      </button>
    `;
    }
}