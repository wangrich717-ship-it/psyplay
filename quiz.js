// quiz.js - PsyPlay 完整测试逻辑
'use strict';

// ══════════════════════════════════════════════════════════════════════════════
// QUIZ DATA
// ══════════════════════════════════════════════════════════════════════════════

const QUIZZES = [

  // ── TEST 1: 压力颜色 ────────────────────────────────────────────────────────
  {
    id: 'q1',
    num: '01',
    title: '你的「压力颜色」是什么？',
    tagline: '颜色不会撒谎，你的眼睛会告诉我一切',
    type: 'color',
    typeLabel: '颜色选择',
    duration: '约1分钟',
    cardClass: 'card-1',
    iconHref: '#icon-chart',
    questions: [
      {
        text: '现在，你最想把自己裹在哪种颜色里？',
        options: [
          { hex: '#1a3a6b', name: '深蓝', cat: 'C' },
          { hex: '#f5f0e0', name: '奶白', cat: 'N' },
          { hex: '#e8440a', name: '橘红', cat: 'W' },
          { hex: '#5a6e2e', name: '橄榄绿', cat: 'C' },
          { hex: '#9b7ec8', name: '淡紫', cat: 'G' },
          { hex: '#2c2c2c', name: '炭黑', cat: 'G' },
        ]
      },
      {
        text: '你的卧室如果只能保留一种颜色，你留哪个？',
        options: [
          { hex: '#f5e6d0', name: '米黄', cat: 'N' },
          { hex: '#e8775c', name: '珊瑚', cat: 'W' },
          { hex: '#7ba7c0', name: '灰蓝', cat: 'C' },
          { hex: '#2d5a27', name: '深绿', cat: 'C' },
          { hex: '#c4557c', name: '玫红', cat: 'S' },
          { hex: '#8b6843', name: '原木棕', cat: 'N' },
        ]
      },
      {
        text: '哪个颜色让你感到「安全」？',
        options: [
          { hex: '#87ceeb', name: '天蓝', cat: 'C' },
          { hex: '#4b2d8b', name: '深紫', cat: 'G' },
          { hex: '#ff9a3c', name: '暖橙', cat: 'W' },
          { hex: '#5a7a3d', name: '苔绿', cat: 'C' },
          { hex: '#f0c4b0', name: '裸粉', cat: 'N' },
          { hex: '#f8f8f8', name: '纯白', cat: 'N' },
        ]
      },
      {
        text: '哪个颜色让你最想逃跑？（选你最抗拒的）',
        options: [
          { hex: '#ffe135', name: '柠檬黄', cat: 'S' },
          { hex: '#8b0000', name: '血红', cat: 'S' },
          { hex: '#39ff14', name: '荧光绿', cat: 'S' },
          { hex: '#9b8fa3', name: '灰紫', cat: 'G' },
          { hex: '#3d2b1f', name: '暗棕', cat: 'G' },
          { hex: '#b8d8ea', name: '冰蓝', cat: 'C' },
        ]
      },
      {
        text: '你现在的心情如果是一种颜色，是？',
        options: [
          { hex: '#ffe135', name: '明黄', cat: 'W' },
          { hex: '#b0b0b0', name: '浅灰', cat: 'G' },
          { hex: '#cc2200', name: '深红', cat: 'S' },
          { hex: '#4caf8c', name: '蓝绿', cat: 'C' },
          { hex: '#5d2b8b', name: '暗紫', cat: 'G' },
          { hex: '#f5a0b0', name: '橙粉', cat: 'W' },
        ]
      },
      {
        text: '哪个颜色最像你理想中的明天？',
        options: [
          { hex: '#f5a623', name: '金橙', cat: 'W' },
          { hex: '#4aa8c8', name: '湖蓝', cat: 'C' },
          { hex: '#7bc46e', name: '嫩绿', cat: 'C' },
          { hex: '#e8a0b0', name: '玫瑰', cat: 'W' },
          { hex: '#e8e8e8', name: '银白', cat: 'N' },
          { hex: '#c4683a', name: '赤陶', cat: 'W' },
        ]
      },
    ],
    calculate(answers) {
      const cnt = { W: 0, C: 0, G: 0, S: 0, N: 0 };
      answers.forEach(a => { if (a && a.cat) cnt[a.cat]++; });
      const best = Object.keys(cnt).reduce((a, b) => cnt[a] >= cnt[b] ? a : b, 'N');
      return { W:'burning', C:'cool', G:'misty', S:'explosive', N:'escape' }[best];
    },
    results: {
      burning: {
        title: '你的压力是「橘红色烈焰」',
        accent: '#e8440a',
        p: ['你在压力下不会熄灭，反而会越燃越旺。问题是，你有时候烧到自己都不知道。', '你是那种把"撑住"当作默认设置的人，把自我消耗当成一种理所当然。', '但火焰需要氧气，你也需要喘息——允许自己偶尔停下来，不是失败，是智慧。'],
        quote: '不是所有的燃烧都值得，也不是所有的熄灭都是失败。'
      },
      cool: {
        title: '你的压力是「深海蓝静默」',
        accent: '#1a3a6b',
        p: ['表面看起来你总是平静的，但深海里其实一直有暗流。', '你处理压力的方式是"消化"而不是"爆发"——你把它压得很深，直到某天它自己浮上来。', '学会在感受到的时候说出来，比在深海里独自消化要轻松得多。'],
        quote: '最深的水，并不是因为没有波浪，而是波浪在更深的地方。'
      },
      misty: {
        title: '你的压力是「薰衣草灰雾」',
        accent: '#9b7ec8',
        p: ['你的压力是那种说不清楚的钝感——不是剧烈的痛，而是一种持续的、弥漫的疲惫。', '你很难向人解释自己的状态，因为连你自己都描述不清楚。', '尝试给那种"说不清的感觉"起一个名字，命名本身就是一种疏解。'],
        quote: '雾不需要解释自己，它就是它本来的样子。'
      },
      explosive: {
        title: '你的压力是「霓虹混搭冲突色」',
        accent: '#8b0000',
        p: ['你的内心正在上演一场色彩大战。你有很多情绪同时在线，有时候自己都不知道哪个是真的。', '这不是坏事——说明你是个感受力极强的人，世界在你眼里从来不是非此即彼的。', '但情绪的堆叠会消耗大量能量，适当地"清场"，允许某种感受暂时退场。'],
        quote: '混乱有时候是改变前的最后一次震动。'
      },
      escape: {
        title: '你的压力是「空白画布白」',
        accent: '#888888',
        p: ['你在压力面前的本能是"清空"——什么都不想、什么都不感受。', '这是一种自我保护，是你的神经系统给自己一个缓冲区的方式。', '但长期用空白来对抗压力，容易让你与自己失去联结。试着用一个小小的感受来填一填那块白。'],
        quote: '空白不是终点，它是下一笔之前的留白。'
      },
    }
  },

  // ── TEST 2: 内心小怪兽 ──────────────────────────────────────────────────────
  {
    id: 'q2',
    num: '02',
    title: '你的内心小怪兽长什么样？',
    tagline: '每个人心里都住着一只小怪兽，它是你最诚实的部分',
    type: 'text',
    typeLabel: '词语联想',
    duration: '约2分钟',
    cardClass: 'card-2',
    iconHref: '#icon-brain',
    questions: [
      {
        text: '【镜子】让你想到什么？',
        options: ['A. 我自己', 'B. 某个人', 'C. 一个空房间', 'D. 不想看'],
        scores: ['firefly', 'octopus', 'hedgehog', 'hedgehog']
      },
      {
        text: '【深夜3点】你在做什么？',
        options: ['A. 睡着了', 'B. 刷手机', 'C. 想事情', 'D. 哭或接近哭'],
        scores: ['dragon', 'firefly', 'hedgehog', 'octopus']
      },
      {
        text: '【有人说你变了】你的第一反应是？',
        options: ['A. 真的吗？哪里变了', 'B. 谢谢', 'C. 有什么问题吗', 'D. 内心一紧'],
        scores: ['octopus', 'firefly', 'hedgehog', 'hedgehog']
      },
      {
        text: '【被人需要】这个感觉是？',
        options: ['A. 有点累但甜', 'B. 很开心', 'C. 有压力', 'D. 会逃跑'],
        scores: ['octopus', 'firefly', 'hedgehog', 'hedgehog']
      },
      {
        text: '【空旷的广场】你感到？',
        options: ['A. 自由', 'B. 孤独', 'C. 想跑', 'D. 不舒服'],
        scores: ['dragon', 'hedgehog', 'firefly', 'hedgehog']
      },
      {
        text: '【有人突然对你特别好】你第一反应是？',
        options: ['A. 开心接受', 'B. 受宠若惊', 'C. 他想要什么', 'D. 感动但不敢靠近'],
        scores: ['dragon', 'firefly', 'hedgehog', 'hedgehog']
      },
      {
        text: '【一个没有终点的楼梯】你会？',
        options: ['A. 继续爬', 'B. 停下来看看', 'C. 往下走', 'D. 直接坐下来'],
        scores: ['dragon', 'octopus', 'hedgehog', 'dragon']
      },
      {
        text: '【你的名字】让你感觉？',
        options: ['A. 就是我', 'B. 还行', 'C. 有点陌生', 'D. 沉甸甸的'],
        scores: ['firefly', 'dragon', 'hedgehog', 'octopus']
      },
    ],
    calculate(answers) {
      const cnt = { hedgehog: 0, octopus: 0, firefly: 0, dragon: 0 };
      answers.forEach(a => { if (a) cnt[a]++; });
      return Object.keys(cnt).reduce((a, b) => cnt[a] >= cnt[b] ? a : b, 'hedgehog');
    },
    results: {
      hedgehog: {
        title: '你的怪兽是「浑身是刺的刺猬」',
        accent: '#8b6843',
        p: ['它非常柔软，所以长出了刺。你不是真的冷漠，你只是太清楚受伤是什么感觉。', '你的防御机制非常精密，但有时候会把想靠近你的人也扎跑——不是你的错，是你学到的保护方式。', '如果有人在你的刺中停留，请不要赶跑他，那可能是真的值得的人。'],
        quote: '刺不是用来伤人的，是用来保护心里那个还很柔软的部分。'
      },
      octopus: {
        title: '你的怪兽是「触手太多的章鱼」',
        accent: '#7ba7c0',
        p: ['你同时关心太多事情、太多人，你的情绪和注意力伸向八个方向。', '你很难"只做一件事"，因为你总是分心——分心去感受别人的感受，分心去照顾周围的一切。', '学会收回一些触手照顾自己，不是自私，是必要的。'],
        quote: '章鱼有八条腿，但每次只需要用它需要用的那些。'
      },
      firefly: {
        title: '你的怪兽是「怕熄灭的萤火虫」',
        accent: '#f5a623',
        p: ['你一直在努力发光，但你害怕被风吹灭。你对认可有深切的渴望，但同时你又不想让人知道你有多渴望。', '你在意别人的眼光，不是因为你虚荣，而是因为你内心有一个声音在问：我够好吗？', '答案是：够的。你本身就是光源，不需要靠别人的眼睛来确认自己在发光。'],
        quote: '萤火虫的光不是为了照亮别人，是因为它本来就会发光。'
      },
      dragon: {
        title: '你的怪兽是「一直在睡觉的龙」',
        accent: '#2d5a27',
        p: ['你有巨大的能量，但你大多数时候把它压着。你不是不行，你只是还没决定要不要动。', '你的潜力是真实的，你只是有时候懒得向世界证明——这不是缺点，只是你的节奏和别人不同。', '一旦你决定动起来，周围人都会吓一跳。问题是，你什么时候决定？'],
        quote: '龙不是每天都喷火的，但那不代表它不会。'
      },
    }
  },

  // ── TEST 3: 情绪音调 ────────────────────────────────────────────────────────
  {
    id: 'q3',
    num: '03',
    title: '你的情绪「音调」',
    tagline: '闭上眼睛，听，你的身体比你更诚实',
    type: 'audio',
    typeLabel: '声音交互',
    duration: '约2分钟',
    cardClass: 'card-3',
    iconHref: '#icon-sound',
    questions: [
      {
        text: '先点击播放声音，听完后选择你的感受',
        soundKey: 'lowHum',
        soundLabel: '低沉嗡鸣 (80Hz)',
        options: ['A. 感到压迫', 'B. 感到稳定', 'C. 想睡觉', 'D. 有些不舒服'],
        scores: ['S', 'B', 'D', 'M']
      },
      {
        text: '先点击播放声音，听完后选择你的感受',
        soundKey: 'highBeep',
        soundLabel: '高频短促叮声',
        options: ['A. 立刻警觉', 'B. 感到清醒', 'C. 有点烦躁', 'D. 莫名兴奋'],
        scores: ['S', 'B', 'D', 'M']
      },
      {
        text: '先点击播放声音，听完后选择你的感受',
        soundKey: 'midWave',
        soundLabel: '中频缓慢起伏',
        options: ['A. 很平静', 'B. 有点忧伤', 'C. 感到期待', 'D. 没什么感觉'],
        scores: ['B', 'S', 'M', 'D']
      },
      {
        text: '先点击播放声音，听完后选择你的感受',
        soundKey: 'irregular',
        soundLabel: '不规则敲击节奏',
        options: ['A. 有点焦虑', 'B. 觉得有趣', 'C. 心跳加速', 'D. 想把它关掉'],
        scores: ['S', 'B', 'S', 'D']
      },
      {
        text: '先点击播放声音，听完后选择你的感受',
        soundKey: 'harmony',
        soundLabel: '和谐双音调',
        options: ['A. 感到温暖', 'B. 有点诡异', 'C. 很放松', 'D. 莫名想哭'],
        scores: ['B', 'M', 'B', 'S']
      },
      {
        text: '这道题没有声音。\n静默本身是一种声音——你感受到了什么？',
        soundKey: 'silence',
        soundLabel: '静默（无声）',
        options: ['A. 很舒适', 'B. 有点难受', 'C. 好奇地等待', 'D. 感到空洞'],
        scores: ['B', 'S', 'M', 'D']
      },
    ],
    calculate(answers) {
      const cnt = { S: 0, B: 0, M: 0, D: 0 };
      answers.forEach(a => { if (a) cnt[a]++; });
      const best = Object.keys(cnt).reduce((a, b) => cnt[a] >= cnt[b] ? a : b, 'B');
      return { S: 'sensitive', B: 'balanced', M: 'mixed', D: 'defensive' }[best];
    },
    results: {
      sensitive: {
        title: '你是「情绪高保真」',
        accent: '#c4557c',
        p: ['你对外界刺激的感知极其细腻。声音、语气、空气中细微的变化，你都能感受到。', '这是天赋，也是消耗。你的感受力让你比别人活得更深，但也比别人更容易疲惫。', '学会给自己设置"感受缓冲区"——不是关闭感受，是控制进入的量。'],
        quote: '高保真是一种天赋，但它需要更好的扬声器来承载。'
      },
      balanced: {
        title: '你是「情绪调音师」',
        accent: '#4aa8c8',
        p: ['你有稳定的内在基准线，不容易被外界的声音带乱节奏。', '你知道什么时候该让自己感受，什么时候该关上门——这是一种难得的心理弹性。', '继续保持这种平衡，同时偶尔允许自己被一些事情"搅动"——那也是活着的证明。'],
        quote: '好的调音师，既能放大该放大的，也能静音该静音的。'
      },
      mixed: {
        title: '你是「情绪混音台」',
        accent: '#9b7ec8',
        p: ['你的感受常常是矛盾叠加的——同一件事让你同时感到开心和难过，同时感到渴望和抗拒。', '这不是问题，这说明你对世界的感受从来不是单一的，你有复杂而丰富的情绪频谱。', '试着不急于分辨"我到底是什么感觉"，允许几种感受同时存在。'],
        quote: '最真实的音乐从来不是单一频率的。'
      },
      defensive: {
        title: '你是「情绪降噪模式」',
        accent: '#7ba7c0',
        p: ['你已经学会了自动屏蔽一部分感受。不是你冷漠，是你曾经感受得太多了。', '你的神经系统在自动保护你——通过降低敏感度来减少消耗。这是一种自救，但也是一种代价。', '偶尔把降噪耳机摘下来，哪怕只是几分钟，试着听听周围真实的声音。'],
        quote: '降噪是为了保护自己，但不要把这个世界完全静音。'
      },
    }
  },

  // ── TEST 4: 压力下放弃什么 ──────────────────────────────────────────────────
  {
    id: 'q4',
    num: '04',
    title: '你在压力下会第一个放弃什么？',
    tagline: '当生活的背包太重，你会第一个扔掉什么？',
    type: 'icon',
    typeLabel: '直觉选择',
    duration: '约1分钟',
    cardClass: 'card-4',
    iconHref: '#icon-list',
    questions: [
      {
        text: '这些日常事项，你最先放弃哪个？',
        options: [
          { label: '运动健身', icon: '◎', cat: 'body' },
          { label: '好好做饭', icon: '◈', cat: 'body' },
          { label: '刷手机娱乐', icon: '▣', cat: 'joy' },
          { label: '充足睡眠', icon: '◉', cat: 'body' },
          { label: '和朋友联系', icon: '◈', cat: 'social' },
          { label: '学习提升', icon: '◆', cat: 'self' },
        ]
      },
      {
        text: '工作堆积时，你最先牺牲哪个时间？',
        options: [
          { label: '午休时间', icon: '◉', cat: 'body' },
          { label: '正常吃饭', icon: '◈', cat: 'body' },
          { label: '下班后的时间', icon: '◎', cat: 'self' },
          { label: '周末休息', icon: '▣', cat: 'body' },
          { label: '和朋友的约好', icon: '◈', cat: 'social' },
          { label: '独处时间', icon: '◆', cat: 'self' },
        ]
      },
      {
        text: '一个人住，你最先停止打理的是？',
        options: [
          { label: '整理房间', icon: '◎', cat: 'self' },
          { label: '规律饮食', icon: '◈', cat: 'body' },
          { label: '规律运动', icon: '◉', cat: 'body' },
          { label: '皮肤护理', icon: '▣', cat: 'self' },
          { label: '兴趣爱好', icon: '◆', cat: 'joy' },
          { label: '正常作息', icon: '◈', cat: 'body' },
        ]
      },
      {
        text: '以下关系，你最先疏于维护的是？',
        options: [
          { label: '和父母联系', icon: '◈', cat: 'social' },
          { label: '和朋友来往', icon: '◎', cat: 'social' },
          { label: '和伴侣沟通', icon: '◉', cat: 'social' },
          { label: '和同事关系', icon: '▣', cat: 'social' },
          { label: '照顾自己', icon: '◆', cat: 'self' },
          { label: '照顾宠物', icon: '◈', cat: 'joy' },
        ]
      },
      {
        text: '当你很累时，你最先放弃的是哪种感受？',
        options: [
          { label: '好奇心', icon: '◎', cat: 'feel' },
          { label: '对人的善意', icon: '◈', cat: 'feel' },
          { label: '幽默感', icon: '◉', cat: 'feel' },
          { label: '同理心', icon: '▣', cat: 'feel' },
          { label: '对未来的期待', icon: '◆', cat: 'feel' },
          { label: '对自己的要求', icon: '◈', cat: 'self' },
        ]
      },
    ],
    calculate(answers) {
      const cnt = { body: 0, social: 0, self: 0, feel: 0, joy: 0 };
      answers.forEach(a => { if (a && a.cat) cnt[a.cat]++; });
      const best = Object.keys(cnt).reduce((a, b) => cnt[a] >= cnt[b] ? a : b, 'self');
      const map = { body: 'body', social: 'social', self: 'self', feel: 'feel', joy: 'self' };
      return map[best];
    },
    results: {
      body: {
        title: '你先让身体为你承担',
        accent: '#e8775c',
        p: ['你最先放弃的往往是身体的需求：睡眠、饮食、运动、休息。', '你以为睡少一点、不运动没关系，但身体在替你记账，总有一天要还的。', '不是要你"管理健康"，而是提醒你：身体是你唯一的房子，它不能一直住在压力里。'],
        quote: '你的身体比你更诚实，它不会说谎，只会用疲惫来说话。'
      },
      social: {
        title: '你把门关得越来越小',
        accent: '#7ba7c0',
        p: ['压力来了，你第一件事是缩回自己的世界，减少与人的联系。', '这让你保留了能量，但也让你越来越孤岛化——当你真的需要人的时候，可能发现关系已经变淡了。', '维持关系不需要时时热闹，偶尔一条消息，就足以让那根线不断。'],
        quote: '关系需要养，哪怕只是一盆放在角落里偶尔浇水的植物。'
      },
      self: {
        title: '你最先放弃的那个人，是你',
        accent: '#9b7ec8',
        p: ['你为别人保留了体力，为工作保留了精神，唯独最先切断的是对自己的照料。', '你不是不爱自己，你只是习惯了把自己排在最后——好像先把别的都处理好，才有资格照顾自己。', '但你不需要"值得"才能照顾自己，照顾自己是基础设施，不是奖励。'],
        quote: '把自己排在清单最后的人，往往是对所有人最好的那个。'
      },
      feel: {
        title: '你先把情绪的电源拔掉',
        accent: '#5d2b8b',
        p: ['当压力来袭，你最先麻木的是感受——好奇心、善意、同理心，一个个关掉。', '你继续运作，但某种程度上的你已经"离线"了。这不是冷漠，是自动保护。', '但长期离线会让你错过生活里真正有意思的部分，那些本该让你觉得活着很值的瞬间。'],
        quote: '麻木是一种保护，但它同时也把美好的感受一起屏蔽了。'
      },
    }
  },

  // ── TEST 5: 潜意识的门 ──────────────────────────────────────────────────────
  {
    id: 'q5',
    num: '05',
    title: '你的潜意识喜欢哪个门？',
    tagline: '门的另一边是你还不认识的自己',
    type: 'door',
    typeLabel: '视觉直觉',
    duration: '约45秒',
    cardClass: 'card-5',
    iconHref: '#icon-arrow-right',
    questions: [
      {
        text: '第一轮：哪扇门，你最想推开？',
        options: [
          { key: 'red',   label: '红色拱门' },
          { key: 'wood',  label: '旧木门' },
          { key: 'glass', label: '玻璃门' },
          { key: 'black', label: '黑铁门' },
        ]
      },
      {
        text: '第二轮：如果只剩这些门，你会选哪个？',
        options: [
          { key: 'pink',  label: '粉色小门' },
          { key: 'white', label: '白色极简门' },
          { key: 'red',   label: '红色拱门' },
          { key: 'wood',  label: '旧木门' },
        ]
      },
      {
        text: '第三轮：最后的选择——你的直觉是？',
        options: [
          { key: 'glass', label: '玻璃门' },
          { key: 'black', label: '黑铁门' },
          { key: 'pink',  label: '粉色小门' },
          { key: 'white', label: '白色极简门' },
        ]
      },
    ],
    calculate(answers) {
      const cnt = {};
      answers.forEach(a => { if (a) cnt[a] = (cnt[a] || 0) + 1; });
      // Most chosen door type
      const best = Object.keys(cnt).reduce((a, b) => cnt[a] >= cnt[b] ? a : b, 'white');
      const map = { red:'red', wood:'wood', glass:'glass', black:'black', pink:'pink', white:'white' };
      return map[best] || 'white';
    },
    results: {
      red: {
        title: '你渴望的，比你承认的多',
        accent: '#cc2200',
        p: ['你内心有强烈的欲望和驱动力，但你可能不好意思承认自己有多想要某些东西。', '那扇红门背后是激情、是冲动、是你还没有完全释放的能量。', '你不需要压制那股力——它是你最真实的动力。问题不是"我能不能"，是"我允许自己要吗"？'],
        quote: '渴望不是罪，压制渴望才是。'
      },
      wood: {
        title: '你在寻找一个可以停下来的地方',
        accent: '#8b6843',
        p: ['你疲惫了。你想要的是一扇熟悉的门——一个不需要解释自己、不需要表现的地方。', '旧木门让你想起某种安全感，那是你现在最需要的东西。', '如果现实里还没有这样的地方，先在心里给自己搭一个。'],
        quote: '家不是一个地点，是一种你不需要表演的状态。'
      },
      glass: {
        title: '你比你自己以为的更开放',
        accent: '#4aa8c8',
        p: ['你好奇世界，想被看见，也愿意去看见。你对改变没有排斥，只是需要一点安全感作为前提。', '玻璃门是透明的——你选择了一种可以看清楚里面再进去的方式，这是理智也是勇气。', '这份开放是你的优势，别因为"想得太多"而失去它。'],
        quote: '透明不是脆弱，是一种双向的勇气。'
      },
      black: {
        title: '你内心住着一个还没被自己接受的部分',
        accent: '#2c2c2c',
        p: ['你被力量、黑暗、未知吸引，这不是坏事——这说明你在跟自己的某个部分正面交锋。', '那扇黑铁门背后可能藏着你还不敢完全承认的欲望、愤怒、或者某种深层的需要。', '不用害怕那个部分，它也是你。认识它，比逃跑要有力量得多。'],
        quote: '暗不是敌人，是你还没有照过光的地方。'
      },
      pink: {
        title: '你比外表看起来更柔软',
        accent: '#c4557c',
        p: ['那扇低矮的粉色小门，需要弯下腰才能进去——你愿意为爱和温柔低头。', '你心里住着一个还很小的自己，它需要被温柔对待，被接受，被无条件地爱。', '别急着长大，也别怕自己脆弱——脆弱里藏着你最真实的力量。'],
        quote: '最勇敢的事，是在这个世界里还保持柔软。'
      },
      white: {
        title: '你准备好重新开始了，但你害怕',
        accent: '#888888',
        p: ['你选择了那扇没有把手的门。你知道改变必须来，但迈出那一步需要你推自己一把。', '那扇白门背后是未知——可能是新的开始，可能是虚无，你还不确定。', '但门只有推开才知道。犹豫没有答案，只有行动才有。'],
        quote: '有些门没有把手，是因为它需要你用力推。'
      },
    }
  },

  // ── TEST 6: 崩溃临界值 ──────────────────────────────────────────────────────
  {
    id: 'q6',
    num: '06',
    title: '你的「崩溃临界值」是多少？',
    tagline: '每个人都有一条崩溃线，你的在哪里？',
    type: 'text',
    typeLabel: '场景问答',
    duration: '约3分钟',
    cardClass: 'card-6',
    iconHref: '#icon-chart',
    questions: [
      {
        text: '你的外卖比预计晚了一个小时，你会？',
        options: ['A. 完全没问题，习惯了', 'B. 有点烦但忍了', 'C. 发了差评', 'D. 开始想今天哪里不对劲'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '工作群突然@你说一件你以为早解决的事，你的反应是？',
        options: ['A. 淡定回复，没什么大不了', 'B. 叹口气，处理', 'C. 心跳加速', 'D. 直接摆烂一下'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '你期待很久的计划被临时取消，你会？',
        options: ['A. 好的没事，改天再约', 'B. 有点失落但调整过来', 'C. 情绪低落一整天', 'D. 开始对所有事失去期待'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '你昨晚没睡好，今天还有一堆事要做，你最可能？',
        options: ['A. 照常运转，没有影响', 'B. 咖啡续命，勉强撑着', 'C. 效率减半但硬撑', 'D. 开始觉得活着好累'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '有人当众说了你一句你觉得不公平的话，你会？',
        options: ['A. 当场反驳，说清楚', 'B. 忍住但记住了', 'C. 表情管理失败', 'D. 接下来几天反复想这件事'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '连续高压工作一周后，你通常会？',
        options: ['A. 照样过周末，没什么感觉', 'B. 睡一觉就好了', 'C. 需要几天才能缓过来', 'D. 整个人像断了线，什么都不想动'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '家人或朋友对你说了一句"你最近状态不太对"，你感觉？',
        options: ['A. 没什么，他们关心我', 'B. 有点意外，想一想确实', 'C. 有点委屈', 'D. 突然很想哭'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '你正在努力做一件事，突然发现之前做的都白费了，你会？',
        options: ['A. 重新来过，没问题', 'B. 崩溃五分钟后继续', 'C. 当天再也做不下去', 'D. 开始怀疑一切的意义'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '最近一个月，你有多少天感觉"今天还不错"？',
        options: ['A. 大多数天都还不错', 'B. 一半一半吧', 'C. 少数几天', 'D. 几乎没有'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '你现在给自己的状态打几分（满分10分）？',
        options: ['A. 8-10分，挺好的', 'B. 6-7分，凑合', 'C. 4-5分，一般般', 'D. 1-3分，比较差'],
        scores: [10, 7, 4, 1]
      },
    ],
    calculate(answers) {
      let total = 0;
      answers.forEach(a => { if (typeof a === 'number') total += a; });
      if (total >= 80) return 'rock';
      if (total >= 55) return 'water';
      if (total >= 30) return 'candle';
      return 'fuse';
    },
    results: {
      rock: {
        title: '你是一块石头，但石头也会裂',
        accent: '#5a6e2e',
        p: ['你的崩溃临界值很高，别人觉得你什么都扛得住。', '但注意：你不是真的不崩溃，只是你的崩溃来得更晚、更大、更没有预兆。长期高压会以你意想不到的方式找出口。', '石头不会主动开口说"我很累"，所以你需要替它说。试着在还没裂之前，就给自己一点喘息。'],
        quote: '最能扛的人，往往是最需要被照顾的人。'
      },
      water: {
        title: '你像水，会晃动但不会溢出',
        accent: '#4aa8c8',
        p: ['你对压力有感知，也有消化能力。你不会假装没事，但你通常能找到出口。', '你知道晃动不等于倒下——这是一种成熟而健康的耐压方式。', '继续这样，同时记得：你不必每次都自己消化，也可以找人分担。'],
        quote: '水不是因为软弱才流动，是因为它知道怎么找到出路。'
      },
      candle: {
        title: '你是一根蜡烛，风大了会灭',
        accent: '#f5a623',
        p: ['你的感受很细腻，对压力的反应比别人快。这不是缺点——敏感意味着你活得很深。', '但蜡烛需要避风的地方。你需要比别人更主动地管理自己的能量来源。', '找到你的"补能方式"，不管是运动、独处还是找人说话——在风来之前就把自己充满。'],
        quote: '烛光微弱，但它照亮的地方，是真实的温暖。'
      },
      fuse: {
        title: '你现在站在自己的临界线上',
        accent: '#cc2200',
        p: ['你已经很久没有好好休息了，对不对？你的身体和内心都在发出信号。', '不是你脆弱，是你太久没被照顾了——包括被你自己照顾。你一直在给别人能量，忘了给自己留一点。', '现在最重要的事不是"撑住"，而是允许自己停一停。停下来不是放弃，是为了走得更远。'],
        quote: '你可以脆弱，那也是你真实的一部分。'
      },
    }
  },

  // ── TEST 7: 你用什么方式爱自己 ──────────────────────────────────────────────
  {
    id: 'q7',
    num: '07',
    title: '你用什么方式爱自己？',
    tagline: '爱自己不是买买买，是这些微小的瞬间',
    type: 'slider',
    typeLabel: '行为频率',
    duration: '约3分钟',
    cardClass: 'card-7',
    iconHref: '#icon-chart',
    // 10 items, 2 per dimension
    sliderItems: [
      { dim: '身体照料', text: '我会因为"好吃"而选择某样食物，而不只是"健康"' },
      { dim: '身体照料', text: '我的睡眠时间是我主动保护的，不是"剩下来"的' },
      { dim: '情绪允许', text: '我允许自己在没有理由的情况下感到悲伤' },
      { dim: '情绪允许', text: '我有哭的空间——不是憋着，是真的哭出来' },
      { dim: '边界设定', text: '我能对额外的要求说"我现在没有精力"' },
      { dim: '边界设定', text: '别人失望时，我不会立刻放弃自己的需求' },
      { dim: '自我对话', text: '我犯错后给自己说的话，和我安慰朋友说的差不多' },
      { dim: '自我对话', text: '我不会用苛刻的标准反复审判自己' },
      { dim: '快乐供给', text: '我有纯粹为了好玩而做的事，不需要它有任何意义' },
      { dim: '快乐供给', text: '我允许自己"浪费"时间' },
    ],
    valueLabels: ['从不', '偶尔', '经常', '总是'],
    dimLabels: ['身体照料', '情绪允许', '边界设定', '自我对话', '快乐供给'],
    dimTips: {
      '身体照料': '尊重身体的感受，把身体需求排在优先位置',
      '情绪允许': '给自己感受任何情绪的权利，不评判、不压制',
      '边界设定': '清楚知道自己的边界，并且能温柔而坚定地维护它',
      '自我对话': '用对待好友的方式对待自己，减少内心的苛刻审判',
      '快乐供给': '允许自己纯粹地玩、纯粹地享受，不需要生产价值',
    },
    calculate(values) {
      // values: array of 10 numbers (0-3)
      // Group by dimension (2 each)
      const dims = ['身体照料', '情绪允许', '边界设定', '自我对话', '快乐供给'];
      const scores = dims.map((_, i) => values[i * 2] + values[i * 2 + 1]);
      return { type: 'radar', scores, dims };
    },
    results: {
      radar: {
        title: '你的自我照料地图',
        accent: '#c4557c',
        p: ['每个维度代表你照顾自己的一个面向。不存在"完美分布"，只有"你现在的样子"。', '得分低的维度不是缺陷，而是还没有被照顾到的部分——值得多一点关注。', '开始的地方不需要很大，一个小小的改变，就是对自己的一次温柔。'],
        quote: '爱自己，是一场没有终点的练习，每天练一点就够了。'
      }
    }
  },

  // ── TEST 8: 三秒决定（本能防御）───────────────────────────────────────────────
  {
    id: 'q8',
    num: '08',
    title: '三秒决定——你的本能防御机制',
    tagline: '不要想，三秒内点击——你的本能是最诚实的',
    type: 'timed',
    typeLabel: '限时选择',
    duration: '约1.5分钟',
    cardClass: 'card-8',
    iconHref: '#icon-clock',
    timerSeconds: 3,
    questions: [
      {
        text: '有人对你发火——你第一反应是？',
        options: ['道歉', '反击', '解释', '消失'],
        scores: ['fawn', 'fight', 'fight', 'flight']
      },
      {
        text: '被人冷落——你最先感受到的是？',
        options: ['愤怒', '难过', '自我怀疑', '算了'],
        scores: ['fight', 'freeze', 'freeze', 'flight']
      },
      {
        text: '你搞砸了一件事——你对自己说？',
        options: ['没事的', '都是我的错', '找找原因', '沉默'],
        scores: ['fawn', 'freeze', 'fight', 'freeze']
      },
      {
        text: '关系中遇到冲突——你本能是？',
        options: ['说清楚', '忍下来', '冷战', '离开'],
        scores: ['fight', 'freeze', 'flight', 'flight']
      },
      {
        text: '别人比你优秀——你感到？',
        options: ['羡慕', '嫉妒', '努力', '无所谓（但其实有）'],
        scores: ['freeze', 'fight', 'fight', 'flight']
      },
      {
        text: '很久没人联系你——你会？',
        options: ['主动联系', '等待', '觉得被遗弃', '告诉自己不在乎'],
        scores: ['fight', 'freeze', 'freeze', 'flight']
      },
      {
        text: '面对不确定的未来——你本能是？',
        options: ['计划', '担心', '顺其自然', '不去想'],
        scores: ['fight', 'freeze', 'fawn', 'flight']
      },
      {
        text: '有人说"我们谈谈"——你第一感觉是？',
        options: ['好啊', '我做错了什么', '紧张', '想逃跑'],
        scores: ['fight', 'fawn', 'freeze', 'flight']
      },
    ],
    calculate(answers) {
      const cnt = { fight: 0, flight: 0, freeze: 0, fawn: 0 };
      answers.forEach(a => { if (a) cnt[a]++; });
      return Object.keys(cnt).reduce((a, b) => cnt[a] >= cnt[b] ? a : b, 'freeze');
    },
    results: {
      fight: {
        title: '你的本能是迎战',
        accent: '#cc2200',
        p: ['你在本能上倾向于正面应对威胁——不管是反击、解释还是主动处理。', '这让你不容易被吓跑，有强烈的行动力。但有时候你的"战斗"模式会在没有真正威胁的场合也自动启动。', '学着在出击之前先停一停——不是所有的"威胁"都需要一场战斗。'],
        quote: '勇敢不只是冲上去，有时候是选择不打。'
      },
      flight: {
        title: '你的本能是先离开现场',
        accent: '#4aa8c8',
        p: ['你的自我保护方式是撤退——回避冲突、减少接触、离开场景。', '这是一种高效的应激反应，能快速降低压力。但长期使用会让你错过很多本可以解决的关系和机会。', '试着在想逃的时候多停留一秒——那一秒里，可能有你需要的答案。'],
        quote: '有时候最勇敢的事，是站在原地不跑。'
      },
      freeze: {
        title: '你的本能是冻结',
        accent: '#9b7ec8',
        p: ['当面对威胁时，你的系统会暂时"卡机"——你不是不想反应，是你的神经系统在保护你。', '通过暂停来争取时间、通过观察来搜集信息——这是一种内在的智慧，只是有时候暂停得太久。', '你不需要立刻做出反应。给自己一个标准：冻结后给自己10分钟，10分钟后再做决定。'],
        quote: '停下来不是被击败，是在等待最好的时机。'
      },
      fawn: {
        title: '你的本能是先照顾别人的感受',
        accent: '#f5a623',
        p: ['你在威胁出现时，第一反应是让对方舒服——道歉、顺从、先满足别人。', '这来自你深层的善意，也来自早年习得的"让别人满意=我安全"的模式。', '你的善意是真实的，但你的安全感不应该完全建立在别人是否满意上面。你有资格先问一句：我感觉怎么样？'],
        quote: '照顾自己不是自私，是你照顾别人的前提。'
      },
    }
  },

  // ── TEST 9: 内心独白的声音 ──────────────────────────────────────────────────
  {
    id: 'q9',
    num: '09',
    title: '你的内心独白是什么声音？',
    tagline: '如果你的内心独白是一种声音，它是什么？',
    type: 'audio',
    typeLabel: '声音情绪',
    duration: '约2分钟',
    cardClass: 'card-9',
    iconHref: '#icon-sound',
    questions: [
      {
        text: '你刚发出一条消息，对方迟迟没有回。脑子里的声音像哪个？',
        soundKey: 'echoWhisper',
        soundLabel: '回声低语',
        options: ['A. 回声低语', 'B. 尖锐提示音', 'C. 平静持续音', 'D. 断断续续杂音'],
        scores: ['critic', 'worrier', 'observer', 'worrier']
      },
      {
        text: '你独自一人在家，突然感到莫名难过。内心的声音是？',
        soundKey: 'calmSteady',
        soundLabel: '平静持续音',
        options: ['A. 回声低语', 'B. 尖锐提示音', 'C. 平静持续音', 'D. 断断续续杂音'],
        scores: ['critic', 'worrier', 'observer', 'worrier']
      },
      {
        text: '你刚完成了一件事，回头看自己的表现。内心在说什么？',
        soundKey: 'sharpAlert',
        soundLabel: '尖锐提示音',
        options: ['A. 回声低语', 'B. 尖锐提示音', 'C. 平静持续音', 'D. 断断续续杂音'],
        scores: ['critic', 'critic', 'encourager', 'worrier']
      },
      {
        text: '你想开口说一件事，但最终没说。内心的声音是？',
        soundKey: 'staticNoise',
        soundLabel: '断断续续杂音',
        options: ['A. 回声低语', 'B. 尖锐提示音', 'C. 平静持续音', 'D. 断断续续杂音'],
        scores: ['critic', 'worrier', 'observer', 'worrier']
      },
      {
        text: '你看到别人过得很好，想到自己。内心的声音像？',
        soundKey: 'echoWhisper',
        soundLabel: '回声低语',
        options: ['A. 回声低语', 'B. 尖锐提示音', 'C. 平静持续音', 'D. 断断续续杂音'],
        scores: ['critic', 'worrier', 'encourager', 'worrier']
      },
      {
        text: '你睡前躺着，大脑开始活动。那个声音是？',
        soundKey: 'staticNoise',
        soundLabel: '断断续续杂音',
        options: ['A. 回声低语', 'B. 尖锐提示音', 'C. 平静持续音', 'D. 断断续续杂音'],
        scores: ['critic', 'worrier', 'observer', 'worrier']
      },
    ],
    // sounds description for display
    soundDescriptions: {
      echoWhisper: '低沉、遥远，像在洞里回响的低语',
      sharpAlert: '急促、警告感，让人立刻警觉',
      calmSteady: '稳定、平和，持续而安静',
      staticNoise: '混乱、焦虑感，断断续续',
    },
    calculate(answers) {
      const cnt = { critic: 0, worrier: 0, observer: 0, encourager: 0 };
      answers.forEach(a => { if (a) cnt[a]++; });
      return Object.keys(cnt).reduce((a, b) => cnt[a] >= cnt[b] ? a : b, 'worrier');
    },
    results: {
      critic: {
        title: '你的内心住着一个严格的批评者',
        accent: '#8b0000',
        p: ['你脑子里有一个声音，专门负责审判你——你做得够好吗？你说的话正确吗？你值得这些吗？', '这个声音想保护你，但用的方式太苛刻了。它来自某个你内化了很久的标准，并不是真实的你。', '试着每次批评者开口时，问问自己：如果我的好朋友经历同样的事，我会这么说他吗？'],
        quote: '你不需要用审判来证明你在认真生活。'
      },
      worrier: {
        title: '你的内心住着一个总在预警的担忧者',
        accent: '#5d2b8b',
        p: ['你的内心独白常常在预演最坏的情况。不是悲观，只是被训练成了"提前防御"的模式。', '担忧者的本意是保护你——它怕你受伤，所以提前告诉你所有可能出错的地方。', '但它预警的80%从未发生。试着每次预警时问一句：如果那个情况真的发生，我能处理吗？'],
        quote: '担心是想象力用在了错误的地方。'
      },
      observer: {
        title: '你的内心住着一个冷静的旁观者',
        accent: '#4aa8c8',
        p: ['你能从某种距离观察自己的感受，不完全被它淹没。这是一种心理成熟度。', '但有时候这种"旁观"会变成轻微的解离——你有时候不确定自己"在不在"，感受是不是真实的。', '旁观者是好的，只要它不完全替代了"当事人"。偶尔把自己完全投入进去，也是一种勇气。'],
        quote: '观察自己是智慧，但不要把自己活成一个永远在场外的人。'
      },
      encourager: {
        title: '你的内心住着一个不放弃你的鼓励者',
        accent: '#5a7a3d',
        p: ['哪怕你经历了很多，你的内心独白里依然有一部分在说"没事的，可以的"。', '这很珍贵——一个内在的鼓励声音是很多人一生都在寻找的东西，而你已经拥有。', '好好保护它，不要让外部的批评声音把它压下去。你的内在鼓励者，比你知道的更重要。'],
        quote: '世界上最长情的陪伴，是你对自己说的那句"你可以的"。'
      },
    }
  },

  // ── TEST 10: 关系依赖地图 ───────────────────────────────────────────────────
  {
    id: 'q10',
    num: '10',
    title: '你的「关系依赖地图」',
    tagline: '你和别人的距离，藏着你的全部秘密',
    type: 'text',
    typeLabel: '多维文字',
    duration: '约4分钟',
    cardClass: 'card-10',
    iconHref: '#icon-chart',
    questions: [
      // A. 亲密感需求
      {
        text: '在关系中，你更害怕哪个？',
        options: ['A. 太近（失去自我）', 'B. 太远（被遗弃）', 'C. 我两个都怕', 'D. 我好像都不太怕'],
        scores: ['avoidant', 'anxious', 'disorganized', 'secure']
      },
      {
        text: '有人突然对你表示强烈的喜欢，你的直觉是？',
        options: ['A. 感动，欣然接受', 'B. 警惕，有点不安', 'C. 不知所措', 'D. 开始期待和担心同时出现'],
        scores: ['secure', 'avoidant', 'avoidant', 'disorganized']
      },
      {
        text: '你在关系里更容易做哪件事？',
        options: ['A. 主动靠近', 'B. 等待被靠近', 'C. 靠近又退缩', 'D. 保持稳定距离'],
        scores: ['anxious', 'anxious', 'disorganized', 'secure']
      },
      {
        text: '分别时（哪怕只是下班），你通常感觉？',
        options: ['A. 如释重负', 'B. 有点空', 'C. 没什么感觉', 'D. 开始担心对方还在不在'],
        scores: ['avoidant', 'anxious', 'secure', 'anxious']
      },
      // B. 信任建立
      {
        text: '你需要多久才能真正信任一个人？',
        options: ['A. 比较快，感觉对了就行', 'B. 很久，需要时间验证', 'C. 很难，几乎不会完全信任', 'D. 说不好，时快时慢'],
        scores: ['secure', 'anxious', 'avoidant', 'disorganized']
      },
      {
        text: '有人让你失望过一次，你会？',
        options: ['A. 给第二次机会，但心里有数', 'B. 很难释怀，时刻防备', 'C. 从此关门，不再依赖', 'D. 原谅但总觉得哪里不对'],
        scores: ['secure', 'anxious', 'avoidant', 'disorganized']
      },
      {
        text: '你愿意让别人知道你软弱的一面吗？',
        options: ['A. 愿意，对信任的人会', 'B. 很想但很难开口', 'C. 不愿意，软弱让我不安', 'D. 看人，有时候过度暴露，有时候完全封闭'],
        scores: ['secure', 'anxious', 'avoidant', 'disorganized']
      },
      {
        text: '你相信大多数人是真心对你的吗？',
        options: ['A. 相信', 'B. 半信半疑', 'C. 不太相信', 'D. 不确定，感觉因人而异'],
        scores: ['secure', 'anxious', 'avoidant', 'disorganized']
      },
      // C. 冲突处理
      {
        text: '关系中出现问题，你会主动提出来吗？',
        options: ['A. 会，直接说', 'B. 很想说但怕搞砸', 'C. 不说，等它自己消失', 'D. 说了又后悔，不说又憋着'],
        scores: ['secure', 'anxious', 'avoidant', 'disorganized']
      },
      {
        text: '对方沉默时，你通常假设是？',
        options: ['A. 他只是累了或在忙', 'B. 他对我不满意', 'C. 无所谓，随他', 'D. 开始猜很多可能'],
        scores: ['secure', 'anxious', 'avoidant', 'disorganized']
      },
      {
        text: '争吵后，你更容易做的是？',
        options: ['A. 等情绪稳定后和解', 'B. 立刻道歉，害怕关系破裂', 'C. 冷处理，等对方先开口', 'D. 一会儿想和解，一会儿又生气'],
        scores: ['secure', 'anxious', 'avoidant', 'disorganized']
      },
      {
        text: '你允许关系中存在未解决的部分吗？',
        options: ['A. 允许，关系不需要完美', 'B. 很难接受，必须解决才安心', 'C. 可以，反正也解决不了', 'D. 理智上允许，情感上很难受'],
        scores: ['secure', 'anxious', 'avoidant', 'disorganized']
      },
    ],
    calculate(answers) {
      const cnt = { secure: 0, anxious: 0, avoidant: 0, disorganized: 0 };
      answers.forEach(a => { if (a) cnt[a]++; });
      return Object.keys(cnt).reduce((a, b) => cnt[a] >= cnt[b] ? a : b, 'secure');
    },
    results: {
      secure: {
        title: '你的关系地图是一个温暖的营地',
        accent: '#4caf8c',
        p: ['你能靠近，也能独处。你不会因为关系而失去自己，也不会为了保护自己而让关系冻死。', '你相信关系可以修复，也相信自己有能力应对冲突——这种安全感是关系的底气。', '你的稳定是周围人的礼物，也是你自己多年来建立起来的成就。好好守护它。'],
        quote: '真正的安全感，不是来自外面，而是你内心里已经有的那个家。'
      },
      anxious: {
        title: '你的关系地图是一块磁铁',
        accent: '#c4557c',
        p: ['你渴望亲密到有时候会把人吓跑。不是你粘，是你内心某个孩子太需要被确认"我不会被丢下"。', '你在关系里投入很多，但总觉得不够——不够被爱、不够被珍惜、不够安全。', '那个渴望被满足的感觉，需要先从你自己给自己开始。外部的确认永远是不够的。'],
        quote: '你值得被留下。不是因为你足够黏，是因为你本来就值得。'
      },
      avoidant: {
        title: '你的关系地图是一座孤岛',
        accent: '#7ba7c0',
        p: ['你给自己造了一个完好的岛，岛上的生活井井有条。你很少依赖别人，也很少让别人进来。', '但你偶尔会站在岸边，想象对岸是什么样子——那不是你冷漠，是你在某处还渴望着连接。', '自给自足是一种力量，但孤岛也需要偶尔建一座桥。不需要多，一座就够。'],
        quote: '独立不是不需要人，是在需要的时候知道怎么开口。'
      },
      disorganized: {
        title: '你的关系地图是一场风暴',
        accent: '#9b7ec8',
        p: ['你同时渴望亲密和恐惧亲密。你靠近又后退，被接受又不敢相信，想留下又想逃跑。', '这通常来自早年的关系经历——那些关系同时是伤害和温暖的来源，让你学会了"爱是危险的"。', '这不是你的错，是你学到的——而学到的，也可以慢慢重新学。你现在已经在尝试了。'],
        quote: '在风暴里还在试图建立连接的人，是需要很大勇气的。'
      },
    }
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════════════════════════════

let state = {
  quizId: null,
  qIndex: 0,
  answers: [],
  timerInterval: null,
  currentQuiz: null,
  selectedSound: null,
};

// ══════════════════════════════════════════════════════════════════════════════
// PAGE NAV
// ══════════════════════════════════════════════════════════════════════════════

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
}

// ══════════════════════════════════════════════════════════════════════════════
// HOME PAGE — render cards
// ══════════════════════════════════════════════════════════════════════════════

function renderHome() {
  const grid = document.getElementById('quiz-grid');
  grid.innerHTML = QUIZZES.map(q => `
    <div class="quiz-card ${q.cardClass}" onclick="openIntro('${q.id}')">
      <div class="card-num">测试 ${q.num}</div>
      <div class="card-title">${q.title}</div>
      <div class="card-tags">
        <span class="tag">${q.typeLabel}</span>
        <span class="tag">${q.duration}</span>
      </div>
      <div class="card-tagline">${q.tagline}</div>
      <button class="card-btn">
        开始
        <svg width="14" height="14"><use href="#icon-arrow-right"/></svg>
      </button>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════════════════════════════════
// INTRO PAGE
// ══════════════════════════════════════════════════════════════════════════════

function openIntro(quizId) {
  const quiz = QUIZZES.find(q => q.id === quizId);
  if (!quiz) return;
  state.quizId = quizId;
  state.currentQuiz = quiz;

  document.getElementById('intro-title').textContent = quiz.title;
  document.getElementById('intro-tagline').textContent = quiz.tagline;
  document.getElementById('intro-type-text').textContent = quiz.typeLabel;
  document.getElementById('intro-duration-text').textContent = quiz.duration;

  const iconBox = document.getElementById('intro-icon-box');
  iconBox.innerHTML = `<svg width="40" height="40"><use href="${quiz.iconHref}"/></svg>`;
  iconBox.style.background = `linear-gradient(135deg, var(--purple), var(--purple-light))`;
  iconBox.querySelector('svg').style.fill = '#fff';

  showPage('page-intro');
}

// ══════════════════════════════════════════════════════════════════════════════
// START QUIZ
// ══════════════════════════════════════════════════════════════════════════════

function startQuiz() {
  const quiz = state.currentQuiz;
  state.qIndex = 0;
  state.answers = [];
  state.selectedSound = null;
  clearTimerInterval();
  showPage('page-quiz');
  renderQuestion();
}

// ══════════════════════════════════════════════════════════════════════════════
// RENDER QUESTION
// ══════════════════════════════════════════════════════════════════════════════

function renderQuestion() {
  const quiz = state.currentQuiz;
  const qIndex = state.qIndex;
  const totalQ = getQuestionCount(quiz);

  // Progress
  const pct = ((qIndex) / totalQ) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = `${qIndex + 1}/${totalQ}`;

  // For slider type, show all at once
  if (quiz.type === 'slider') {
    renderSlider(quiz);
    return;
  }

  const q = quiz.questions[qIndex];

  // Question text
  document.getElementById('question-text').textContent = q.text;

  // Hide all special panels first
  document.getElementById('timer-wrap').style.display = 'none';
  document.getElementById('audio-panel').style.display = 'none';
  document.getElementById('slider-submit-wrap').style.display = 'none';

  // Render options by type
  const container = document.getElementById('options-container');
  container.innerHTML = '';

  switch (quiz.type) {
    case 'color':  renderColorOptions(q, container); break;
    case 'text':   renderTextOptions(q, container); break;
    case 'icon':   renderIconOptions(q, container); break;
    case 'door':   renderDoorOptions(q, container); break;
    case 'audio':  renderAudioOptions(q, container, quiz); break;
    case 'timed':  renderTimedOptions(q, container); break;
  }
}

function getQuestionCount(quiz) {
  if (quiz.type === 'slider') return 1; // one screen
  return quiz.questions.length;
}

// ── Color options ────────────────────────────────────────────────────────────
function renderColorOptions(q, container) {
  const div = document.createElement('div');
  div.className = 'options-color';
  q.options.forEach((opt, i) => {
    const swatch = document.createElement('div');
    swatch.className = 'color-option';
    swatch.style.backgroundColor = opt.hex;
    swatch.innerHTML = `<span class="color-option-label">${opt.name}</span>`;
    swatch.addEventListener('click', () => {
      handleAnswer({ hex: opt.hex, name: opt.name, cat: opt.cat });
    });
    div.appendChild(swatch);
  });
  container.appendChild(div);
}

// ── Text options ─────────────────────────────────────────────────────────────
function renderTextOptions(q, container) {
  const div = document.createElement('div');
  div.className = 'options-text';
  const letters = ['A', 'B', 'C', 'D', 'E'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'text-option';
    const optText = typeof opt === 'string' ? opt : opt.label;
    // Strip leading "A. " etc if present
    const cleanText = optText.replace(/^[A-D]\.\s*/, '');
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${cleanText}</span>`;
    const score = q.scores ? q.scores[i] : i;
    btn.addEventListener('click', () => handleAnswer(score));
    div.appendChild(btn);
  });
  container.appendChild(div);
}

// ── Icon options (Test 4) ────────────────────────────────────────────────────
function renderIconOptions(q, container) {
  const div = document.createElement('div');
  div.className = 'options-icon';
  q.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'icon-option';
    btn.innerHTML = `
      <div class="icon-option-icon">${opt.icon}</div>
      <div class="icon-option-label">${opt.label}</div>
    `;
    btn.addEventListener('click', () => handleAnswer({ label: opt.label, cat: opt.cat }));
    div.appendChild(btn);
  });
  container.appendChild(div);
}

// ── Door options (Test 5) ────────────────────────────────────────────────────
const DOOR_SVGS = {
  red: `<svg class="door-svg" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="30" width="110" height="105" rx="55" fill="#cc2200"/>
    <rect x="18" y="43" width="84" height="92" rx="42" fill="#e84422"/>
    <rect x="30" y="60" width="60" height="75" rx="2" fill="#b82000"/>
    <ellipse cx="75" cy="100" rx="5" ry="5" fill="#ffd700"/>
    <rect x="0" y="30" width="120" height="8" rx="4" fill="#8b0000"/>
    <rect x="10" y="135" width="100" height="5" rx="2" fill="#8b0000"/>
    <!-- glow from crack -->
    <line x1="60" y1="60" x2="60" y2="135" stroke="rgba(255,200,0,0.3)" stroke-width="2"/>
  </svg>`,
  wood: `<svg class="door-svg" viewBox="0 0 120 140" fill="none">
    <rect x="5" y="10" width="110" height="125" rx="3" fill="#8b6843"/>
    <rect x="5" y="10" width="110" height="125" rx="3" fill="url(#wood)" opacity="0.5"/>
    <rect x="15" y="20" width="90" height="115" rx="2" fill="#a07850"/>
    <!-- panels -->
    <rect x="22" y="28" width="35" height="45" rx="2" fill="rgba(0,0,0,0.1)" stroke="#7a5c38" stroke-width="1"/>
    <rect x="63" y="28" width="35" height="45" rx="2" fill="rgba(0,0,0,0.1)" stroke="#7a5c38" stroke-width="1"/>
    <rect x="22" y="82" width="76" height="42" rx="2" fill="rgba(0,0,0,0.08)" stroke="#7a5c38" stroke-width="1"/>
    <!-- handle -->
    <circle cx="88" cy="78" r="4" fill="#c8a870"/>
    <!-- cracks -->
    <line x1="25" y1="30" x2="55" y2="35" stroke="rgba(0,0,0,0.15)" stroke-width="0.8"/>
    <line x1="35" y1="55" x2="55" y2="70" stroke="rgba(0,0,0,0.1)" stroke-width="0.6"/>
  </svg>`,
  glass: `<svg class="door-svg" viewBox="0 0 120 140" fill="none">
    <rect x="5" y="10" width="110" height="125" rx="3" fill="rgba(180,210,240,0.3)" stroke="#7ba7c0" stroke-width="2"/>
    <rect x="15" y="20" width="90" height="115" rx="2" fill="rgba(200,230,255,0.25)"/>
    <!-- frame lines -->
    <line x1="60" y1="20" x2="60" y2="135" stroke="rgba(100,160,200,0.5)" stroke-width="1.5"/>
    <line x1="15" y1="77" x2="105" y2="77" stroke="rgba(100,160,200,0.5)" stroke-width="1.5"/>
    <!-- refraction -->
    <rect x="18" y="22" width="38" height="52" rx="2" fill="rgba(220,240,255,0.35)"/>
    <rect x="62" y="22" width="38" height="52" rx="2" fill="rgba(200,230,255,0.2)"/>
    <!-- handle -->
    <rect x="54" y="70" width="12" height="3" rx="1.5" fill="#7ba7c0"/>
  </svg>`,
  black: `<svg class="door-svg" viewBox="0 0 120 140" fill="none">
    <rect x="5" y="5" width="110" height="130" rx="2" fill="#1a1a2a"/>
    <rect x="10" y="10" width="100" height="120" rx="1" fill="#222233"/>
    <!-- rivets -->
    <circle cx="20" cy="20" r="3" fill="#444"/>
    <circle cx="100" cy="20" r="3" fill="#444"/>
    <circle cx="20" cy="125" r="3" fill="#444"/>
    <circle cx="100" cy="125" r="3" fill="#444"/>
    <circle cx="20" cy="72" r="3" fill="#444"/>
    <circle cx="100" cy="72" r="3" fill="#444"/>
    <!-- horizontal bars -->
    <rect x="10" y="45" width="100" height="4" rx="1" fill="#333344"/>
    <rect x="10" y="95" width="100" height="4" rx="1" fill="#333344"/>
    <!-- handle -->
    <circle cx="85" cy="72" r="5" fill="#555566"/>
    <circle cx="85" cy="72" r="3" fill="#333"/>
  </svg>`,
  pink: `<svg class="door-svg" viewBox="0 0 120 140" fill="none">
    <!-- short door with vine -->
    <rect x="10" y="50" width="100" height="85" rx="4" fill="#f0a8c0"/>
    <rect x="18" y="58" width="84" height="70" rx="3" fill="#f8c4d8"/>
    <!-- panel -->
    <rect x="28" y="66" width="28" height="34" rx="2" fill="rgba(255,255,255,0.4)"/>
    <rect x="64" y="66" width="28" height="34" rx="2" fill="rgba(255,255,255,0.4)"/>
    <!-- handle -->
    <circle cx="78" cy="98" r="4" fill="#e87498"/>
    <!-- vine decoration -->
    <path d="M20 50 Q30 30 45 20 Q55 10 60 5" stroke="#5a7a3d" stroke-width="1.5" fill="none"/>
    <circle cx="45" cy="20" r="4" fill="#c8e08a"/>
    <circle cx="35" cy="32" r="3" fill="#c8e08a"/>
    <circle cx="60" cy="8" r="3" fill="#d8f0a0"/>
    <path d="M100 50 Q90 35 80 25" stroke="#5a7a3d" stroke-width="1.2" fill="none"/>
    <circle cx="80" cy="25" r="3" fill="#c8e08a"/>
  </svg>`,
  white: `<svg class="door-svg" viewBox="0 0 120 140" fill="none">
    <rect x="5" y="10" width="110" height="125" rx="4" fill="#f8f8fc"/>
    <rect x="5" y="10" width="110" height="125" rx="4" stroke="#e0e0e8" stroke-width="1.5"/>
    <!-- minimal lines only -->
    <line x1="5" y1="77" x2="115" y2="77" stroke="#e8e8f0" stroke-width="1"/>
    <!-- no handle -->
    <text x="60" y="110" text-anchor="middle" font-size="9" fill="#c0c0cc">推</text>
    <text x="60" y="122" text-anchor="middle" font-size="7" fill="#d0d0dc">无把手</text>
  </svg>`,
};

function renderDoorOptions(q, container) {
  const div = document.createElement('div');
  div.className = 'options-door';
  q.options.forEach((opt) => {
    const btn = document.createElement('div');
    btn.className = 'door-option';
    btn.innerHTML = (DOOR_SVGS[opt.key] || DOOR_SVGS.white) +
      `<div class="door-label">${opt.label}</div>`;
    btn.addEventListener('click', () => handleAnswer(opt.key));
    div.appendChild(btn);
  });
  container.appendChild(div);
}

// ── Audio options (Tests 3, 9) ───────────────────────────────────────────────
function renderAudioOptions(q, container, quiz) {
  const panel = document.getElementById('audio-panel');
  panel.style.display = 'block';

  // If Test 3: one sound to play first, then text choices
  // If Test 9: four sounds to try, then text choices
  const soundsContainer = document.getElementById('audio-sounds-container');
  soundsContainer.innerHTML = '';

  if (quiz.id === 'q3') {
    // Single play button
    const btn = document.createElement('button');
    btn.className = 'sound-btn';
    btn.style.gridColumn = '1/-1';
    btn.innerHTML = `<svg width="14" height="14"><use href="#icon-play"/></svg> ${q.soundLabel}`;
    btn.addEventListener('click', () => {
      btn.classList.add('playing');
      setTimeout(() => btn.classList.remove('playing'), 3500);
      AudioManager.SOUNDS[q.soundKey] && AudioManager.SOUNDS[q.soundKey]();
    });
    soundsContainer.appendChild(btn);
  } else {
    // Test 9: 4 sound buttons
    const soundMap = [
      { key: 'echoWhisper',  label: '回声低语' },
      { key: 'sharpAlert',   label: '尖锐提示音' },
      { key: 'calmSteady',   label: '平静持续音' },
      { key: 'staticNoise',  label: '断断续续杂音' },
    ];
    soundMap.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'sound-btn';
      btn.innerHTML = `<svg width="14" height="14"><use href="#icon-play"/></svg> ${s.label}`;
      btn.addEventListener('click', () => {
        soundsContainer.querySelectorAll('.sound-btn').forEach(b => b.classList.remove('playing'));
        btn.classList.add('playing');
        setTimeout(() => btn.classList.remove('playing'), 3200);
        AudioManager.SOUNDS[s.key] && AudioManager.SOUNDS[s.key]();
      });
      soundsContainer.appendChild(btn);
    });
  }

  // Text option choices
  const div = document.createElement('div');
  div.className = 'options-text';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'text-option';
    const cleanText = opt.replace(/^[A-D]\.\s*/, '');
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${cleanText}</span>`;
    const score = q.scores ? q.scores[i] : i;
    btn.addEventListener('click', () => handleAnswer(score));
    div.appendChild(btn);
  });
  container.appendChild(div);
}

// ── Timed options (Test 8) ───────────────────────────────────────────────────
function renderTimedOptions(q, container) {
  const quiz = state.currentQuiz;

  // Show timer bar
  const timerWrap = document.getElementById('timer-wrap');
  timerWrap.style.display = 'block';
  const timerFill = document.getElementById('timer-fill');
  timerFill.style.width = '100%';

  const div = document.createElement('div');
  div.className = 'options-timed';
  const btns = [];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'timed-option';
    btn.textContent = opt;
    const score = q.scores ? q.scores[i] : opt;
    btn.addEventListener('click', () => {
      if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
      }
      handleAnswer(score);
    });
    div.appendChild(btn);
    btns.push(btn);
  });
  container.appendChild(div);

  // Start countdown
  const totalMs = (quiz.timerSeconds || 3) * 1000;
  const startTime = Date.now();
  clearTimerInterval();
  state.timerInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, totalMs - elapsed);
    timerFill.style.width = (remaining / totalMs * 100) + '%';
    if (remaining <= 0) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
      // Auto-select "flight/skip" = index 3 if exists, else index 1
      const autoIdx = q.scores ? q.scores.indexOf('flight') : -1;
      const score = (autoIdx >= 0 && q.scores) ? q.scores[autoIdx] : (q.scores ? q.scores[1] : null);
      btns.forEach(b => b.classList.add('auto-selected'));
      setTimeout(() => handleAnswer(score), 200);
    }
  }, 50);
}

// ── Slider (Test 7) ──────────────────────────────────────────────────────────
function renderSlider(quiz) {
  document.getElementById('question-text').textContent = '请根据实际情况移动滑块';
  document.getElementById('timer-wrap').style.display = 'none';
  document.getElementById('audio-panel').style.display = 'none';

  const container = document.getElementById('options-container');
  container.innerHTML = '';

  const div = document.createElement('div');
  div.className = 'options-slider';

  const valueLabels = quiz.valueLabels || ['从不', '偶尔', '经常', '总是'];
  const sliderValues = [];

  quiz.sliderItems.forEach((item, i) => {
    sliderValues.push(1);
    const wrap = document.createElement('div');
    wrap.className = 'slider-item';

    const valSpan = document.createElement('span');
    valSpan.className = 'slider-value';
    valSpan.textContent = valueLabels[1];

    wrap.innerHTML = `
      <div class="slider-question">${item.dim}：${item.text}</div>
      <div class="slider-row">
        <span class="slider-label-left">${valueLabels[0]}</span>
        <input type="range" min="0" max="3" value="1" step="1" data-idx="${i}">
        <span class="slider-label-right">${valueLabels[3]}</span>
      </div>
    `;
    const input = wrap.querySelector('input[type="range"]');
    input.after(valSpan);

    input.addEventListener('input', () => {
      const v = parseInt(input.value);
      sliderValues[i] = v;
      valSpan.textContent = valueLabels[v];
    });

    div.appendChild(wrap);
  });

  container.appendChild(div);

  const submitWrap = document.getElementById('slider-submit-wrap');
  submitWrap.style.display = 'block';

  document.getElementById('btn-slider-submit').onclick = () => {
    state.answers = sliderValues;
    triggerLoading();
  };
}

// ══��═══════════════════════════════════════════════════════════════════════════
// ANSWER HANDLING
// ══════════════════════════════════════════════════════════════════════════════

function handleAnswer(value) {
  const quiz = state.currentQuiz;
  clearTimerInterval();

  state.answers.push(value);
  state.qIndex++;

  const total = quiz.questions ? quiz.questions.length : 1;
  if (state.qIndex >= total) {
    triggerLoading();
  } else {
    renderQuestion();
  }
}

function clearTimerInterval() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// LOADING → RESULT
// ══════════════════════════════════════════════════════════════════════════════

const LOADING_MSGS = ['分析中...', '解读你的潜意识...', '快好了...'];

function triggerLoading() {
  clearTimerInterval();
  showPage('page-loading');

  let mi = 0;
  const msgEl = document.getElementById('loading-msg');
  msgEl.textContent = LOADING_MSGS[0];
  const interval = setInterval(() => {
    mi = (mi + 1) % LOADING_MSGS.length;
    msgEl.textContent = LOADING_MSGS[mi];
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    showResultPage();
  }, 1600);
}

// ══════════════════════════════════════════════════════════════════════════════
// RESULT PAGE
// ══════════════════════════════════════════════════════════════════════════════

function showResultPage() {
  const quiz = state.currentQuiz;
  let resultKey, radarData;

  if (quiz.type === 'slider') {
    const calc = quiz.calculate(state.answers);
    resultKey = calc.type;
    radarData = calc;
  } else {
    resultKey = quiz.calculate(state.answers);
  }

  const result = quiz.results[resultKey] || Object.values(quiz.results)[0];

  // Icon box
  const iconBox = document.getElementById('result-icon-box');
  iconBox.style.background = `linear-gradient(135deg, ${result.accent}30, ${result.accent}18)`;
  iconBox.innerHTML = `<svg width="46" height="46" style="fill:${result.accent}"><use href="${quiz.iconHref}"/></svg>`;

  // Title
  document.getElementById('result-title').textContent = result.title;

  // Body paragraphs
  const body = document.getElementById('result-body');
  body.innerHTML = (result.p || []).map(p => `<p class="result-p">${p}</p>`).join('');

  // Quote
  document.getElementById('result-quote').textContent = result.quote || '';

  // Canvas & dim tips
  const canvas = document.getElementById('result-canvas');
  const dimTips = document.getElementById('dimension-tips');
  canvas.style.display = 'none';
  dimTips.style.display = 'none';

  if (quiz.type === 'slider' && radarData) {
    canvas.style.display = 'block';
    canvas.width = 360;
    canvas.height = 320;
    setTimeout(() => {
      CanvasManager.drawRadar('result-canvas', radarData.scores, radarData.dims, 6);
    }, 100);

    // Per-dimension tips
    dimTips.style.display = 'flex';
    dimTips.innerHTML = radarData.dims.map((dim, i) => {
      const score = radarData.scores[i];
      const tip = quiz.dimTips[dim] || '';
      const quality = score <= 1 ? '需要更多关注' : score <= 3 ? '还有提升空间' : '做得不错';
      return `<div class="dim-tip"><div class="dim-dot"></div><span><b>${dim}</b>（${score}/6）— ${quality}。${tip}</span></div>`;
    }).join('');
  }

  if (quiz.type === 'text' && quiz.id === 'q10') {
    canvas.style.display = 'block';
    canvas.width = 360;
    canvas.height = 320;
    setTimeout(() => {
      CanvasManager.drawRelationshipMap('result-canvas', resultKey);
    }, 100);
  }

  // Save result for share
  state.lastResult = { quiz, result, resultKey };

  showPage('page-result');
}

// ══════════════════════════════════════════════════════════════════════════════
// SHARE / COPY
// ══════════════════════════════════════════════════════════════════════════════

function shareResult() {
  if (!state.lastResult) return;
  const { quiz, result } = state.lastResult;
  const text = `我在「玩心理」测出来是：\n${result.title}\n\n${result.quote}\n\n你也来测测？`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast('已复制到剪贴板'));
  } else {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('已复制到剪贴板');
  }
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ══════════════════════════════════════════════════════════════════════════════
// EVENT LISTENERS
// ══════════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  renderHome();

  document.getElementById('btn-start-quiz').addEventListener('click', startQuiz);

  document.getElementById('btn-quiz-back').addEventListener('click', () => {
    clearTimerInterval();
    showPage('page-home');
  });

  document.getElementById('btn-share').addEventListener('click', shareResult);

  document.getElementById('btn-retake').addEventListener('click', () => {
    if (state.currentQuiz) {
      openIntro(state.currentQuiz.id);
    }
  });

  document.getElementById('btn-home').addEventListener('click', () => {
    clearTimerInterval();
    showPage('page-home');
  });
});
