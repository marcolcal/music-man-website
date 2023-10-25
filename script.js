document.addEventListener('DOMContentLoaded', function() {
//     $(document).ready(function(){

//         $('#myCarousel').carousel({ interval: 3000 });
        
//         $('.multi-item-carousel .item').each(function(){
//         var itemToClone = $(this);
        
//         for (var i=1;i<6;i++) {
//         itemToClone = itemToClone.next();
        
//         if (!itemToClone.length) {
//         itemToClone = $(this).siblings(':first');
//         }
        
//         itemToClone.children(':first-child').clone()
//         .addClass("cloneditem-"+(i))
//         .appendTo($(this));
//         }
//         });
//         });


        
    const songs = [
      {
        name: 'Fall On Your knees',
        src: 'media/FallOnYourKneesSample.mp3',
        lyrics: '<span class="bold">Verse 1</span> To the God who created the oceans, all the creatures that swim in the sea To the One who created the mountains, and the eagles to fly high and free To the King of the furthest dominion, to the ruler of heaven and earth To the One who holds stars in the palm of His hand and has given to men the new birt \n<span class="bold">Chorus</span> I will offer my humble devotion, and will fall, fall on my knees Fall on your knees, for He is holy Fall on your knees, for He is the king Fall on your knees\n<span class="bold"> Verse 2</span> To the One who has offered His body to a world that despises His name To the One who is spotless and holy who alone bore my sin and my shame To the One who in death bore my sorrow, to the one by whose stripes we are healed To the One who from death rose victorious, who is now my redeemer and shield\n<span class="bold">Verse 3</span> I will offer my humble devotion, and will fall, fall on my knees Fall on your knees, for He is holy Fall on your knees, for He is the king Fall on your knees'
      },
      {
        name: 'Bo the Cowboy',
        src: 'media/BotheCowboy.mp3',
        lyrics: 'Verse 1 lyrics\nChorus lyrics'
      },
      {
        name: 'Hard Rock',
        src: 'media/HesARockSample.mp3',
        lyrics: 'Verse 1 lyrics\nChorus lyrics'
      },
      {
        name: 'Ive been running',
        src: 'media/IveBeenRunningSample.mp3',
        lyrics: 'Verse 1 lyrics\nChorus lyrics'
      },
      {
        name: 'Lullaby',
        src: 'media/Lullaby.mp3',
        lyrics: 'Verse 1 lyrics\nChorus lyrics'
      },
      {
        name: 'More than a Carpenter',
        src: 'media/MoreThanACarpenterSample.mp3',
        lyrics: 'Verse 1 lyrics\nChorus lyrics'
      },
      {
        name: 'Thank You song',
        src: 'media/ThankYouSongSample.mp3',
        lyrics: 'Verse 1 lyrics\nChorus lyrics'
      },
      {
        name: 'The Blue bird Song',
        src: 'media/TheBluebirdSong.mp3',
        lyrics: 'Verse 1 lyrics\nChorus lyrics'
      },
      {
        name: 'Under Construction',
        src: 'media/UnderConstruction.mp3',
        lyrics: 'Verse 1 lyrics\nChorus lyrics'
      },
      {
        name: 'You cant bother me',
        src: 'media/YouCantBotherMe.mp3',
        lyrics: 'Verse 1 lyrics\nChorus lyrics'
      },
      // add more songs here
    ];
  
    const songList = document.getElementById('song-list');
    console.log(songList);

    songs.forEach(song => {
      const li = document.createElement('li');
      const div = document.createElement('div');
      const span = document.createElement('span');
      const playButton = document.createElement('button');
      const pauseButton = document.createElement('button');
      const stopButton = document.createElement('button');
      const lyricsButton = document.createElement('button');
      const lyricsDiv = document.createElement('div');
  
      span.textContent = song.name;
      playButton.innerHTML = `<i class="fas fa-play"></i>`;
      pauseButton.innerHTML = `<i class="fas fa-pause"></i>`;
      stopButton.innerHTML =  `<i class="fas fa-stop"></i>`;
      playButton.dataset.src = song.src;
      lyricsButton.innerHTML = `<i class="fas fa-music"></i>`;
      lyricsDiv.innerHTML = song.lyrics;
      lyricsDiv.classList.add('hidden');

      div.classList.add("audio_controls")
  
      let audio = null;

      playButton.addEventListener('click', () => {
        if (audio) {
            audio.pause();
          }
        audio = new Audio(playButton.dataset.src);
        audio.play();
        });
        pauseButton.addEventListener('click', () => {
            if (audio) {
              audio.pause();
            }
          });
      
          stopButton.addEventListener('click', () => {
            if (audio) {
              audio.pause();
              audio.currentTime = 0;
            }
          });
      lyricsButton.addEventListener('click', () => {
        lyricsDiv.classList.toggle('hidden');
      });
  
      li.appendChild(span);
      div.appendChild(playButton)
      div.appendChild(pauseButton);
      div.appendChild(stopButton);
      div.appendChild(lyricsButton);
      li.appendChild(div);
      li.appendChild(lyricsDiv);
      songList.appendChild(li);
    });
  });