import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import SongCombo from './SongCombo';

const DATA = [
  {
    title: 'Good Evening',
    id: 1,
    songInfo: [
      {
        id: 1,
        artist: 'JAY-Z',
        albumName: 'The BluePrint',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/2/2c/The_Blueprint.png',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 2,
        artist: 'Nas',
        albumName: 'Illmatic',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/2/27/IllmaticNas.jpg',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 3,
        artist: 'M.anifest',
        albumName: 'No Where Cool',
        imgCover:
          'https://www.dcleakers.com/wp-content/uploads/2017/10/manifest-nowhere-cool-art.jpg',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 4,
        artist: 'obrafour',
        albumName: 'pae mu ka',
        imgCover: 'https://m.media-amazon.com/images/I/711ChhXcm3L._SS500_.jpg',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 5,
        artist: 'mobb deep',
        albumName: 'The infamous',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Mobbdeeptheinfamous1995.jpg/220px-Mobbdeeptheinfamous1995.jpg',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 6,
        artist: 'M.I abaga',
        albumName: 'M.I 2',
        imgCover:
          'https://i.scdn.co/image/ab67616d0000b27360f8d62bbc9a8bc23d447927',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 7,
        artist: 'Ko-jo Cue',
        albumName: 'For my brothers',
        imgCover:
          'https://www.dcleakers.com/wp-content/uploads/2019/11/Ko-jo-cue-for-my-brothers.jpg',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
    ],
  },
  {
    title: 'Recently Played',
    id: 2,
    songInfo: [
      {
        id: 8,
        albumName: 'Slime Language 2',
        imgCover:
          'https://media.pitchfork.com/photos/6082d5c597560d66ddd8190a/1:1/w_600/Young%20Thug,%20YSL%20&%20Gunna:%20Slime%20Language%202.jpeg',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 9,
        albumName: 'Slime Season 3',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/e/e2/Slime_Season_3_Cover.jpg',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 10,
        albumName: 'The Lost Tapes 2',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/5/58/The_Lost_Tapes_II_by_Nas.jpg',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 11,
        albumName: "King's Disease",
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/1/1e/King%27s_Disease_by_Nas.jpg',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 12,
        albumName: 'It was Written',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/c/cc/Nas-it-was-written-music-album.jpg',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 13,
        albumName: 'Scary Hours 2',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Drake_-_Scary_Hours_2.png/220px-Drake_-_Scary_Hours_2.png',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 14,
        albumName: 'Apae: The Price Of Free EP',
        imgCover:
          'https://cdns-images.dzcdn.net/images/cover/4fe4065928e65d2f5686a32c6e101a89/500x500.jpg',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
      {
        id: 15,
        albumName: 'Exhibit C',
        imgCover:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1C_UnFwIPGwGpo-QZyiO0epMdBGRKlOW5SwOsjOH1IIla6yly-HDDxT-vT_DdIAuo5_I&usqp=CAU',
        tracks: [
          {name: 'Stories Over'},
          {name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis'},
          {name: 'Empty Floor'},
          {name: 'Her Great Escape'},
          {name: 'Dark Noise'},
          {name: 'Drift', artist: 'Jan Blomqvist, Aparde'},
          {name: 'Same Mistake'},
          {
            name: 'Dancing People Are Never Wrong',
            artist: 'Jan Blomqvist, The Bianca Story',
          },
          {name: 'Back in the Taxi'},
          {name: 'Ghosttrack'},
          {name: 'Just OK'},
          {name: 'The End'},
        ],
      },
    ],
  },
];
function Feed() {
  // function renderItems() {
  //   DATA.map(item => {
  //     return (
  //       <SongCombo key={item.id} title={item.title} DATAS={item.songInfo} />
  //     );
  //   });
  // }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView bounces={false}>
        {DATA.map(item => {
          return (
            <SongCombo key={item.id} title={item.title} DATAS={item.songInfo} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Feed;
