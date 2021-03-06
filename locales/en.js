export default async (context, locale) => {
  return await Promise.resolve({
    heading: {
      select_character: 'Select Your Character',
      about: 'About SoulWorker Skill Simulator',
      contributors: 'Contributors'
    },

    characters: {
      haru: {
        name: 'Haru',
        full_name: 'Haru Estia'
      },
      erwin: {
        name: 'Erwin',
        full_name: 'Erwin Arclight'
      },
      lily: {
        name: 'Lily',
        full_name: 'Lily Bloomerchen'
      },
      stella: {
        name: 'Stella',
        full_name: 'Stella Unibell'
      },
      jin: {
        name: 'Jin',
        full_name: 'Jin Seipatsu'
      },
      iris: {
        name: 'Iris',
        full_name: 'Iris Yuma'
      },
      chii: {
        name: 'Chii',
        full_name: 'Chii Aruel'
      },
      ephnel: {
        name: 'Ephnel',
        full_name: 'Ephnel'
      },
      nabi: {
        name: 'Nabi',
        full_name: 'Nabi'
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
      original_author: 'Original Author',
      maintainer: 'Maintainer',
      contributor: 'Contributor'
    },

    copyright: {
      creative_commons: 'Content is available under <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">Creative Commons Attribution-NonCommercial-ShareAlike</a> unless stated.',
      lion_games: 'Official Art, Game Content and Screenshots are trademarks and copyrights of <a href="http://www.liongames.co.kr/Front/" target="_blank">Lion Games</a> and the game\'s publishers.'
    }
  })
}
