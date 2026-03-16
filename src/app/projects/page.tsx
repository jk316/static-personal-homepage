import PageLayout from '@/components/PageLayout'

export default function ProjectsPage() {
  const projects = [
    {
      name: '一体化融合网络体系结构和关键技术研究',
      category: '重点研发计划(国内)',
      role: '项目负责人',
      period: '2019年7月 ～ 2022年6月',
    },
    {
      name: '支持多目标的下一代互联网体系结构和关键技术',
      category: '国家基金委-重点项目',
      role: '负责人',
      period: '2022年1月 ～ 2026年12月',
    },
    {
      name: '数据驱动的网络传输机制研究',
      category: '国家基金委-面上项目',
      role: '负责人',
      period: '2019年1月1日 ～ 2022年12月31日',
    },
    {
      name: '华为-清华大学互联网体系结构研究 长期合作协议',
      category: '企事业单位委托项目',
      role: '负责人',
      period: '2019年10月 ～ 2022年10月',
    },
    {
      name: '下一代网络协议体系研究项目',
      category: '企事业单位委托项目',
      role: '负责人',
      period: '2019年7月 ～ 2022年7月',
    },
    {
      name: '清华大学-南威软件股份有限公司数字治理信息技术联合研究中心',
      category: '企事业单位合作项目',
      role: '负责人',
      period: '2021年7月 ～ 2026年6月',
    },
  ]

  return (
    <PageLayout>
      <div className="ml-4 lg:ml-[40px] mt-4 lg:mt-[40px] mr-4 lg:mr-[80px]">
        {/* Section Header */}
        <div className="border-b-[3px] border-purple-700 bg-white">
          <h1 className="py-3 px-4 lg:px-[30px] text-[20px] lg:text-[26px] text-purple-700 font-semibold">
            科研项目
          </h1>
        </div>

        {/* Projects List */}
        <div className="mt-6 ml-4 lg:ml-[40px]">
          <ul className="list-square leading-[26px] lg:leading-[30px] space-y-4">
            {projects.map((project, index) => (
              <li key={index} className="text-gray-700 text-sm lg:text-base">
                <span className="font-semibold">项目名称：</span>
                {project.name}，
                <span className="font-semibold">项目类别：</span>
                {project.category}，
                <span className="font-semibold">{project.role}</span>，起止日期：
                {project.period}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}
