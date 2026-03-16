import PageLayout from '@/components/PageLayout'

export default function AwardsPage() {
  const awards = [
    {
      year: '2019',
      title: '获长江学者奖励计划特聘教授',
    },
    {
      year: '2015',
      title: '获首届国家青年长江学者',
    },
    {
      year: '2015',
      title: '获国家优秀青年科学基金',
    },
    {
      year: '2024',
      title: '互联网端到端高效实时传送关键技术及应用获2024年度中国通信学会技术发明一等奖（排名第1）',
      highlight: true,
    },
    {
      year: '2023',
      title: '下一代互联网真实源地址认证体系结构、关键技术以及规模化应用获2023年度国家科技进步一等奖（排名第10）',
      highlight: true,
    },
    {
      year: '2020',
      title: '下一代互联网真实源地址认证体系结构、关键技术以及规模化应用获2020年度中国电子学会科学技术特等奖（排名第11）',
      highlight: true,
    },
    {
      year: '2016',
      title: '下一代互联网4over6过渡技术及其应用获得2016年度国家技术发明奖二等奖（排名第2）',
      highlight: true,
    },
    {
      year: '2012',
      title: '《基于软线的IPv6过渡技术体系》等5项IETF国际标准和行业标准获2012年度中国通信标准化协会科学技术一等奖（排名第1）',
      highlight: true,
    },
    {
      year: '2012',
      title: '下一代互联网4over6过渡技术及其应用获2012年度中国通信学会科学技术一等奖（排名第2）',
      highlight: true,
    },
    {
      year: '2005',
      title: 'IPv6核心路由器获2005年度国家科技进步二等奖（排名第9）',
      highlight: true,
    },
    {
      year: '2012',
      title: '可扩展、可重构的开放式路由交换软件平台与开发环境获2012年度中国电子学会电子信息科学技术一等奖（排名第5）',
    },
  ]

  return (
    <PageLayout>
      <div className="ml-4 lg:ml-[40px] mt-4 lg:mt-[40px] mr-4 lg:mr-[80px]">
        {/* Section Header */}
        <div className="border-b-[3px] border-purple-700 bg-white">
          <h1 className="py-3 px-4 lg:px-[30px] text-[20px] lg:text-[26px] text-purple-700 font-semibold">
            个人荣誉与获奖列表
          </h1>
        </div>

        {/* Awards List */}
        <div className="mt-6 px-4 lg:px-[15px]">
          <ul className="list-square leading-[26px] lg:leading-[30px] space-y-3">
            {awards.map((award, index) => (
              <li key={index} className="text-gray-700">
                <p className="text-justify text-sm lg:text-base">
                  {award.year}年{award.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}
