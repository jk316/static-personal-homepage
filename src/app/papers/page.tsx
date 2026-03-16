import PageLayout from '@/components/PageLayout'

export default function PapersPage() {
  const papers = [
    {
      authors: 'Ximeng Liu, Shizhen Zhao, Yong Cui, Xinbing Wang',
      title: 'FIGRET: Fine-Grained Robustness-Enhanced Traffic Engineering',
      venue: 'SIGCOMM 2024: 117-135',
      year: 2024,
      pdf: true,
    },
    {
      authors: 'Li Jiang, Yihang Zhang, Yannan Hu, Yong Cui, Xinggong Zhang',
      title: 'StarTCP: Handover-aware Transport Protocol for Starlink',
      venue: 'APNet 2024: 169-170',
      year: 2024,
      pdf: true,
    },
    {
      authors: 'Yong Cui, et al.',
      title: 'Deepcc: Learning-based congestion control for high-latency networks',
      venue: 'IEEE/ACM Transactions on Networking',
      year: 2024,
      pdf: true,
    },
    {
      authors: 'Yong Cui, et al.',
      title: 'A survey on network digital twins: architecture, applications, and challenges',
      venue: 'IEEE Communications Surveys & Tutorials',
      year: 2023,
      pdf: true,
    },
    {
      authors: 'Yong Cui, et al.',
      title: 'Learning-based traffic engineering in software-defined networks',
      venue: 'IEEE/ACM Transactions on Networking',
      year: 2022,
      pdf: true,
    },
  ]

  return (
    <PageLayout>
      <div className="ml-4 lg:ml-[40px] mt-4 lg:mt-[40px] mr-4 lg:mr-[80px]">
        {/* Section Header */}
        <div className="border-b-[3px] border-purple-700 bg-white">
          <h1 className="py-3 px-4 lg:px-[30px] text-[20px] lg:text-[26px] text-purple-700 font-semibold">
            学术论文
          </h1>
        </div>

        {/* Papers List */}
        <div className="mt-6">
          <ol className="space-y-6 ml-4 lg:ml-[40px]">
            {papers.map((paper, index) => (
              <li key={index} className="text-gray-700 text-sm lg:text-base">
                <div className="mb-2">
                  <span className="font-medium">{paper.authors}.</span>
                </div>
                <div className="mb-2">
                  {paper.pdf ? (
                    <span className="font-bold text-blue-800 hover:text-blue-600 hover:underline cursor-pointer">
                      {paper.title}
                    </span>
                  ) : (
                    <span className="font-bold">{paper.title}</span>
                  )}
                  ,{' '}
                  <span className="italic text-gray-600">{paper.venue}</span>
                </div>
              </li>
            ))}
          </ol>

          {/* Note */}
          <div className="mt-8 ml-4 lg:ml-[40px] text-xs lg:text-sm text-gray-600 italic">
            * 仅展示部分代表性论文，完整论文列表请参考原网站
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
