import { LogosAction } from './types.d.ts';

const Mnemes = new Map<string, string>([
  ['1', 'Wisdom of the Aetherweaver'],
  ['2', 'Wisdom of the Martialist'],
  ['3', 'Wisdom of the Platebearer'],
  ['4', 'Incense L'],
  ['5', 'Cure L'],
  ['6', 'Backstep L'],
  ['7', 'Paralyze L'],
  ['8', 'Esuna L'],
  ['9', 'Raise L'],
  ['10', 'Feint L'],
  ['11', 'Tranquilizer L'],
  ['12', 'Protect L'],
  ['13', 'Wisdom of the Skirmisher'],
  ['14', 'Bloodbath L'],
  ['15', 'Wisdom of the Guardian'],
  ['16', 'Spirit of the Remembered'],
  ['17', 'Wisdom of the Ordained'],
  ['18', 'Cure L II'],
  ['19', 'Featherfoot L'],
  ['20', 'Stealth L'],
  ['21', 'Spirit Dart L'],
  ['22', 'Dispel L'],
  ['23', 'Shell L'],
  ['24', 'Stoneskin L'],
  ['25', 'Magic Burst L'],
  ['26', 'Eagle Eye Shot L'],
  ['27', 'Double Edge L'],
  ['28', 'Wisdom of the Breathtaker'],
]);

