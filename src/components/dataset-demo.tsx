import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ChevronDown,
  CircleArrowUp,
  Database,
  Eye,
  FileSearch,
  Gift,
  Globe2,
  LockKeyhole,
  Mail,
  MapPin,
  Network,
  Phone,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Wand2,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const asset = (name: string) => `/dataset-demo/${name}`;

const navItems = [
  { label: "产品", href: "#security-sandbox" },
  { label: "模型", href: "#drive-detection" },
  { label: "博客", href: "#dataset-demo-faq" },
  { label: "联系我们", href: "#dataset-demo-experience" },
  { label: "关于我们", href: "#dataset-demo-footer" },
];

const partners = [
  { name: "ZWSOFT", mark: "Z" },
  { name: "大全集团", mark: "D" },
  { name: "用友", mark: "Y" },
  { name: "燕东微电子", mark: "M" },
  { name: "长安汽车", mark: "C" },
];

const engines: Array<{
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  Icon: LucideIcon;
  points: string[];
}> = [
  {
    id: "security-sandbox",
    eyebrow: "上传即隔离，风险不入库",
    title: "企业级安全沙箱检测",
    text: "我们的安全沙箱采用 Docker 容器隔离技术，为每个数据集创建独立的检测环境。上传的数据将在完全隔离的环境中进行恶意代码扫描、病毒检测和敏感信息识别。",
    image: "homeImg1.png",
    Icon: ShieldCheck,
    points: ["可插拔式安全组件", "敏感信息自动识别和脱敏", "检测日志全程可追溯"],
  },
  {
    id: "intelligent-detection",
    eyebrow: "超越传统规则，AI 理解数据深层语义",
    title: "大模型驱动的智能检测引擎",
    text: "集成最新的大语言模型技术，深度理解数据语义内容和业务逻辑。不仅能检测传统数据质量问题，更能识别数据偏见、内容合理性、标签准确性等复杂问题。",
    image: "homeImg2.png",
    Icon: Bot,
    points: ["智能识别数据偏见和不当内容", "语义级重复检测，精准去重", "向量检索加速，毫秒级响应"],
  },
  {
    id: "parallel-processing",
    eyebrow: "企业级性能，TB 级数据分钟级处理",
    title: "大规模数据并行处理引擎",
    text: "基于分布式架构设计，处理引擎智能分解检测任务，利用多核 CPU 和 GPU 资源进行并行计算。支持增量检测、断点续传和智能缓存。",
    image: "homeImg3.png",
    Icon: Network,
    points: ["分布式并行架构，线性扩展", "实时监控面板，状态一目了然", "智能任务调度，资源利用率 90%+"],
  },
  {
    id: "data-repair",
    eyebrow: "发现问题立即修复，人工干预降至最低",
    title: "智能数据质量修复引擎",
    text: "根据检测到的问题类型自动选择最优修复策略，支持数据填充、智能清洗、格式转换、去重等多种修复方式。修复前自动创建数据快照，支持一键回滚。",
    image: "homeImg4.png",
    Icon: Wand2,
    points: ["10+ 种智能修复策略自动选择", "基于上下文的智能数据填充", "批量修复能力，千万级记录快速处理"],
  },
];

const models: Array<{ title: string; text: string; Icon: LucideIcon; isNew?: boolean }> = [
  { title: "内容安全检测模型", text: "对数据集内容安全性进行检测，专注内容安全检测，提供高质量服务。", Icon: FileSearch, isNew: true },
  { title: "图片质量检测模型", text: "识别低质、重复、损坏和异常图片素材，保证视觉数据可用。", Icon: ScanSearch },
  { title: "合规检测模型", text: "覆盖 PII、偏见、内容安全、违禁词和自定义合规规则。", Icon: ShieldCheck, isNew: true },
  { title: "多模态检测模型", text: "统一处理文本、图片、音频和结构化数据集检测流程。", Icon: Sparkles },
  { title: "数据修复模型", text: "根据问题类型自动选择修复策略，减少人工处理成本。", Icon: Wand2, isNew: true },
  { title: "一致性检测模型", text: "检查标签、描述和上下文之间的一致性，提升训练质量。", Icon: Eye },
];

