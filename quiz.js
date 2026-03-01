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
    duration: '约2分钟',
    cardClass: 'card-1',
    iconHref: '#icon-chart',
    questions: [
      {
        text: '现在，你最想把自己裹在哪种颜色里？',
        options: [
          { hex: '#2B4590', name: '深蓝', cat: 'C' },
          { hex: '#F5EFE0', name: '奶白', cat: 'N' },
          { hex: '#E8440A', name: '橘红', cat: 'W' },
          { hex: '#5A6E2E', name: '橄榄绿', cat: 'C' },
          { hex: '#B09CD0', name: '淡紫', cat: 'G' },
          { hex: '#2C2C2C', name: '炭黑', cat: 'G' },
          { hex: '#F5A623', name: '暖橙', cat: 'W' },
          { hex: '#87CEEB', name: '天蓝', cat: 'C' },
          { hex: '#C4557C', name: '玫红', cat: 'S' },
          { hex: '#8B6843', name: '原木棕', cat: 'N' },
          { hex: '#4CAF8C', name: '松石绿', cat: 'C' },
          { hex: '#FFE135', name: '柠黄', cat: 'S' },
          { hex: '#B8D8EA', name: '冰蓝', cat: 'N' },
          { hex: '#CC6633', name: '赤陶', cat: 'W' },
          { hex: '#9E9E9E', name: '暖灰', cat: 'N' },
          { hex: '#3D2B1F', name: '深棕', cat: 'G' },
        ]
      },
      {
        text: '你的卧室如果只能保留一种颜色，你留哪个？',
        options: [
          { hex: '#F5E6D0', name: '米黄', cat: 'N' },
          { hex: '#E8775C', name: '珊瑚', cat: 'W' },
          { hex: '#7BA7C0', name: '灰蓝', cat: 'C' },
          { hex: '#2D5A27', name: '深绿', cat: 'C' },
          { hex: '#C4557C', name: '玫红', cat: 'S' },
          { hex: '#8B6843', name: '原木棕', cat: 'N' },
          { hex: '#E8D5B7', name: '沙杏', cat: 'N' },
          { hex: '#4A90D9', name: '晴蓝', cat: 'C' },
          { hex: '#D4A5A5', name: '雾粉', cat: 'N' },
          { hex: '#5C8A5C', name: '苔绿', cat: 'C' },
          { hex: '#F0E68C', name: '淡金', cat: 'W' },
          { hex: '#808080', name: '中灰', cat: 'G' },
          { hex: '#9370DB', name: '丁香紫', cat: 'G' },
          { hex: '#E07B54', name: '暖陶', cat: 'W' },
          { hex: '#DDEEFF', name: '薄荷白', cat: 'N' },
          { hex: '#1A1A2A', name: '深夜蓝', cat: 'G' },
        ]
      },
      {
        text: '哪个颜色让你感到「安全」？',
        options: [
          { hex: '#87CEEB', name: '天蓝', cat: 'C' },
          { hex: '#8B69C8', name: '薰衣草', cat: 'G' },
          { hex: '#FF9A3C', name: '暖橙', cat: 'W' },
          { hex: '#5A7A3D', name: '苔绿', cat: 'C' },
          { hex: '#F0C4B0', name: '裸粉', cat: 'N' },
          { hex: '#F8F8F8', name: '纯白', cat: 'N' },
          { hex: '#2E4A8B', name: '海军蓝', cat: 'C' },
          { hex: '#D2B48C', name: '燕麦', cat: 'N' },
          { hex: '#4CAF8C', name: '薄荷绿', cat: 'C' },
          { hex: '#F5DEB3', name: '小麦色', cat: 'N' },
          { hex: '#B0C4DE', name: '钢蓝', cat: 'C' },
          { hex: '#DDA0DD', name: '梅花紫', cat: 'G' },
          { hex: '#90EE90', name: '嫩草绿', cat: 'C' },
          { hex: '#FFB6C1', name: '浅玫粉', cat: 'W' },
          { hex: '#F4A460', name: '沙棕', cat: 'N' },
          { hex: '#708090', name: '石板灰', cat: 'G' },
        ]
      },
      {
        text: '哪个颜色让你最想逃跑？（选你最抗拒的）',
        options: [
          { hex: '#FFE135', name: '荧光黄', cat: 'S' },
          { hex: '#8B0000', name: '血红', cat: 'S' },
          { hex: '#39FF14', name: '荧光绿', cat: 'S' },
          { hex: '#9B8FA3', name: '灰紫', cat: 'G' },
          { hex: '#3D2B1F', name: '暗棕', cat: 'G' },
          { hex: '#B8D8EA', name: '冰蓝', cat: 'C' },
          { hex: '#FF69B4', name: '粉嫩粉', cat: 'S' },
          { hex: '#FF4500', name: '橙红', cat: 'S' },
          { hex: '#D3D3D3', name: '浅灰', cat: 'N' },
          { hex: '#006400', name: '深绿', cat: 'C' },
          { hex: '#800080', name: '深紫', cat: 'G' },
          { hex: '#FFA500', name: '亮橙', cat: 'W' },
          { hex: '#A0522D', name: '锈棕', cat: 'G' },
          { hex: '#00CED1', name: '青绿', cat: 'C' },
          { hex: '#DC143C', name: '深玫红', cat: 'S' },
          { hex: '#F0E68C', name: '姜黄', cat: 'N' },
        ]
      },
      {
        text: '你现在的心情如果是一种颜色，是？',
        options: [
          { hex: '#FFE135', name: '明黄', cat: 'W' },
          { hex: '#B0B0B0', name: '浅灰', cat: 'G' },
          { hex: '#CC2200', name: '深红', cat: 'S' },
          { hex: '#4CAF8C', name: '蓝绿', cat: 'C' },
          { hex: '#7B68EE', name: '紫蓝', cat: 'G' },
          { hex: '#F5A0B0', name: '橙粉', cat: 'W' },
          { hex: '#4682B4', name: '钢蓝', cat: 'C' },
          { hex: '#FF7F50', name: '珊瑚橙', cat: 'W' },
          { hex: '#2F4F4F', name: '深石绿', cat: 'G' },
          { hex: '#DAA520', name: '金棕', cat: 'W' },
          { hex: '#E8E8E8', name: '月白', cat: 'N' },
          { hex: '#8B4513', name: '深棕', cat: 'G' },
          { hex: '#20B2AA', name: '清翠', cat: 'C' },
          { hex: '#FF6B6B', name: '珊瑚红', cat: 'S' },
          { hex: '#9B9B9B', name: '铁灰', cat: 'G' },
          { hex: '#7EC8A4', name: '薄荷', cat: 'C' },
        ]
      },
      {
        text: '哪个颜色最像你理想中的明天？',
        options: [
          { hex: '#F5A623', name: '金橙', cat: 'W' },
          { hex: '#4AA8C8', name: '湖蓝', cat: 'C' },
          { hex: '#7BC46E', name: '嫩绿', cat: 'C' },
          { hex: '#E8A0B0', name: '玫瑰', cat: 'W' },
          { hex: '#E8E8E8', name: '银白', cat: 'N' },
          { hex: '#C4683A', name: '赤陶', cat: 'W' },
          { hex: '#6495ED', name: '矢车菊蓝', cat: 'C' },
          { hex: '#98FB98', name: '嫩薄荷', cat: 'C' },
          { hex: '#FFD700', name: '明金', cat: 'W' },
          { hex: '#DDA0DD', name: '丁香', cat: 'G' },
          { hex: '#B0E0E6', name: '粉蓝', cat: 'N' },
          { hex: '#FA8072', name: '三文鱼', cat: 'W' },
          { hex: '#ADFF2F', name: '草绿', cat: 'C' },
          { hex: '#E6E6FA', name: '薰衣白', cat: 'N' },
          { hex: '#FF8C00', name: '暗橙', cat: 'W' },
          { hex: '#40E0D0', name: '绿松石', cat: 'C' },
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
    tagline: '每个人心里都住着一只小怪兽，它比你更诚实',
    type: 'text',
    typeLabel: '词语联想',
    duration: '约2分钟',
    cardClass: 'card-2',
    iconHref: '#icon-brain',
    questions: [
      {
        text: '「镜子」——你看到的第一个画面是？',
        options: ['我自己的脸', '某个人的脸', '一个空荡荡的房间', '我不喜欢照镜子'],
        scores: ['firefly', 'octopus', 'hedgehog', 'hedgehog']
      },
      {
        text: '「深夜3点钟」——你通常在做什么？',
        options: ['早就睡着了', '刷手机，挺正常的', '脑子里想东想西', '快要哭了或者正在哭'],
        scores: ['dragon', 'firefly', 'hedgehog', 'octopus']
      },
      {
        text: '「有人说你变了」——你的第一反应？',
        options: ['真的吗，哪里变了？', '谢谢，是变好了吗', '怎么了，有问题吗', '心里咯噔了一下'],
        scores: ['octopus', 'firefly', 'hedgehog', 'hedgehog']
      },
      {
        text: '「被人需要的感觉」——对你来说是？',
        options: ['有点累，但是甜的', '很开心，我喜欢这种感觉', '有点压力，不太自在', '本能地想逃跑'],
        scores: ['octopus', 'firefly', 'hedgehog', 'hedgehog']
      },
      {
        text: '「一片空旷的广场，只有你一个人」——你感到？',
        options: ['自由，终于', '有点孤独', '莫名想往前跑', '不舒服，想找个角落'],
        scores: ['dragon', 'hedgehog', 'firefly', 'hedgehog']
      },
      {
        text: '「有人突然对你特别好」——你第一反应是？',
        options: ['开心接受，很好啊', '有点受宠若惊', '他有什么目的吗', '感动，但不敢太靠近'],
        scores: ['dragon', 'firefly', 'hedgehog', 'hedgehog']
      },
      {
        text: '「一段没有终点的楼梯」——你会？',
        options: ['继续往上爬', '先停下来看看情况', '掉头往下走', '直接在台阶上坐下来'],
        scores: ['dragon', 'octopus', 'hedgehog', 'dragon']
      },
      {
        text: '「你自己的名字」——听到或看到它，你感觉？',
        options: ['就是我，很自然', '还好，没特别感觉', '有点陌生，像在说另一个人', '像一个沉甸甸的东西压着'],
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
        text: '先播放声音，闭上眼睛听完，再选你的感受',
        soundKey: 'lowHum',
        soundLabel: '低沉持续嗡鸣',
        options: ['有一种被压住的感觉', '感到稳定、踏实', '有点想睡觉', '莫名地不舒服'],
        scores: ['S', 'B', 'D', 'M']
      },
      {
        text: '先播放声音，闭上眼睛听完，再选你的感受',
        soundKey: 'highBeep',
        soundLabel: '高频短促叮声',
        options: ['立刻警觉，心跳加速', '感到清醒和专注', '有点烦躁，想跳过', '莫名有点兴奋'],
        scores: ['S', 'B', 'D', 'M']
      },
      {
        text: '先播放声音，闭上眼睛听完，再选你的感受',
        soundKey: 'midWave',
        soundLabel: '中频缓慢起伏音',
        options: ['很平静，像呼吸', '有点忧伤，说不清', '有点期待感', '什么都没感觉到'],
        scores: ['B', 'S', 'M', 'D']
      },
      {
        text: '先播放声音，闭上眼睛听完，再选你的感受',
        soundKey: 'irregular',
        soundLabel: '不规则随机敲击',
        options: ['有点焦虑，坐不住', '觉得挺有意思的', '心跳不自觉跟上去', '想把它关掉'],
        scores: ['S', 'B', 'M', 'D']
      },
      {
        text: '先播放声音，闭上眼睛听完，再选你的感受',
        soundKey: 'harmony',
        soundLabel: '三音和弦',
        options: ['感到温暖，想停留', '有点奇怪，哪里不对', '整个人放松下来了', '莫名有点想哭'],
        scores: ['B', 'M', 'B', 'S']
      },
      {
        text: '这一题，点击播放后几乎没有声音。\n静默本身是一种声音——你感受到了什么？',
        soundKey: 'silence',
        soundLabel: '静默体验',
        options: ['挺舒服的，难得的安静', '有点难受，不自在', '好奇地等待，像在预期什么', '感到一种空洞'],
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
    tagline: '门的另一边，是你还不认识的自己',
    type: 'door',
    typeLabel: '视觉直觉',
    duration: '约1分钟',
    cardClass: 'card-5',
    iconHref: '#icon-arrow-right',
    questions: [
      {
        text: '第一轮：哪扇门，你最想推开？',
        options: [
          { key: 'red',    label: '红色拱门' },
          { key: 'wood',   label: '旧木门' },
          { key: 'glass',  label: '玻璃门' },
          { key: 'black',  label: '黑铁门' },
          { key: 'arch',   label: '石拱门' },
          { key: 'bamboo', label: '竹帘门' },
        ]
      },
      {
        text: '第二轮：直觉选择——你会推哪扇？',
        options: [
          { key: 'pink',   label: '粉色小门' },
          { key: 'white',  label: '白色极简门' },
          { key: 'neon',   label: '霓虹暗门' },
          { key: 'copper', label: '古铜大门' },
          { key: 'paper',  label: '日式纸拉门' },
          { key: 'vine',   label: '藤蔓旧门' },
        ]
      },
      {
        text: '第三轮：这是你最后的机会——选吧',
        options: [
          { key: 'wood',   label: '旧木门' },
          { key: 'glass',  label: '玻璃门' },
          { key: 'neon',   label: '霓虹暗门' },
          { key: 'paper',  label: '日式纸拉门' },
          { key: 'arch',   label: '石拱门' },
          { key: 'vine',   label: '藤蔓旧门' },
        ]
      },
    ],
    calculate(answers) {
      const cnt = {};
      answers.forEach(a => { if (a) cnt[a] = (cnt[a] || 0) + 1; });
      // Most chosen door type, with weighted last choice
      if (answers[2]) cnt[answers[2]] = (cnt[answers[2]] || 0) + 0.5;
      const best = Object.keys(cnt).reduce((a, b) => cnt[a] >= cnt[b] ? a : b, 'white');
      return best || 'white';
    },
    results: {
      red: {
        title: '你渴望的，比你愿意承认的多',
        accent: '#cc2200',
        p: ['你内心藏着强烈的驱动力和欲望，但也许你不太好意思承认自己有多想要某些东西。', '那扇红门后面是激情、是冲动、是你压抑已久还未完全释放的能量。', '这股力不需要被压制——它是你最真实的动力。问题不是"我能不能"，而是"我允许自己要吗"？'],
        quote: '渴望本身不是罪，把它封存起来才是。'
      },
      wood: {
        title: '你在寻找一个可以停下来的地方',
        accent: '#8b6843',
        p: ['你疲惫了。你想要的是一扇熟悉的门——一个不必解释自己、不需要表演的地方。', '旧木门让你想起某种久违的安全感，那是你现在最需要的东西。', '如果现实里还没找到那样的地方，先在心里给自己搭一个——你值得拥有那个栖息地。'],
        quote: '家不是一个地址，是你不需要在乎别人眼光的那种状态。'
      },
      glass: {
        title: '你比自己以为的更渴望被看见',
        accent: '#4aa8c8',
        p: ['你好奇世界，想被人真正看见，也愿意去看见别人。你对改变并不排斥，只是需要一点安全感作为出发点。', '你选择了透明——可以在进去之前先看清楚，这是理智，也是一种安静的勇气。', '这份开放是你的优势，别让"想太多"堵住了那扇门。'],
        quote: '透明不是脆弱，是双向的勇气。'
      },
      black: {
        title: '你内心住着一个还未被自己接受的部分',
        accent: '#2c2c2c',
        p: ['你被力量感、未知和黑暗所吸引——这不是坏事，这说明你正在和自己某个部分正面交锋。', '那扇黑铁门后面可能藏着你还不敢完全承认的欲望、愤怒，或某种深层的需要。', '不用害怕那个部分，它也是你。认识它，比一直逃跑要有力量得多。'],
        quote: '黑暗不是敌人，只是你还没有照过光的地方。'
      },
      pink: {
        title: '你比外表看起来更柔软，也更需要被温柔对待',
        accent: '#c4557c',
        p: ['那扇矮小的粉色门需要弯下身才能进去——你愿意为了爱和温柔低头。', '你心里住着一个还很小的自己，它需要被接纳，被无条件地爱，被人看见它的柔软。', '别急着长大，也别把自己的脆弱当成弱点——那份柔软，恰恰是你最真实的力量所在。'],
        quote: '在这个世界上还能保持柔软，是一种非常稀有的勇气。'
      },
      white: {
        title: '你准备好重新开始了，但你有点害怕',
        accent: '#888888',
        p: ['你选了那扇没有把手的门——你知道改变必然要来，但迈出那一步需要你自己推自己一把。', '那扇白门后面是未知：可能是全新的开始，可能是一片虚无，你还不确定。', '但门只有推开才知道后面是什么。犹豫没有答案，只有行动才有。'],
        quote: '有些门没有把手，是因为它需要你用力推。'
      },
      arch: {
        title: '你身上有一种跨越时间的厚重感',
        accent: '#757575',
        p: ['那扇石拱门沉默而厚实，像是在等了你很久。你对于历史感、沉淀和积累有一种本能的亲近。', '你不喜欢轻飘飘的东西，你在找的是有重量的东西——有意义的关系，有根基的选择。', '那种厚重感不是负担，是你的地基。站在结实的地方，你能走得更远。'],
        quote: '石头是被时间雕刻的，有分量的人生也是如此。'
      },
      bamboo: {
        title: '你向往的，是一种减法的人生',
        accent: '#5a7a3d',
        p: ['竹帘的轻盈和通透，透露着你对"简单"的渴望——你想要的不是繁华，而是干净。', '你有某种禅意的底色：比起堆积，你更想清减；比起表现，你更想安静地做自己。', '现代生活里这种清净感很难得，你愿意放弃一些"热闹"来换它，这需要智慧，也需要勇气。'],
        quote: '减法的人生，需要比加法更大的勇气。'
      },
      neon: {
        title: '你有一部分在夜里才敢亮起来',
        accent: '#FF2D78',
        p: ['那扇霓虹门属于黑暗中的光——你的某一面，只有在某些特定的时刻或人面前，才会完全亮起来。', '你可能有一面白天不太拿出来的自己：更放肆、更真实、更不在乎规则。', '那个夜里的你也是你，不用压抑它。你不需要永远是白天的那个版本。'],
        quote: '有些光，只有在黑暗里才看得见它有多亮。'
      },
      copper: {
        title: '你需要的，是值得信赖的分量',
        accent: '#B87333',
        p: ['古铜大门厚重、庄严，上面有时间留下的痕迹——你在找有质感的东西，不管是关系还是选择。', '你不轻易相信，但一旦信了就会付出全力。你对浮夸的东西有天然的排斥，更喜欢真实有价值的内核。', '这种眼力和执着是一种难得的品质，但记得，不是所有厚重的东西都值得你全部投入。'],
        quote: '铜锈不是衰败，是经历了什么的证明。'
      },
      paper: {
        title: '你渴望一种通透又保有边界的关系',
        accent: '#8B7355',
        p: ['日式纸拉门透光但不透人——你想被理解，但你也需要隐私和边界。', '你对关系有自己的节奏：亲密但不失距离，温柔但不过度暴露。', '这种分寸感是一种成熟的美，不是冷漠。你只是知道，真正好的关系不需要把自己全都打开。'],
        quote: '最好的关系，是透着光但各自保持完整的两扇门。'
      },
      vine: {
        title: '你被遗忘的部分，正在等你回去',
        accent: '#5A8A3A',
        p: ['那扇被藤蔓覆盖的旧门，美丽又荒废——它让你想起某些你曾经有过、但不知何时放下的东西。', '也许是某种热情，某种梦想，某个你曾经喜欢过的自己。', '那些东西没有消失，只是在等你重新找到它们。生命力没有消失，只是暂时沉默了。'],
        quote: '被遗忘的地方，往往长出最茂盛的东西。'
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
        text: '外卖比预计晚了一个小时，你会？',
        options: ['完全没问题，等着就行', '有点不爽但忍下来了', '发了差评，该说说', '开始觉得今天哪里都不对劲'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '工作群突然@你，说一件你以为早就解决的事，你的反应是？',
        options: ['淡定回复，处理就好', '叹口气，好吧处理', '心跳瞬间快了一拍', '想直接摆烂，不想动'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '期待很久的计划被临时取消，你会？',
        options: ['好的没事，改天再约', '有点失落，但调整过来了', '情绪低落了一整天', '对所有事的期待都消失了一截'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '昨晚没睡好，今天还有一堆事要做，你最可能？',
        options: ['照常运转，基本没影响', '咖啡续命，勉强撑着', '效率大打折扣但还是硬撑', '脑子里突然觉得活着好累'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '有人当众说了你一句不公平的话，你会？',
        options: ['当场说清楚，不憋着', '忍住了，但记住了', '表情管理失败，没能装住', '接下来好几天反复回想这件事'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '连续高压工作一整周后，你通常是？',
        options: ['照样过周末，没什么感觉', '睡一觉就恢复了', '需要好几天才能缓过来', '整个人像断了线，什么都不想碰'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '家人或朋友说"你最近状态不太对"，你感觉？',
        options: ['没什么，他们只是在关心我', '有点意外，想一想好像确实', '有点委屈，不想被这么说', '突然就很想哭'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '你努力做的一件事，突然发现之前做的全白费了，你会？',
        options: ['重新来过，没问题的', '崩溃几分钟，然后继续', '当天完全做不下去了', '开始怀疑一切有没有意义'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '最近一个月，你有多少天感觉"今天还不错"？',
        options: ['大多数天都还可以', '一半一半，说不定', '只有少数几天', '几乎没有'],
        scores: [10, 7, 4, 1]
      },
      {
        text: '此刻，你给自己的状态打几分？（满分10分）',
        options: ['8-10分，挺好的', '6-7分，凑合过', '4-5分，一般般', '1-3分，有点撑不住了'],
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
        text: '有人冲你发火——你的第一反应是？',
        options: ['先道歉', '直接反击', '拼命解释', '立刻消失'],
        scores: ['fawn', 'fight', 'fight', 'flight']
      },
      {
        text: '被人冷落了——你最先感受到的是？',
        options: ['愤怒', '难过', '自我怀疑', '算了随他'],
        scores: ['fight', 'freeze', 'freeze', 'flight']
      },
      {
        text: '你搞砸了一件事——你对自己说的第一句话是？',
        options: ['没事的没事的', '全是我的错', '先找找哪里出了问题', '什么都不说，沉默'],
        scores: ['fawn', 'freeze', 'fight', 'freeze']
      },
      {
        text: '关系里出现了冲突——你的本能是？',
        options: ['说清楚，不能含糊', '忍下来，先过去再说', '沉默，等对方先开口', '直接离开这里'],
        scores: ['fight', 'freeze', 'flight', 'flight']
      },
      {
        text: '看到某人明显比你优秀——你感到？',
        options: ['真心羡慕，想靠近', '有点嫉妒，不舒服', '变得更想努力', '无所谓（但心里其实有点什么）'],
        scores: ['freeze', 'fight', 'fight', 'flight']
      },
      {
        text: '很久都没人主动联系你——你会？',
        options: ['先主动发一条消息', '等着，也许他们很忙', '开始觉得自己被遗忘了', '告诉自己没关系'],
        scores: ['fight', 'freeze', 'freeze', 'flight']
      },
      {
        text: '面对完全不确定的未来——你的本能是？',
        options: ['马上开始做计划', '开始担心各种可能', '就顺其自然吧', '把它推到脑子的角落，不去想'],
        scores: ['fight', 'freeze', 'fawn', 'flight']
      },
      {
        text: '有人发消息说「我们谈谈」——你第一秒的感觉是？',
        options: ['好啊，谈什么？', '我做错什么了吗', '莫名地紧张', '想找借口不谈'],
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
        text: '先试听四种声音，再选：\n你刚发了一条消息，对方一直没回。脑子里的声音像哪个？',
        soundKey: 'echoWhisper',
        soundLabel: '回声低语',
        options: ['回声低语（低沉回响）', '尖锐提示音（警觉紧绷）', '平静持续音（平和观察）', '断断续续杂音（混乱焦虑）'],
        scores: ['critic', 'worrier', 'observer', 'worrier']
      },
      {
        text: '你一个人在家，突然莫名难过。内心那个声音像哪个？',
        soundKey: 'calmSteady',
        soundLabel: '平静持续音',
        options: ['回声低语（低沉回响）', '尖锐提示音（警觉紧绷）', '平静持续音（平和观察）', '断断续续杂音（混乱焦虑）'],
        scores: ['critic', 'worrier', 'observer', 'worrier']
      },
      {
        text: '你刚做完一件事，回头审视自己的表现。内心在说什么？',
        soundKey: 'sharpAlert',
        soundLabel: '尖锐提示音',
        options: ['回声低语（低沉批判自己）', '尖锐提示音（指出所有不足）', '平静持续音（还行，下次做好）', '断断续续杂音（又懊悔又不想面对）'],
        scores: ['critic', 'critic', 'encourager', 'worrier']
      },
      {
        text: '有一句话想说，但最终憋回去了。那一刻内心的声音是？',
        soundKey: 'staticNoise',
        soundLabel: '断断续续杂音',
        options: ['回声低语（说了也没用）', '尖锐提示音（不能说，会出事）', '平静持续音（时候不对，等等再说）', '断断续续杂音（说还是不说，说还是不说……）'],
        scores: ['critic', 'worrier', 'observer', 'worrier']
      },
      {
        text: '看到某人活得比你好，想到自己。那个内心的声音像哪个？',
        soundKey: 'echoWhisper',
        soundLabel: '回声低语',
        options: ['回声低语（为什么是他不是我）', '尖锐提示音（你还差得远）', '平静持续音（挺好的，说明可以做到）', '断断续续杂音（羡慕又自责，乱成一锅）'],
        scores: ['critic', 'worrier', 'encourager', 'worrier']
      },
      {
        text: '睡前躺着，脑子开始自动播放。那个声音像哪个？',
        soundKey: 'staticNoise',
        soundLabel: '断断续续杂音',
        options: ['回声低语（反复回放今天的某个细节）', '尖锐提示音（提醒你明天还有一大堆事）', '平静持续音（平静回顾，差不多睡着了）', '断断续续杂音（什么都想一遍，什么都没想完）'],
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

  // Quiz title
  const titleBar = document.getElementById('quiz-title-bar');
  if (titleBar) titleBar.textContent = `测试 ${quiz.num} · ${quiz.title}`;

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

  // 石拱门 - 厚重、历史感
  arch: `<svg class="door-svg" viewBox="0 0 120 140" fill="none">
    <!-- stone frame -->
    <rect x="3" y="50" width="114" height="90" rx="2" fill="#9E9E9E"/>
    <!-- arch opening -->
    <path d="M20 140 L20 80 Q20 45 60 45 Q100 45 100 80 L100 140 Z" fill="#B0BEC5"/>
    <!-- stone blocks -->
    <rect x="3" y="55" width="17" height="15" fill="#8D8D8D" stroke="#757575" stroke-width="0.5"/>
    <rect x="3" y="72" width="17" height="18" fill="#7E7E7E" stroke="#757575" stroke-width="0.5"/>
    <rect x="3" y="92" width="17" height="18" fill="#8D8D8D" stroke="#757575" stroke-width="0.5"/>
    <rect x="3" y="112" width="17" height="28" fill="#7E7E7E" stroke="#757575" stroke-width="0.5"/>
    <rect x="100" y="55" width="17" height="15" fill="#8D8D8D" stroke="#757575" stroke-width="0.5"/>
    <rect x="100" y="72" width="17" height="18" fill="#7E7E7E" stroke="#757575" stroke-width="0.5"/>
    <rect x="100" y="92" width="17" height="18" fill="#8D8D8D" stroke="#757575" stroke-width="0.5"/>
    <rect x="100" y="112" width="17" height="28" fill="#7E7E7E" stroke="#757575" stroke-width="0.5"/>
    <!-- keystone -->
    <polygon points="50,45 70,45 65,55 55,55" fill="#757575"/>
    <!-- door inside arch -->
    <path d="M25 140 L25 82 Q25 52 60 52 Q95 52 95 82 L95 140 Z" fill="#5D4037"/>
    <!-- door panel -->
    <path d="M33 140 L33 85 Q33 63 60 63 Q87 63 87 85 L87 140 Z" fill="#6D4C41"/>
    <!-- handle -->
    <circle cx="50" cy="108" r="3.5" fill="#D4A017"/>
    <!-- ancient symbol -->
    <circle cx="60" cy="78" r="6" fill="none" stroke="#A0785A" stroke-width="1.5"/>
    <line x1="60" y1="72" x2="60" y2="84" stroke="#A0785A" stroke-width="1"/>
    <line x1="54" y1="78" x2="66" y2="78" stroke="#A0785A" stroke-width="1"/>
  </svg>`,

  // 竹帘门 - 自然、禅意
  bamboo: `<svg class="door-svg" viewBox="0 0 120 140" fill="none">
    <!-- frame -->
    <rect x="5" y="8" width="110" height="128" rx="4" fill="#4E6B3A"/>
    <rect x="12" y="15" width="96" height="114" rx="3" fill="#6B8F52"/>
    <!-- bamboo strips -->
    <rect x="12" y="15" width="8" height="114" fill="#8BA868" opacity="0.8"/>
    <rect x="22" y="15" width="8" height="114" fill="#7A9A5A" opacity="0.9"/>
    <rect x="32" y="15" width="8" height="114" fill="#8BA868" opacity="0.8"/>
    <rect x="42" y="15" width="8" height="114" fill="#7A9A5A" opacity="0.9"/>
    <rect x="52" y="15" width="8" height="114" fill="#8BA868" opacity="0.8"/>
    <rect x="62" y="15" width="8" height="114" fill="#7A9A5A" opacity="0.9"/>
    <rect x="72" y="15" width="8" height="114" fill="#8BA868" opacity="0.8"/>
    <rect x="82" y="15" width="8" height="114" fill="#7A9A5A" opacity="0.9"/>
    <rect x="92" y="15" width="8" height="114" fill="#8BA868" opacity="0.8"/>
    <rect x="102" y="15" width="6" height="114" fill="#7A9A5A" opacity="0.9"/>
    <!-- horizontal knots -->
    <rect x="12" y="40" width="96" height="3" fill="rgba(60,40,10,0.3)" rx="1"/>
    <rect x="12" y="72" width="96" height="3" fill="rgba(60,40,10,0.3)" rx="1"/>
    <rect x="12" y="104" width="96" height="3" fill="rgba(60,40,10,0.3)" rx="1"/>
    <!-- rope tie top -->
    <rect x="5" y="8" width="110" height="10" rx="4" fill="#3E5A2A"/>
    <rect x="35" y="4" width="16" height="6" rx="3" fill="#2E4A1A"/>
    <rect x="69" y="4" width="16" height="6" rx="3" fill="#2E4A1A"/>
    <!-- small zen circle -->
    <circle cx="60" cy="72" r="8" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
  </svg>`,

  // 霓虹门 - 夜店感，冲突刺激
  neon: `<svg class="door-svg" viewBox="0 0 120 140" fill="none">
    <!-- dark body -->
    <rect x="5" y="8" width="110" height="128" rx="4" fill="#0D0D1A"/>
    <rect x="12" y="15" width="96" height="114" rx="2" fill="#111120"/>
    <!-- neon border glow -->
    <rect x="5" y="8" width="110" height="128" rx="4" fill="none" stroke="#FF2D78" stroke-width="2" opacity="0.9"/>
    <rect x="5" y="8" width="110" height="128" rx="4" fill="none" stroke="#FF2D78" stroke-width="5" opacity="0.25"/>
    <!-- neon cross lines -->
    <line x1="12" y1="72" x2="108" y2="72" stroke="#00F5FF" stroke-width="1.5" opacity="0.8"/>
    <line x1="60" y1="15" x2="60" y2="129" stroke="#00F5FF" stroke-width="1.5" opacity="0.8"/>
    <!-- corner lights -->
    <circle cx="20" cy="30" r="3" fill="#FF2D78" opacity="0.9"/>
    <circle cx="100" cy="30" r="3" fill="#FF2D78" opacity="0.9"/>
    <circle cx="20" cy="120" r="3" fill="#00F5FF" opacity="0.9"/>
    <circle cx="100" cy="120" r="3" fill="#00F5FF" opacity="0.9"/>
    <!-- handle -->
    <rect x="54" y="66" width="12" height="4" rx="2" fill="#FF2D78" opacity="0.8"/>
    <!-- text -->
    <text x="60" y="55" text-anchor="middle" font-size="8" fill="#FF2D78" opacity="0.7">OPEN</text>
    <!-- bottom glow strip -->
    <rect x="12" y="120" width="96" height="6" rx="3" fill="#00F5FF" opacity="0.15"/>
    <rect x="12" y="120" width="96" height="2" rx="1" fill="#00F5FF" opacity="0.5"/>
  </svg>`,

  // 古铜门 - 庄重、岁月感
  copper: `<svg class="door-svg" viewBox="0 0 120 140" fill="none">
    <!-- frame -->
    <rect x="4" y="8" width="112" height="128" rx="3" fill="#7B4F2E"/>
    <rect x="10" y="14" width="100" height="116" rx="2" fill="#8B5E3C"/>
    <!-- patina overlay -->
    <rect x="10" y="14" width="100" height="116" rx="2" fill="#3D7A62" opacity="0.3"/>
    <!-- left panel -->
    <rect x="14" y="20" width="42" height="52" rx="2" fill="#7A4E2A" stroke="#5A3A1A" stroke-width="1"/>
    <rect x="14" y="20" width="42" height="52" rx="2" fill="#4A7A60" opacity="0.2"/>
    <!-- right panel -->
    <rect x="64" y="20" width="42" height="52" rx="2" fill="#7A4E2A" stroke="#5A3A1A" stroke-width="1"/>
    <rect x="64" y="20" width="42" height="52" rx="2" fill="#4A7A60" opacity="0.2"/>
    <!-- bottom panel -->
    <rect x="14" y="82" width="92" height="42" rx="2" fill="#7A4E2A" stroke="#5A3A1A" stroke-width="1"/>
    <rect x="14" y="82" width="92" height="42" rx="2" fill="#4A7A60" opacity="0.2"/>
    <!-- door handles - ring style -->
    <circle cx="40" cy="50" r="7" fill="none" stroke="#B87333" stroke-width="2.5"/>
    <circle cx="40" cy="50" r="3" fill="#B87333" opacity="0.7"/>
    <circle cx="80" cy="50" r="7" fill="none" stroke="#B87333" stroke-width="2.5"/>
    <circle cx="80" cy="50" r="3" fill="#B87333" opacity="0.7"/>
    <!-- center divide -->
    <line x1="60" y1="14" x2="60" y2="130" stroke="#5A3A1A" stroke-width="1.5"/>
    <!-- decorative nails -->
    <circle cx="17" cy="23" r="2" fill="#B87333"/>
    <circle cx="53" cy="23" r="2" fill="#B87333"/>
    <circle cx="67" cy="23" r="2" fill="#B87333"/>
    <circle cx="103" cy="23" r="2" fill="#B87333"/>
    <circle cx="17" cy="69" r="2" fill="#B87333"/>
    <circle cx="53" cy="69" r="2" fill="#B87333"/>
    <circle cx="67" cy="69" r="2" fill="#B87333"/>
    <circle cx="103" cy="69" r="2" fill="#B87333"/>
  </svg>`,

  // 纸拉门 - 日式，通透轻盈
  paper: `<svg class="door-svg" viewBox="0 0 120 140" fill="none">
    <!-- outer frame dark wood -->
    <rect x="4" y="6" width="112" height="132" rx="3" fill="#4A3728"/>
    <!-- inner paper surface -->
    <rect x="12" y="14" width="96" height="120" rx="1" fill="#F5F0E8"/>
    <!-- paper texture lines vertical -->
    <line x1="60" y1="14" x2="60" y2="134" stroke="rgba(180,160,120,0.25)" stroke-width="1"/>
    <!-- horizontal grid -->
    <line x1="12" y1="50" x2="108" y2="50" stroke="rgba(120,90,60,0.2)" stroke-width="0.8"/>
    <line x1="12" y1="90" x2="108" y2="90" stroke="rgba(120,90,60,0.2)" stroke-width="0.8"/>
    <line x1="12" y1="120" x2="108" y2="120" stroke="rgba(120,90,60,0.2)" stroke-width="0.8"/>
    <!-- vertical grid -->
    <line x1="36" y1="14" x2="36" y2="134" stroke="rgba(120,90,60,0.2)" stroke-width="0.8"/>
    <line x1="84" y1="14" x2="84" y2="134" stroke="rgba(120,90,60,0.2)" stroke-width="0.8"/>
    <!-- subtle shadow to show translucency -->
    <rect x="12" y="14" width="96" height="120" rx="1" fill="rgba(200,180,140,0.08)"/>
    <!-- light shining through -->
    <ellipse cx="45" cy="55" rx="14" ry="20" fill="rgba(255,250,220,0.35)"/>
    <ellipse cx="80" cy="100" rx="10" ry="14" fill="rgba(255,250,220,0.25)"/>
    <!-- handle small bar -->
    <rect x="56" y="72" width="8" height="2" rx="1" fill="#4A3728" opacity="0.5"/>
    <!-- frame joints -->
    <rect x="4" y="6" width="8" height="8" rx="1" fill="#3A2A1A"/>
    <rect x="108" y="6" width="8" height="8" rx="1" fill="#3A2A1A"/>
    <rect x="4" y="130" width="8" height="8" rx="1" fill="#3A2A1A"/>
    <rect x="108" y="130" width="8" height="8" rx="1" fill="#3A2A1A"/>
  </svg>`,

  // 藤蔓门 - 被遗忘的、生命力
  vine: `<svg class="door-svg" viewBox="0 0 120 140" fill="none">
    <!-- old faded door -->
    <rect x="8" y="10" width="104" height="126" rx="3" fill="#7A6A5A"/>
    <rect x="14" y="16" width="92" height="114" rx="2" fill="#8A7A6A"/>
    <!-- weathering -->
    <rect x="14" y="16" width="92" height="114" rx="2" fill="url(#fade)" opacity="0.3"/>
    <!-- door panels faded -->
    <rect x="20" y="24" width="36" height="48" rx="2" fill="rgba(0,0,0,0.1)" stroke="#6A5A4A" stroke-width="1"/>
    <rect x="64" y="24" width="36" height="48" rx="2" fill="rgba(0,0,0,0.1)" stroke="#6A5A4A" stroke-width="1"/>
    <!-- handle rusted -->
    <circle cx="90" cy="76" r="4" fill="#8B6343" stroke="#6A4A2A" stroke-width="1"/>
    <!-- vines growing -->
    <path d="M8 140 Q15 110 20 80 Q25 50 30 30" stroke="#4A7A2A" stroke-width="2" fill="none"/>
    <path d="M8 140 Q18 115 28 90 Q35 70 40 55" stroke="#5A8A3A" stroke-width="1.5" fill="none"/>
    <path d="M112 130 Q105 105 98 80 Q92 58 88 40" stroke="#4A7A2A" stroke-width="2" fill="none"/>
    <!-- leaves -->
    <ellipse cx="30" cy="35" rx="7" ry="5" fill="#5A9A3A" transform="rotate(-30 30 35)"/>
    <ellipse cx="22" cy="65" rx="6" ry="4" fill="#4A8A2A" transform="rotate(20 22 65)"/>
    <ellipse cx="32" cy="95" rx="6" ry="4" fill="#5A9A3A" transform="rotate(-15 32 95)"/>
    <ellipse cx="18" cy="110" rx="7" ry="4" fill="#4A8A2A" transform="rotate(35 18 110)"/>
    <ellipse cx="92" cy="50" rx="6" ry="4" fill="#5A9A3A" transform="rotate(20 92 50)"/>
    <ellipse cx="100" cy="78" rx="6" ry="4" fill="#4A8A2A" transform="rotate(-25 100 78)"/>
    <ellipse cx="95" cy="105" rx="7" ry="4" fill="#5A9A3A" transform="rotate(15 95 105)"/>
    <!-- small flowers -->
    <circle cx="38" cy="48" r="3" fill="#FFB6C1"/>
    <circle cx="87" cy="62" r="3" fill="#FFB6C1"/>
    <circle cx="25" cy="78" r="2.5" fill="#FFFACD"/>
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
  const text = `我在「画心PSY」测出来是：\n${result.title}\n\n${result.quote}\n\n你也来测测？`;
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

  document.getElementById('btn-intro-home').addEventListener('click', () => {
    showPage('page-home');
  });

  document.getElementById('btn-quiz-back').addEventListener('click', () => {
    clearTimerInterval();
    showPage('page-home');
  });

  document.getElementById('btn-quiz-home').addEventListener('click', () => {
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
