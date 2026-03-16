import PageLayout from '@/components/PageLayout'
import Image from 'next/image'

export default function TeachingPage() {
  const achievements = [
    '《互联网创新与创业》获得2023年度国家线上一流本科课程',
    '2018年度高校计算机专业优秀教师奖励',
    '清华大学2017年度教学优秀奖',
    '2017年度中国高等教育学会创新创业教育分会"精彩一课"一等奖',
  ]

  const textbooks = [
    {
      title: '《图论》',
      image: '/images/图论.jpg',
      description: '清华大学精品课教材',
    },
    {
      title: '《移动互联网：原理、技术与应用》',
      image: '/images/移动互联网.jpg',
      description:
        '入选"十三五"国家重点出版物出版规划项目、"十二五"普通高等教育本科国家规划教材、获2020年度清华大学优秀教材特等奖、清华大学精品课',
    },
    {
      title: '《视界—"互联网+"时代的创新和创业》',
      image: '/images/视界封皮.png',
      description:
        '被2016年上海书展暨"书香中国"评选为最不容错过的12本好书',
    },
    {
      title: '《计算机网络原理实验教程》',
      image: '/images/计算机网络实验.jpg',
      description: '被评为"北京高等教育精品教材"',
    },
    {
      title: '《计算机网络》',
      image: '/images/计算机网络实验.jpg',
      description: '清华大学精品课教材',
    },
    {
      title: '《下一代互联网与IPv6过渡》',
      image: '/images/下一代互联网与IPv6过渡.jpg',
      description: '专业参考教材',
    },
  ]

  const teachingPapers = [
    '无线网络和移动计算"课程教学实践探索, 计算机教育, 2016(2): 6-10',
    '开展互联网创新创业课程教学的思考. 中国计算机学会通讯, 2016(9): 16-19',
    '以信息技术视角助力创新创业课程建设. 计算机教育, 2017(1): 175-178',
    '促进教研结合同步提升. 中国高等教育, 2016(23):43-44',
  ]

  const downloadLink =
    'https://cloud.tsinghua.edu.cn/f/4379a2bac7f84bd19149/?dl=1'

  return (
    <PageLayout>
      <div className="ml-4 lg:ml-[40px] mt-4 lg:mt-[40px] mr-4 lg:mr-[80px]">
        {/* Section Header - Teaching Achievements */}
        <div className="border-b-[3px] border-purple-700 bg-white">
          <h1 className="py-3 px-4 lg:px-[30px] text-[20px] lg:text-[26px] text-purple-700 font-semibold">
            教学工作
          </h1>
        </div>

        {/* Teaching Achievements */}
        <div className="mt-6 ml-4 lg:ml-[40px]">
          <ul className="list-square leading-[26px] lg:leading-[30px] space-y-3">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700 text-sm lg:text-base">
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Section Header - Teaching Papers */}
        <div className="mt-10 border-b-[3px] border-purple-700 bg-white">
          <h2 className="py-3 px-4 lg:px-[30px] text-[20px] lg:text-[26px] text-purple-700 font-semibold">
            教研论文
          </h2>
        </div>

        {/* Teaching Papers */}
        <div className="mt-6 ml-4 lg:ml-[40px]">
          <ul className="list-square leading-[26px] lg:leading-[30px] space-y-3">
            {teachingPapers.map((paper, index) => (
              <li key={index} className="text-gray-700 text-sm lg:text-base">
                {paper}
              </li>
            ))}
          </ul>
        </div>

        {/* Section Header - Textbooks */}
        <div className="mt-10 border-b-[3px] border-purple-700 bg-white">
          <h2 className="py-3 px-4 lg:px-[30px] text-[20px] lg:text-[26px] text-purple-700 font-semibold">
            教材配套
          </h2>
        </div>

        {/* Textbook Materials */}
        <div className="mt-6 ml-4 lg:ml-[40px]">
          <ul className="list-square leading-[26px] lg:leading-[30px] space-y-3">
            <li className="text-gray-700 text-sm lg:text-base">
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-600 hover:underline"
              >
                图论教材配套资料下载
              </a>
            </li>
          </ul>
        </div>

        {/* Textbook Covers */}
        <div className="mt-8 flex flex-wrap gap-4 lg:gap-6 ml-4 lg:ml-[40px]">
          {textbooks.map((book, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 w-[120px] lg:w-[160px]"
            >
              <div className="w-[100px] lg:w-[140px] h-[140px] lg:h-[180px] rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={140}
                  height={180}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs lg:text-sm text-gray-600 text-center leading-tight">
                {book.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
