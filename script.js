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
        lyrics: '<span class="bold">Verse 1</span> Well Bo he has a horse he rides wherever he may go, The fastest thing you’ve ever seen, you cannot ride him slow, He keeps him tied beside the bed and, feeds him oats and hay, Bright red juicy apples after riding hard all day\n<span class="bold">Chorus</span> He is a cowboy, and o what a joy, His mother has him ride the range from morning until noon And then it’s lunch time, and then it’s nap time Locked up for snitching cookies, but his time is over soon His mother’s hero, he makes her heart glow No other man except his dad can captivate her so'
      },
      {
        name: 'He\'s A Rock',
        src: 'media/HesARockSample.mp3',
        lyrics: '<span class="bold">Verse 1</span> When the day seems dark, and the night won’t end, And you don’t think you can make it another day, When you try to find a little piece of mind, But the peace finds wings and quickly flies away   \n<span class="bold">Chorus</span> He’s a rock where you can stand, when the world is sinking sand, He’s a friend when all your friends have turned away, You can run to Him and hide, He will surely dry your eyes, Won’t you run and find the shelter that you need. \n<span class="bold">Verse 2 When you’re feeling low, don’t know where to go and no one seems to understand at all When you’re all alone, even when you’re home and you need someone to listen for awhile.</span>'
      },
      {
        name: 'Ive been running',
        src: 'media/IveBeenRunningSample.mp3',
        lyrics: '<span class="bold">Verse 1</span>\n<span class="bold">Verse 2</span> \n<span class="bold">Verse 3</span>'
      },
      {
        name: 'Lullaby',
        src: 'media/Lullaby.mp3',
        lyrics: '<span class="bold">Verse 1</span> I’ve been running, you know that I’ve been running away from You, I’ve been trying to live my life the way that I wanted to, Now I find that you’ve been waiting, You’ve been there anticipating my every move \n<span class="bold">Verse 2</span> Now I’m cryin’ you know that I am crying, I’m needing you, Lord I’m dyin’ I can’t believe the pain that I put you through, I’m so cold and I’m so weary, Won’t you hold me close and heal me again, Won’t you heal me again \n<span class="bold">Verse </span> I’m so thankful, so thankful for the patience You’ve shown to me How You love me, I can’t believe the way that You love me too You are God, so pure and holy Yet You made yourself so lowly to rescue me Won’t You rescue me'
      },
      {
        name: 'More than a Carpenter',
        src: 'media/MoreThanACarpenterSample.mp3',
        lyrics: '<span class="bold">Verse 1</span> More than a carpenter, more than a man, Here is a mystery we can’t understand, God in his fullness lives as you and as I, God in his fullness lives as if he could die \n<span class="bold">Verse 2</span> See how the plan was born in ages gone past, And when sin entered in the dye it was cast, Now he prepares the day to welcome the son, Kingdoms and nations swayed, his will will be done\n<span class="bold">Bridge</span> Can now the voice we hear be God’s very own, Can he who rules the earth step down from his throne, But now the blind can see, the demons made to flee, The lame rise and walk again, can this now be God with man? \n<span class="bold">Verse 3</span> And so the years recede and only a child can see, Only a broken man can now understand, God in his fullness hides his plans from the proud and wise, Bow now the knee and see that Jesus is deity'
      },
      {
        name: 'Thank You song',
        src: 'media/ThankYouSongSample.mp3',
        lyrics: '<span class="bold">Intro</span> I thank you Lord for sunshine and I thank you Lord for rain, I thank you Lord in good times and I’ll thank you through the pain, I thank you Lord for dying all alone upon that tree, I thank you Lord bearing all the sin you bore for me\n<span class="bold">Verse 1</span> I thank you Lord for little boys, with sand boxes and tonka toys, Baseball games and model trains and mud to walk in when it rains, I thank you Lord for pirate ships and ice cream even when it drips, For superman and trees to climb and camping in the summertime, I thank you Lord for little girls with fluffy skirts and pretty curls, For barbie dolls and cabbage patch, hugs for nothing never lack, For flirty eyes and puckered lips, silly rhymes and ropes to skip, For playing house and taking in any dog or cat that will play with them \n<span class="bold">Bridge</span> Its just a song to tell you, and its just a song to say, Im thankful for the many things you have brought my way. n<span class="bold">Verse 1</span> I thank you Lord for fathers how they word so tirelessly And yet they seem to find the time to bounce us on their knee For spankin us when we been bad and huggin us when we feel sad For teachin us to know right from wrong and totin’ us when the road is long For fixing pipes when they spring a leak and fixing hinges when they squeak For taking us on camping trips and calming mom when we make her flip I thank you Lord for mothersand the love you’ve given them To heal a hurt and wipe a tear and sayin’ things we need to hear For waiting up till we come in and worrying about our choice of friends For kissin’ us in front of school and makes us feel that we can’t lose  Forpicking up our dirty clothes and making sure we wipe our nose For cleaning house and cooking meals and making sure we take our pills For spanking us when we pitch a fit and telling us it’s not polite to spit For washing us behind our ears and calming all our childish fears'
      },
      {
        name: 'The Blue bird Song',
        src: 'media/TheBluebirdSong.mp3',
        lyrics: '<span class="bold">Chorus</span> there’s a bluebird that sits outside my window,and in the springtime he sings a song or two, he sings of floating on clouds as soft as pillows, and floating in the sky so blue \n<span class="bold">Verse 1</span> And in his travels across the fields and meadowsHe watches humans as they toil their weary way And says he wonders if they have no heavenly father Who watches o’er them night and day\n<span class="bold">Verse 2</span> A heavenly father who watches o’er the bluebird And clothes the flowers in the splend or that they wear Loves us much more than these and tells us not to worry About the things we eat or wear\n<span class="bold">Verse 3</span> For in his wisdom he planned the world around us And everything he made relects his love and care And if you’re careful when you look outside your window Yo u’ll see the love he’s planted there.'
      },
      {
        name: 'Under Construction',
        src: 'media/UnderConstruction.mp3',
        lyrics: '<span class="bold">Verse 1</span> EVERYBODY WANTA BE JUST LIKE JESUS?, WE DO , WE DO, EVERYBODY WANTA BE JUST LIKE JESUS?,WE DO , WE DO\n<span class="bold">Chorus</span> EVERYBODY WANTA BE CLEAN?, YEA!, EVERYBODY WANTA BE FREE?, YEA!, EVERYBODY WANTA BE STRONG?, YEA!, EVERYBODY WANTA TURN AWAY FROM WRONG?, WE ARE, WE ARE UNDER CONSTRUCTION!'
      },
      {
        name: 'You cant bother me',
        src: 'media/YouCantBotherMe.mp3',
        lyrics: '<span class="bold">Verse 1</span> All my sins are washed away and you can\'t bother me, All my sins are washed away and you can\'t bother me, Devil take your hands off me, I\'m God\'s son and I\'m set free, God\'s my god and you can\'t bother me\n<span class="bold">Chorus</span> Clap your hands and tell that man that you can\'t bother me Clap your hands and tell that man that you can\'t bother me Devil take your hands off me, I\'m God\'s son and I\'m set free God\'s my god and you can\'t bother me\n<span class="bold">Verse 2</span> Freedom, everybody say “Freedom, Freedom, everybody say “Freedom”, Devil take your hands off me, I\'m God\'s son and I\'m set free , God\'s my god and you can\'t bother me\n<span class="bold">Verse 3</span> Stand your ground and tell that man that you can\'t bother me Stand your ground and tell that man that you can\'t bother me Devil take your hands off me, I\'m God\'s son and I\'m set free 7 God\'s my god and you can\'t bother me\n<span class="bold">Verse 4</span> Jesus said that I am healed and you can\'t bother me Jesus said that I am healed and you can\'t bother me Devil take your hands off me, I\'m God\'s son and I\'m set free God\'s my god and you can\'t bother me'
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
      // const pauseButton = document.createElement('button');
      const stopButton = document.createElement('button');
      const lyricsButton = document.createElement('button');
      const lyricsDiv = document.createElement('div');
  
      span.textContent = song.name;
      playButton.innerHTML = `<i class="fas fa-play"></i>`;
      // pauseButton.innerHTML = `<i class="fas fa-pause"></i>`;
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
        // pauseButton.addEventListener('click', () => {
        //     if (audio) {
        //       audio.pause();
        //     }
        //   });
      
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
      // div.appendChild(pauseButton);
      div.appendChild(stopButton);
      div.appendChild(lyricsButton);
      li.appendChild(div);
      li.appendChild(lyricsDiv);
      songList.appendChild(li);
    });
  });