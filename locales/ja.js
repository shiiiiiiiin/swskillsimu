export default async (context, locale) => {
  return await Promise.resolve({
    heading: {
      select_character: 'あなたのキャラクターを選択',
      about: 'ソウルワーカースキルシミュレータについて',
      contributors: '投稿者'
    },

    characters: {
      haru: {
        name: 'ハル',
        full_name: 'ハル・エスティア'
      },
      erwin: {
        name: 'アーウィン',
        full_name: 'アーウィン・アークライト'
      },
      lily: {
        name: 'リリー',
        full_name: 'リリー・ブルームメルヘン'
      },
      stella: {
        name: 'ステラ',
        full_name: 'ステラ・ユニベル'
      },
      jin: {
        name: 'ジン',
        full_name: 'ジン・セイパーツ'
      },
      iris: {
        name: 'イリス',
        full_name: 'イリス・ユマ'
      },
      chii: {
        name: 'チイ',
        full_name: 'チイ・アルエル'
      },
      ephnel: {
        name: 'エフネル',
        full_name: 'エフネル'
      },
      nabi: {
        name: 'ナビ',
        full_name: 'ナビ'
      }
    },

    about_content: [
      'The skill simulator is made based on the information from the Korean & Steam (Global) version of SoulWorker.',
      '<br>',
      'The skill simulator should work on most of modern browsers.',
      'Tested on (10.May.2022): Edge v101, Firefox v100, Chrome v101, Opera GX v85.',
      'As of now, the simulator video has skill preview video (<i>which require Promise object</i>).',
      '<br>',
      'Full change-log can be found here: Github Repository commit log or here: CHANGELOG'
    ],

    contributors_role: {
      original_author: '原作者',
      maintainer: 'メンテナ',
      contributor: '投稿者'
    },

    copyright: {
      creative_commons: 'Content is available under <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">Creative Commons Attribution-NonCommercial-ShareAlike</a> unless stated.',
      lion_games: 'Official Art, Game Content and Screenshots are trademarks and copyrights of <a href="http://www.liongames.co.kr/Front/" target="_blank">Lion Games</a> and the game\'s publishers.'
    }
  })
}
