import { ModelTypeEnum, type ProviderConfigType } from '../type';

const models: ProviderConfigType = {
  provider: 'MiniMax',
  list: [
    {
      type: ModelTypeEnum.llm,
      model: 'MiniMax-Text-01',
      maxContext: 1000000,
      maxTokens: 1000000,
      quoteMaxToken: 100000,
      maxTemperature: 1,
      vision: false,
      reasoning: false,
      toolChoice: false
    },
    {
      type: ModelTypeEnum.llm,
      model: 'abab6.5s-chat',
      maxContext: 245000,
      maxTokens: 10000,
      quoteMaxToken: 240000,
      maxTemperature: 1,
      vision: false,
      reasoning: false,
      toolChoice: false
    },
    {
      type: ModelTypeEnum.tts,
      model: 'speech-01-turbo',
      voices: [
        { label: 'male-qn-qingse', value: 'male-qn-qingse' },
        { label: 'male-qn-jingying', value: 'male-qn-jingying' },
        { label: 'male-qn-badao', value: 'male-qn-badao' },
        { label: 'male-qn-daxuesheng', value: 'male-qn-daxuesheng' },
        { label: 'female-shaonv', value: 'female-shaonv' },
        { label: 'female-yujie', value: 'female-yujie' },
        { label: 'female-chengshu', value: 'female-chengshu' },
        { label: 'female-tianmei', value: 'female-tianmei' },
        { label: 'presenter_male', value: 'presenter_male' },
        { label: 'presenter_female', value: 'presenter_female' },
        { label: 'audiobook_male_1', value: 'audiobook_male_1' },
        { label: 'audiobook_male_2', value: 'audiobook_male_2' },
        { label: 'audiobook_female_1', value: 'audiobook_female_1' },
        { label: 'audiobook_female_2', value: 'audiobook_female_2' },
        { label: 'male-qn-qingse-jingpin', value: 'male-qn-qingse-jingpin' },
        { label: 'male-qn-jingying-jingpin', value: 'male-qn-jingying-jingpin' },
        { label: 'male-qn-badao-jingpin', value: 'male-qn-badao-jingpin' },
        { label: 'male-qn-daxuesheng-jingpin', value: 'male-qn-daxuesheng-jingpin' },
        { label: 'female-shaonv-jingpin', value: 'female-shaonv-jingpin' },
        { label: 'female-yujie-jingpin', value: 'female-yujie-jingpin' },
        { label: 'female-chengshu-jingpin', value: 'female-chengshu-jingpin' },
        { label: 'female-tianmei-jingpin', value: 'female-tianmei-jingpin' },
        { label: 'clever_boy', value: 'clever_boy' },
        { label: 'cute_boy', value: 'cute_boy' },
        { label: 'lovely_girl', value: 'lovely_girl' },
        { label: 'cartoon_pig', value: 'cartoon_pig' },
        { label: 'bingjiao_didi', value: 'bingjiao_didi' },
        { label: 'junlang_nanyou', value: 'junlang_nanyou' },
        { label: 'chunzhen_xuedi', value: 'chunzhen_xuedi' },
        { label: 'lengdan_xiongzhang', value: 'lengdan_xiongzhang' },
        { label: 'badao_shaoye', value: 'badao_shaoye' },
        { label: 'tianxin_xiaoling', value: 'tianxin_xiaoling' },
        { label: 'qiaopi_mengmei', value: 'qiaopi_mengmei' },
        { label: 'wumei_yujie', value: 'wumei_yujie' },
        { label: 'diadia_xuemei', value: 'diadia_xuemei' },
        { label: 'danya_xuejie', value: 'danya_xuejie' },
        { label: 'Santa_Claus', value: 'Santa_Claus' },
        { label: 'Grinch', value: 'Grinch' },
        { label: 'Rudolph', value: 'Rudolph' },
        { label: 'Arnold', value: 'Arnold' },
        { label: 'Charming_Santa', value: 'Charming_Santa' },
        { label: 'Charming_Lady', value: 'Charming_Lady' },
        { label: 'Sweet_Girl', value: 'Sweet_Girl' },
        { label: 'Cute_Elf', value: 'Cute_Elf' },
        { label: 'Attractive_Girl', value: 'Attractive_Girl' },
        { label: 'Serene_Woman', value: 'Serene_Woman' }
      ]
    }
  ]
};

export default models;
