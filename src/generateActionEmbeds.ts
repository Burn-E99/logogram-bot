import { Embed } from '../deps.ts';
import { LogosAction } from './types.d.ts';
import data from './data.ts';
import config from '../config.ts';

const getMnemeEmoji = (id: string): string => {
  switch (id) {
    case '1':
    case '2':
    case '13':
    case '14':
    case '25':
    case '26':
    case '27':
      return config.mneme.red;
    case '3':
    case '4':
    case '15':
    case '16':
      return config.mneme.blue;
    case '5':
    case '8':
    case '9':
    case '17':
    case '18':
      return config.mneme.green;
    case '6':
    case '10':
    case '19':
    case '20':
    case '28':
      return config.mneme.yellow;
    case '7':
    case '11':
    case '21':
    case '22':
      return config.mneme.purple;
    case '12':
    case '23':
    case '24':
      return config.mneme.cyan;
    default:
      return '□';
  }
};

const getActionUses = (uses: number): string => uses === Infinity ? '∞' : `${uses}`;
const getActionCast = (cast: number): string => cast === 0 ? 'Instant' : `${cast}s`;
const getHumanDuration = (duration: number) => {
  if (duration < 60) {
    return `${duration}s`;
  } else if (duration < (60 * 60)) {
    return `${Math.round(duration / 60 * 10) / 10}m`;
  } else {
    return `${Math.round(duration / 60 / 60 * 10) / 10}h`;
  }
};

const getJobs = (jobs: Array<string>): string => {
  let jobIcons = '';

  if (jobs.includes('tank') || jobs[0].startsWith('all')) jobIcons += config.jobType.tank;
  if (jobs.includes('healer') || jobs[0].startsWith('all')) jobIcons += config.jobType.healer;
  if (jobs.includes('melee') || jobs[0].startsWith('all')) jobIcons += config.jobType.melee;
  if (jobs.includes('ranged') || jobs[0].startsWith('all')) jobIcons += config.jobType.ranged;
  if (jobs.includes('magic') || jobs[0].startsWith('all')) jobIcons += config.jobType.magic;
  if (jobs.includes('all-nin')) jobIcons += ' (Excludes Ninja)';

  return jobIcons;
};

const generateActionEmbed = (action: LogosAction, debug: boolean): Embed => ({
  title: action.name,
  description: `**${action.type}** | ${action.duration ? `**Duration:** ${getHumanDuration(action.duration)} | ` : ''}**Uses:** ${getActionUses(action.uses)} | **Cast:** ${getActionCast(action.cast)} | **Recast:** ${action.recast}s
${getJobs(action.jobs)}
${action.description}`,
  thumbnail: {
    url: `${config.imageUrl}${action.imageId}.png`,
  },
  fields: action.combinations.map((combo, idx) => ({
    name: `Combination ${idx + 1}:`,
    value: combo.map((mneme) => `${getMnemeEmoji(mneme)} ${data.Mnemes.get(mneme)}`).join('\n'),
    inline: true,
  })),
  footer: {
    text: debug ? `Internal ID: ${action.imageId - 1}` : '',
  },
});

export const generateEmbeds = (actions: Array<number>, debug: boolean): Array<Embed> => actions.map((actionIdx) => generateActionEmbed(data.Actions[actionIdx], debug));
