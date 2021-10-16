
export const songInfo = {
    'hana': {
        title: '花',
        composer: '滝廉太郎',
    },
    'hinamaturi': {
        title: 'うれしいひなまつり',
        composer: '河村光陽',
    },
    'kaeru': {
        title: 'かえるのがっしょう',
        composer: 'ドイツ民謡',
    },
    'kirakirabosi': {
        title: 'きらきらぼし',
        composer: 'フランス民謡',
    },
    'kiyosikonoyoru': {
        title: 'きよしこの夜',
        composer: 'F.グルーバー',
    },
    'koinobori': {
        title: 'こいのぼり',
        composer: '不明',
    },
    'osyougatu': {
        title: 'お正月',
        composer: '滝廉太郎',
    },
    'sakura': {
        title: 'さくら',
        composer: '不明',
    },
    'senrohatudukuyo': {
        title: '線路はつづくよどこまでも',
        composer: 'アメリカ民謡',
    },
    'zousan': {
        title: 'ぞうさん',
        composer: '團伊玖磨',
    },
    'syabondama': {
        title: 'しゃぼんだま',
        composer: '中山晋平',
    },
    'tulip': {
        title: 'チューリップ',
        composer: '井上武士',
    },
    'tanabatasama': {
        title: 'たなばたさま',
        composer: '下総皖一',
    },
    'akatonbo': {
        title: '赤とんぼ',
        composer: '山田耕筰',
    },
}

export const songOrder: (keyof typeof songInfo)[] = [
    'hana',
    'sakura',
    'hinamaturi',
    'tulip',
    'koinobori',
    'syabondama',
    'tanabatasama',
    'kaeru',
    'akatonbo',
    'zousan',
    'osyougatu',
    'kiyosikonoyoru',
    'kirakirabosi',
    'senrohatudukuyo',
]