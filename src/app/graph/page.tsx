import PageLayout from '@/components/PageLayout'

export default function GraphPage() {
  const textbookInfo = {
    title: '《图论》',
    authors: '崔勇 等编著',
    publisher: '清华大学出版社',
    year: '2021',
    isbn: '978-7-302-57643-7',
    description:
      '本书系统介绍了图论的基本概念、理论和算法，内容包括图的表示、遍历算法、最短路径、最小生成树、网络流等核心内容。适合计算机科学与技术、软件工程等专业的本科生和研究生学习使用。',
  }

  const chapters = [
    '第一章 图的基本概念',
    '第二章 图的表示和存储',
    '第三章 图的遍历算法',
    '第四章 最短路径问题',
    '第五章 最小生成树',
    '第六章 网络流与最大流',
    '第七章 二部图与匹配',
    '第八章 平面图',
    '第九章 图着色',
    '第十章 图论应用实例',
  ]

  const features = [
    '内容系统全面，涵盖图论核心知识点',
    '理论结合实践，配有丰富的例题和习题',
    '算法描述清晰，配有详细的伪代码和实现',
    '适合高校课程教学和自学使用',
    '配套资源丰富，包括课件、源代码等',
  ]

  const downloadLink =
    'https://cloud.tsinghua.edu.cn/f/4379a2bac7f84bd19149/?dl=1'

  return (
    <PageLayout>
      <div className="ml-4 lg:ml-[40px] mt-4 lg:mt-[40px] mr-4 lg:mr-[80px]">
        {/* Section Header */}
        <div className="border-b-[3px] border-purple-700 bg-white">
          <h1 className="py-3 px-4 lg:px-[30px] text-[20px] lg:text-[26px] text-purple-700 font-semibold">
            图论教材
          </h1>
        </div>

        {/* Book Cover and Info */}
        <div className="mt-4 lg:mt-8 flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Book Cover Placeholder */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="w-full lg:w-[180px] h-[200px] lg:h-[250px] bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center px-4">
                <div className="text-purple-700 font-bold text-lg lg:text-xl mb-2">
                  图论
                </div>
                <div className="text-purple-600 text-sm">
                  崔勇 等编著
                </div>
              </div>
            </div>
          </div>

          {/* Book Information */}
          <div className="flex-1">
            <h2 className="text-xl lg:text-2xl font-bold text-purple-700 mb-4">
              {textbookInfo.title}
            </h2>

            <div className="space-y-2 lg:space-y-3 text-gray-700 text-sm lg:text-base">
              <p>
                <span className="font-semibold">作者：</span>
                {textbookInfo.authors}
              </p>
              <p>
                <span className="font-semibold">出版社：</span>
                {textbookInfo.publisher}
              </p>
              <p>
                <span className="font-semibold">出版年份：</span>
                {textbookInfo.year}
              </p>
              <p>
                <span className="font-semibold">ISBN：</span>
                {textbookInfo.isbn}
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">内容简介：</span>
                {textbookInfo.description}
              </p>
            </div>

            {/* Download Link */}
            <div className="mt-4 lg:mt-6">
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-105"
              >
                下载配套资料
              </a>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 lg:mt-10">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">
            本书特点
          </h3>
          <ul className="list-disc ml-4 lg:ml-6 space-y-2 text-sm lg:text-base">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Chapter List */}
        <div className="mt-6 lg:mt-10">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">
            目录
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {chapters.map((chapter, index) => (
              <div key={index} className="text-gray-700 text-sm lg:text-base px-4 py-2 bg-gray-50 rounded">
                {chapter}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-6 lg:mt-10 bg-gray-50 p-4 lg:p-6 rounded-lg">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">
            教学建议
          </h3>
          <div className="text-gray-700 space-y-2 text-sm lg:text-base">
            <p>• 本书适合作为计算机相关专业本科和研究生的图论课程教材</p>
            <p>• 建议课时：48-64学时</p>
            <p>• 每章配有习题，建议每章安排2-4学时的习题课</p>
            <p>• 可结合实际编程项目，加深学生对图论算法的理解</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
