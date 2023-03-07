import { Random } from 'mockjs'
// const Random = Mock.Random


// 生成随机颜色、标题的图片数组
function getRandomPics(count = 10): string[] {
    const arr: string[] = [];
    for (let i = 0; i < count; i++) {
      arr.push(Random.image('800x600', Random.color(), Random.color(), Random.title()));
    }
    return arr;
}

export {
    getRandomPics
}