const faqs = [
  ["什么是比特数检数据集评估平台", "企业级 AI 数据质量管理系统，提供数据集质量评估、异常检测、合规检查、自动修复等功能，支持私有化部署。"],
  ["安全沙箱功能是什么", "数据上传前的安全扫描与隔离环境，防止恶意文件、病毒、敏感信息泄露，通过扫描才能进入正式处理流程。"],
  ["AI 能力如何集成？需要依赖外部 API 吗？", "支持本地大模型和商业大模型 API 服务，内置 AI 网关，支持多厂商路由和降级机制。"],
  ["支持哪些合规检测", "包括个人身份信息、偏见检测、内容安全、自定义违禁词词典管理等，并支持根据业务扩展检测规则。"],
];

export function DatasetDemo() {
  return (
    <main className="dataset-demo dataset-demo-original">
      <DatasetHeader />
      <div className="dataset-main">
        <section className="dataset-introduction dataset-container">
          <h1>让每一个数据集都值得信赖</h1>
          <p>
            比特数检是一个大模型数据质量保障平台，拥有高性能规则引擎，支持大模型训练数据集的自动化质量检测、幻觉识别和事实性验证，让数据质量评估变得简单高效
          </p>
          <div className="dataset-intro-actions">
            <a className="dataset-button dataset-button-primary" href="#dataset-demo-experience">
              开始评估
            </a>
            <a className="dataset-button dataset-button-secondary" href="#dataset-demo-experience">
              预约演示
            </a>
          </div>
          <div className="dataset-beta-note">
            <Zap size={14} fill="currentColor" />
            <span>在观猹、模力工厂获取邀请码</span>
            <a href="#dataset-demo-faq">参与 Beta 版本内测</a>
          </div>
        </section>

        <section className="dataset-partners dataset-container" aria-label="合作品牌">
          {partners.map((partner) => (
            <span className="dataset-partner-logo" key={partner.name}>
              <b>{partner.mark}</b>
              {partner.name}
            </span>
          ))}
        </section>

        <RuleOverview />

        <section className="dataset-container dataset-engine-list">
          {engines.map((engine, index) => (
            <EngineSection engine={engine} flip={index % 2 === 1} key={engine.id} />
          ))}
        </section>

        <section className="dataset-models" id="drive-detection">
          <div className="dataset-container">
            <SectionHeading eyebrow="私有模型" title="模型驱动检测" />
            <div className="dataset-model-grid">
              {models.map(({ title, text, Icon, isNew }) => (
                <article key={title}>
                  <span>
                    <Icon size={24} />
                  </span>
                  <div className="dataset-model-title">
                    <h3>{title}</h3>
                    {isNew ? <b>NEW</b> : null}
                  </div>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dataset-container dataset-faq" id="dataset-demo-faq">
          <SectionHeading eyebrow="FAQS" title="常见问题" />
          <div className="dataset-faq-tabs">
            <button type="button">常规</button>
            <button type="button">服务</button>
            <button type="button">私有化</button>
          </div>
          <div className="dataset-faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>
                  {question}
                  <ChevronDown size={18} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="dataset-container dataset-cta" id="dataset-demo-experience">
          <div>
            <p>立即体验</p>
            <h2>开始检测你的数据集</h2>
            <div className="dataset-cta-line">
              <img alt="" src={asset("creator-Icon.png")} />
              <span>就在今天</span>
            </div>
          </div>
          <form>
            <input aria-label="输入邮箱" placeholder="输入邮箱" type="email" />
            <button type="button">立即开始</button>
            <span>
              <LockKeyhole size={14} />
              第七届工业互联网大赛进行中，欢迎围观
            </span>
          </form>
        </section>
      </div>
      <DatasetFooter />
    </main>
  );
}

function DatasetHeader() {
  return (
    <header className="dataset-original-header">
      <div className="dataset-promo">
        <div>
          <Gift size={16} />
          <span>庆祝正式上线，限时免费使用!</span>
          <a href="#dataset-demo-faq">
            了解更多
            <ArrowUpRight size={15} />
          </a>
        </div>
        <button aria-label="关闭提示" type="button">
          <X size={14} />
        </button>
      </div>
      <nav className="dataset-original-nav" aria-label="Dataset homepage navigation">
        <div className="dataset-original-nav-left">
          <a className="dataset-original-logo" href="#dataset-demo">
            <span className="dataset-original-logo-mark" aria-hidden="true" />
            <span>比特数检</span>
          </a>
          <div className="dataset-original-links">
            {navItems.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="dataset-original-actions">
          <span className="dataset-lang">
            <Globe2 size={20} />
          </span>
          <i />
          <a className="dataset-apply" href="#dataset-demo-experience">
            申请内测
          </a>
          <a className="dataset-login" href="#dataset-demo-experience">
            登录
          </a>
        </div>
      </nav>
    </header>
  );
}

function RuleOverview() {
  return (
    <section className="dataset-container dataset-rule-overview" id="dataset-demo-rules">
      <div className="dataset-rule-left">
        <div className="dataset-rule-row">
          <article className="dataset-rule-card dataset-rule-card-large">
            <div>
              <h3>可扩展规则</h3>
              <p>根据业务数据选用通用规则，同时支持一键上传定制规则，再复杂的数据也能检测</p>
            </div>
            <img alt="" src={asset("Image3.png")} />
          </article>
          <article className="dataset-rule-card dataset-rule-card-bento">
            <img alt="" src={asset("Bento.png")} />
          </article>
        </div>
        <article className="dataset-rule-card dataset-rule-report">
          <div>
            <h3>多维度质量报告</h3>
            <p>显微镜般仔细扫描每一条可疑数据，从源头剔除垃圾数据。可视化数据质量评分，跟进每一次数据质量变动</p>
            <a href="#dataset-demo-experience">开始评估</a>
          </div>
          <img alt="" src={asset("Image1.png")} />
        </article>
      </div>
      <article className="dataset-rule-card dataset-rule-source">
        <div>
          <h3>超50万数据集一键评估</h3>
          <p>深度集成 Hugging Face 和魔搭两大开源平台，热门数据开箱即用</p>
          <a href="#dataset-demo-experience">
            浏览
            <ArrowUpRight size={18} />
          </a>
        </div>
        <img alt="" src={asset("Image2.png")} />
      </article>
    </section>
  );
}

function EngineSection({
  engine,
  flip,
}: {
  engine: (typeof engines)[number];
  flip: boolean;
}) {
  const visual = (
    <div className="dataset-engine-visual">
      <engine.Icon size={30} />
      <img alt="" src={asset(engine.image)} />
    </div>
  );
  const copy = (
    <div className="dataset-engine-copy">
      <p className="dataset-eyebrow">{engine.eyebrow}</p>
      <h2>{engine.title}</h2>
      <p>{engine.text}</p>
      <ul>
        {engine.points.map((point) => (
          <li key={point}>
            <CheckCircle2 size={18} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <article className="dataset-engine" id={engine.id}>
      {flip ? visual : copy}
      {flip ? copy : visual}
    </article>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="dataset-section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function DatasetFooter() {
  return (
    <footer className="dataset-original-footer" id="dataset-demo-footer">
      <div className="dataset-footer-main dataset-container">
        <div className="dataset-footer-brand">
          <div>
            <span className="dataset-original-logo-mark" aria-hidden="true" />
            <span>比特数检</span>
          </div>
          <p>大模型数据质量保障平台</p>
          <div className="dataset-socials">
            <span>微</span>
            <span>博</span>
            <span>知</span>
          </div>
          <address>
            <span>
              <MapPin size={16} />
              苏州市吴中区太湖软件园智慧谷6号楼
            </span>
            <span>
              <Phone size={16} />
              010-68918908
            </span>
            <span>
              <Mail size={16} />
              contact@bitlink.ai
            </span>
          </address>
        </div>
        <FooterColumn title="产品" items={["核心引擎", "客户案例", "常见问题"]} />
        <FooterColumn title="解决方案" items={["金融风控解决方案", "智慧工厂数据", "数据安全合规", "通用场景方案"]} />
        <FooterColumn title="资源" items={["博客", "帮助文档", "API 文档", "技术支持"]} />
        <FooterColumn title="关于我们" items={["公司介绍", "新闻中心", "商务合作", "加入我们"]} />
      </div>
      <a className="dataset-back-top dataset-container" href="#dataset-demo">
        <span>
          <CircleArrowUp size={20} />
        </span>
        回到顶部
      </a>
      <div className="dataset-footer-bottom dataset-container">
        <span>©2024-比特林克.版权所有</span>
        <div>
          <a href="#dataset-demo-footer">服务条款</a>
          <a href="#dataset-demo-footer">隐私政策</a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="dataset-footer-column">
      <h3>{title}</h3>
      {items.map((item) => (
        <a href="#dataset-demo-footer" key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}
