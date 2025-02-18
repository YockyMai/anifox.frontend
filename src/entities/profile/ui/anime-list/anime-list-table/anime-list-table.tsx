import { Button, InfinityLoadingContainer } from '@anifox/ui'
import { IconGripVertical } from '@tabler/icons-react'
import { Reorder, useDragControls } from 'framer-motion'
import React, { useMemo } from 'react'

import { useProfileStores } from '@/entities/profile'
import { Anime } from '@/services/api'
import { useUserAnimeListQuery } from '@/services/queries/use-user-anime-list-query'

import { AnimeListRow } from './anime-list-row'
import { AnimeListTableHeader } from './anime-list-table-header'
import { AnimeListRowProps } from './anime-list-table.interface'

export const AnimeListTable = ({ status }: AnimeListRowProps) => {
  const dragControls = useDragControls()

  const { $profile } = useProfileStores()

  const user = $profile.selectors.user()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useUserAnimeListQuery({
      status: status,
      login: user.preferred_username
    })

  // const list = useMemo(() => data?.pages.flat() ?? [], [])
  const list = useMemo<Anime[]>(() => {
    return [
      {
        title: 'Поднятие уровня в одиночку 2: Восстаньте из тени',
        image: {
          large:
            'https://cdn.anifox.club/images/anime/large/podniatie-urovnia-v-odinochku-2--vosstante-iz-teni/0a8868d45fc75c91687efedea503e1fb.jpg',
          medium:
            'https://cdn.anifox.club/images/anime/medium/podniatie-urovnia-v-odinochku-2--vosstante-iz-teni/a0a859e1ec1e2044715d20396ce44fc1.jpg',
          cover:
            'https://cdn.anifox.club/images/anime/cover/podniatie-urovnia-v-odinochku-2--vosstante-iz-teni/d9901c53ced6076512de562309274a1d.jpg'
        },
        url: 'podniatie-urovnia-v-odinochku-2--vosstante-iz-teni',
        type: 'Tv',
        rating: 10,
        rating_mpa: 'R',
        minimal_age: 18,
        description: '',
        year: 2025,
        status: 'Ongoing',
        season: 'Winter',
        episodes: 13,
        episodes_aired: 7,
        accent_color: '#B6BDDD',
        studio: [
          {
            id: '9aaedd9e-95a4-4509-8ab1-bd2e045e1b33',
            name: 'A-1 Pictures'
          }
        ]
      },
      {
        title: 'Монолог фармацевта 2',
        image: {
          large:
            'https://cdn.anifox.club/images/anime/large/monolog-farmatsevta-2/481b1b1ced6f8e5393dd63bae854318c.jpg',
          medium:
            'https://cdn.anifox.club/images/anime/medium/monolog-farmatsevta-2/a98d7c15e226252a862c73c1e1bd9841.jpg',
          cover:
            'https://cdn.anifox.club/images/anime/cover/monolog-farmatsevta-2/68a6ffe30ae11f6a93c011e7902c587b.jpg'
        },
        url: 'monolog-farmatsevta-2',
        type: 'Tv',
        rating: null,
        rating_mpa: 'PG-13',
        minimal_age: 16,
        description: '',
        year: 2025,
        status: 'Ongoing',
        season: 'Winter',
        episodes: 24,
        episodes_aired: 6,
        accent_color: '#51645D',
        studio: [
          {
            id: '096337e6-7464-48d4-98b5-efc26036c1f9',
            name: 'OLM'
          },
          {
            id: '9cc1461f-975e-45e8-8016-fc785e7448e2',
            name: 'TOHO animation STUDIO'
          }
        ]
      },
      {
        title: 'Доктор Стоун: Научное будущее',
        image: {
          large:
            'https://cdn.anifox.club/images/anime/large/doktor-stoun--nauchnoe-budushchee/f4842079112a3d93c1132cf952241f04.jpg',
          medium:
            'https://cdn.anifox.club/images/anime/medium/doktor-stoun--nauchnoe-budushchee/fdb77364f82d39e98cb7c17d07e55052.jpg',
          cover:
            'https://cdn.anifox.club/images/anime/cover/doktor-stoun--nauchnoe-budushchee/23a94c6142ac592aa081a838489748d6.jpg'
        },
        url: 'doktor-stoun--nauchnoe-budushchee',
        type: 'Tv',
        rating: null,
        rating_mpa: 'PG-13',
        minimal_age: 16,
        description: '',
        year: 2025,
        status: 'Ongoing',
        season: 'Winter',
        episodes: 12,
        episodes_aired: 6,
        accent_color: '#C4B0B5',
        studio: [
          {
            id: '7a24c1f0-44aa-46f3-9cae-593d1b8c2c0f',
            name: 'TMS Entertainment'
          }
        ],
        genres: [
          {
            id: '5b67a55d-a78b-421c-9af5-f227024563dd',
            name: 'Комедия'
          },
          {
            id: '58a016e6-0f62-4147-bc91-5e5781f9078d',
            name: 'Приключения'
          },
          {
            id: '8147082d-254b-4183-9de4-59fd08261e9c',
            name: 'Фантастика'
          },
          {
            id: 'e931c058-20b3-422d-bdc4-30d5ab827b89',
            name: 'Сёнен'
          }
        ]
      },
      {
        title: 'Медалистка',
        image: {
          large:
            'https://cdn.anifox.club/images/anime/large/medalistka/7badedf8488be67008d7053e110ba30b.jpg',
          medium:
            'https://cdn.anifox.club/images/anime/medium/medalistka/e06281b321e279f4c071cef628eac269.jpg',
          cover:
            'https://cdn.anifox.club/images/anime/cover/medalistka/49e9af0c71fb8693c52a513e240f6e9c.jpg'
        },
        url: 'medalistka',
        type: 'Tv',
        rating: null,
        rating_mpa: 'PG-13',
        minimal_age: 16,
        description:
          'Цукаса Акэурадзи мечтал бороться за медали в фигурном катании, но профессиональный спорт не терпит тех, кто приходит к таким мечтам слишком поздно. Будущие чемпионы Японии встают на лёд уже в пять лет, поэтому Цукасе, который только в средней школе осознал своё желание, была дорога лишь в танцы на льду, которые и рядом не стояли с его мечтаниями о сольном катании. \nК двадцати шести годам Цукаса только и делал, что довольствовался подработками, пока не встретил Инори Юицуку, в которой разглядел самого себя. На первый взгляд, Инори — тихая и суетливая пятиклассница без друзей, которую в её желании стать фигуристкой не поддерживает даже семья. И только Цукаса стал свидетелем того, как преображается эта неуклюжая и торопливая девочка, когда ступает на каток. Страсть Инори и её любовь к катанию словно подарили Цукасе новый шанс исполнить его собственную мечту, и он тут же решил стать для юной фигуристки той опорой, которой ему самому не хватало в своё время.\n\n«Я обязательно приведу тебя к победе!»',
        year: 2025,
        status: 'Ongoing',
        season: 'Winter',
        episodes: 13,
        episodes_aired: 8,
        accent_color: '#C5D2D3',
        studio: [
          {
            id: 'c6cccd52-8f15-4c18-8885-2edc3ec35925',
            name: 'ENGI'
          }
        ],
        genres: [
          {
            id: '9e847d98-da5a-42e3-9081-4713ef3f96dc',
            name: 'Спорт'
          },
          {
            id: '4b69fc82-5afb-4cae-9b53-d511946046ff',
            name: 'Сэйнэн'
          },
          {
            id: '2b673237-aabd-4260-aaa7-66a60351fab9',
            name: 'Драма'
          }
        ]
      },
      {
        title:
          'Сто девушек, которые очень-очень-очень-очень-очень сильно тебя любят 2',
        image: {
          large:
            'https://cdn.anifox.club/images/anime/large/sto-devushek--kotorye-ochen-ochen-ochen-ochen-ochen-silno-tebia-liubiat-2/df4c67ebb9665698a46bc77311109d03.jpg',
          medium:
            'https://cdn.anifox.club/images/anime/medium/sto-devushek--kotorye-ochen-ochen-ochen-ochen-ochen-silno-tebia-liubiat-2/269e58ece203353459220718806571d0.jpg',
          cover:
            'https://cdn.anifox.club/images/anime/cover/sto-devushek--kotorye-ochen-ochen-ochen-ochen-ochen-silno-tebia-liubiat-2/7c28b2b154f48b44770f272c8c53362d.jpg'
        },
        url: 'sto-devushek--kotorye-ochen-ochen-ochen-ochen-ochen-silno-tebia-liubiat-2',
        type: 'Tv',
        rating: null,
        rating_mpa: 'PG-13',
        minimal_age: 16,
        description: '',
        year: 2025,
        status: 'Ongoing',
        season: 'Winter',
        episodes: 12,
        episodes_aired: 6,
        accent_color: '#E3BAB4',
        studio: [
          {
            id: '7fdb25cd-b9b9-4983-97c5-750d59510064',
            name: 'Bibury Animation Studios'
          }
        ],
        genres: [
          {
            id: '4b69fc82-5afb-4cae-9b53-d511946046ff',
            name: 'Сэйнэн'
          },
          {
            id: '70796a72-668c-4f75-9f64-55747b8e5477',
            name: 'Романтика'
          },
          {
            id: 'fe81e4b2-9ab2-4a60-a123-92e400b9bcc8',
            name: 'Школа'
          },
          {
            id: '5c0b5dac-4163-47d6-ab26-cd1237964788',
            name: 'Гарем'
          },
          {
            id: '5b67a55d-a78b-421c-9af5-f227024563dd',
            name: 'Комедия'
          },
          {
            id: '8fb3121d-4691-425b-8960-af8f8623f965',
            name: 'Пародия'
          }
        ]
      },
      {
        title: 'Туалетный мальчик Ханако 2',
        image: {
          large:
            'https://cdn.anifox.club/images/anime/large/tualetnyi-malchik-khanako-2/3c4136ff2fabbfe3bdd9cd31ea69001f.jpg',
          medium:
            'https://cdn.anifox.club/images/anime/medium/tualetnyi-malchik-khanako-2/457423be8ac1a429ba8cdd7ff4810418.jpg',
          cover: ''
        },
        url: 'tualetnyi-malchik-khanako-2',
        type: 'Tv',
        rating: null,
        rating_mpa: 'PG-13',
        minimal_age: 16,
        description: '',
        year: 2025,
        status: 'Ongoing',
        season: 'Winter',
        episodes: 12,
        episodes_aired: 6,
        accent_color: '#9E554B',
        studio: [
          {
            id: 'a9394e73-92ce-4f08-a56a-415b535938de',
            name: 'Lerche'
          }
        ],
        genres: [
          {
            id: 'fe81e4b2-9ab2-4a60-a123-92e400b9bcc8',
            name: 'Школа'
          },
          {
            id: 'e931c058-20b3-422d-bdc4-30d5ab827b89',
            name: 'Сёнен'
          },
          {
            id: 'de4c7b7a-f594-4f02-88dc-d56d5d2ba662',
            name: 'Сверхъестественное'
          }
        ]
      },
      {
        title: 'Дни Сакамото',
        image: {
          large:
            'https://cdn.anifox.club/images/anime/large/dni-sakamoto/07f23e40ffb0770558a708d87d79e8b7.jpg',
          medium:
            'https://cdn.anifox.club/images/anime/medium/dni-sakamoto/6c3a0491511b5296302c886bb6b51be6.jpg',
          cover:
            'https://cdn.anifox.club/images/anime/cover/dni-sakamoto/4d876a3b0a424fb9a4c3140a1a0f166a.jpg'
        },
        url: 'dni-sakamoto',
        type: 'Tv',
        rating: null,
        rating_mpa: 'R',
        minimal_age: 18,
        description:
          'Таро Сакамото — живая легенда в мире профессиональных киллеров. До недавних пор у него были только преданные фанаты да враги... а теперь появилась и любимая девушка, которая строго наказала завязывать с убийствами! Ну, Сакамото долго не думал и ради свадьбы с любовью всей своей жизни отбросил криминальное прошлое, а затем поднабрал вес и посвятил себя семейному магазину и воспитанию любимой дочки.\nОднако у мира киллеров на Сакамото свои планы, бывшие коллеги не собираются дать ему просто так уйти. Сможет ли Сакамото, растерявший прежнюю форму, защитить себя и своих близких?!',
        year: 2025,
        status: 'Ongoing',
        season: 'Winter',
        episodes: 11,
        episodes_aired: 7,
        accent_color: '#A1B8B1',
        studio: [
          {
            id: '7a24c1f0-44aa-46f3-9cae-593d1b8c2c0f',
            name: 'TMS Entertainment'
          }
        ]
      }
    ]
  }, [])

  return (
    <Reorder.Item
      dragListener={false}
      dragControls={dragControls}
      value={status}
    >
      <p className='text-2xl font-bold'>{status}</p>

      <div className='overflow-hidden rounded bg-white drop-shadow-2xl'>
        <AnimeListTableHeader dragControls={dragControls} status={status} />

        <InfinityLoadingContainer
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        >
          <div>
            {list.map((anime) => (
              <AnimeListRow status={status} key={anime.url} anime={anime} />
            ))}
          </div>
        </InfinityLoadingContainer>
      </div>
    </Reorder.Item>
  )
}
