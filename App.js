import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import IndexFeed from './app/component/IndexFeed';
import SongCombo from './app/component/SongCombo';

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
      },
      {
        id: 2,
        artist: 'Nas',
        albumName: 'Illmatic',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/2/27/IllmaticNas.jpg',
      },
      {
        id: 3,
        artist: 'M.anifest',
        albumName: 'No Where Cool',
        imgCover:
          'https://www.dcleakers.com/wp-content/uploads/2017/10/manifest-nowhere-cool-art.jpg',
      },
      {
        id: 4,
        artist: 'obrafour',
        albumName: 'pae mu ka',
        imgCover: 'https://m.media-amazon.com/images/I/711ChhXcm3L._SS500_.jpg',
      },
      {
        id: 5,
        artist: 'mobb deep',
        albumName: 'The infamous',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Mobbdeeptheinfamous1995.jpg/220px-Mobbdeeptheinfamous1995.jpg',
      },
      {
        id: 6,
        artist: 'M.I abaga',
        albumName: 'M.I 2',
        imgCover:
          'https://i.scdn.co/image/ab67616d0000b27360f8d62bbc9a8bc23d447927',
      },
      {
        id: 7,
        artist: 'Ko-jo Cue',
        albumName: 'For my brothers',
        imgCover:
          'https://www.dcleakers.com/wp-content/uploads/2019/11/Ko-jo-cue-for-my-brothers.jpg',
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
      },
      {
        id: 9,
        albumName: 'Slime Season 3',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/e/e2/Slime_Season_3_Cover.jpg',
      },
      {
        id: 10,
        albumName: 'The Lost Tapes 2',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/5/58/The_Lost_Tapes_II_by_Nas.jpg',
      },
      {
        id: 11,
        albumName: "King's Disease",
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/1/1e/King%27s_Disease_by_Nas.jpg',
      },
      {
        id: 12,
        albumName: 'It was Written',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/c/cc/Nas-it-was-written-music-album.jpg',
      },
      {
        id: 13,
        albumName: 'Scary Hours 2',
        imgCover:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Drake_-_Scary_Hours_2.png/220px-Drake_-_Scary_Hours_2.png',
      },
      {
        id: 14,
        albumName: 'Apae: The Price Of Free EP',
        imgCover:
          'https://cdns-images.dzcdn.net/images/cover/4fe4065928e65d2f5686a32c6e101a89/500x500.jpg',
      },
      {
        id: 15,
        albumName: 'Exhibit C',
        imgCover:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1C_UnFwIPGwGpo-QZyiO0epMdBGRKlOW5SwOsjOH1IIla6yly-HDDxT-vT_DdIAuo5_I&usqp=CAU',
      },
    ],
  },
];

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {DATA.map(item => {
        return (
          <SongCombo key={item.id} title={item.title} DATAS={item.songInfo} />
        );
      })}
      {/* <SongCombo />
      <SongCombo />
      <SongCombo /> */}
    </SafeAreaView>
  );
}

export default App;
