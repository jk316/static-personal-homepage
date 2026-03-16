import Image from 'next/image'

export default function Profile() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Profile Image */}
      <div className="w-full lg:w-[240px] flex-shrink-0 lg:ml-[80px] ml-4 lg:mt-[80px] mt-4">
        <Image
          src="/images/profile-placeholder.svg"
          alt="崔勇"
          width={220}
          height={280}
          className="w-full lg:w-[220px] h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Profile Content */}
      <div className="flex-1 lg:ml-[80px] ml-4 mt-4 lg:mt-[40px] mr-[80px] min-w-0">
        <div className="lg:ml-10 ml-0">
          <h1 className="text-[28px] lg:text-[36px] font-bold tracking-wider text-purple-700 mt-4 lg:mt-6">
            崔勇
          </h1>
          <div className="lg:ml-10 ml-0 text-base">清华大学长聘教授</div>
          <div className="lg:ml-10 ml-0 text-base">网络所所长</div>
          <div className="lg:ml-10 ml-0 text-base mt-2">
            教育部长江学者特聘教授，曾获首届青年长江学者，获国家优秀青年科学基金和教育部新世纪人才等项目。
          </div>
          <div className="lg:ml-10 ml-0 text-base mt-2 break-words overflow-x-auto">
            获国家科技进步一等奖1次、国家科技进步二等奖1次、国家技术发明二等奖1次，多次获得国家信息产业重大技术发明。参与研制成功我国第一台"IPv6核心路由器"，参与建设了中国下一代互联网示范工程CNGI-CERNET2。在Mobicom、NSDI、ToN等互联网领域顶级会议和期刊上发表了大量学术论文，担任中国互联网协会学术工作委员会秘书长，CCF A类期刊TPDS等4个IEEE期刊编委、中国通信学会边缘计算委员会副主任委员，成功在京组织国际网络通信领域顶级会议Sigcomm'19并担任大会副主席。完成了RFC国际标准10余项，并曾长期担任国际标准工作组主席。
          </div>
          <div className="lg:ml-10 ml-0 text-sm mt-4">StarLab 下一代互联网技术研究组</div>
          <div className="lg:ml-10 ml-0 text-sm">清华大学自强科技楼1号楼11层1112室</div>
          <div className="lg:ml-10 ml-0 text-sm mt-1 font-mono">cuiyong@tsinghua.edu.cn</div>
        </div>
      </div>
    </div>
  )
}
