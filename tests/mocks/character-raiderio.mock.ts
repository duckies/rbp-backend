import { RaiderIOCharacter } from '../../src/raiderIO/interfaces/raider-io-character.interface';

const CharacterRaiderIOMock = (name: string): RaiderIOCharacter => ({
  name: name,
  race: 'Blood Elf',
  class: 'Monk',
  active_spec_name: 'Mistweaver',
  active_spec_role: 'HEALING',
  gender: 'female',
  faction: 'horde',
  achievement_points: 27370,
  honorable_kills: 0,
  thumbnail_url:
    'https://render-us.worldofwarcraft.com/character/area-52/35/177267491-avatar.jpg?alt=wow/static/images/2d/avatar/10-1.jpg',
  region: 'us',
  realm: 'Area 52',
  profile_url: 'https://raider.io/characters/us/area-52/Duckys',
  profile_banner: 'classbanner_monk1',
  mythic_plus_scores_by_season: [
    {
      season: 'season-bfa-4',
      scores: {
        all: 2613.6,
        dps: 325.9,
        healer: 2597.3,
        tank: 0,
        spec_0: 0,
        spec_1: 2597.3,
        spec_2: 325.9,
        spec_3: 0,
      },
    },
    {
      season: 'season-bfa-3-post',
      scores: {
        all: 995.5,
        dps: 0,
        healer: 995.5,
        tank: 0,
        spec_0: 0,
        spec_1: 995.5,
        spec_2: 0,
        spec_3: 0,
      },
    },
  ],
  mythic_plus_best_runs: [
    {
      dungeon: 'Mechagon Junkyard',
      short_name: 'YARD',
      mythic_level: 20,
      completed_at: '2020-06-04T05:02:44.000Z',
      clear_time_ms: 1870911,
      num_keystone_upgrades: 1,
      map_challenge_mode_id: 369,
      score: 263.3,
      affixes: [
        {
          id: 9,
          name: 'Tyrannical',
          description:
            'Boss enemies have 40% more health and inflict up to 15% increased damage.',
          wowhead_url: 'https://wowhead.com/affix=9',
        },
        {
          id: 11,
          name: 'Bursting',
          description:
            'Upon death the creature Bursts, inflicting damage equal to 5% of maximum health every 1 sec. This effect stacks.',
          wowhead_url: 'https://wowhead.com/affix=11',
        },
        {
          id: 2,
          name: 'Skittish',
          description:
            'Enemies pay far less attention to threat generated by tanks.',
          wowhead_url: 'https://wowhead.com/affix=2',
        },
        {
          id: 120,
          name: 'Awakened',
          description:
            "Obelisks throughout the dungeon allow players to enter Ny'alotha and confront powerful servants of N'Zoth. If a servant is not dealt with, they must be faced during the final boss encounter.",
          wowhead_url: 'https://wowhead.com/affix=120',
        },
      ],
      url:
        'https://raider.io/mythic-plus-runs/season-bfa-4/17284763-20-operation-mechagon-junkyard',
    },
    {
      dungeon: 'The Underrot',
      short_name: 'UNDR',
      mythic_level: 21,
      completed_at: '2020-06-06T06:13:43.000Z',
      clear_time_ms: 1999242,
      num_keystone_upgrades: 0,
      map_challenge_mode_id: 251,
      score: 258.4,
      affixes: [
        {
          id: 9,
          name: 'Tyrannical',
          description:
            'Boss enemies have 40% more health and inflict up to 15% increased damage.',
          wowhead_url: 'https://wowhead.com/affix=9',
        },
        {
          id: 11,
          name: 'Bursting',
          description:
            'Upon death the creature Bursts, inflicting damage equal to 5% of maximum health every 1 sec. This effect stacks.',
          wowhead_url: 'https://wowhead.com/affix=11',
        },
        {
          id: 2,
          name: 'Skittish',
          description:
            'Enemies pay far less attention to threat generated by tanks.',
          wowhead_url: 'https://wowhead.com/affix=2',
        },
        {
          id: 120,
          name: 'Awakened',
          description:
            "Obelisks throughout the dungeon allow players to enter Ny'alotha and confront powerful servants of N'Zoth. If a servant is not dealt with, they must be faced during the final boss encounter.",
          wowhead_url: 'https://wowhead.com/affix=120',
        },
      ],
      url:
        'https://raider.io/mythic-plus-runs/season-bfa-4/17568287-21-the-underrot',
    },
    {
      dungeon: 'The MOTHERLODE!!',
      short_name: 'ML',
      mythic_level: 19,
      completed_at: '2020-06-04T04:22:45.000Z',
      clear_time_ms: 1644649,
      num_keystone_upgrades: 2,
      map_challenge_mode_id: 247,
      score: 245.2,
      affixes: [
        {
          id: 9,
          name: 'Tyrannical',
          description:
            'Boss enemies have 40% more health and inflict up to 15% increased damage.',
          wowhead_url: 'https://wowhead.com/affix=9',
        },
        {
          id: 11,
          name: 'Bursting',
          description:
            'Upon death the creature Bursts, inflicting damage equal to 5% of maximum health every 1 sec. This effect stacks.',
          wowhead_url: 'https://wowhead.com/affix=11',
        },
        {
          id: 2,
          name: 'Skittish',
          description:
            'Enemies pay far less attention to threat generated by tanks.',
          wowhead_url: 'https://wowhead.com/affix=2',
        },
        {
          id: 120,
          name: 'Awakened',
          description:
            "Obelisks throughout the dungeon allow players to enter Ny'alotha and confront powerful servants of N'Zoth. If a servant is not dealt with, they must be faced during the final boss encounter.",
          wowhead_url: 'https://wowhead.com/affix=120',
        },
      ],
      url:
        'https://raider.io/mythic-plus-runs/season-bfa-4/17284765-19-the-motherlode',
    },
  ],
  gear: {
    item_level_equipped: 478,
    item_level_total: 0,
    artifact_traits: 90.43944457160296,
    corruption: {
      added: 140,
      resisted: 105,
      total: 35,
      cloakRank: 15,
      spells: [
        {
          id: 318497,
          name: 'Deadly Momentum',
          icon: 'ability_hunter_raptorstrike',
          school: 5,
          rank: null,
        },
        {
          id: 315558,
          name: 'Severe',
          icon: 'ability_priest_shadowyapparition',
          school: 0,
          rank: null,
        },
        {
          id: 315558,
          name: 'Severe',
          icon: 'ability_priest_shadowyapparition',
          school: 0,
          rank: null,
        },
        {
          id: 318497,
          name: 'Deadly Momentum',
          icon: 'ability_hunter_raptorstrike',
          school: 5,
          rank: null,
        },
        {
          id: 318299,
          name: 'Flash of Insight',
          icon: 'spell_shadow_unholyfrenzy',
          school: 5,
          rank: null,
        },
        {
          id: 315554,
          name: 'Severe',
          icon: 'ability_priest_shadowyapparition',
          school: 0,
          rank: null,
        },
      ],
    },
    items: {
      head: {
        item_id: 174132,
        item_level: 480,
        item_quality: 4,
        icon: 'inv_helm_leatherraidnzoth_d_01',
        is_legion_legendary: false,
        is_azerite_armor: true,
        azerite_powers: [
          {
            id: 13,
            spell: {
              id: 263978,
              name: 'Azerite Empowered',
              icon: 'inv_smallazeriteshard',
              school: 0,
              rank: null,
            },
            tier: 999,
          },
          {
            id: 83,
            spell: {
              id: 268437,
              name: 'Impassive Visage',
              icon: 'inv_pet_inquisitoreye',
              school: 0,
              rank: null,
            },
            tier: 1,
          },
          {
            id: 463,
            spell: {
              id: 267889,
              name: 'Blessed Portents',
              icon: 'spell_holy_fanaticism',
              school: 0,
              rank: null,
            },
            tier: 2,
          },
          {
            id: 582,
            spell: {
              id: 317137,
              name: 'Heart of Darkness',
              icon: 'inv_heart_of_the_thunderking_icon',
              school: 5,
              rank: null,
            },
            tier: 3,
          },
          {
            id: 536,
            spell: {
              id: 287829,
              name: 'Secret Infusion',
              icon: 'ability_monk_thunderfocustea',
              school: 0,
              rank: null,
            },
            tier: 3,
          },
        ],
        corruption: {
          added: 0,
          resisted: 0,
          total: 0,
        },
        gems: [],
        bonuses: [4824, 1517, 4786, 6511],
      },
      neck: {
        item_id: 158075,
        item_level: 513,
        item_quality: 6,
        icon: 'inv_heartofazeroth',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        heart_of_azeroth: {
          essences: [
            {
              slot: 0,
              id: 32,
              rank: 3,
              power: {
                id: 123,
                essence: {
                  id: 32,
                  name: 'Conflict and Strife',
                  shortName: 'Conflict and Strife',
                  description: '',
                },
                tierId: 3,
                majorPowerSpell: {
                  id: 304121,
                  name: 'Conflict',
                  icon: 'spell_azerite_essence_17',
                  school: 0,
                  rank: 'Azerite Essence',
                },
                minorPowerSpell: {
                  id: 304123,
                  name: 'Strife',
                  icon: 'spell_azerite_essence_17',
                  school: 0,
                  rank: 'Azerite Essence',
                },
              },
            },
            {
              slot: 1,
              id: 17,
              rank: 4,
              power: {
                id: 112,
                essence: {
                  id: 17,
                  name: 'The Ever-Rising Tide',
                  shortName: 'The Ever-Rising Tide',
                  description: '',
                },
                tierId: 4,
                majorPowerSpell: {
                  id: 299876,
                  name: 'Overcharge Mana',
                  icon: 'spell_azerite_essence09',
                  school: 3,
                  rank: 'Azerite Essence',
                },
                minorPowerSpell: {
                  id: 299879,
                  name: 'The Ever-Rising Tide',
                  icon: 'inv_elemental_mote_mana',
                  school: 3,
                  rank: null,
                },
              },
            },
            {
              slot: 2,
              id: 37,
              rank: 3,
              power: {
                id: 143,
                essence: {
                  id: 37,
                  name: 'The Formless Void',
                  shortName: 'The Formless Void',
                  description: '',
                },
                tierId: 3,
                majorPowerSpell: {
                  id: 313922,
                  name: 'Replica of Knowledge',
                  icon: 'ability_essence_replicaofknowledge',
                  school: 2,
                  rank: 'Azerite Essence',
                },
                minorPowerSpell: {
                  id: 313920,
                  name: 'Symbiotic Presence',
                  icon: 'ability_essence_replicaofknowledge',
                  school: 2,
                  rank: 'Azerite Essence',
                },
              },
            },
            {
              slot: 3,
              id: 27,
              rank: 4,
              power: {
                id: 105,
                essence: {
                  id: 27,
                  name: 'Memory of Lucid Dreams',
                  shortName: 'Memory of Lucid Dreams',
                  description: 'An empty mind is a wasted tool.',
                },
                tierId: 4,
                majorPowerSpell: {
                  id: 299374,
                  name: 'Memory of Lucid Dreams',
                  icon: 'spell_azerite_essence05',
                  school: 0,
                  rank: 'Azerite Essence',
                },
                minorPowerSpell: {
                  id: 299373,
                  name: 'Lucid Dreams',
                  icon: 'spell_azerite_essence05',
                  school: 0,
                  rank: null,
                },
              },
            },
          ],
          level: 90,
          progress: 0.43944457160296024,
        },
        corruption: {
          added: 0,
          resisted: 10,
          total: 0,
        },
        gems: [],
        bonuses: [6316, 4932, 4933],
      },
      shoulder: {
        item_id: 159339,
        item_level: 480,
        item_quality: 4,
        icon: 'inv_shoulder_leather_kultirasdungeon_c_01',
        is_legion_legendary: false,
        is_azerite_armor: true,
        azerite_powers: [
          {
            id: 13,
            spell: {
              id: 263978,
              name: 'Azerite Empowered',
              icon: 'inv_smallazeriteshard',
              school: 0,
              rank: null,
            },
            tier: 999,
          },
          {
            id: 218,
            spell: {
              id: 274762,
              name: 'Strength of Spirit',
              icon: 'ability_monk_healthsphere',
              school: 0,
              rank: null,
            },
            tier: 1,
          },
          {
            id: 38,
            spell: {
              id: 267879,
              name: 'On My Way',
              icon: 'inv_boots_cloth_08',
              school: 0,
              rank: null,
            },
            tier: 2,
          },
          {
            id: 193,
            spell: {
              id: 273823,
              name: 'Blightborne Infusion',
              icon: 'ability_argus_soulbombdebuffsmall',
              school: 0,
              rank: null,
            },
            tier: 3,
          },
          {
            id: 387,
            spell: {
              id: 278576,
              name: 'Uplifted Spirits',
              icon: 'spell_monk_revival',
              school: 0,
              rank: null,
            },
            tier: 3,
          },
        ],
        corruption: {
          added: 0,
          resisted: 0,
          total: 0,
        },
        gems: [],
        bonuses: [5448, 1647, 4786, 6512],
      },
      back: {
        item_id: 169223,
        item_level: 500,
        item_quality: 5,
        icon: 'inv_misc_cape_deathwingraid_d_03',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 0,
          resisted: 95,
          total: 0,
          cloakRank: 15,
        },
        gems: [],
        bonuses: [6593, 1472],
      },
      chest: {
        item_id: 159330,
        item_level: 480,
        item_quality: 4,
        icon: 'inv_chest_leather_zandalardungeon_c_01',
        is_legion_legendary: false,
        is_azerite_armor: true,
        azerite_powers: [
          {
            id: 13,
            spell: {
              id: 263978,
              name: 'Azerite Empowered',
              icon: 'inv_smallazeriteshard',
              school: 0,
              rank: null,
            },
            tier: 999,
          },
          {
            id: 83,
            spell: {
              id: 268437,
              name: 'Impassive Visage',
              icon: 'inv_pet_inquisitoreye',
              school: 0,
              rank: null,
            },
            tier: 1,
          },
          {
            id: 38,
            spell: {
              id: 267879,
              name: 'On My Way',
              icon: 'inv_boots_cloth_08',
              school: 0,
              rank: null,
            },
            tier: 2,
          },
          {
            id: 386,
            spell: {
              id: 279875,
              name: 'Font of Life',
              icon: 'ability_monk_essencefont',
              school: 0,
              rank: null,
            },
            tier: 3,
          },
          {
            id: 536,
            spell: {
              id: 287829,
              name: 'Secret Infusion',
              icon: 'ability_monk_thunderfocustea',
              school: 0,
              rank: null,
            },
            tier: 3,
          },
        ],
        corruption: {
          added: 0,
          resisted: 0,
          total: 0,
        },
        gems: [],
        bonuses: [5448, 1647, 4786, 6510],
      },
      waist: {
        item_id: 159333,
        item_level: 475,
        item_quality: 4,
        enchant: 4223,
        icon: 'inv_belt_leather_kultirasdungeon_c_01',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 0,
          resisted: 0,
          total: 0,
        },
        gems: [],
        bonuses: [6536, 6578, 6513, 1647, 4786, 6516],
      },
      shirt: {
        item_id: 151116,
        item_level: 1,
        item_quality: 3,
        icon: 'inv_shirt_06',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 0,
          resisted: 0,
          total: 0,
        },
        gems: [],
        bonuses: [],
      },
      wrist: {
        item_id: 174138,
        item_level: 475,
        item_quality: 4,
        icon: 'inv_bracer_leatherraidnzoth_d_01',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 0,
          resisted: 0,
          total: 0,
        },
        gems: [],
        bonuses: [4824, 6516, 6515, 1517, 4786],
      },
      hands: {
        item_id: 173464,
        item_level: 470,
        item_quality: 4,
        icon: 'inv_glove_leatherraidnzoth_d_01',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 0,
          resisted: 0,
          total: 0,
        },
        gems: [],
        bonuses: [6412, 41, 6513, 6516, 1527, 4786],
      },
      legs: {
        item_id: 159297,
        item_level: 475,
        item_quality: 4,
        icon: 'inv_pant_leather_kultirasdungeon_c_01',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 35,
          resisted: 0,
          total: 35,
        },
        gems: [],
        bonuses: [6536, 6578, 6579, 6562, 6515, 1647, 4786],
      },
      feet: {
        item_id: 173496,
        item_level: 465,
        item_quality: 4,
        icon: 'inv_boot_leatherraidnzoth_d_01',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 20,
          resisted: 0,
          total: 20,
        },
        gems: [],
        bonuses: [6412, 6515, 6578, 6579, 6482, 6470, 1522, 4786],
      },
      finger1: {
        item_id: 158362,
        item_level: 465,
        item_quality: 4,
        enchant: 6108,
        icon: 'inv_ring_80_01e',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 20,
          resisted: 0,
          total: 20,
        },
        gems: [],
        bonuses: [6536, 6515, 1637, 4786, 6482, 6470],
      },
      finger2: {
        item_id: 158318,
        item_level: 475,
        item_quality: 4,
        enchant: 6108,
        icon: 'inv_misc_primitive_ring02',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 35,
          resisted: 0,
          total: 35,
        },
        gems: [],
        bonuses: [6536, 40, 6578, 6579, 6562, 6513, 1647, 4786],
      },
      trinket1: {
        item_id: 173944,
        item_level: 475,
        item_quality: 4,
        icon: 'inv_misc_bearclaw_nightmare',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 0,
          resisted: 0,
          total: 0,
        },
        gems: [168639],
        bonuses: [4824, 1517, 4786, 6514],
      },
      trinket2: {
        item_id: 171085,
        item_level: 470,
        item_quality: 4,
        icon: 'achievement_dungeon_ulduar80_10man',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 0,
          resisted: 0,
          total: 0,
        },
        gems: [168638],
        bonuses: [],
      },
      mainhand: {
        item_id: 172198,
        item_level: 475,
        item_quality: 4,
        enchant: 6112,
        icon: 'inv_axe_1h_nzothraid_d_02',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 20,
          resisted: 0,
          total: 20,
        },
        gems: [168639],
        bonuses: [4824, 6570, 6578, 6579, 1517, 4786, 6514],
      },
      offhand: {
        item_id: 159668,
        item_level: 475,
        item_quality: 4,
        icon: 'inv_offhand_1h_battledungeon_c_01',
        is_legion_legendary: false,
        is_azerite_armor: false,
        azerite_powers: [],
        corruption: {
          added: 10,
          resisted: 0,
          total: 10,
        },
        gems: [],
        bonuses: [6536, 6578, 6513, 1647, 4786, 6480, 6455],
      },
    },
  },
  raid_progression: {
    'battle-of-dazaralor': {
      summary: '9/9 M',
      total_bosses: 9,
      normal_bosses_killed: 9,
      heroic_bosses_killed: 9,
      mythic_bosses_killed: 9,
    },
    'crucible-of-storms': {
      summary: '2/2 H',
      total_bosses: 2,
      normal_bosses_killed: 0,
      heroic_bosses_killed: 2,
      mythic_bosses_killed: 0,
    },
    'nyalotha-the-waking-city': {
      summary: '12/12 M',
      total_bosses: 12,
      normal_bosses_killed: 12,
      heroic_bosses_killed: 12,
      mythic_bosses_killed: 12,
    },
    'the-eternal-palace': {
      summary: '6/8 M',
      total_bosses: 8,
      normal_bosses_killed: 8,
      heroic_bosses_killed: 8,
      mythic_bosses_killed: 6,
    },
    uldir: {
      summary: '8/8 M',
      total_bosses: 8,
      normal_bosses_killed: 8,
      heroic_bosses_killed: 8,
      mythic_bosses_killed: 8,
    },
  },
});

export default CharacterRaiderIOMock;
