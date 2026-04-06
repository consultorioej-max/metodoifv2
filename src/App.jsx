import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Megaphone,
  Sparkles,
  Stethoscope,
  UserRound,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const staggerWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const highlights = ['Método prático', 'Feito para a rotina da clínica', 'Sem depender de agência', 'Aplicação direta']

const dores = [
  'Você depende de indicação e nunca sabe quantos pacientes vão chegar no próximo mês.',
  'Já pagou agência, mas continuou sem clareza do que estava sendo feito com seu dinheiro.',
  'Impulsionou conteúdo sem estratégia e só atraiu curiosos.',
  'Grava vídeos, posta com frequência, mas não entende por que não converte.',
  'Investe em anúncio e fica sem saber exatamente o que trouxe resultado.',
]

const perfis = ['Clínicas iniciantes', 'Clínicas estruturadas', 'Estética odontológica', 'Implantes e prótese', 'Ortodontia e alinhadores', 'Clínicas gerais']

const aprendizados = [
  {
    title: 'Campanhas sem achismo',
    desc: 'Crie anúncios com clareza estratégica, sem apertar botão no escuro.',
  },
  {
    title: 'Paciente certo no funil',
    desc: 'Atraia pessoas com potencial real de fechar tratamento — não só curiosos.',
  },
  {
    title: 'Vídeos que geram conversa',
    desc: 'Aprenda um roteiro simples para vídeos que despertam atenção e confiança.',
  },
  {
    title: 'Leitura prática de métricas',
    desc: 'Entenda o que ajustar nos anúncios para melhorar resultado sem desperdiçar verba.',
  },
  {
    title: 'Autonomia com segurança',
    desc: 'Anuncie sem depender de terceiros e com decisão baseada em dados.',
  },
  {
    title: 'Escala consistente',
    desc: 'Aumente investimento com método e mantenha previsibilidade de agenda.',
  },
]

const depoimentos = [
  {
    nome: 'Dr. Marcos Queiroz',
    texto:
      'Eu sempre tive receio de anunciar por conta própria. O método deixou tudo claro e hoje sei exatamente o que estou fazendo nos anúncios.',
  },
  {
    nome: 'Dra. Alessandra Soares',
    texto:
      'Não é curso cheio de teoria. É direto ao ponto, pensado pra rotina da clínica. Consegui rodar meus primeiros anúncios com segurança.',
  },
  {
    nome: 'Dr. Pedro Hezequiel',
    texto:
      'O maior diferencial foi entender o porquê das decisões. Parei de testar no escuro e comecei a investir com mais confiança.',
  },
]

const recebe = [
  'Curso completo com trilha do básico ao avançado',
  'Método prático para aplicar sem travar na execução',
  'Aulas claras e diretas, sem teoria solta',
  'Estratégia de conteúdo para gerar autoridade e demanda',
  'Base sólida para criar e otimizar anúncios',
  'Clareza para investir com segurança e consistência',
  'Materiais de apoio e modelos prontos para acelerar',
]

const faq = [
  {
    q: 'Esse curso é para quem está começando?',
    a: 'Sim. A estrutura começa do essencial e evolui para estratégias mais avançadas, com linguagem prática para quem ainda não domina tráfego.',
  },
  {
    q: 'Funciona para clínica pequena?',
    a: 'Funciona. O método foi pensado para a realidade da clínica e pode ser adaptado ao tamanho da operação e ao orçamento disponível.',
  },
  {
    q: 'Preciso já anunciar para fazer?',
    a: 'Não. Você aprende desde a preparação da base até a execução de campanhas com segurança.',
  },
  {
    q: 'Vou aprender a gravar conteúdos também?',
    a: 'Sim. Você terá direcionamentos de conteúdo para produzir vídeos que conectam, educam e convertem em oportunidades reais.',
  },
  {
    q: 'Serve para qualquer área da odontologia?',
    a: 'Sim. O método atende clínicas gerais e especialidades, com foco em posicionamento e atração de paciente qualificado.',
  },
  {
    q: 'Em quanto tempo consigo aplicar?',
    a: 'Você já consegue aplicar os primeiros fundamentos nas primeiras aulas e evoluir continuamente conforme executa.',
  },
  {
    q: 'Vou depender de agência?',
    a: 'Não. O objetivo é você dominar o processo para decidir com clareza e executar com autonomia.',
  },
  {
    q: 'O curso é teórico ou prático?',
    a: 'É prático, com explicações objetivas para aplicar direto na rotina da clínica.',
  },
]

