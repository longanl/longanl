/** 站点文案与导航（单页结构，供 Header / Footer / Home 共用） */

export const navItems = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我们' },
  { id: 'services', label: '服务领域' },
  { id: 'solutions', label: '解决方案' },
  { id: 'contact', label: '联系我们' },
] as const

export const siteMeta = {
  brand: 'Longanl',
  tagline: '全球领先的企业级科技服务商',
  phone: '400-800-8888',
  email: 'contact@longanl.com',
  addressShort: '中国·北京',
}

export const heroStats = [
  { value: '500+', label: '企业客户' },
  { value: '20+', label: '行业解决方案' },
  { value: '99.99%', label: '服务可用性' },
  { value: '24/7', label: '专业支持' },
]

export const aboutPillars = [
  { icon: '✓', color: 'text-green-500', title: '技术可靠', desc: '99.99%服务可用性' },
  { icon: '⚡', color: 'text-blue-500', title: '持续创新', desc: '每年投入15%研发' },
  { icon: '👥', color: 'text-yellow-500', title: '专业团队', desc: '200+资深专家' },
]

export const aboutHighlights = [
  { value: '500+', label: '企业客户' },
  { value: '20+', label: '行业解决方案' },
  { value: '99.99%', label: '服务可用性' },
]

export const services = [
  { title: '混合云服务', desc: '跨云平台管理与优化，支持公有云、私有云及混合云架构', features: ['跨云平台统一管理', '自动化运维管理', '成本优化分析'], icon: '☁️' },
  { title: '人工智能', desc: '提供 AI 模型训练、推理部署与智能应用开发服务', features: ['机器学习模型训练', 'AI 模型推理部署', '智能应用开发'], icon: '🤖' },
  { title: '核心算力', desc: '提供高性能计算基础设施，包括 GPU 集群、分布式计算', features: ['GPU 集群服务', '分布式计算架构', '边缘计算节点'], icon: '⚙️' },
  { title: '数字化转型', desc: '为企业提供全方位的数字化转型咨询服务', features: ['数字化战略规划', '企业架构设计', '全流程实施落地'], icon: '✨' },
  { title: '信息安全', desc: '提供全方位的信息安全服务，确保企业数据安全', features: ['安全评估与审计', '安全加固与防护', '安全监控与响应'], icon: '🔒' },
  { title: '专业服务', desc: '提供专业的技术咨询、培训与技术支持服务', features: ['技术咨询与培训', '7×24小时技术支持', '技术团队外包'], icon: '👨‍💼' },
]

export const solutions = [
  { title: '金融行业', description: '为银行、证券、保险等金融机构提供安全可靠的数字化转型解决方案', benefits: ['高可用架构设计', '数据安全与合规', '智能风控系统', '客户服务智能化'] },
  { title: '医疗健康', description: '为医院、诊所、医药企业等提供智慧医疗解决方案', benefits: ['医疗数据互联互通', '远程诊疗支持', '智能辅助诊断', '患者服务优化'] },
  { title: '智能制造', description: '为制造业企业提供工业互联网、智能制造平台解决方案', benefits: ['生产过程数字化', '设备预测性维护', '供应链协同', '质量智能管控'] },
  { title: '政务云', description: '为政府部门提供政务云平台建设与运营服务', benefits: ['政务数据共享', '一站式政务服务', '城市治理智能化', '应急指挥调度'] },
]

export const contactBlocks = [
  { title: '总部地址', lines: ['中国·北京市海淀区中关村大街1号', '科技大厦A座10层'] },
  { title: '联系电话', lines: ['400-800-8888'], note: '服务时间：7×24小时' },
  { title: '邮箱地址', lines: ['contact@longanl.com'] },
]

export const footerLinkGroups = {
  services: ['混合云服务', '人工智能', '核心算力', '数字化转型'],
  solutions: ['金融行业', '医疗健康', '智能制造', '政务云'],
}