const Actions: Array<LogosAction> = [
  {
    name: 'Wisdom of the Aetherweaver',
    description: 'Increases magic damage dealt by 60%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 1,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['healer'],
    combinations: [['1']],
  },
  {
    name: 'Wisdom of the Martialist',
    description: 'Increases damage dealt by 40%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 2,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['tank'],
    combinations: [['2']],
  },
  {
    name: 'Wisdom of the Platebearer',
    description: 'Increases defense by 3,000 and maximum HP by 50%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 3,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['melee', 'ranged', 'magic', 'healer'],
    combinations: [['3']],
  },
  {
    name: 'Wisdom of the Guardian',
    description: 'Increases defense by 1,800 and maximum HP by 10%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 4,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['tank'],
    combinations: [['15'], ['3', '12'], ['3', '24'], ['3', '4', '4'], ['24', '24', '24']],
  },
  {
    name: 'Wisdom of the Ordained',
    description: 'Increases maximum MP by 50% and healing magic potency by 25%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 5,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['healer'],
    combinations: [['17'], ['1', '8'], ['1', '5', '5'], ['18', '18', '18']],
  },
  {
    name: 'Wisdom of the Skirmisher',
    description: 'Increases damage dealt by 20%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 6,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['melee', 'ranged', 'magic'],
    combinations: [['13'], ['2', '10'], ['2', '2', '2']],
  },
  {
    name: 'Wisdom of the Watcher',
    description: 'Increases evasion by 25% while reducing damage dealt by 5%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 7,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['tank'],
    combinations: [['20', '20']],
  },
  {
    name: 'Wisdom of the Templar',
    description:
      'Increases healing magic potency by 50% and maximum HP by 30%, while reducing damage dealt by 5%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 8,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['healer'],
    combinations: [
      ['13', '18'],
      ['13', '24'],
      ['3', '5', '24'],
    ],
  },
  {
    name: 'Wisdom of the Irregular',
    description: 'Increases damage dealt by 30% while reducing magic defense by 60%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 9,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['melee', 'ranged', 'magic'],
    combinations: [
      ['13', '15'],
      ['2', '4', '13'],
    ],
  },
  {
    name: 'Wisdom of the Breathtaker',
    description:
      'Increases poison resistance and movement speed, including mount speed, and increases evasion by 10%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 10,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['all'],
    combinations: [['28'], ['19', '20'], ['20', '20', '20'], ['19', '19', '19']],
  },
  {
    name: 'Spirit of the Remembered',
    description: 'Increases maximum HP by 10% and accuracy by 30%.\nAdditional Effect: Grants a 70% chance of automatic revival upon KO.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 11,
    type: 'Ability',
    uses: 1,
    duration: 10800,
    cast: 0,
    recast: 10,
    jobs: ['all'],
    combinations: [['16'], ['2', '15'], ['1', '2', '3']],
  },
  {
    name: 'Protect L',
    description: 'Increases the physical defense of the target by 1,000.',
    imageId: 12,
    type: 'Spell',
    uses: Infinity,
    duration: 1800,
    cast: 2.5,
    recast: 2.5,
    jobs: ['all'],
    combinations: [['12']],
  },
  {
    name: 'Shell L',
    description: 'Increases the magic defense of the target by 1,000.',
    imageId: 13,
    type: 'Spell',
    uses: Infinity,
    duration: 1800,
    cast: 2.5,
    recast: 2.5,
    jobs: ['all'],
    combinations: [['23'], ['8', '12']],
  },
  {
    name: 'Death L',
    description: "KOs target. The less the target's HP, the greater the chance of success.",
    imageId: 14,
    type: 'Spell',
    uses: 30,
    cast: 5,
    recast: 300,
    jobs: ['all'],
    combinations: [
      ['9', '22'],
      ['9', '11', '11'],
      ['1', '7', '9'],
      ['22', '22', '22'],
    ],
  },
  {
    name: 'Focus L',
    description: 'Grants a stack of Boost, up to a maximum of 16.\nBoost Bonus: Increases potency of next weaponskill by 30% per stack.\nShares a recast timer with all weaponskills.',
    imageId: 15,
    type: 'Ability',
    uses: 99,
    duration: 30,
    cast: 0,
    recast: 2.5,
    jobs: ['all'],
    combinations: [
      ['13', '14'],
      ['14', '14', '14'],
    ],
  },
  {
    name: 'Paralyze L',
    description: 'Afflicts target with Paralysis.',
    imageId: 16,
    type: 'Spell',
    uses: 99,
    duration: 60,
    cast: 2.5,
    recast: 2.5,
    jobs: ['all'],
    combinations: [['7']],
  },
  {
    name: 'Paralyze L III',
    description: 'Afflicts target and all nearby enemies with Paralysis.',
    imageId: 17,
    type: 'Spell',
    uses: 99,
    duration: 60,
    cast: 2.5,
    recast: 2.5,
    jobs: ['all'],
    combinations: [
      ['7', '21'],
      ['7', '7', '7'],
      ['1', '7', '7'],
    ],
  },
  {
    name: 'Swift L',
    description: 'Greatly increases movement speed.',
    imageId: 18,
    type: 'Ability',
    uses: 20,
    duration: 10,
    cast: 0,
    recast: 90,
    jobs: ['all'],
    combinations: [
      ['19', '19'],
      ['6', '6', '19'],
    ],
  },
  {
    name: 'Featherfoot L',
    description: 'Increases evasion by 15%.',
    imageId: 19,
    type: 'Ability',
    uses: 50,
    duration: 45,
    cast: 0,
    recast: 90,
    jobs: ['all'],
    combinations: [['19'], ['10', '10']],
  },
  {
    name: 'Spirit Dart L',
    description: 'Delivers a ranged attack with a potency of 100.\nAdditional Effect: Afflicts target with Spirit Dart L, increasing damage taken by 8%.',
    imageId: 20,
    type: 'Weaponskill',
    uses: 50,
    duration: 60,
    cast: 0,
    recast: 2.5,
    jobs: ['melee', 'ranged', 'magic'],
    combinations: [['21'], ['11', '17'], ['1', '7', '11']],
  },
  {
    name: 'Catastrophe L',
    description: 'Deals unaspected damage to all nearby enemies with a potency of 4,000, while dealing damage with a potency of 999,999 to self.',
    imageId: 21,
    type: 'Ability',
    uses: 3,
    cast: 0,
    recast: 300,
    jobs: ['tank', 'melee', 'ranged'],
    combinations: [
      ['15', '21'],
      ['14', '14'],
      ['21', '21', '21'],
    ],
  },
  {
    name: 'Dispel L',
    description: 'Removes one beneficial status from target.',
    imageId: 22,
    type: 'Spell',
    uses: Infinity,
    cast: 2.5,
    recast: 2.5,
    jobs: ['melee', 'ranged', 'magic', 'healer'],
    combinations: [['22'], ['8', '17'], ['8', '8', '8'], ['11', '11', '11']],
  },
  {
    name: 'Feint L',
    description: "Delivers an attack with a potency of 100.\nAdditional Effect: Reduces target's evasion.",
    imageId: 23,
    type: 'Weaponskill',
    uses: Infinity,
    duration: 60,
    cast: 0,
    recast: 2.5,
    jobs: ['tank', 'healer'],
    combinations: [['10']],
  },
  {
    name: 'Stealth L',
    description:
      'Blend in with your surroundings, making it impossible for most enemies to detect you, but reducing movement speed by 50%.\nHas no effect on certain enemies with special sight.\nCannot be executed while in combat.\nEffect ends upon use of any action other than Sprint, or upon reuse.',
    imageId: 24,
    type: 'Ability',
    uses: 50,
    cast: 0,
    recast: 15,
    jobs: ['all-nin'],
    combinations: [['20'], ['17', '23']],
  },
  {
    name: 'Aetherial Manipulation L',
    description: "Rush to a target's side.\nUnable to cast if bound.",
    imageId: 25,
    type: 'Ability',
    uses: 99,
    cast: 0,
    recast: 5,
    jobs: ['all'],
    combinations: [
      ['6', '20'],
      ['2', '6', '10'],
    ],
  },
  {
    name: 'Backstep L',
    description: 'Jump 10 yalms back from current position.\nCannot be executed while bound.',
    imageId: 26,
    type: 'Ability',
    uses: 99,
    cast: 0,
    recast: 5,
    jobs: ['all'],
    combinations: [['6']],
  },
  {
    name: 'Tranquilizer L',
    description: 'Stuns target.',
    imageId: 27,
    type: 'Ability',
    uses: 50,
    duration: 8,
    cast: 0,
    recast: 30,
    jobs: ['all'],
    combinations: [['11']],
  },
  {
    name: 'Bloodbath L',
    description: 'Converts a portion of damage dealt into HP.',
    imageId: 28,
    type: 'Ability',
    uses: 30,
    duration: 45,
    cast: 0,
    recast: 60,
    jobs: ['all'],
    combinations: [['14'], ['5', '13'], ['2', '2', '5']],
  },
  {
    name: 'Rejuvenate L',
    description: 'Instantly restores 50% of maximum HP and MP.',
    imageId: 29,
    type: 'Ability',
    uses: 50,
    cast: 0,
    recast: 30,
    jobs: ['all'],
    combinations: [
      ['14', '23'],
      ['16', '21'],
      ['1', '2', '5'],
    ],
  },
  {
    name: 'Haymaker L',
    description: 'Delivers an attack with a potency of 300.\nCan only be executed immediately after evading an attack.\nAdditional Effect: Slow +20%.',
    imageId: 30,
    type: 'Ability',
    uses: 50,
    duration: 30,
    cast: 0,
    recast: 30,
    jobs: ['tank'],
    combinations: [
      ['13', '19'],
      ['2', '4', '19'],
    ],
  },
  {
    name: 'Rapid Recast L',
    description: 'Shortens recast time for next ability used by 50%.',
    imageId: 31,
    type: 'Ability',
    uses: 50,
    duration: 15,
    cast: 0,
    recast: 90,
    jobs: ['tank', 'melee', 'ranged', 'magic'],
    combinations: [
      ['8', '22'],
      ['5', '8', '10'],
    ],
  },
  {
    name: 'Cure L',
    description: "Restores target's HP.\nCure Potency: 9,000.",
    imageId: 32,
    type: 'Spell',
    uses: Infinity,
    cast: 2,
    recast: 2.5,
    jobs: ['tank', 'melee', 'ranged', 'magic'],
    combinations: [['5']],
  },
  {
    name: 'Cure L II',
    description: "Restores target's HP.\nCure Potency: 12,000.",
    imageId: 33,
    type: 'Ability',
    uses: 50,
    cast: 0,
    recast: 5,
    jobs: ['melee', 'ranged', 'magic'],
    combinations: [['18'], ['5', '17'], ['5', '5', '5'], ['9', '9', '9']],
  },
  {
    name: 'Stoneskin L',
    description: "Creates a barrier around target that absorbs damage totaling 10% of target's maximum HP.",
    imageId: 34,
    type: 'Spell',
    uses: 99,
    duration: 30,
    cast: 2,
    recast: 2.5,
    jobs: ['all'],
    combinations: [['24'], ['12', '23'], ['12', '12', '12'], ['23', '23', '23']],
  },
  {
    name: 'Cure L III',
    description: 'Restores HP of target and all party members nearby target.\nCure Potency: 9,000.',
    imageId: 35,
    type: 'Spell',
    uses: 50,
    cast: 2,
    recast: 2.5,
    jobs: ['tank', 'melee', 'ranged', 'magic'],
    combinations: [
      ['14', '17'],
      ['18', '18'],
      ['5', '5', '17'],
    ],
  },
  {
    name: 'Regen L',
    description: 'Grants healing over time effect to target.\nCure Potency: 2,500.',
    imageId: 36,
    type: 'Spell',
    uses: 99,
    duration: 21,
    cast: 0,
    recast: 2.5,
    jobs: ['tank', 'melee', 'ranged', 'magic'],
    combinations: [
      ['11', '18'],
      ['10', '18'],
      ['5', '5', '10'],
    ],
  },
  {
    name: 'Esuna L',
    description: 'Removes a single detrimental effect from target.',
    imageId: 37,
    type: 'Spell',
    uses: Infinity,
    cast: 1,
    recast: 2.5,
    jobs: ['tank', 'melee', 'ranged', 'magic'],
    combinations: [['8']],
  },
  {
    name: 'Incense L',
    description: "Gesture threateningly, placing yourself at the top of the target's enmity list and increasing enmity generation.",
    imageId: 38,
    type: 'Ability',
    uses: Infinity,
    cast: 0,
    recast: 20,
    duration: 15,
    jobs: ['melee', 'ranged', 'magic', 'healer'],
    combinations: [['4']],
  },
  {
    name: 'Raise L',
    description: 'Resurrects target to a weakened state.',
    imageId: 39,
    type: 'Spell',
    uses: 99,
    cast: 3,
    recast: 2.5,
    jobs: ['tank', 'melee', 'ranged', 'magic'],
    combinations: [['9']],
  },
  {
    name: 'Bravery L',
    description: "Increases target's damage dealt by 10%.",
    imageId: 40,
    type: 'Spell',
    uses: 99,
    duration: 300,
    cast: 2.5,
    recast: 2.5,
    jobs: ['magic', 'healer'],
    combinations: [['13', '15', '17']],
  },
  {
    name: 'Solid Shield L',
    description: 'Reduces physical damage taken by 99%.',
    imageId: 41,
    type: 'Ability',
    uses: 30,
    duration: 8,
    cast: 0,
    recast: 300,
    jobs: ['melee', 'ranged', 'magic', 'healer'],
    combinations: [['15', '12', '24']],
  },
  {
    name: 'Spell Shield L',
    description: 'Reduces magic damage taken by 99%.',
    imageId: 42,
    type: 'Ability',
    uses: 30,
    duration: 8,
    cast: 0,
    recast: 300,
    jobs: ['melee', 'ranged', 'magic', 'healer'],
    combinations: [['15', '23', '24']],
  },
  {
    name: 'Reflect L',
    description: 'Creates a magic-reflecting barrier around self or party member.',
    imageId: 43,
    type: 'Spell',
    uses: 99,
    duration: 10,
    cast: 0,
    recast: 2.5,
    jobs: ['all'],
    combinations: [['12', '17', '23']],
  },
  {
    name: 'Smite L',
    description: 'Delivers an attack with a potency of 1,000.\nCan only be executed when your HP is below 50%.\nAdditional Effect: Restores an amount of own HP proportional to damage dealt.',
    imageId: 44,
    type: 'Ability',
    uses: 30,
    cast: 0,
    recast: 45,
    jobs: ['tank'],
    combinations: [['11', '13', '21']],
  },
  {
    name: 'Refresh L',
    description: 'Increases the amount of magia aether regenerated over time by self and nearby party members.',
    imageId: 45,
    type: 'Spell',
    uses: 99,
    duration: 30,
    cast: 3,
    recast: 2.5,
    jobs: ['healer'],
    combinations: [['1', '17', '18']],
  },
  {
    name: 'Banish L',
    description: 'Deals unaspected damage with a potency of 200.\nAdditional Effect: Afflicts undead targets with Banish L, increasing damage taken by 25%.',
    imageId: 46,
    type: 'Spell',
    uses: 99,
    duration: 60,
    cast: 2.5,
    recast: 2.5,
    jobs: ['healer'],
    combinations: [['1', '22', '22']],
  },
  {
    name: 'Banish L III',
    description: 'Deals unaspected damage with a potency of 150 to target and all enemies nearby it.\nAdditional Effect: Afflicts undead targets with Banish L, increasing damage taken by 25%.',
    imageId: 47,
    type: 'Spell',
    uses: 50,
    duration: 60,
    cast: 3,
    recast: 2.5,
    jobs: ['healer'],
    combinations: [['17', '22', '22']],
  },
  {
    name: 'Magic Burst L',
    description: 'Increases spell damage by 100% while increasing MP cost.',
    imageId: 48,
    type: 'Ability',
    uses: 10,
    duration: 20,
    cast: 0,
    recast: 90,
    jobs: ['magic', 'healer'],
    combinations: [['25'], ['16', '17', '24']],
  },
  {
    name: 'Double Edge L',
    description:
      'Increases physical damage dealt while dealing damage to self over time.\nStacks increase every 3 seconds, up to a maximum of 16.\nFor each stack, physical damage dealt is increased by 15%, and potency of damage dealt to self increases by 1,200.',
    imageId: 49,
    type: 'Ability',
    uses: 10,
    duration: 48,
    cast: 0,
    recast: 90,
    jobs: ['tank', 'melee'],
    combinations: [['27'], ['13', '14', '15']],
  },
  {
    name: 'Eagle Eye Shot L',
    description: "Delivers a ranged attack with a potency of 80.\nPotency increases up to 1,000% the lower the target's HP.\nGenerates significant enmity upon use.",
    imageId: 50,
    type: 'Weaponskill',
    uses: 30,
    cast: 0,
    recast: 2.5,
    jobs: ['ranged'],
    combinations: [['26'], ['13', '16', '21']],
  },
  {
    name: 'Perception L',
    description: 'Reveals all traps within a 15-yalm radius.\nIf no traps exist within 15 yalms, detects whether any traps are present within a 36-yalm radius.\nOnly effective within dungeons.',
    imageId: 51,
    type: 'Ability',
    uses: 99,
    cast: 0,
    recast: 3.5,
    jobs: ['melee', 'ranged', 'magic'],
    combinations: [
      ['28', '28'],
      ['20', '22', '28'],
    ],
  },
  {
    name: 'Wisdom of the Elder',
    description:
      'Increases magic damage dealt by 35% and magic defense by 1,000, while decreasing spell MP cost.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 52,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['magic'],
    combinations: [
      ['1', '17', '25'],
      ['15', '24', '25'],
    ],
  },
  {
    name: 'Wisdom of the Duelist',
    description: 'Increases physical damage dealt by 40% and maximum HP by 15%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 53,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['melee'],
    combinations: [
      ['13', '13', '27'],
      ['6', '14', '27'],
    ],
  },
  {
    name: 'Wisdom of the Fiendhunter',
    description: 'Increases physical damage dealt by 25% and evasion by 25%.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 54,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['ranged'],
    combinations: [
      ['19', '21', '26'],
      ['10', '11', '26'],
    ],
  },
  {
    name: 'Wisdom of the Indomitable',
    description:
      'Increases defense by 2,000.\nGrants one stack of HP Boost each time damage equal to or greater than half of maximum HP is taken from a single-target attack.\nCannot be used with other Wisdom abilities.\nEffect ends upon reuse or upon replacement of duty action.',
    imageId: 55,
    type: 'Spell',
    uses: 3,
    cast: 0,
    recast: 10,
    jobs: ['tank'],
    combinations: [
      ['3', '4', '27'],
      ['12', '16', '27'],
    ],
  },
  {
    name: 'Sacrifice L',
    description: "Restores 100% of target's HP, even if target is KO'd.\nCannot be executed if currently afflicted with Doom.\nAdditional Effect: Inflicts Doom on self.",
    imageId: 56,
    type: 'Spell',
    uses: 10,
    duration: 10,
    cast: 3,
    recast: 2.5,
    jobs: ['healer'],
    combinations: [['8', '9', '25']],
  },
];

const ActionNames = Actions.map((action) => action.name.toLowerCase());

const Presets: Map<string, Array<number>> = new Map([
  ['dps', [9, 10, 52, 14, 48]],
  ['pl', [50, 13, 44, 39]],
]);

export default {
  Mnemes,
  Actions,
  ActionNames,
  Presets,
};
