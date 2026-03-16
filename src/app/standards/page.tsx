import PageLayout from '@/components/PageLayout'

export default function StandardsPage() {
  const rfcStandards = [
    {
      rfc: 'RFC5565',
      title: 'Softwire Mesh Framework',
      date: 'June 2009',
      citations: 11,
      url: 'https://datatracker.ietf.org/doc/rfc5565/',
    },
    {
      rfc: 'RFC5747',
      title: '4over6 Transit Solution using IP Encapsulation and MP-BGP Extensions',
      date: 'Mar 2010',
      citations: 1,
      url: 'https://datatracker.ietf.org/doc/rfc5747',
    },
    {
      rfc: 'RFC7040',
      title: 'Public IPv4-over-IPv6 Access Network',
      date: 'Nov 2013',
      citations: 1,
      url: 'https://datatracker.ietf.org/doc/rfc7040/',
    },
    {
      rfc: 'RFC7283',
      title: 'Handling Unknown DHCPv6 Messages',
      date: 'Jul 2014',
      citations: 2,
      url: 'https://datatracker.ietf.org/doc/rfc7283',
    },
    {
      rfc: 'RFC7341',
      title: 'DHCPv4-over-DHCPv6 (DHCP 4o6) Transport',
      date: 'Aug 2014',
      citations: 7,
      url: 'https://datatracker.ietf.org/doc/rfc7341/',
    },
    {
      rfc: 'RFC7596',
      title: 'Lightweight 4over6: An Extension to Dual-Stack Lite Architecture',
      date: 'Jul 2015',
      citations: 16,
      url: 'https://datatracker.ietf.org/doc/rfc7596/',
    },
    {
      rfc: 'RFC7618',
      title: 'Dynamic Allocation of Shared IPv4 Addresses',
      date: 'Aug 2015',
      citations: 4,
      url: 'https://datatracker.ietf.org/doc/rfc7618/',
    },
    {
      rfc: 'RFC7856',
      title: 'Softwire Mesh Management Information Base (MIB)',
      date: 'May 2016',
      citations: 1,
      url: 'https://datatracker.ietf.org/doc/rfc7856/',
    },
    {
      rfc: 'RFC8618',
      title: 'DHCPv6 Prefix-Length Hint Issues',
      date: 'May 2017',
      citations: 1,
      url: 'https://datatracker.ietf.org/doc/rfc8168/',
    },
    {
      rfc: 'RFC8539',
      title: 'Softwire Provisioning Using DHCPv4 over DHCPv6',
      date: 'Mar 2019',
      citations: 0,
      url: 'https://datatracker.ietf.org/doc/rfc8539/',
    },
    {
      rfc: 'RFC8638',
      title: 'IPv4 Multicast over an IPv6 Multicast in Softwire Mesh Networks',
      date: 'Sep 2019',
      citations: 0,
      url: 'https://datatracker.ietf.org/doc/rfc8638/',
    },
  ]

  const nationalStandards = [
    {
      number: 'GB/T 44866.1-2024',
      title: '面向单栈IPv6网络的4over6技术要求 第1部分：基于IPv6骨干网的IPv4网络互联',
      date: '2024年发布',
      description: '中华人民共和国国家标准',
    },
    {
      number: 'GB/T 44866.3-2024',
      title: '面向单栈IPv6网络的4over6技术要求 第3部分：基于IPv6网络的IPv4地址动态分配',
      date: '2024年发布',
      description: '中华人民共和国国家标准',
    },
  ]

  const industryStandards = [
    '采用边界网关协议多协议扩展（BGP-MP）的基于IPv6骨干网的IPv4网络互联（4over6）技术要求, YD/T1656-2007, 2007年发布',
    '基于软线技术的互联网IPv6 过渡技术框架, YD/T 2029-2009, 2009年12月发布',
    '4over6过渡技术测试方案, 2009年11月-2011年12月',
    '边缘网络4over6过渡方案, 2009年11月-2011年12月',
    'IPv6过渡场尽分析, 2010年-2011年',
    '基于无状态地址映射的IPv4与IPv6网络互联技术要求, 2008年10月-2010年2月',
    '互联网中文电子邮件地址框架总体技术要求, YD/T 2030-2009, 2009年12月发布',
    '基于承载网感知的P2P流量优化技术框架, 2009年-2011年',
    'IPv6站点多归属技术要求, 2010年-2011年',
  ]

  return (
    <PageLayout>
      <div className="ml-4 lg:ml-[40px] mt-4 lg:mt-[40px] mr-4 lg:mr-[80px]">
        {/* Section Header - International Standards */}
        <div className="border-b-[3px] border-purple-700 bg-white">
          <h1 className="py-3 px-4 lg:px-[30px] text-[20px] lg:text-[26px] text-purple-700 font-semibold">
            国际标准
          </h1>
        </div>

        {/* RFC Standards */}
        <div className="mt-6">
          <ol className="space-y-3 ml-4 lg:ml-[15px]">
            {rfcStandards.map((standard, index) => (
              <li key={index} className="text-gray-700 text-sm lg:text-base">
                <p className="mb-1">
                  <a
                    href={standard.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:text-blue-600 hover:underline font-medium"
                  >
                    {standard.rfc}
                  </a>
                  <span className="ml-2 text-gray-600">
                    {standard.title}, {standard.date}
                  </span>
                </p>
                {standard.citations > 0 && (
                  <p className="text-xs lg:text-sm text-gray-500 ml-4">
                    cited by {standard.citations} RFC
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Section Header - National Standards */}
        <div className="mt-10 border-b-[3px] border-purple-700 bg-white">
          <h2 className="py-3 px-4 lg:px-[30px] text-[20px] lg:text-[26px] text-purple-700 font-semibold">
            国家标准
          </h2>
        </div>

        {/* National Standards */}
        <div className="mt-6">
          <ol className="space-y-3 ml-4 lg:ml-[15px]">
            {nationalStandards.map((standard, index) => (
              <li key={index} className="text-gray-700 text-sm lg:text-base">
                <p className="mb-1">
                  <span className="font-medium">{standard.number}</span>
                  <span className="ml-2 text-gray-600">
                    {standard.title}，{standard.date}
                  </span>
                </p>
                <p className="text-xs lg:text-sm text-gray-500 ml-4">
                  {standard.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Section Header - Industry Standards */}
        <div className="mt-10 border-b-[3px] border-purple-700 bg-white">
          <h2 className="py-3 px-4 lg:px-[30px] text-[20px] lg:text-[26px] text-purple-700 font-semibold">
            中国通信行业标准
          </h2>
        </div>

        {/* Industry Standards */}
        <div className="mt-6">
          <ol className="space-y-3 ml-4 lg:ml-[15px]">
            {industryStandards.map((standard, index) => (
              <li key={index} className="text-gray-700 text-sm lg:text-base">
                <p className="text-gray-600">{standard}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PageLayout>
  )
}