function CTAButton({ children, className = '' }) {
  return (
    <a
      href="#oferta"
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02] hover:shadow-glow ${className}`}
    >
      {children}
    </a>
  )
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="relative overflow-x-hidden text-slate-800">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [background-size:28px_28px] opacity-50" />

      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <p className="text-sm font-semibold text-slate-700">Tráfego para Dentistas</p>
          <CTAButton className="px-5 py-2.5 text-sm">Quero começar agora</CTAButton>
        </div>
      </header>

      <main>
        <section className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-12 md:grid-cols-2 md:pt-20">
          <motion.div initial="hidden" animate="show" variants={staggerWrap} className="space-y-7">
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <Sparkles className="h-4 w-4" /> Método validado dentro da clínica
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Aprenda a atrair pacientes todos os dias e se tornar referência na sua cidade com tráfego pago e conteúdo — sem depender de agência.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-slate-600">
              Um passo a passo claro para dentistas que querem previsibilidade, controle do investimento e autonomia para tomar decisões com confiança.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600">
                  {item}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <CTAButton>Quero aprender tráfego pago</CTAButton>
              <p className="font-semibold text-slate-700">Mais de R$ 500.000 investidos em anúncios na prática</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-100">
              <div className="mb-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                <p className="text-sm">Curso Digital</p>
                <h2 className="mt-2 text-2xl font-bold">Tráfego para Dentistas</h2>
                <p className="mt-2 text-blue-50">Do planejamento à escala com segurança.</p>
              </div>
              <div className="space-y-3">
                {['Campanhas ativas', 'Conteúdo estratégico', 'Métricas em ação'].map((card) => (
                  <div key={card} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-slate-700">{card}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -left-4 top-8 rounded-xl border border-cyan-100 bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-700"
            >
              + previsibilidade
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
              className="absolute -right-4 bottom-10 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700"
            >
              + autonomia
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-3xl font-bold text-slate-900">Se você sente que está sempre correndo atrás do resultado, essa parte é para você.</h3>
            <p className="mt-3 max-w-3xl text-slate-600">Não faltou esforço. Faltou um método que te mostre exatamente o que fazer, por que fazer e como ajustar sem perder dinheiro no caminho.</p>
            <motion.div variants={staggerWrap} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid gap-4 md:grid-cols-2">
              {dores.map((dor) => (
                <motion.div key={dor} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-slate-700">{dor}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-center text-3xl font-bold">Para quem é o Tráfego para Dentistas</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {perfis.map((item) => (
                <motion.div key={item} whileHover={{ y: -6 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <Stethoscope className="mb-3 h-5 w-5 text-blue-600" />
                  <p className="font-semibold text-slate-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-3xl font-bold">O que você vai aprender para anunciar com clareza e crescer com consistência</h3>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {aprendizados.map((item) => (
                <motion.div key={item.title} whileInView={{ opacity: [0, 1], y: [20, 0] }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <Megaphone className="mb-3 h-5 w-5 text-cyan-300" />
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton>Quero aplicar isso na minha clínica</CTAButton>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-3xl font-bold">Por que este método funciona melhor que conteúdo genérico ou tentativa e erro</h3>
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="grid md:grid-cols-2">
                <div className="bg-blue-50 p-6">
                  <h4 className="text-xl font-bold text-blue-900">Tráfego para Dentistas</h4>
                  <ul className="mt-4 space-y-3">
                    {['Direto ao ponto', 'Aplicável na rotina real da clínica', 'Explicação prática de métricas e decisão', 'Sem enrolação e sem teoria solta'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-blue-900"><CheckCircle2 className="mt-0.5 h-4 w-4" /> {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-700">Conteúdo genérico / agência / tentativa e erro</h4>
                  <ul className="mt-4 space-y-3 text-slate-600">
                    {['Dicas soltas sem sequência', 'Dependência constante de terceiros', 'Falta de clareza do que está funcionando', 'Gasto com baixa previsibilidade'].map((item) => (
                      <li key={item} className="flex items-start gap-2"><CircleDollarSign className="mt-0.5 h-4 w-4 text-slate-400" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white shadow">
                <UserRound className="h-10 w-10 text-blue-700" />
              </div>
              <p className="mt-4 text-center font-semibold text-slate-700">Dr. Eder Junior</p>
              <p className="text-center text-sm text-slate-600">Dentista e mentor em tráfego para clínicas</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Quem está por trás do método</h3>
              <p className="mt-4 text-slate-700">Sou dentista e aprendi tráfego pago no dia a dia da clínica, investindo meu próprio dinheiro e testando cada estratégia com responsabilidade — sem atalhos e sem promessas irreais.</p>
              <p className="mt-3 text-slate-700">Após mais de <span className="font-bold text-blue-700">R$ 500.000 investidos em anúncios</span>, ficou claro o que realmente atrai pacientes com consistência e o que só gera gasto e frustração.</p>
              <p className="mt-3 text-slate-700">Criei este método para ajudar dentistas a anunciar com clareza, segurança e previsibilidade, com independência para decidir e crescer com confiança.</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-center text-3xl font-bold">Depoimentos de dentistas que saíram do escuro</h3>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {depoimentos.map((item) => (
                <motion.div key={item.nome} whileHover={{ y: -4 }} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex gap-1 text-amber-400">★★★★★</div>
                  <p className="text-slate-700">“{item.texto}”</p>
                  <p className="mt-4 font-semibold text-slate-900">{item.nome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-3xl font-bold">Veja tudo o que você recebe ao entrar no curso Tráfego para Dentistas</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recebe.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <BadgeCheck className="mb-2 h-5 w-5 text-emerald-600" />
                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="oferta" className="py-16">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-8 text-white shadow-2xl shadow-blue-400/30">
              <p className="text-sm uppercase tracking-wide text-blue-100">Oferta especial</p>
              <h3 className="mt-3 text-3xl font-black">Tudo isso deveria custar R$ 1.285,00</h3>
              <p className="mt-3 text-blue-100">Mas hoje você tem acesso ao curso Tráfego para Dentistas junto com todos os bônus por apenas...</p>
              <div className="mt-5 rounded-xl border border-white/30 bg-white/10 p-4">
                <p className="text-sm text-blue-100">Espaço reservado para valor final promocional</p>
                <p className="text-4xl font-black">R$ ___</p>
              </div>
              <div className="mt-6">
                <CTAButton className="bg-white text-blue-700">Quero começar agora</CTAButton>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h3 className="text-3xl font-bold">Você pode continuar no improviso — ou assumir o controle do crescimento da sua clínica.</h3>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300">A decisão é simples: permanecer na inconstância de tentativas aleatórias ou aplicar um método que traz clareza para cada real investido.</p>
            <div className="mt-7">
              <CTAButton>Sim, quero anunciar com método</CTAButton>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h3 className="text-center text-3xl font-bold">Perguntas frequentes</h3>
            <div className="mt-8 space-y-3">
              {faq.map((item, index) => {
                const open = openFaq === index
                return (
                  <div key={item.q} className="rounded-2xl border border-slate-200 bg-white">
                    <button
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
                      onClick={() => setOpenFaq(open ? -1 : index)}
                    >
                      {item.q}
                      <ChevronDown className={`h-5 w-5 transition ${open ? 'rotate-180' : ''}`} />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-slate-600">{item.a}</p>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-slate-800">Tráfego para Dentistas</p>
            <p>Copyright © 2026. Todos os direitos reservados.</p>
          </div>
          <div>
            <p>dredercursos@gmail.com</p>
            <p>(34) 99805-3420</p>
          </div>
          <p className="max-w-md">Este produto não é afiliado ao Facebook nem endossado por suas empresas. Resultados variam de acordo com execução e contexto da clínica.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <CTAButton className="w-full">Quero começar agora</CTAButton>
      </div>
    </div>
  )
}
