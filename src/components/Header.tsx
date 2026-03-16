import Image from 'next/image'

export default function Header() {
  return (
    <div className="mt-5 px-4">
      <div className="flex items-center gap-3">
        <div className="w-[38px] h-[38px] flex-shrink-0">
          <Image
            src="/images/THU-S.jpg"
            alt="THU Logo"
            width={38}
            height={38}
            className="w-full h-full"
          />
        </div>
        <span className="text-[12pt] md:text-[15pt] text-black font-semibold truncate">
          StarLab 下一代互联网技术研究组
        </span>
      </div>
      <div className="mt-1 w-full bg-brand-purple text-white">
        <span className="text-[8pt] md:text-[10pt] px-4 md:px-8 py-1 inline-block">
          Smart Internet Architecture Research Group in Tsinghua University
        </span>
      </div>
    </div>
  )
}
