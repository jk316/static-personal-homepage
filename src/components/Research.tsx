import Image from 'next/image'

export default function Research() {
  const researchAreas = [
    {
      title: '网络数字孪生 & 网络AI',
      description:
        '面向网络大模型应用，基于预训练模型技术探索网络流量建模与智能优化新范式：通过大模型实现网络流量理解、异常检测与资源分配优化，推动网络管理从规则驱动向智能驱动转型。',
      icon: '/images/Netmama.jpg',
    },
    {
      title: '低时延传输技术',
      description:
        '面向新型应用在融合网络场景下的互联互通以及实时高效的数据传输需求，研究新型的融合网络传输协议以及关键技术，为新型的时延敏感型应用业务提供网络传输支撑。',
      icon: '/images/低时延.jpg',
    },
    {
      title: '网络安全',
      description:
        '面向抗DDoS攻击，基于大模型技术探索智能防御与资源优化新范式：构建高效精准的流量异常检测模型和攻击溯源框架，实现对大规模DDoS攻击的主动防御与资源弹性调度，推动网络安全防护从被动响应向主动智能转型。',
      icon: '/images/SAVD.jpg',
    },
    {
      title: '流媒体传输',
      description:
        '针对视频传输场景，构建更为准确的用户体验模型，并基于此做多维感知的视频传输优化，最终提升用户视频观看体验。',
      icon: '/images/流媒体传输.jpg',
    },
  ]

  return (
    <div className="mt-10">
      {/* Section Header */}
      <div className="border-b-[3px] border-purple-700 bg-white">
        <h2 className="py-3 px-[30px] text-[26px] text-purple-700 font-semibold">
          研究方向
        </h2>
      </div>

      {/* Research Areas */}
      <div className="px-[30px] pt-4 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {researchAreas.map((area, index) => (
            <div key={index} className="flex gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <Image
                  src={area.icon}
                  alt={area.title}
                  width={130}
                  height={130}
                  className="transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl cursor-pointer rounded-full"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-bold text-black mb-2">
                  <a
                    href="#"
                    className="text-blue-800 hover:text-blue-600 hover:underline transition-all duration-200 ease-in-out"
                  >
                    {area.title}
                  </a>
                </h3>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
