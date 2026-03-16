import PageLayout from '@/components/PageLayout'

export default function ServicesPage() {
  const services = [
    '在4个刊物上担任编委，包括3个互联网领域重要国际刊物IEEE TCC、IEEE Network、IEEE Internet Computing以及国内期刊China Communications',
    '担任中国通信标准化协会理事',
    '担任中国通信学会边缘计算专委会副主任，中国通信学会能源互联网专业委员会委员、人工智能专委会委员等，担任中国通信学会九大代表',
    '担任计算机类教指委互联网体系结构专委会委员兼秘书长，在中国计算机教育大会CECC2020上协助组织教学论坛',
    '担任中国互联网协会学术工作委员会秘书长，协助组织相关学术研讨活动',
    '担任中国通信标准化协会IPv6国际标准推进组组长，协调整合中国在IPv6领域的需求和技术方案，推动IPv6国际标准化工作，组织了IPv6下一代互联网技术创新与国际标准研讨会议',
  ]

  return (
    <PageLayout>
      <div className="ml-4 lg:ml-[40px] mt-4 lg:mt-[40px] mr-4 lg:mr-[80px]">
        {/* Section Header */}
        <div className="border-b-[3px] border-purple-700 bg-white">
          <h1 className="py-3 px-4 lg:px-[30px] text-[20px] lg:text-[26px] text-purple-700 font-semibold">
            学术兼职
          </h1>
        </div>

        {/* Services List */}
        <div className="mt-6 ml-4 lg:ml-[40px]">
          <ul className="list-square leading-[26px] lg:leading-[30px] space-y-4">
            {services.map((service, index) => (
              <li key={index} className="text-gray-700 text-sm lg:text-base">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}
